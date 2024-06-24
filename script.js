

let myIndex = 0;
        
let map;

let timeoutId;

let listings = [];

let glide;

let circle;

let maskLayer;

let selectedMarker;

let markerArray = [];

let galleryIntance;
const searchListings = debounce(searchhandler, 500);



start();

async function start(){
    openLoading();
    // listings = await fetchDataFromJson();
    const data = await fetchNewListings();
    if(data.length > 0){
        listings = data;
    }

    selectProjectBasedOnParams();
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
    closeLoading();
    await fetchCoordinatesAndPopulateMap(listings);
}


function openMap(params) {
    map = L.map('mapdiv', {
       center: L.latLng(1.327450, 103.811203),
       zoom: 13
    });

    let basemap = L.tileLayer('https://www.onemap.gov.sg/maps/tiles/Default/{z}/{x}/{y}.png', {
       detectRetina: true,
       maxZoom: 19,
       minZoom: 5,
    });
    basemap.addTo(map);

}

async function fetchCoordinatesAndPopulateMap(listings) {
    for (let i = 0; i < listings.length; i++) {
        const project = listings[i];
        const LATITUDE = project.latitude;
        const LONGITUDE = project.longitude;
        if(!LATITUDE || !LONGITUDE) continue;

        const marker = L.marker([LATITUDE, LONGITUDE], { riseOnHover: true, title: project.name})
            .addTo(map);


        const expectedTOP = project?.details.find(detail => detail.title == "Expected TOP")?.para || "";
        const Land_Tenure = project?.details.find(detail => detail.title == "Land Tenure")?.para || "";
        const Development_Size = project?.details.find(detail => detail.title == "Development Size")?.para || "";
        const latestTransaction = Array.isArray(project.transactions)? project.transactions[0]: null;
        const popupContent = `
            <div class="w-200" id="popup-${i}" style="height: 180px;">
                <div class="donate-title d-flex" style="height: 120px; padding:5px">
                    <img src="https://api.jomejourney-portal.com${project.images[0]? project.images[0]:project.images[1]}" alt="${project.name}" class="h-100 w-50 me-1 rounded-2">
                    <div class="px-1">
                        <p class="mt-0" style="cursor:pointer; font-weight:900; margin-bottom:0px; font-size: 15px;">${project.name}</p>
                        <p style="margin-top: 0px; color:#6f6f6f; font-weight:600; font-size:11px">${project.details[0].para}</p>
                       ${expectedTOP? `<p style="margin: 0px; color:#6f6f6f; font-weight:600; font-size:11px"><span style="color:black">TOP: </span>${expectedTOP}</p>`:"" }
                        <p style="margin: 0px; color:#6f6f6f; font-weight:600; font-size:11px">${Land_Tenure}</p>
                        <p style="margin: 0px; color:#6f6f6f; font-weight:600; font-size:11px">${Development_Size}</p>
                    </div>
                </div>
                <div>
                    <hr style="margin-bottom:0px" >
                </div>
                ${
                latestTransaction?`
                <div style="padding:5px">
                <p style="margin:0px; font-size: 10px; font-weight: bold; color: #6f6f6f;">LATEST TRANSACTION</p>
                <div style="display: flex;justify-content: space-between;font-size: 11px;margin-top: 3px;font-weight: bold; color:black;">
                    <div>${latestTransaction.Date}</div>
                    <div>${latestTransaction.Size} sqft</div>
                    <div>${latestTransaction.Price}</div>
                </div>

                </div>     
                `:""
                } 
                   
            </div>
        `;

        marker.bindPopup(popupContent, { minWidth: 300, maxWidth: 300, padding: 0, className: "marker-popup" });
        markerArray.push(marker);

        marker.on('mouseover', function (e) {
            marker.openPopup();
        });

        // Hide popup when mouse leaves
        marker.on('mouseout', function (e) {
            marker.closePopup();
            if (selectedMarker){
                selectedMarker.openPopup();
            }
        });


        marker.on('click', function (e) {
            changeSelectedMarkerLogo(marker);
            marker.openPopup();
            createCircleInMap(marker.getLatLng().lat, marker.getLatLng().lng, 2500);
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
    
    timeoutId = setTimeout(carousel, 4000); // Change image every 4 seconds
}

function addInfoToSingleListing(desc,name, region, Galleryimages, sitePlan, details, locationMap, unit_mix, balance_units, developer, transactions){
    document.getElementById("single-listing").classList.remove("d-none");
    document.getElementById("all-listings").classList.add("d-none");
    document.getElementsByClassName("right-pane")[0].classList.add("d-none");
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
    // const dev_name_form = document.getElementById("dev-name-form");

    

    // form dev name

    // const developerName = details.find(detail => detail.title == "Project Developer")?.para || "";
    // dev_name_form.innerText = developerName;


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
        // Create a new <ul> element every 4 <li> elements
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
            <td class="p-2">${element.Distance}</td>
            <td class="p-2">${element.Location}</td>
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
    for (let i = 0; i < validTransactions.length; i++) {
        const transaction = validTransactions[i];
        transactionTbody.innerHTML += `
        <tr style="font-size:12px; ${i % 2 != 0 ? "background-color: #f9fafc;":""}">
            <td class="p-2">${transaction.Date}</td>
            <td class="p-2 text-center">${transaction.UnitType}</td>
            <td class="p-2 text-center">${transaction.Size}</td>
            <td class="p-2 text-center">${transaction.PSF}</td>
            <td class="p-2 text-center">${transaction.Price}</td>
            <td class="p-2 text-center">${transaction.Block}</td>
            <td class="p-2 text-center">${transaction.Floor}</td>
            <td class="p-2 text-center">${transaction.Stack}</td>
            
        </tr>
        `
    }





    // Gallery
    galleryDiv.innerHTML = "";
    mainImages.innerHTML = "";
    for (let i = 0; i < Galleryimages.length; i++) {
        const img = Galleryimages[i];
        if(!img) continue;
        galleryDiv.innerHTML += `
        <a href="https://api.jomejourney-portal.com${img}">
        <img src="https://api.jomejourney-portal.com${img}" alt="${name}">
        </a>
        
        `;
        mainImages.innerHTML += `<img src="https://api.jomejourney-portal.com${img}"  class="slideImages h-100 w-100" alt="${name}">`;
    }
    if(galleryIntance){
        galleryIntance.destroy();
    }
    galleryIntance = lightGallery(galleryDiv, {
        thumbnail: true,
    });
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
                                        background-image: url('https://api.jomejourney-portal.com${listings[i].images[0]? listings[i].images[0] : listings[i].images[1]}');
                                    "
                                ></figure>

                            <div class="card-campaign-text">
                                <div class="card-campaign-title"><button style="padding:0px" class="bg-transparent border-0" onclick="openSingleListing(this)">${listings[i].name}</button> </div>
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
        const address = listings[i]?.details[0].para + ', ' + listings[i]?.details[1].para ;

        const totalUnits = listings[i]?.unit_mix?.data.find(unit => unit.unitType == "Overall")?.totalUnits || 0;
        const availableUnits = listings[i]?.balance_units?.data.find(unit => unit.unitType == "Overall")?.availableUnits || 0;
        const unitsSold = totalUnits - availableUnits;
        const nearestMRT = listings[i]?.location_map?.amenities?.find(detail => detail.Category == "MRT Stations") || null;
        const dev_type = listings[i].dev_type;
        recommendedContainer.innerHTML += `
        <div class="card my-3" style="max-width: 100%">
              <div class="row g-0">
                <div class="col-md-4" style="position:relative">
                    ${dev_type?`<p style="
                    position: absolute;
                    background-color: #39548a;
                    color: white;
                    font-size: 10px;
                    padding: 2px 5px;
                    top: 10px;
                    left: 10px;
                    border-radius: 3px;
                    font-weight: bold;
                    ">${dev_type}</p>`:""}
                  <img class="w-100" style="height:200px" src="https://api.jomejourney-portal.com${listings[i].images[0]? listings[i].images[0] : listings[i].images[1]}" alt="${listings[i].name}">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <a class="pe-auto" onClick="">
                        <h5 class="card-title mb-3" style="color:#4d4d4d"><button style="padding:0px" class="bg-transparent border-0" onclick="openSingleListing(this)">${listings[i].name}</button></h5>
                    </a>
                    <h6 class="card-subtitle mb-1 text-muted">
                    ${address} <br>
                    <p class='mt-2 mb-0'>
                    ${listings[i].geographical_region}
                    </p>
                    </h6>
                  </div>
                  ${nearestMRT?`<p style="margin-bottom:0px; padding-left: 1rem; font-size: 11px; color: #6c757d !important;">${nearestMRT.Distance} to <span style="color:black; font-weight:bold;">${nearestMRT.Location}</span></p>`:""}
                  <div style="font-size:11px; padding:10px 1rem;line-height: 30px;">
                    <span style="background-color: #eeeaea;padding: 3px;border-radius: 2px;">Total: ${totalUnits} units</span>
                    <span style="background-color: #eeeaea;padding: 3px;border-radius: 2px;">Available: ${availableUnits} units</span>
                    <span style="background-color: #eeeaea;padding: 3px;border-radius: 2px;">Sold: ${unitsSold} units</span>
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

    // uncheck all filter checkbox
    const checkboxes = document.querySelectorAll('.filter-container input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
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
        
        const address = newListing[i]?.details[0].para + ', ' + newListing[i]?.details[1].para ;

        const totalUnits = newListing[i]?.unit_mix?.data.find(unit => unit.unitType == "Overall")?.totalUnits || 0;
        const availableUnits = newListing[i]?.balance_units?.data.find(unit => unit.unitType == "Overall")?.availableUnits || 0;
        const unitsSold = totalUnits - availableUnits;
        const nearestMRT = newListing[i]?.location_map?.amenities?.find(detail => detail.Category == "MRT Stations") || null;
        const dev_type = newListing[i].dev_type;
        container.innerHTML += `
            <div class="card my-3" style="max-width: 100%">
                <div class="row g-0">
                    <div class="col-md-4" style="position:relative">
                    ${dev_type?`<p style="
                    position: absolute;
                    background-color: #39548a;
                    color: white;
                    font-size: 10px;
                    padding: 2px 5px;
                    top: 10px;
                    left: 10px;
                    border-radius: 3px;
                    font-weight: bold;
                    ">${dev_type}</p>`:""}
                        <img class="w-100" style="height:200px" src="https://api.jomejourney-portal.com${newListing[i].images[0]? newListing[i].images[0] : newListing[i].images[1]}">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <a class="pe-auto" onClick="">
                            <h5 class="card-title mb-3" style="color:#4d4d4d"><button style="padding:0px" class="bg-transparent border-0" onclick="openSingleListing(this)">${newListing[i].name}</button></h5>
                        </a>
                       <h6 class="card-subtitle mb-1 text-muted">
                    ${address} <br>
                    <p class='mt-2 mb-0'>
                    ${newListing[i].geographical_region}
                    </p>
                    </h6>
                  </div>
                  ${nearestMRT?`<p style="margin-bottom:0px; padding-left: 1rem; font-size: 11px; color: #6c757d !important;">${nearestMRT.Distance} to <span style="color:black; font-weight:bold;">${nearestMRT.Location}</span></p>`:""}
                  <div style="font-size:11px; padding:10px 1rem; line-height: 30px;">
                    <span style="background-color: #eeeaea;padding: 3px;border-radius: 2px;">Total: ${totalUnits} units</span>
                    <span style="background-color: #eeeaea;padding: 3px;border-radius: 2px;">Available: ${availableUnits} units</span>
                    <span style="background-color: #eeeaea;padding: 3px;border-radius: 2px;">Sold: ${unitsSold} units</span>
                  </div>
                </div>
              </div>
            </div>
            `
    }

}

function openSingleListing(btn) {
    const name = btn.innerText;
    const marker = markerArray.find(marker => marker.options.title == name);
    
    if (marker) {
        changeSelectedMarkerLogo(marker);
        marker.openPopup();
        createCircleInMap(marker.getLatLng().lat, marker.getLatLng().lng, 2500);
    
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
    document.querySelector(".house-list").classList.remove("overflow-auto");
    document.querySelector(".house-list").classList.add("overflow-hidden");
}

function closeFilterPopup() {
    document.querySelector(".filter-container").style.transform = "translateX(100%)";
    document.querySelector(".main-container").classList.remove("overflow-hidden");
    document.querySelector(".main-container").classList.add("overflow-auto");
    document.querySelector(".house-list").classList.remove("overflow-hidden");
    document.querySelector(".house-list").classList.add("overflow-auto");
}

function applyFilterCheckbox() {
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

    openAllListingsInner(filteredListings);
    document.getElementById("map-container").classList.add("d-none");
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



function createCircleInMap(lat, long, radius) {
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
  


/// ##################################### slider script ###################################

const resizer = document.querySelector('.resizer');
const leftPane = document.querySelector('.left-pane');
const rightPane = document.querySelector('.right-pane');
let startX = 0;
let startWidthLeft = 0;
let startWidthRight = 0;


resizer.addEventListener('mousedown', function (e) {
    startX = e.clientX;
    startWidthLeft = leftPane.getBoundingClientRect().width;
    startWidthRight = rightPane.getBoundingClientRect().width;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    const dx = e.clientX - startX;
    const newWidthLeft = startWidthLeft + dx;
    const newWidthRight = startWidthRight - dx;
    const containerWidth = leftPane.parentNode.getBoundingClientRect().width;
    
    const newWidthLeftPercent = (newWidthLeft / containerWidth) * 100;
    const newWidthRightPercent = (newWidthRight / containerWidth) * 100;

    if (newWidthLeftPercent >= 30 && newWidthLeftPercent <= 70) {
        leftPane.style.width = `${newWidthLeftPercent}%`;
        rightPane.style.width = `${newWidthRightPercent}%`;
        refreshMap();
    }
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
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
        <div class="d-flex align-items-center p-2" style="cursor:pointer" onclick="openSingleListing(this)">
            <i class="fa-solid fa-house fa-xl" style="color: #39548a;"></i>
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
        TOP: []
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

    return selectedFilters;
}


function applyFilterSelect() {
    let selectedFilters = extractSelectValues();
    const defaultValues = ['Region', 'Project Size', 'Unit Category', 'Market Segment', 'Expected TOP'];
    let filteredListings = listings.filter(function(listing) {
        const project_size = listing.project_size;
        const region = listing.geographical_region;
        const unit_category = listing.project_category;
        const market_segment = listing.details.find(detail => detail.title == "Market Segment").para;
        const TOP = listing?.details?.find(detail => detail.title == "Expected TOP")?.para || "all"

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

    openAllListingsInner(filteredListings);
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
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      return Toast;
}