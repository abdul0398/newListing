        let myIndex = 0;
        
        let map;

        let timeoutId;

        let listings = [];

        let glide;
        const searchListings = debounce(searchhandler, 500);

        start();
        

        
        async function start(){
            listings = await fetchDataFromJson();
            const data = await fetchNewListings();
            if(data.length > 0){
                listings = data;
            }
            openMap();
            populatAllListings(listings);
            glide = new Glide('.glide', {
                type: 'carousel',
                perView: 3,
                breakpoints: {
                1024: {
                perView: 2
                },
                600: {
                perView: 1
                }
            }}).mount();
            await fetchCoordinatesAndPopulateMap(listings);
        }


        function openMap(params) {
            map = L.map('mapdiv', {
               center: L.latLng(1.327450, 103.811203),
               zoom: 13
            });
   
            let basemap = L.tileLayer('https://www.onemap.gov.sg/maps/tiles/Grey/{z}/{x}/{y}.png', {
               detectRetina: true,
               maxZoom: 19,
               minZoom: 5,
               attribution: '<img src="https://www.onemap.gov.sg/web-assets/images/logo/om_logo.png" style="height:20px;width:20px;"/>&nbsp;<a href="https://www.onemap.gov.sg/" target="_blank" rel="noopener noreferrer">OneMap</a>&nbsp;&copy;&nbsp;contributors&nbsp;&#124;&nbsp;<a href="https://www.sla.gov.sg/" target="_blank" rel="noopener noreferrer">Singapore Land Authority</a>'
            });
            basemap.addTo(map);
        }


        async function fetchCoordinatesAndPopulateMap(listings) {
            for (let i = 0; i < listings.length; i++) {
                const project = listings[i];
                const res = await fetch(`https://www.onemap.gov.sg/api/common/elastic/search?searchVal=${project.name}&returnGeom=Y&getAddrDetails=Y&pageNum=1`);
                const data = await res.json();
                const result = data.results[0];
                if (!result || data.results.length == 0) continue;
                const LATITUDE = result.LATITUDE;
                const LONGITUDE = result.LONGITUDE;

                const marker = L.marker([LATITUDE, LONGITUDE], { riseOnHover: true, title: project.name })
                    .addTo(map);

                const popupContent = `
                    <div class="w-100" id="popup-${i}">
                        <div class="donate-title d-flex">
                            <img src="${project.images[0]}" alt="${project.name}" class="h-100 w-50 me-1 rounded-2">
                            <p class="mt-0" style="cursor:pointer">${project.name}</p>
                        </div>            
                    </div>
                `;

                marker.bindPopup(popupContent, { minWidth: 250, maxWidth: 300, padding: 0, className: "marker-popup" });

                marker.on('popupopen', function (e) {
                    const popupPara = e.popup._container.querySelector("p");
                    popupPara.addEventListener('click', function (event) {
                        const name = project.name;
                        const desc = project.description;
                        const region = project.geographical_region;
                        const images = project.images;
                        addInfoToSingleListing(desc, name, region, images);
                    });
                });
            }
        }
                

        async function fetchNewListings(){
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + 'cbvlagfusboas7d6f9234ksjdfhkj8979872k3b32b4jhgl987bn'
                },
                cors:'no-cors'
            
            }
            try {
                const res = await fetch('http://api.jomejourney-portal.com/api/listings?page=all', options);
                const data = await res.json();
                if(res.status == 200 && data?.length > 0){
                    return data;
                }
            } catch (error) {
                console.log("Error fetching new listings", error);
                return [];
            }
        }


        function carousel() {
            var i;
            var x = document.getElementsByClassName("slideImages");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
            }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}    
            x[myIndex-1].style.display = "block";  
            clearTimeout(timeoutId);
            
            timeoutId = setTimeout(carousel, 4000); // Change image every 2 seconds
        }
    

        function addInfoToSingleListing(desc,name, region, images){
            document.getElementById("single-listing").classList.remove("d-none");
            document.getElementById("all-listings").classList.add("d-none");


            document.getElementById('projectName').innerText = name;
            document.getElementById('projectDesc').innerText = desc;
            document.getElementById('projectRegion').innerText = region;

            const galleryDiv = document.getElementsByClassName("gallery-list")[0];
            const mainImages = document.getElementsByClassName("donate-header-image")[0];

            galleryDiv.innerHTML = "";
            mainImages.innerHTML = "";
            for (let i = 0; i < images.length; i++) {
                const img = images[i];
                galleryDiv.innerHTML += `<img src="${img}" alt="${name}">`;
                mainImages.innerHTML += `<img src="${img}"  class="slideImages h-100 w-100" alt="${name}">`;
            }
            myIndex = 0;
            carousel();
        }
    
    
        function populatAllListings(listings){

            // Near You population
            const nearYouContainer = document.querySelector('.glide__slides') ;
            nearYouContainer.innerHTML = "";

             // Recommended populations
             const recommendedContainer = document.querySelector(".recommended-slider");
            const bulletContainer = document.querySelector(".glide__bullets");
            bulletContainer.innerHTML = "";


            recommendedContainer.innerHTML = "";

            for(let i = 0; i < listings.length && i < 10; i++){
                bulletContainer.innerHTML += `<button class="glide__bullet" data-glide-dir="=${i}"></button>`;

                nearYouContainer.innerHTML += `
                            <li
                                    class="glide__slide"
                                    style="
                                    width: 267.667px;
                                    margin-left: 5px;
                                    margin-right: 5px;
                                    "
                                >
                                    <a class="card-campaign-column" href="#">
                                        <figure
                                            class="card-campaign-image"
                                            style="
                                                background-image: url('${listings[i].images[0]}');
                                            "
                                        ></figure>

                                    <div class="card-campaign-text">
                                        <div class="card-campaign-title"><button class="bg-transparent border-0" onclick="openSingleListing(this)">${listings[i].name}</button> </div>
                                        <div class="card-campaign-details">
                                        <div class="text-left">
                                            <p class="card-campaign__region">
                                                ${listings[i].geographical_region}
                                            </p>
                                            <p class="my-badge">
                                            <i class="fa-solid fa-location-dot"></i
                                            ><small>2.3 km</small>
                                            </p>
                                        </div>
                                        <div class="text-right">
                                            <p><i class="fa-solid fa-star"></i>4.5</p>
                                            <p class="love-icon">
                                            <i class="fa-solid fa-heart"></i>
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </a>
                                </li>
                            `
                const bedrooms = listings[i]?.balance_units?.data || [];
                const bedroomHtml = bedrooms.map(bedroom => {
                    return `
                    <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>${bedroom.unitType}
                    </p>
                    `

                })
                let defaultBedroomHtml = `
                        <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>2 Bedroom
                    </p>

                    <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>3 Bedroom
                    </p>

                    <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>4 Bedroom
                    </p>

                    <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>5 Bedroom
                    </p>

                    <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>Overall
                    </p>
                `

                recommendedContainer.innerHTML += `
                <div class="card my-3" style="max-width: 100%">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img class="w-100" style="height:200px" src="${listings[i].images[0]}" alt="${listings[i].name}">
                        </div>
                        <div class="col-md-8">
                          <div class="card-body">
                            <a class="pe-auto" onClick="">
                                <h5 class="card-title mb-3" style="color:#4d4d4d"><button class="bg-transparent border-0" onclick="openSingleListing(this)">${listings[i].name}</button></h5>
                            </a>
                            <h6 class="card-subtitle mb-4 text-muted">
                              ${listings[i].geographical_region}
                            </h6>
                            <div class="card-campaign-desc">
                             ${bedrooms.length > 0 ? bedroomHtml.join('') : defaultBedroomHtml}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                `
            }
        }
    

        function showMainPage() {
            document.getElementById("single-listing").classList.add("d-none");
            document.getElementById("all-listings-inner").classList.add("d-none");
            document.getElementById("all-listings").classList.remove("d-none");
            document.getElementById("starting-page").classList.remove("d-none");
            
        }


        function openAllListingsInner(filterListing) {
            document.getElementById("all-listings-inner").classList.remove("d-none");
            document.getElementById("starting-page").classList.add("d-none");
            populateAllListingsInner(filterListing);
        }


        function populateAllListingsInner(filterListing) {

            const newListing = filterListing ? filterListing : listings;
            
            const container  = document.getElementById("all-listings-inner");
            container.innerHTML = "";
            container.innerHTML = `
                <div class="row position-relative " style="height:30px">
              <i class="fa-solid fa-arrow-left fa-xl position-absolute text-black" onclick="showMainPage()" style="top:25px; left:20px; cursor:pointer"></i>
                    <div class="col-md-12">
                    </div>
                </div>
            `;
            for (let i = 0; i < newListing.length; i++) {
                
                const bedrooms = newListing[i]?.balance_units?.data || [];
                const bedroomHtml = bedrooms.map(bedroom => {
                    return `
                    <p class="campaign-icon">

                        <i class="fa-solid fa-bed"></i>${bedroom.unitType}
                    </p>
                    `
                })
                let defaultBedroomHtml = `
                        <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>2 Bedroom
                    </p>

                    <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>3 Bedroom
                    </p>

                    <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>4 Bedroom
                    </p>

                    <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>5 Bedroom
                    </p>

                    <p class="campaign-icon">
                        <i class="fa-solid fa-bed"></i>Overall
                    </p>
                `

                container.innerHTML += `
                    <div class="card my-3" style="max-width: 100%">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img class="w-100" style="height:200px" src="${newListing[i].images[0]}" alt="">
                            </div>
                            <div class="col-md-8">
                            <div class="card-body">
                                <a class="pe-auto" onClick="">
                                    <h5 class="card-title mb-3" style="color:#4d4d4d"><button class="bg-transparent border-0" onclick="openSingleListing(this)">${newListing[i].name}</button></h5>
                                </a>
                                <h6 class="card-subtitle mb-4 text-muted">
                                ${newListing[i].geographical_region}
                                </h6>
                                <div class="card-campaign-desc">
                                ${bedrooms.length > 0 ? bedroomHtml.join('') : defaultBedroomHtml}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    `
            }

        }

        
        function openSingleListing(btn) {
            const name = btn.innerText;

            document.getElementById("single-listing").classList.remove("d-none");
            document.getElementById("all-listings").classList.add("d-none");

            const listing = listings.find(listing => listing.name == name);
            const desc = listing.description;
            const region = listing.geographical_region;
            const images = listing.images;
            addInfoToSingleListing(desc, name, region, images);

        }

        
        function mobileLayoutHandler(btn) {
            const type = btn.innerText;
            if(type == 'Listings'){
                document.getElementById("all-listings").classList.remove("d-none");
                document.getElementById("single-listing").classList.add("d-none");
                document.getElementById("map-container").classList.add("d-none");

            }else{
                setTimeout(() => {
                    map.invalidateSize()
                  }, 0)
                
                document.getElementById("map-container").classList.remove("d-none");
                document.getElementById("all-listings").classList.add("d-none");
                document.getElementById("single-listing").classList.add("d-none");

            }
        }


        function debounce(func, delay) {
            let timerId;
            
            return function() {
              const context = this;
              const args = arguments;
              
              clearTimeout(timerId);
              
              timerId = setTimeout(function() {
                func.apply(context, args);
              }, delay);
            };
        }


        function searchhandler(input) {
            const value = input.value.trim().toLowerCase();
            if (value == "") {
                openAllListingsInner();
                return;
            }
            const filteredListings = listings.filter((listing) => {
                let stringtoSearch = listing.name.toLowerCase();
                stringtoSearch += listing.geographical_region.toLowerCase();
                stringtoSearch += listing.description.toLowerCase();
                stringtoSearch += listing.details.toString().toLowerCase();
                return stringtoSearch.includes(value);
            })
            openAllListingsInner(filteredListings);
            
        }


        function openFilterPopup() {
            document.querySelector(".filter-container").style.transform = "translateX(0)";
            document.querySelector(".main-container").classList.remove("overflow-auto");
            document.querySelector(".main-container").classList.add("overflow-hidden");
        }


        function closeFilterPopup() {
            document.querySelector(".filter-container").style.transform = "translateX(100%)";
            document.querySelector(".main-container").classList.remove("overflow-hidden");
            document.querySelector(".main-container").classList.add("overflow-auto");
        }


        function applyFilters() {
            let selectedCheckboxes = extractCheckboxes();
            let filteredListings = listings.filter(function(listing) {
                const project_size = listing.project_size;
                const region = listing.geographical_region;
                const unit_category = listing.project_category;
                const market_segment = listing.details.find(detail => detail.title == "Market Segment").para;

                let isMatch = true;
                for (let category in selectedCheckboxes) {
                    if (selectedCheckboxes[category].length > 0){
                        if (category === "project_size") {
                            let sizeMatched = false;
                            for (let i = 0; i < selectedCheckboxes[category].length; i++) {
                                let size = selectedCheckboxes[category][i];
                                if (size === "1000+") {
                                    if (project_size >= 1000) {
                                        sizeMatched = true;
                                        break;
                                    }
                                } else {
                                    let range = size.split('-');
                                    let min = parseInt(range[0]);
                                    let max = parseInt(range[1]);
                                    if (project_size >= min && project_size <= max) {
                                        sizeMatched = true;
                                        break;
                                    }
                                }
                            }
                            if (!sizeMatched) {
                                isMatch = false;
                                break;
                            }
                        } else if (category == "region") {
                            let isLocalMatch = false;
                            for(let i = 0; i < selectedCheckboxes[category].length; i++ ){
                                let filterRegions = selectedCheckboxes[category][i].toLowerCase().trim();
                                if (region.toLowerCase().trim().includes(filterRegions)) {
                                    isLocalMatch = true;
                                    break;
                                }

                            }
                            if (!isLocalMatch) {
                                isMatch = false;
                                break;
                            }
                    
                        } else if (category == "unit_category") {
                            let isLocalMatch = false;
                            for(let i = 0; i < selectedCheckboxes[category].length; i++ ){
                                let filterUnitCategory = selectedCheckboxes[category][i].toLowerCase().trim();
                                if (unit_category.toLowerCase().trim().includes(filterUnitCategory)) {
                                    isLocalMatch = true;
                                    break;
                                }

                            }
                            if (!isLocalMatch) {
                                isMatch = false;
                                break;
                            }

                        } else if (category == "market_segment") {

                            let isLocalMatch = false;
                            for(let i = 0; i < selectedCheckboxes[category].length; i++){
                                let filterSegment = selectedCheckboxes[category][i].toLowerCase().trim();
                                if (market_segment.toLowerCase().trim().includes(filterSegment)) {
                                    isLocalMatch = true;
                                    break;
                                }

                            }
                            if (!isLocalMatch) {
                                isMatch = false;
                                break;
                            }
                        }


                    };
                }
                return isMatch;
            });

            openAllListingsInner(filteredListings);
            document.getElementById("map-container").classList.add("d-none");
            document.getElementById("single-listing").classList.add("d-none");
            closeFilterPopup();

        }



        function extractCheckboxes() {
            let categories = ['region', 'market_segment', 'unit_category', 'project_size'];
            let selectedCheckboxes = {};
          
            categories.forEach(function(category) {
                let checkboxes = document.querySelectorAll('[name="' + category + '"]:checked');
                let values = [];
          
              checkboxes.forEach(function(checkbox) {
                values.push(checkbox.value);
              });
          
              selectedCheckboxes[category] = values;
            });
          
            return selectedCheckboxes;
          }


          function processText(text) {
            // Remove spaces
            text = text.replace(/ /g, '');
            // Convert to lowercase
            text = text.toLowerCase();
            return text;
        }
          

        async function fetchDataFromJson() {
            try {
                const response = await fetch('offlineData.json');
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }