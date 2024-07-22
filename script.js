

let myIndex = 0;
        
let map;

let timeoutId;

let listings = [];

let glide;

let circle;

let maskLayer;

let selectedMarker;

let markerArray = [];

let AmmenetiesMarkers = [];

let galleryIntance;

let ammenities = [];

const isMobile = window.innerWidth < 768;

const searchListings = debounce(searchhandler, 500);



start();

async function start(){
    openLoading();
    const data = await fetchNewListings();
    listings = data.listings;
    ammenities = data.amenities;
    selectProjectBasedOnParams();
    openMap();
    populateAllListings(listings);
    closeLoading();
    await fetchCoordinatesAndPopulateMap(listings);
    addEventListenerToInput();

}


function openMap() {
    map = L.map('mapdiv', {
        center: L.latLng(1.327450, 103.811203),
        zoom: 13,
        zoomControl: false
    });

    let basemap = L.tileLayer('https://www.onemap.gov.sg/maps/tiles/Default/{z}/{x}/{y}.png', {
        detectRetina: true,
        maxZoom: 19,
        minZoom: 5,
    });
    basemap.addTo(map);

    if(!isMobile){
        map.on('zoomend', function() {
                checkMarkersInView();
        });
        map.on('moveend', function() {
            checkMarkersInView();
        });
    }
}


function popuplateBottomListings(listing){
    const address = listing?.details[0].para + ', ' + listing?.details[1].para ;

    const totalUnits = listing?.unit_mix?.data.find(unit => unit.unitType == "Overall")?.totalUnits || 0;
    const availableUnits = listing?.balance_units?.data.find(unit => unit.unitType == "Overall")?.availableUnits || 0;
    const unitsSold = totalUnits - availableUnits;
    const nearestMRT = listing?.location_map?.amenities?.find(detail => detail.Category == "MRT Stations") || null;
    const dev_type = listing.dev_type;


        const mapBottomListing = document.getElementById("map-bottom-listing");
        mapBottomListing.innerHTML = "";
        mapBottomListing.innerHTML = `
        <div class="card my-3" style="max-width: 100%; height: 100%; border-radius: 40px; border:none;box-shadow: -5px 5px 23px -3px rgba(189,189,189,1);">
      <div class="h-100 d-flex p-3">
        <div class="w-50" style="position:relative">
          <!-- ${dev_type?`<p style="
          position: absolute;
          background-color: #39548a;
          color: white;
          font-size: 10px;
          padding: 2px 5px;
          top: 10px;
          left: 30px;
          border-radius: 3px;
          font-weight: bold;
          ">${dev_type}</p>`:""} -->
              <img class="w-100" style="height:100%; border-radius: 40px;" src="https://api.jomejourney-portal.com${listing.images[0]? listing.images[0] : listing.images[1]}">
        </div>
        <div class="w-50" style="padding-top: 0px; overflow:auto">
          <div class="card-body">
            <a class="pe-auto" onClick="">
                <h5 class="card-title mb-3" style="color:#4d4d4d"><button style="padding:0px" class="bg-transparent border-0" onmouseover="hoverListingHandler(this)" onmouseout="removeHoverPopup(this)" onclick="openSingleListing(this)">${listing.name}</button></h5>
            </a>
            <h6 class="card-subtitle mb-1 text-muted" style="white-space: nowrap; text-overflow: ellipsis; width: 100%; overflow: hidden;">
              
                 ${address} <br>
            </h6>
              </div>
              <p class='mb-2 text-muted' style="padding-left:1rem; font-size:11px">
              <img src="public/placeholder.png" width="20px" />  West Region
              </p>
             ${nearestMRT?`<p style="margin-bottom:0px; padding-left: 1rem; font-size: 11px; color: #6c757d !important; display: flex;align-items: center;gap: 6px;display: flex;align-items: center;gap: 6px;"><img src="public/meter.png" width="20px" /> ${nearestMRT.Distance} to ${nearestMRT.Location}</p>`:""}
            <div style="font-size:11px; padding:0px 1rem;line-height: 30px;">
               <span style="font-weight: bold; color: black; padding: 3px;border-radius: 2px;">Total: ${totalUnits} units</span>
            <span style="font-weight: bold; color: black; padding: 3px;border-radius: 2px;">Available: ${availableUnits} units</span>
            <span style="font-weight: bold; color: black; padding: 3px;border-radius: 2px;">Sold: ${unitsSold} units</span>
            </div>
            <div class="pt-3" style="padding-left: 1rem;">
              <button class="read-more-btn" onclick="openSingleListing(this)" data_name="${listing.name}">Read More</button>
            </div>
          </div>

      </div>
  </div>
        `
}




async function handlePopupClick(index){
    popuplateBottomListings(listings[index]);
}

async function fetchCoordinatesAndPopulateMap(listings) {
    for (let i = 0; i < listings.length; i++) {
        const project = listings[i];
        const LATITUDE = project.latitude;
        const LONGITUDE = project.longitude;
        if (!LATITUDE || !LONGITUDE) continue;

        const marker = L.marker([LATITUDE, LONGITUDE], { riseOnHover: true, title: project.name })
            .addTo(map);

        const expectedTOP = project?.details.find(detail => detail.title == "Expected TOP")?.para || "";
        const Land_Tenure = project?.details.find(detail => detail.title == "Land Tenure")?.para || "";
        const Development_Size = project?.details.find(detail => detail.title == "Development Size")?.para || "";
        const latestTransaction = Array.isArray(project.transactions) ? project.transactions[0] : null;
        const popupContent = `
            <div class="w-200" id="popup-${i}" style="height: 180px; cursor:pointer" onclick="handlePopupClick(${i})">
                <div class="donate-title d-flex" style="height: 120px; padding:5px">
                    <img src="https://api.jomejourney-portal.com${project.images[0] ? project.images[0] : project.images[1]}" alt="${project.name}" class="h-100 w-50 me-1 rounded-2">
                    <div class="px-1">
                        <p class="mt-0" style="cursor:pointer; font-weight:900; margin-bottom:0px; font-size: 15px;">${project.name}</p>
                        <p style="margin-top: 0px; color:#6f6f6f; font-weight:600; font-size:11px">${project.details[0].para}</p>
                       ${expectedTOP ? `<p style="margin: 0px; color:#6f6f6f; font-weight:600; font-size:11px"><span style="color:black">TOP: </span>${expectedTOP}</p>` : ""}
                        <p style="margin: 0px; color:#6f6f6f; font-weight:600; font-size:11px">${Land_Tenure}</p>
                        <p style="margin: 0px; color:#6f6f6f; font-weight:600; font-size:11px">${Development_Size}</p>
                    </div>
                </div>
                <div>
                    <hr style="margin-bottom:0px">
                </div>
                ${latestTransaction ? `
                <div style="padding:5px">
                <p style="margin:0px; font-size: 10px; font-weight: bold; color: #6f6f6f;">LATEST TRANSACTION</p>
                <div style="display: flex;justify-content: space-between;font-size: 11px;margin-top: 3px;font-weight: bold; color:black;">
                    <div>${latestTransaction.Date}</div>
                    <div>${latestTransaction.Size} sqft</div>
                    <div>${latestTransaction.Price}</div>
                </div>
                </div>` : ""}
            </div>
        `;

        marker.bindPopup(popupContent, { minWidth: 300, maxWidth: 300, padding: 0, className: "marker-popup", autoClose: true });
        markerArray.push(marker);

        marker.on('mouseover', function (e) {
            marker.openPopup();

            const latLng = marker.getLatLng();

            const offsetLatLng = L.latLng(
                latLng.lat - (map.getBounds().getSouth() - map.getBounds().getNorth()) * 0.15, // Adjust the factor as needed
                latLng.lng
            );


            map.setView(offsetLatLng, map.getZoom(), {
                animate: true,
                pan: { duration: 0.5 }
            });
            // popuplateBottomListings(listings[i]);
        });
        




        marker.on('click', function (e) {
            changeSelectedMarkerLogo(marker);
            marker.setZIndexOffset(1000);
            marker.openPopup();
            createCircleInMap(marker.getLatLng().lat, marker.getLatLng().lng, 3000);
            const name = project.name;
            const desc = project.description;
            const region = project.geographical_region;
            const Galleryimages = project.images;
            const sitePlan = project.siteplan;
            const details = project.details;
            const locationMap = project.location_map;
            const unit_mix = project.unit_mix;
            const balance_units = project.balance_units;
            const developer = project.developer;
            const transactions = project.transactions;
            addAmmenitiesMarkers(name);
            addInfoToSingleListing(desc, name, region, Galleryimages, sitePlan, details, locationMap, unit_mix, balance_units, developer, transactions);
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
        const res = await fetch('https://api.jomejourney-portal.com/api/listings?page=all', options);
        const data = await res.json();
        if(res.status == 200){
            return data;
        }
    } catch (error) {
        console.log("Error fetching new listings", error);
        return [];
    }
}

function carousel(length) {
    // Destroy existing Glide instance if it exists
    glide?.destroy();

    const bulletsContainer = document.querySelector('.glide__bullets');

    // Clear existing bullets if any
    bulletsContainer.innerHTML = '';

    // Create bullets dynamically
    for (let i = 0; i < length; i++) {
      const bullet = document.createElement('button');
      bullet.classList.add('glide__bullet');
      bullet.setAttribute('data-glide-dir', `=${i}`);
      bulletsContainer.appendChild(bullet);
    }


    glide = new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      autoplay: 3000,
      breakpoints: {
        1024: {
          perView: 1
        },
        768: {
          perView: 1
        },
        480: {
          perView: 1
        }
      }
    });

    // Mount Glide.js
    glide.mount();
  }

function addInfoToSingleListing(desc,name, region, Galleryimages, sitePlan, details, locationMap, unit_mix, balance_units, developer, transactions){

      // hiding bottom listings and changing map dimensions
      changeMapDimentionsAndToggleBottomListings(false);

    document.getElementById("single-listing").classList.remove("d-none");
    document.getElementById("all-listings").classList.add("d-none");
    document.getElementsByClassName("left-pane")[0].classList.remove("d-none");


    document.getElementById('projectName').innerText = name;
    document.getElementById('projectDesc').innerText = desc;
    document.getElementById('projectRegion').innerText = region;

    const galleryDiv = document.getElementsByClassName("gallery-list")[0];
    const mainImages = document.getElementsByClassName("donate-header-image")[0];
    const sideMapImageContainer = document.getElementById("sideMapImageContainer");
    const sidePlanDetails = document.getElementById('siteplan-details-inner')
    const projectDetailTable = document.getElementById("projectDetailInnerDiv");
    const locationMapImageContainer = document.getElementById("location-map-images");
    const locationMaptbody = document.getElementById("location-map-tbody");
    const unitMixtbody = document.getElementById("unit-mix-tbody");
    const unitMixImages = document.getElementById("unitMixImages");
    const balanceUnitBody = document.getElementById("balance-unit-tbody");
    const balanceUnitImages = document.getElementById("balanceUnitImages");
    const dev_logo = document.getElementsByClassName("dev-logo");
    const dev_para = document.getElementById("dev-para");
    const transactionTbody = document.getElementById("transaction-tbody");
    const titleNextImage = document.getElementById("image-nxt-title");



    sideMapImageContainer.innerHTML = '';
    // Site Plan
    const sideMapImages = sitePlan?.images || [];

    for (let i = 0; i < sideMapImages.length; i++) {
        const url = sideMapImages[i];
        sideMapImageContainer.innerHTML += `
        <a href="https://api.jomejourney-portal.com${url}" target="_blank">
        <img src="https://api.jomejourney-portal.com${url}" class="w-100 mb-3"></img>
        </a>
        `
    }


    sidePlanDetails.innerHTML = "";
    const sitePlanFacilities = sitePlan?.facilities || [];
    let sitePlanUl;
    for (let i = 0; i < sitePlanFacilities.length; i++) {
      
        if (i % 4 === 0) {
            sitePlanUl = document.createElement('ul');
            sitePlanUl.style.minWidth = "170px";
            sitePlanUl.style.padding = "0px";
            sitePlanUl.style.listStyleType = "none";
            sidePlanDetails.appendChild(sitePlanUl);
        }

        const detail = sitePlanFacilities[i];
        
        // Create an <li> element
        const listItem = document.createElement('li');
        listItem.style.margin = "20px 0px";

        // Create and append <p> elements for title and paragraph
        const titleParagraph = document.createElement('p');
        titleParagraph.style.margin = "0px";
        titleParagraph.style.color = "black"
        titleParagraph.textContent = detail;

        listItem.appendChild(titleParagraph);
        // Append the <li> to the current <ul>
        sitePlanUl.appendChild(listItem);
        
    }



    // Unit Mix
    unitMixtbody.innerHTML = "";
    unitMixImages.innerHTML = "";
    const unitMixData = unit_mix?.data || [];
    const unitMixImagesData = unit_mix?.images || [];
    for (let i = 0; i < unitMixData?.length || 0; i++) {
        const unit = unitMixData[i];
        unitMixtbody.innerHTML += `
        <tr style="font-size:12px; ${i % 2 != 0 ? "background-color: #f9fafc;":""}">
            <td class="p-2">${unitMixData[i].unitType}</td>
            <td class="p-2 text-center">${unitMixData[i].totalUnits}</td>
            <td class="p-2 text-center">${unitMixData[i].size_sqft}</td>
            <td class="p-2 text-center">${unitMixData[i].unitMix}</td>
        </tr>
        `
    }

    for (let i = 0; i < unitMixImagesData.length; i++) {
        const url = unitMixImagesData[i];
        if(!url) continue;
        unitMixImages.innerHTML += `
        <a href="https://api.jomejourney-portal.com${url}" target="_blank">
        <img src="https://api.jomejourney-portal.com${url}" class="w-100 mb-3"></img>
        </a>
        `
    }



    // Balance Units

    balanceUnitBody.innerHTML = "";
    balanceUnitImages.innerHTML = "";
    const balanceUnitsData = balance_units?.data || [];
    const balanceUnitsImages = balance_units?.images || [];

    for (let i = 0; i < balanceUnitsData.length; i++) {
        const unit = balanceUnitsData[i];
        balanceUnitBody.innerHTML += `
        <tr style="font-size:12px; ${i % 2 != 0 ? "background-color: #f9fafc;":""}">
            <td class="p-2">${balanceUnitsData[i].unitType}</td>
            <td class="p-2 text-center">${balanceUnitsData[i].availableUnits}</td>
            <td class="p-2 text-center">${balanceUnitsData[i].size_sqft}</td>
            <td class="p-2 text-center" style="font-size:10px">${balanceUnitsData[i].psf}</td>
            <td class="p-2 text-center" style="font-size:10px">${balanceUnitsData[i].price}</td>
        </tr>
        `
    }

    for (let i = 0; i < balanceUnitsImages.length; i++) {
        const url = balanceUnitsImages[i];
        balanceUnitImages.innerHTML += `
        <a href="https://api.jomejourney-portal.com${url}" target="_blank">
        <img src="https://api.jomejourney-portal.com${url}" class="w-100 mb-3"></img>
        </a>
        `
    }
    



   // project detail table
    projectDetailTable.innerHTML = "";

    let ul;
    for (let i = 0; i < details.length; i++) {
        // Create a new <ul> element every 4 <li> elements
        if (i % 4 === 0) {
            ul = document.createElement('ul');
            ul.style.minWidth = "170px";
            ul.style.padding = "0px";
            ul.style.listStyleType = "none";
            projectDetailTable.appendChild(ul);
        }

        const detail = details[i];
        
        // Create an <li> element
        const listItem = document.createElement('li');
        listItem.style.margin = "20px 0px";

        // Create and append <p> elements for title and paragraph
        const titleParagraph = document.createElement('p');
        titleParagraph.style.margin = "0px";
        titleParagraph.style.color = "#919191"
        titleParagraph.textContent = detail.title;

        const contentParagraph = document.createElement('p');
        contentParagraph.style.margin = "3px 0px";
        contentParagraph.textContent = detail.para;
        contentParagraph.style.color = "#020202"

        listItem.appendChild(titleParagraph);
        listItem.appendChild(contentParagraph);

        // Append the <li> to the current <ul>
        ul.appendChild(listItem);
    }




    // location Map
    locationMapImageContainer.innerHTML = "";

    const locationMapImages = locationMap?.images || [];

    for (let i = 0; i < locationMapImages.length; i++) {
        const url = locationMapImages[i];
        locationMapImageContainer.innerHTML += `
        <a href="https://api.jomejourney-portal.com${url}" target="_blank">
        <img src="https://api.jomejourney-portal.com${url}" class="w-100 mb-3"></img>
        </a>
        `
    }
    locationMaptbody.innerHTML = "";

    const amenities = locationMap?.amenities || [];
    for (let i = 0; i < amenities.length; i++) {
        const element = amenities[i];
        locationMaptbody.innerHTML += `
        <tr style="font-size:12px; ${i % 2 != 0 ? "background-color: #f9fafc;":""}">
            <td class="p-2">${element.Category}</td>
            <td class="p-2">${element.Location}</td>
            <td class="p-2">${element.Distance}</td>
        </tr>
            `
    }

    // Developer Logo
    dev_logo[0].src = `https://api.jomejourney-portal.com${developer.image}`;
    dev_logo[1].src = `https://api.jomejourney-portal.com${developer.image}`;
    
    dev_para.innerText = developer.description;



    // Transaction

    transactionTbody.innerHTML = "";
    const validTransactions = transactions || [];

    const transactionFragment = document.createDocumentFragment();
    for (let i = 0; i < validTransactions.length; i++) {
        const transaction = validTransactions[i];

        // Create a <tr> element
        const tr = document.createElement('tr');
        tr.style.fontSize = '12px';
        if (i % 2 != 0) {
            tr.style.backgroundColor = '#f9fafc';
        }

        const fields = ['Date', 'UnitType', 'Size', 'PSF', 'Price', 'Block', 'Floor', 'Stack'];
        fields.forEach(field => {
            const td = document.createElement('td');
            td.className = 'p-2' + (field !== 'Date' ? ' text-center' : '');
            td.textContent = transaction[field];
            tr.appendChild(td);
        });

        transactionFragment.appendChild(tr);
    }

    transactionTbody.appendChild(transactionFragment);



    


    // Gallery
    galleryDiv.innerHTML = "";
    mainImages.innerHTML = "";
    for (let i = 0; i < Galleryimages.length; i++) {
        if(i == 0){
            titleNextImage.src = `https://api.jomejourney-portal.com${Galleryimages[i]}`;
        }        


        const img = Galleryimages[i];
        if(!img) continue;
        galleryDiv.innerHTML += `
        <a href="https://api.jomejourney-portal.com${img}">
        <img src="https://api.jomejourney-portal.com${img}" alt="${name}">
        </a>
        
        `;
        mainImages.innerHTML += `
        <li class="glide__slide">
            <div class="slide">
                <img src="https://api.jomejourney-portal.com${img}" style="border-radius:35px"  class="slideImages h-100 w-100" alt="${name}">        
            </div>
        </li>
        `;
    }
    if(galleryIntance){
        galleryIntance.destroy();
    }
    galleryIntance = lightGallery(galleryDiv, {
        thumbnail: true,
    });
    myIndex = 0;
    carousel(Galleryimages.length);
    
}

function populateAllListings(listings){

    const listingContainer = document.getElementById('all-listings');
    listingContainer.innerHTML = "";

    for(let i = 0; i < listings.length; i++){

        const address = listings[i]?.details[0].para + ', ' + listings[i]?.details[1].para ;

        const totalUnits = listings[i]?.unit_mix?.data.find(unit => unit.unitType == "Overall")?.totalUnits || 0;
        const availableUnits = listings[i]?.balance_units?.data.find(unit => unit.unitType == "Overall")?.availableUnits || 0;
        const unitsSold = totalUnits - availableUnits;
        const nearestMRT = listings[i]?.location_map?.amenities?.find(detail => detail.Category == "MRT Stations") || null;
        const dev_type = listings[i].dev_type;


            // populate the map bottom listing
            if(i == 0){
                const mapBottomListing = document.getElementById("map-bottom-listing");
                mapBottomListing.innerHTML = "";
                mapBottomListing.innerHTML = `
                <div class="card my-3" style="max-width: 100%; height: 100%; border-radius: 40px; border:none;box-shadow: -5px 5px 23px -3px rgba(189,189,189,1);">
              <div class="h-100 d-flex p-3">
                <div class="w-50" style="position:relative; max-width: 300px;">
                  <!-- ${dev_type?`<p style="
                  position: absolute;
                  background-color: #39548a;
                  color: white;
                  font-size: 10px;
                  padding: 2px 5px;
                  top: 10px;
                  left: 30px;
                  border-radius: 3px;
                  font-weight: bold;
                  ">${dev_type}</p>`:""} -->
                      <img class="w-100" style="height:100%; border-radius: 40px;" src="https://api.jomejourney-portal.com${listings[i].images[0]? listings[i].images[0] : listings[i].images[1]}">
                </div>
                <div class="w-50" style="padding-top: 0px;">
                  <div class="card-body">
                    <a class="pe-auto" onClick="">
                        <h5 class="card-title mb-3" style="color:#4d4d4d"><button style="padding:0px" class="bg-transparent border-0" onmouseover="hoverListingHandler(this)" onmouseout="removeHoverPopup(this)" onclick="openSingleListing(this)">${listings[i].name}</button></h5>
                    </a>
                    <h6 class="card-subtitle mb-1 text-muted" style="white-space: nowrap; text-overflow: ellipsis; width: 100%; overflow: hidden;">
                      
                         ${address} <br>
                    </h6>
                      </div>
                      <p class='mb-2 text-muted' style="padding-left:1rem; font-size:11px">
                      <img src="public/placeholder.png" width="20px" />  West Region
                      </p>
                     ${nearestMRT?`<p style="margin-bottom:0px; padding-left: 1rem; font-size: 11px; color: #6c757d !important; display: flex;align-items: center;gap: 6px;display: flex;align-items: center;gap: 6px;"><img src="public/meter.png" width="20px" /> ${nearestMRT.Distance} to ${nearestMRT.Location}</p>`:""}
                    <div style="font-size:11px; padding:0px 1rem;line-height: 30px;">
                       <span style="font-weight: bold; color: black; padding: 3px;border-radius: 2px;">Total: ${totalUnits} units</span>
                    <span style="font-weight: bold; color: black; padding: 3px;border-radius: 2px;">Available: ${availableUnits} units</span>
                    <span style="font-weight: bold; color: black; padding: 3px;border-radius: 2px;">Sold: ${unitsSold} units</span>
                    </div>
                    <div class="pt-3" style="padding-left: 1rem;">
                      <button class="read-more-btn" onclick="openSingleListing(this)" data_name="${listings[i].name}">Read More</button>
                    </div>
                  </div>

              </div>
          </div>
                `
            }























            listingContainer.innerHTML += `
        <div class="card mb-3" style="max-width: 100%; border-radius: 40px; border: 1px solid #dbdbdb; box-shadow: -5px 5px 23px -3px rgba(189, 189, 189, 1);">
                <div class="row g-0 p-3">
                    <div class="col-md-4" style="position:relative">
                    ${dev_type?`<p style="
                    position: absolute;
                    background-color: #39548a;
                    color: white;
                    font-size: 10px;
                    padding: 2px 5px;
                    top: 10px;
                    left: 30px;
                    border-radius: 3px;
                    font-weight: bold;
                    ">${dev_type}</p>`:""}
                        <img class="w-100" style="height:200px; border-radius: 40px;" src="https://api.jomejourney-portal.com${listings[i].images[0]? listings[i].images[0] : listings[i].images[1]}">
                   </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <a class="pe-auto" onClick="">
                        <h5 class="card-title mb-3" style="color:#4d4d4d"><button style="padding:0px" class="bg-transparent border-0" onmouseover="hoverListingHandler(this)" onmouseout="removeHoverPopup(this)" onclick="openSingleListing(this)">${listings[i].name}</button></h5>
                    </a>
                    <h6 class="card-subtitle mb-1 text-muted" style="white-space: nowrap; text-overflow: ellipsis; width: 100%; overflow: hidden;">
                    ${address} <br>
                    </h6>
                    </div>
                    <p class='mb-2 text-muted' style="padding-left:1rem; font-size:11px">
                    <img src="public/placeholder.png" width="20px" /> ${listings[i].geographical_region}
                    </p>
                  ${nearestMRT?`<p style="margin-bottom:0px; padding-left: 1rem; font-size: 11px; color: #6c757d !important; display: flex;align-items: center;gap: 6px;display: flex;align-items: center;gap: 6px;"><img src="public/meter.png" width="20px" /> ${nearestMRT.Distance} to ${nearestMRT.Location}</p>`:""}
                  <div style="font-size:11px; padding:0px 1rem;line-height: 30px;">
                    <span style="font-weight: bold; color: black; padding: 3px;border-radius: 2px;">Total: ${totalUnits} units</span>
                    <span style="font-weight: bold; color: black; padding: 3px;border-radius: 2px;">Available: ${availableUnits} units</span>
                    <span style="font-weight: bold; color: black; padding: 3px;border-radius: 2px;">Sold: ${unitsSold} units</span>
                  </div>
                </div>
              </div>
            </div>
        `
    }






}

function showMainPage() {

   
    if(selectedMarker){
        selectedMarker.closePopup();

        // change selected marker logo to default
        selectedMarker.setIcon(new L.Icon.Default());
        selectedMarker = null;
    }

    if (circle) {
        map.removeLayer(circle);
    }
    if (maskLayer) {
        map.removeLayer(maskLayer);
    }


    map.setView([1.3521, 103.8198], 12);


    // remove all ammenities markers
    AmmenetiesMarkers.forEach(marker => {
        map.removeLayer(marker);
    })
    document.getElementById("single-listing").classList.add("d-none");
    document.getElementById("map-container").classList.remove("d-none");
    document.getElementById("all-listings").classList.remove("d-none");
    document.querySelector(".left-pane").style.width = "50%";

    // uncheck all filter checkbox
    const checkboxes = document.querySelectorAll('.filter-container input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    changeMapDimentionsAndToggleBottomListings(true);
}

function openSingleListing(btn) {
    let name = btn.innerText;


    if(name == 'Read More'){
        name = btn.getAttribute("data_name");
    }


    const marker = markerArray.find(marker => marker.options.title == name);
    
    if (marker) {
        changeSelectedMarkerLogo(marker);
        marker.openPopup();
        marker.setZIndexOffset(1000);
        createCircleInMap(marker.getLatLng().lat, marker.getLatLng().lng, 3000);
        addAmmenitiesMarkers(name);

        const latLng = marker.getLatLng();

        const offsetLatLng = L.latLng(
            latLng.lat - (map.getBounds().getSouth() - map.getBounds().getNorth()) * 0.15, // Adjust the factor as needed
            latLng.lng - (map.getBounds().getWest() - map.getBounds().getEast()) * 0.18
        );

        map.setView(offsetLatLng, map.getZoom(), {
            animate: true,
            pan: { duration: 0.5 }
        });
    
    }


    if(isMobile){
        document.querySelector(".left-pane").style.width = "100% !important";
        document.querySelector(".listing-form-container").style.display = "none";
    }

  






    document.getElementById("single-listing").classList.remove("d-none");
    document.getElementById("all-listings").classList.add("d-none");

    const listing = listings.find(listing => listing.name == name);


    const desc = listing.description;
    const region = listing.geographical_region;
    const Galleryimages = listing.images;
    const sitePlan = listing.siteplan;
    const details = listing.details;
    const locationMap = listing.location_map;
    const unit_mix = listing.unit_mix;
    const balance_units = listing.balance_units;
    const developer = listing.developer;
    const transactions = listing.transactions;
    addInfoToSingleListing(desc, name, region, Galleryimages, sitePlan, details, locationMap, unit_mix, balance_units, developer, transactions);
    closeFilterPopup();
}

function mobileLayoutHandler(btn) {
    const type = btn.innerText;
    if(type == 'Listings'){
        document.getElementById("all-listings").classList.remove("d-none");
        document.getElementById("single-listing").classList.add("d-none");
        document.getElementById("map-container").classList.add("d-none");
        document.getElementsByClassName("right-pane")[0].classList.add("d-none");
        document.getElementsByClassName("left-pane")[0].classList.remove("d-none");

    }else{
        setTimeout(() => {
            map.invalidateSize()
          }, 0)
          
          document.getElementById("map-container").classList.remove("d-none");
          document.getElementById("all-listings").classList.add("d-none");
          document.getElementById("single-listing").classList.add("d-none");
          document.getElementsByClassName("left-pane")[0].classList.add("d-none");
          document.getElementsByClassName("right-pane")[0].classList.remove("d-none");
          reopenSelectedMarkerPopup();
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
        closeDropDown();
        return;
    }
    const filteredListings = listings.filter((listing) => {
        let stringtoSearch = listing.name.toLowerCase();
        return stringtoSearch.includes(value);
    })
    openDropDown(filteredListings);
    
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

function applyFilterCheckbox() {
    document.getElementById("all-listings").classList.remove("d-none");
    document.querySelector(".left-pane").classList.remove("d-none");

    
    
    // remove the circle from the map and zoom out
    if (circle) {
        map.removeLayer(circle);
    }
    if (maskLayer) {
        map.removeLayer(maskLayer);
    }
    map.setView([1.3521, 103.8198], 12);


    // remove all ammenities markers
    AmmenetiesMarkers.forEach(marker => {
        map.removeLayer(marker);
    })

    //remove selected marker
    if(selectedMarker){
        selectedMarker.setIcon(new L.Icon.Default());
        selectedMarker.closePopup();
        selectedMarker = null;
    }

    let selectedCheckboxes = extractCheckboxes();
    let filteredListings = listings.filter(function(listing) {
        const project_size = listing.project_size;
        const region = listing.geographical_region;
        const unit_category = listing.project_category;
        const market_segment = listing.details.find(detail => detail.title == "Market Segment")?.para;
        const expectedTop = listing?.details?.find(detail => detail.title == "Expected TOP")?.para || 'all';

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
                }else if (category == "expectedTop") {
                    let isLocalMatch = false;
                    for(let i = 0; i < selectedCheckboxes[category].length; i++){
                        let filterTop = selectedCheckboxes[category][i].toLowerCase().trim();
                        if (expectedTop.includes(filterTop) || expectedTop == 'all') {
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

    markerArray.forEach(marker => {
        marker.remove();
    })

    const filteredMarkers = markerArray.filter(marker => {
        const name = marker.options.title;
        const project = filteredListings.find(listing => listing.name == name);
        return project;
    })

    filteredMarkers.forEach(marker => {
        marker.addTo(map);
    })


    populateAllListings(filteredListings);
    document.getElementById("single-listing").classList.add("d-none");
    closeFilterPopup();

}

function extractCheckboxes() {
    let categories = ['region', 'market_segment', 'unit_category', 'project_size', 'expectedTop'];
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

function openLoading(){
    document.querySelector(".darksoul-layout").classList.remove("d-none");
}

function closeLoading(){
    document.querySelector(".darksoul-layout").classList.add("d-none");
}

function selectProjectBasedOnParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectName = urlParams.get('project');
    if (projectName) {
        const project = listings.find(listing => processText(listing.name) == processText(projectName));
        if (project) {
            const btn = document.createElement('button');
            btn.innerText = project.name;
            openSingleListing(btn);
        }
    }
}


// function to remove all spaces from a string and convert to lowercase
function processText(text) {
    // Remove spaces
    text = text.replace(/ /g, '');
    // Convert to lowercase
    text = text.toLowerCase();
    return text;
}



async function createCircleInMap(lat, long, radius) {
    if (circle) {
        map.removeLayer(circle);
    }
    if (maskLayer) {
        map.removeLayer(maskLayer);
    }

    let circleCenter = [lat, long];

    // Create the circle
    circle = L.circle(circleCenter, {
        color: '#39548a',
        fillColor: 'transparent',
        fillOpacity: 0,
        radius: radius,
        weight:2
    }).addTo(map);

    // Define the outer bounds of the map to cover
    let bounds = [
        [90, -180],
        [90, 180],
        [-90, 180],
        [-90, -180]
    ];

    // Create the hole (circle coordinates)
    let hole = [];
    let steps = 64; // Number of points to create a smooth circle
    for (let i = 0; i < steps; i++) {
        let angle = (i / steps) * (2 * Math.PI);
        let dx = radius * Math.cos(angle);
        let dy = radius * Math.sin(angle);
        let latLng = L.latLng(lat + (dy / 111320), long + (dx / (111320 * Math.cos(lat * Math.PI / 180))));
        hole.push([latLng.lat, latLng.lng]);
    }

    // Create a polygon with the outer bounds and the hole
    maskLayer = L.polygon([bounds, hole], {
        color: '#000',
        fillColor: '#000',
        fillOpacity: 0.5,
        stroke: false
    }).addTo(map);


    map.fitBounds(circle.getBounds());
}

function refreshMap() {
    let center = map.getCenter();
    let zoom = map.getZoom();
    map.invalidateSize();
    map.setView(center, zoom);
}


function changeSelectedMarkerLogo(marker){
      if(selectedMarker){
          selectedMarker.setIcon(new L.Icon.Default());
      }
      selectedMarker = marker;
      let activeIcon = L.icon({
        iconUrl: 'public/home.png', // Replace with the path to your active icon
        iconSize: [41, 47], // size of the icon
        iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
        popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
    });
    marker.setIcon(activeIcon);
  }
  

function handleScroll(btn){
    const target = btn.getAttribute('data');
    const element = document.getElementById(target);
    element.scrollIntoView({behavior: "smooth"});
}


function openDropDown(filteredListings) {



   const container = document.querySelector(".drop-down-search");
   container.innerHTML = "";
   container.classList.remove("d-none");
    // add image and name to the dropdown
    for (let i = 0; i < filteredListings.length; i++) {
        const name = filteredListings[i].name;
        container.innerHTML += `
        <div class="d-flex align-items-center p-2 " onmouseover="searchResultHoverHandler(this)" onmouseout="searchResultOutHandler(this)" style="cursor:pointer; border-bottom:1px solid #dbd9d9" onclick="openSingleListing(this)">
            <img src="public/office-building.png" style="width:40px"/>
            <p class="ms-2 my-0" style="color: black;font-size: 14px;">${name}</p>
        </div>
        `
    }

    if (filteredListings.length == 0) {
        container.innerHTML = `
        <div class="d-flex align-items-center p-2">
            <p class="my-0 mx-auto" style="color: black;
            font-size: 14px;">No results found</p>
        </div>
        `
    }
}

function closeDropDown() {
    document.querySelector(".drop-down-search").classList.add("d-none");
}



function extractSelectValues() {
    let selectedFilters = {
        project_size: [],
        region: [],
        unit_category: [],
        market_segment: [],
        TOP: [],
        price: [],
        psf: [],
        bedrooms:[],
        sqft:[]
    };

    document.querySelectorAll("select[name='project_size'] option:checked").forEach(option => {
        selectedFilters.project_size.push(option.value);
    });
    document.querySelectorAll("select[name='region'] option:checked").forEach(option => {
        selectedFilters.region.push(option.value);
    });
    document.querySelectorAll("select[name='unit_category'] option:checked").forEach(option => {
        selectedFilters.unit_category.push(option.value);
    });
    document.querySelectorAll("select[name='market_segment'] option:checked").forEach(option => {
        selectedFilters.market_segment.push(option.value);
    });
    document.querySelectorAll("select[name='top'] option:checked").forEach(option => {
        selectedFilters.TOP.push(option.value);
    });

    document.querySelectorAll("select[name='price'] option:checked").forEach(option => {
        selectedFilters.price.push(option.value);
    })

    document.querySelectorAll("select[name='psf'] option:checked").forEach(option => {
        selectedFilters.psf.push(option.value);
    })

    document.querySelectorAll("select[name='bedrooms'] option:checked").forEach(option => {
        selectedFilters.bedrooms.push(option.value);
    })


    document.querySelectorAll("select[name='sqft'] option:checked").forEach(option => {
        selectedFilters.sqft.push(option.value);
    })

    return selectedFilters;
}


function applyFilterSelect() {
    document.getElementById("all-listings").classList.remove("d-none");

    changeMapDimentionsAndToggleBottomListings(true);
    
    
    // remove the circle from the map and zoom out
    if (circle) {
        map.removeLayer(circle);
    }
    if (maskLayer) {
        map.removeLayer(maskLayer);
    }
    map.setView([1.3521, 103.8198], 12);


    // remove all ammenities markers
    AmmenetiesMarkers.forEach(marker => {
        map.removeLayer(marker);
    })

    //remove selected marker
    if(selectedMarker){
        selectedMarker.setIcon(new L.Icon.Default());
        selectedMarker.closePopup();
        selectedMarker = null;
    }


    let selectedFilters = extractSelectValues();
    const defaultValues = ['Region', 'Project Size', 'Unit Category', 'Market Segment', 'Expected TOP', 'Price', "PSF", "Beds", "Floor area(sqft)"];
    let filteredListings = listings.filter(function(listing) {
        const project_size = listing.project_size;
        const region = listing.geographical_region;
        const unit_category = listing.project_category;
        const market_segment = listing.details.find(detail => detail.title == "Market Segment").para;
        const TOP = listing?.details?.find(detail => detail.title == "Expected TOP")?.para || "all"
        const price = listing?.balance_units?.data.find(unit => unit.unitType == "Overall")?.price || 0;
        const {lowerValue:lowerValueOfListing, upperValue:upperValueOfListing} = changePriceString(price)

        const psf = listing?.balance_units?.data.find(unit => unit.unitType == "Overall")?.psf || 0;
        const {lowerValue:lowerValueOfPSF, upperValue:upperValueOfPSF} = changePsfString(psf)

        const bedroomstypes  = listing?.unit_mix?.data.map(unit => unit.unitType) || [];

        const sqft = listing?.unit_mix?.data.find(unit => unit.unitType == "Overall")?.size_sqft || 0;
        const {lowerValue:lowerValueOfSQFT, upperValue:upperValueOfSQFT} = changeSqftString(sqft);



        let isMatch = true;
        for (let category in selectedFilters) {
            if (selectedFilters[category].length > 0  && !selectedFilters[category].includes("all") && !defaultValues.includes(selectedFilters[category][0])) {
                if (category === "project_size") {
                    let sizeMatched = false;
                    for (let i = 0; i < selectedFilters[category].length; i++) {
                        let size = selectedFilters[category][i];
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
                } else if (category === "region") {
                    let isLocalMatch = false;
                    for (let i = 0; i < selectedFilters[category].length; i++) {
                        let filterRegions = selectedFilters[category][i].toLowerCase().trim();
                        if (region.toLowerCase().trim().includes(filterRegions)) {
                            isLocalMatch = true;
                            break;
                        }
                    }
                    if (!isLocalMatch) {
                        isMatch = false;
                        break;
                    }
                } else if (category === "unit_category") {
                    let isLocalMatch = false;
                    for (let i = 0; i < selectedFilters[category].length; i++) {
                        let filterUnitCategory = selectedFilters[category][i].toLowerCase().trim();
                        if (unit_category.toLowerCase().trim().includes(filterUnitCategory)) {
                            isLocalMatch = true;
                            break;
                        }
                    }
                    if (!isLocalMatch) {
                        isMatch = false;
                        break;
                    }
                } else if (category === "market_segment") {
                    let isLocalMatch = false;
                    for (let i = 0; i < selectedFilters[category].length; i++) {
                        let filterSegment = selectedFilters[category][i].toLowerCase().trim();
                        if (market_segment.toLowerCase().trim().includes(filterSegment)) {
                            isLocalMatch = true;
                            break;
                        }
                    }
                    if (!isLocalMatch) {
                        isMatch = false;
                        break;
                    }
                }else if(category === "TOP"){
                    let isLocalMatch = false;
                    for (let i = 0; i < selectedFilters[category].length; i++) {
                        let filterTOP = selectedFilters[category][i].toLowerCase().trim();
                        if (TOP.includes(filterTOP) || TOP == "all") {
                            isLocalMatch = true;
                            break;
                        }
                    }
                    if (!isLocalMatch) {
                        isMatch = false;
                        break;
                    }
                }else if(category == "price"){
                    let isLocalMatch = false;
                    for (let i = 0; i < selectedFilters[category].length; i++) {
                        const {lowerValue, upperValue} = changePriceString(selectedFilters[category][i]);
                        if ((lowerValueOfListing >= lowerValue && lowerValueOfListing <= upperValue) || (upperValueOfListing >= lowerValue && upperValueOfListing <= upperValue) || selectedFilters[category][i] == "all") {
                            isLocalMatch = true;
                            break;
                        }
                    }
                    if (!isLocalMatch) {
                        isMatch = false;
                        break;
                    }
                
                }else if(category == "psf"){
                    let isLocalMatch = false;
                    for (let i = 0; i < selectedFilters[category].length; i++) {
                        const {lowerValue, upperValue} = changePsfString(selectedFilters[category][i]);
                        console.log(lowerValueOfPSF, upperValueOfPSF, lowerValue, upperValue)
                        if ((lowerValueOfPSF >= lowerValue && lowerValueOfPSF <= upperValue) || (upperValueOfPSF >= lowerValue && upperValueOfPSF <= upperValue) || selectedFilters[category][i] == "all") {
                            isLocalMatch = true;
                            break;
                        }
                    }
                    if (!isLocalMatch) {
                        isMatch = false;
                        break;
                    }
                
                }else if(category == "bedrooms"){
                    let isLocalMatch = false;
                    for (let i = 0; i < selectedFilters[category].length; i++) {
                        const filterBedroom = selectedFilters[category][i];
                        
                        for(let i = 0; i < bedroomstypes.length; i++){
                            if (bedroomstypes[i].includes(filterBedroom) || filterBedroom == "all") {
                                isLocalMatch = true;
                                break;
                            }
                        }


                       
                    }
                    if (!isLocalMatch) {
                        isMatch = false;
                        break;
                    }
                
                }else if(category == "sqft"){
                    let isLocalMatch = false;
                    for (let i = 0; i < selectedFilters[category].length; i++) {
                        const {lowerValue, upperValue} = changeSqftString(selectedFilters[category][i]);
                        if ((lowerValueOfSQFT >= lowerValue && lowerValueOfSQFT <= upperValue) || (upperValueOfSQFT >= lowerValue && upperValueOfSQFT <= upperValue) || selectedFilters[category][i] == "all") {
                            isLocalMatch = true;
                            break;
                        }
                    }
                    if (!isLocalMatch) {
                        isMatch = false;
                        break;
                    }
                    
                }
            }
        }
        return isMatch;
    });


    // remove all markers from the map
    markerArray.forEach(marker => {
        marker.remove();
    })

    const filteredMarkers = markerArray.filter(marker => {
        const name = marker.options.title;
        const project = filteredListings.find(listing => listing.name == name);
        return project;
    })

    filteredMarkers.forEach(marker => {
        marker.addTo(map);
    })

    populateAllListings(filteredListings);
    // document.getElementById("map-container").classList.add("d-none");
    document.getElementById("single-listing").classList.add("d-none");
    // closeFilterPopup();
}

function reopenSelectedMarkerPopup() {
    if (selectedMarker) {
        selectedMarker.openPopup();
    }
}



function getToast(){
    const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          popup: 'custom-toast'
      },
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      return Toast;
}
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        0.5 - Math.cos(dLat) / 2 +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        (1 - Math.cos(dLon)) / 2;
    return R * 2 * Math.asin(Math.sqrt(a));
}

function addAmmenitiesMarkers(name){
    AmmenetiesMarkers.forEach(marker => {
        map.removeLayer(marker);
    })

    const amenities = ammenities[name] || [];

        
    amenities.forEach(amenitie => {
        const ammenitieMarker = L.marker([amenitie.latitude, amenitie.longitude], { title: amenitie.name })
            .addTo(map)

            const getIcon = (category)=>{
                if(category?.toLowerCase()?.includes('school')){
                    return 'public/schooll.png';
                }else if(category?.toLowerCase()?.includes('station')){
                    return 'public/train.png';
                }else{
                    return 'public/trolley.png';
                }
            }

            let activeIcon = L.icon({
                iconUrl: getIcon(amenitie.category), // Replace with the path to your active icon
                iconSize: [31, 37], // size of the icon
                iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
                popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
            });

            ammenitieMarker.bindPopup(`<div style="display:flex; gap:10px;width:100%">
            <div style="display: flex; justify-content: center; align-items: center;">
            <img style="width:50px" src="${getIcon(amenitie.category)}"/>
            </div>
            <div>
                <p style="font-weight: bold; margin-bottom:1px;">
                <span style="font-size: 12px;sont-we: bold;font-weight: bold;color: #666;">
                Name:
                </span> ${amenitie.name}
                </p>
                <p style="font-weight: bold; margin-top:1px">
                <span style="font-size: 12px;sont-we: bold;font-weight: bold;color: #666;">
                Distance:
                </span> ${amenitie.distance}
                </p>
            </div>
           </div>`, { autoClose: false, closeOnClick: false });

           ammenitieMarker.on('mouseover', function (e) {
            ammenitieMarker.openPopup();
        });

        // Hide popup when mouse leaves
        ammenitieMarker.on('mouseout', function (e) {
            ammenitieMarker.closePopup();
        });



        ammenitieMarker.setIcon(activeIcon);
        AmmenetiesMarkers.push(ammenitieMarker);
    });



}


function handleFormSubmit() {
    const ids = {
        container: isMobile ? 'dev-form-mobile' : 'dev-form',
        name: isMobile ? 'name-mobile' : 'name',
        email: isMobile ? 'email-mobile' : 'email',
        phone: isMobile ? 'phone-mobile' : 'phone',
        errorMessage: isMobile ? 'error-form-para-mobile' : 'error-form-para'
    }


    console.log(ids);


    const container = document.getElementById(ids.container);
    const name = document.getElementById(ids.name).value;
    const email = document.getElementById(ids.email).value;
    const phone = document.getElementById(ids.phone).value;
    const errorMessage = document.getElementById(ids.errorMessage);
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    errorMessage.innerHTML = "";
    
    let isCheckBox = false;
    
    checkboxes.forEach(checkbox => {
        if(checkbox.checked){
            isCheckBox = true;
        }
    })
    
    if(!isCheckBox){
        errorMessage.innerHTML = "Please select at least one checkbox";
        return;
    }



    
    // validate inputs
    let isEmailValid = validateEmail(email);
    let isPhoneValid = validatePhone(phone);

    if(name.trim() == ""){
        errorMessage.innerHTML = "Name is required";
        return;
    }
    
    
    
    
    if(!isPhoneValid){
      errorMessage.innerHTML = "Invalid phone number";
      return;
    }

    if(!isEmailValid){
        errorMessage.innerHTML = "Invalid email";
        return;
    }

   
    getToast().fire({
        icon: 'success',
        title: 'Form submitted successfully'
    });
    
    
    // clear form

    email.value = "";
    phone.value = "";
    name.value = "";
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
  

function validatePhone(phone) {
  // phione number should be 8 digits
  return phone.length == 8;
}




function addEventListenerToInput(){
    const input = document.querySelector('input[name="phone"]')
    input.addEventListener('input',()=>{
        // check if the input is not a number
        if(isNaN(input.value)){
            input.value = input.value.slice(0,input.value.length - 1);
        }

        if(input.value.length > 8){
            input.value = input.value.slice(0,8);
        }
    });
}


function hoverListingHandler(btn){
    const name = btn.innerText;
    const marker = markerArray.find(marker => marker.options.title == name);
    if(marker){
        marker.openPopup();
        
    }
}


function removeHoverPopup(btn){
    const name = btn.innerText;
    const marker = markerArray.find(marker => marker.options.title == name);
    if(marker && marker != selectedMarker){
        marker.closePopup();
    }
    
}



function searchResultHoverHandler(btn){
    btn.style.backgroundColor = "#c5d1e8";
}

function searchResultOutHandler(btn){
    btn.style.backgroundColor = "white";
}

function checkMarkersInView() {
    
    const bounds = map.getBounds();
    const filterArray =  markerArray.filter(marker => {
        const latLng = marker.getLatLng();
        return bounds.contains(latLng);
    });
    // find filtered listings
    const filteredListings = filterArray.map(marker => {
        return listings.find(listing => listing.name == marker.options.title);
    });
    populateAllListings(filteredListings);
}


function changePriceString(priceRange){
    const prices = priceRange.replace(/\$|M/g, '').split(/\s*-\s*/);
    const lowerValue = parseFloat(prices[0]) * 1000000;
    const upperValue = parseFloat(prices[1]) * 1000000;
    
    return {
        lowerValue,
        upperValue
    }
    
}
function changePsfString(psfRange){

    // Remove the dollar sign and "M" suffix, then split by the hyphen with optional spaces around it
    const psf = psfRange.replace(/\$|M/g, '').split(/\s*-\s*/);
    
    // Convert to numbers and multiply by one million
    const lowerValue = parseFloat(psf[0]);
    const upperValue = parseFloat(psf[1]);
    
    return {
        lowerValue,
        upperValue
    }
    
}

function changeSqftString(sqftRange){
        const sqft = sqftRange.replace(/\$|M|,/g, '').split(/\s*-\s*/);
        
        // Convert to numbers
        const lowerValue = parseFloat(sqft[0]);
        const upperValue = parseFloat(sqft[1]);
        
        return {
            lowerValue,
            upperValue
        };
}


function toggleForm(){
    const form = document.querySelector(".listing-form-container-mobile");
    // check if the form is visible
    const display = form.style.display;
    if(display == "block"){
        form.style.display = "none";
    }else{
        form.style.display = "block";
    }
}



function changeMapDimentionsAndToggleBottomListings(show){
    if(show){
        document.getElementById("map-bottom-listing").classList.remove("d-none");
        document.getElementById("mapdiv").style.height = "60%";
        document.querySelector(".left-pane").style.width = "50%"
        document.querySelector(".right-pane").style.width = "50%"
        map.invalidateSize();
    }else{
        document.getElementById("map-bottom-listing").classList.add("d-none");
        document.getElementById("mapdiv").style.height = "100%";
        document.querySelector(".left-pane").style.width = "70%"
        document.querySelector(".right-pane").style.width = "30%"
        map.invalidateSize();
    }

    const dropodown_container = document.querySelector(".drop-down-search")
    dropodown_container.innerHTML = "";
    dropodown_container.classList.add("d-none");
}



function toggleMap(){
    const map = document.getElementById("map-container");
    const listings = document.querySelector(".left-pane");
    const single_listing = document.querySelector(".single-listing-inner");
    if(map.classList.contains("d-none")){
        map.classList.remove("d-none");
        listings.style.width = "70%";
        single_listing.style.maxWidth = "70% !important";
    }else{
        map.classList.add("d-none");
        listings.style.width = "100%";
        single_listing.style.maxWidth = "80% !important";
    }

    map.invalidateSize();
    glide.refresh()
}