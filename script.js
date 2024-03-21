        let myIndex = 0;
        
        let map;

        let timeoutId;

        let listings = [
    {
        "id": 1,
        "name": "Lentor Mansion",
        "uuid": "lentormansion",
        "description": "The latest addition to the series of residential developments along Lentor Gardens is Lentor Mansion, a 99-year leasehold new launch condo with 533 units, built on an expansive land size of over 21,000 square metres. Other than having a wide array of communal facilities available within the development, it is surrounded by parks and greenery, such as Thomson Nature Park, Lower Pierce Reservoir Park, as well as the upcoming Hillock Park and Linear Park to allow more options for outdoor activities. Within walking distance to Lentor MRT station, residents can commute to the city centre directly via the Thomson-East Coast Line (TEL). Those who drive will also appreciate its proximity to the Seletar Expressway (SLE) and Central Expressway (CTE) for island-wide connection. With esteemed schools like CHIJ St. Nicholas Girls’ School, Presbyterian High School and Anderson Primary School nearby, Lentor Mansion is an ideal choice for those with school-going children.",
        "launch_date": "2024-03-16T00:00:00.000Z",
        "geographical_region": "North Region",
        "project_developer": null,
        "project_size": 533,
        "project_status": "uncomplete",
        "project_category": "Private Condominium",
        "images": [
            "http://api.jomejourney-portal.com/uploads/f24ef7b8e863d8e65b231c76ea3a96.jpg",
            "http://api.jomejourney-portal.com/uploads/475f6562a505231103b89f114073a5.jpg",
            "http://api.jomejourney-portal.com/uploads/49cc3923a714a8a5919202f29e9f5f.jpg",
            "http://api.jomejourney-portal.com/uploads/4c9cf97cf6e7f93b7c2aa9e7fd9841.jpg",
            "http://api.jomejourney-portal.com/uploads/9337e134bf3aa99dffe6fa4fb931c3.jpg",
            "http://api.jomejourney-portal.com/uploads/a1cc4945df5e53674bc085c018f44e.jpg",
            "http://api.jomejourney-portal.com/uploads/b535e16018854887c10065dfcc62eb.jpg",
            "http://api.jomejourney-portal.com/uploads/631814f10a30857e1a3b81b75dcdaf.jpg",
            "http://api.jomejourney-portal.com/uploads/bbe92d497e2582c7b40b0dc7f923a1.jpg",
            "http://api.jomejourney-portal.com/uploads/99d499fe1d4f1c4ad8adf2a68cf77f.jpg",
            "http://api.jomejourney-portal.com/uploads/9f042a4f49665ee2d0c835d6797218.jpg",
            "http://api.jomejourney-portal.com/uploads/94b0d6eb648814381cac77e2b53e40.jpg",
            "http://api.jomejourney-portal.com/uploads/49e7b80d5161abb2023c6d58f16b92.jpg",
            "http://api.jomejourney-portal.com/uploads/00de08860d44e8fc880b4602a6d3a6.jpg",
            "http://api.jomejourney-portal.com/uploads/c956af3243e0ed2aa5233cfd872d55.jpg",
            "http://api.jomejourney-portal.com/uploads/145d82f698ed3460c2f5aa59844254.jpg",
            "http://api.jomejourney-portal.com/uploads/336c27377753a314bd4365224030a1.jpg",
            "http://api.jomejourney-portal.com/uploads/511c0afb0ceeaae7ccc63ab1eb11e8.jpg",
            "http://api.jomejourney-portal.com/uploads/eb7b6de74d41cd09bb0285ec03a27e.jpg",
            "http://api.jomejourney-portal.com/uploads/33ef58284f2b3fd36240d2eadc7949.jpg",
            "http://api.jomejourney-portal.com/uploads/24f26de668f670829f4713e28c9b59.jpg",
            "http://api.jomejourney-portal.com/uploads/25724fe50667f5eed338e086e630d7.jpg"
        ],
        "price_showflat": {
            "price": "Priced between $1.149M for a 2 Bedroom unit and $3.176M for a 5 Bedroom unit, the price per square foot (PSF) for Lentor Mansion ranges from $2,139 to $2,192. Refer to the Balance Units section below for the latest pricing of the available units in Lentor Mansion.",
            "showFlat": "Experience luxury living at Lentor Mansion! Our exclusive showflat, nestled along Lentor Hills Road, awaits your visit. Schedule an appointment with our sales team today to explore the elegance of Lentor Modern firsthand.",
            "priceheading": "Lentor Mansion Price List",
            "showFlatHeading": "Lentor Mansion Showflat"
        },
        "features": [
            "Surrounded by extensive greenery the likes of Thomson Nature Park, Lower Pierce Reservoir Park, as well as the upcoming Hillock Park and Linear Park.",
            "Within a 5-minute walk to Lentor MRT station, offering quick access to the city centre via the Thomson-East Coast Line (TEL).",
            "Near reputable schools like CHIJ St. Nicholas Girls’ School, Presbyterian High School and Anderson Primary School."
        ],
        "details": [
            {
                "para": "Lentor Gardens",
                "title": "Street Address"
            },
            {
                "para": "D26 - Mandai / Upp Thomson",
                "title": "Postal District"
            },
            {
                "para": "North Region",
                "title": "Geographic Region"
            },
            {
                "para": "Outside Central Region",
                "title": "Market Segment"
            },
            {
                "para": "Private Condominium",
                "title": "Project Category"
            },
            {
                "para": "533 units · Mid-Sized",
                "title": "Development Size"
            },
            {
                "para": "16th Mar 2024",
                "title": "Launch Date"
            },
            {
                "para": "30th Jun 2028 or earlier",
                "title": "Expected TOP"
            },
            {
                "para": "99 Years Leasehold",
                "title": "Land Tenure"
            },
            {
                "para": "235,371 sqft",
                "title": "Site Area"
            },
            {
                "para": "ADDP Architects LLP",
                "title": "Project Architect"
            },
            {
                "para": "GuocoLand Hong Leong Holdings Limited",
                "title": "Joint Developers"
            }
        ],
        "siteplan": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/27db78d6c345e039fea54540619821.jpg"
            ],
            "facilities": [
                "The Mansion",
                "Lentor Room",
                "Drawing Room",
                "The Verandah",
                "The Chamber",
                "Pool Deck",
                "50m Pool",
                "Changing Room",
                "Steam Room",
                "Gym",
                "Gym Deck",
                "Leisure Pool",
                "Spa Pool",
                "Spa Alcove",
                "Spa Deck",
                "Jacuzzi",
                "Rainforest Grove",
                "Rain Garden",
                "Serenity Pavilion",
                "Lawn Pavilion",
                "Grand Lawn",
                "Day Bed Terrace",
                "Forest Pavilion",
                "Forest Swings",
                "Fern Valley",
                "Forest Trail",
                "Wellness Deck",
                "Forest Camp",
                "Pet Run",
                "Pet Pavilion",
                "Fitness Park",
                "Fitness Lawn",
                "Gourmet Pavilion",
                "Tennis Court",
                "Tots Club",
                "Play Garden",
                "Play Pavilion",
                "Play Pool",
                "Play Lawn",
                "Play Ground",
                "Boulevard",
                "Boulevard Drop-Off",
                "Grand Drop-Off",
                "Childcare Centre",
                "Childcare Centre Play Area",
                "Cabana Terrace",
                "Sky Lounge",
                "Chill Out Terrace",
                "Social Terrace",
                "Work Terrace"
            ]
        },
        "location_map": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/cb8c3bb83ea0fe0477f879fbc43cdc.jpg"
            ],
            "amenities": [
                {
                    "Category": "MRT Stations",
                    "Distance": "0.41 km",
                    "Location": "TE 5 Lentor"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.14 km",
                    "Location": "TE 6 Mayflower"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.19 km",
                    "Location": "NS 15 Yio Chu Kang"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.85 km",
                    "Location": "Anderson Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.95 km",
                    "Location": "CHIJ St. Nicholas Girls'"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.17 km",
                    "Location": "Mayflower Primary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.91 km",
                    "Location": "Presbyterian High"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.93 km",
                    "Location": "Yio Chu Kang Secondary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.95 km",
                    "Location": "CHIJ St. Nicholas Girls'"
                },
                {
                    "Category": "Integrated Schools",
                    "Distance": "0.95 km",
                    "Location": "CHIJ St. Nicholas Girls'"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.71 km",
                    "Location": "Broadway Plaza"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.81 km",
                    "Location": "Djitsun Mall"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.88 km",
                    "Location": "Jubilee Square"
                }
            ]
        },
        "unit_mix": {
            "data": [
                {
                    "unitMix": "40.15%",
                    "unitType": "2 Bedroom",
                    "size_sqft": "527 - 657",
                    "totalUnits": "214"
                },
                {
                    "unitMix": "37.34%",
                    "unitType": "3 Bedroom",
                    "size_sqft": "786 - 1,023",
                    "totalUnits": "199"
                },
                {
                    "unitMix": "14.07%",
                    "unitType": "4 Bedroom",
                    "size_sqft": "1,227",
                    "totalUnits": "75"
                },
                {
                    "unitMix": "8.44%",
                    "unitType": "5 Bedroom",
                    "size_sqft": "1,485 - 1,507",
                    "totalUnits": "45"
                },
                {
                    "unitMix": "100%",
                    "unitType": "Overall",
                    "size_sqft": "527 - 1,507",
                    "totalUnits": "533"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/12bc54bdf39b9a005cd6738c99d204.jpg"
            ]
        },
        "balance_units": {
            "data": [
                {
                    "psf": "$2,180 - $2,192",
                    "price": "$1.149M - $1.44M",
                    "unitType": "2 Bedroom",
                    "size_sqft": "527 - 657",
                    "availableUnits": "214"
                },
                {
                    "psf": "$2,165",
                    "price": "$1.702M",
                    "unitType": "3 Bedroom",
                    "size_sqft": "786 - 1,023",
                    "availableUnits": "199"
                },
                {
                    "psf": "$2,148",
                    "price": "$2.635M",
                    "unitType": "4 Bedroom",
                    "size_sqft": "1,227",
                    "availableUnits": "75"
                },
                {
                    "psf": "$2,139",
                    "price": "$3.176M",
                    "unitType": "5 Bedroom",
                    "size_sqft": "1,485 - 1,507",
                    "availableUnits": "45"
                },
                {
                    "psf": "$2,139 - $2,192",
                    "price": "$1.149M - $3.176M",
                    "unitType": "Overall",
                    "size_sqft": "527 - 1,507",
                    "availableUnits": "533"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/55e02b04c6cbac96de306a24254375.jpg"
            ]
        },
        "floorplans": [],
        "created_at": "2024-03-12T08:20:07.000Z"
    },
    {
        "id": 2,
        "name": "Lentoria",
        "uuid": "lentoria",
        "description": "Situated within the tranquil residential neighbourhood of Lentor Hills, Lentoria is a 99-year leasehold residential new condo launch development comprising of 267 units. It encompasses an extensive range of facilities, such as the lap pool, kid’s wading pool, shallow pool lounge, maze garden, forest/water pavilions, fernery, gymnasium, yoga studio and sky jacuzzi, that will appeal to residents of all ages. Nature lovers can also seek respite in nearby parks, such as Thomson Nature Park and Lower Pierce Reservoir Park. Within a 10-minute walk to Lentor MRT station, residents will be able to get to the city centre directly via the Thomson-East Coast Line (TEL). Those with school-going children can find well-established schools like CHIJ St. Nicholas Girls’ School, Presbyterian High School, Anderson Primary School and Mayflower Primary School in proximity too.",
        "launch_date": "2024-03-02T00:00:00.000Z",
        "geographical_region": "North Region",
        "project_developer": null,
        "project_size": 267,
        "project_status": "completed",
        "project_category": "Private Condominium",
        "images": [
            "http://api.jomejourney-portal.com/uploads/7d603e2d04ae70ad82a9894bde8693.jpg",
            "http://api.jomejourney-portal.com/uploads/2268f541e9ec810073f200868d3d2c.jpg",
            "http://api.jomejourney-portal.com/uploads/73f4ca2a6ef402f260ac07463932d3.jpg",
            "http://api.jomejourney-portal.com/uploads/a11e5c708cfe91ccca064d81dfb563.jpg",
            "http://api.jomejourney-portal.com/uploads/e16d6a4581ab1bf2fe1319171394da.jpg",
            "http://api.jomejourney-portal.com/uploads/8e02dfd787d24eba4a1f4d86b90203.jpg",
            "http://api.jomejourney-portal.com/uploads/e63345266d06691cf853a13674f782.jpg",
            "http://api.jomejourney-portal.com/uploads/52fbde9972ae7cba010bd1ee9b0ddc.jpg",
            "http://api.jomejourney-portal.com/uploads/6e8bf06ac10be624b0ab92520a579c.jpg",
            "http://api.jomejourney-portal.com/uploads/428b1092cb42f2d8347edcd3389116.jpg",
            "http://api.jomejourney-portal.com/uploads/cbc66f0643ab0d04dfe7b2afec84d2.jpg",
            "http://api.jomejourney-portal.com/uploads/4732545306c63d84c2a177abd07c11.jpg",
            "http://api.jomejourney-portal.com/uploads/d9f7d9f400051ad995c6b045fca689.jpg",
            "http://api.jomejourney-portal.com/uploads/22481a55f09b31fdad8ea803dc0f44.jpg",
            "http://api.jomejourney-portal.com/uploads/a4e6e9c059c98d50f2485dff6756d1.jpg",
            "http://api.jomejourney-portal.com/uploads/b09d9226e1fda72516e7eb1af6912c.jpg",
            "http://api.jomejourney-portal.com/uploads/09fccaabf79d54114cb489eccc9598.jpg",
            "http://api.jomejourney-portal.com/uploads/ba48b1a704469d479b38162fbd1fdb.jpg",
            "http://api.jomejourney-portal.com/uploads/b4183fee0f3669279cf982ff29d3ac.jpg",
            "http://api.jomejourney-portal.com/uploads/dafe5ada6f19927b83dd6101b39566.jpg",
            "http://api.jomejourney-portal.com/uploads/e1e2436b507adf69d67e6d9620468b.jpg",
            "http://api.jomejourney-portal.com/uploads/b59c7cf727d447b3452d48ab816a73.jpg",
            "http://api.jomejourney-portal.com/uploads/42c76cb16a6aed98895836e4a07282.jpg"
        ],
        "price_showflat": {
            "price": "Priced between $1.178M for a 1 Bedroom unit and $3.075M for a 4 Bedroom unit, the price per square foot (PSF) for Lentoria ranges from $1,965 to $2,500. Refer to the Balance Units section below for the latest pricing of the available units in Lentoria.",
            "showFlat": "Lentoria showflat, located along Lentor Hills Road beside the actual site, is open for viewing by appointment only. If you're keen to learn more about this property, book an appointment with the sales team to visit Lentoria showflat today.",
            "priceheading": "Lentoria Price List",
            "showFlatHeading": "Lentoria Showflat"
        },
        "features": [
            "Extensive range of facilities available, such as the lap pool, kid’s wading pool, shallow pool lounge, maze garden, forest/water pavilions, fernery, gymnasium, yoga studio and sky jacuzzi.",
            "Walking distance to Lentor MRT station with direct access to the city centre via the Thomson-East Coast Line (TEL).",
            "Close to well-established schools like CHIJ St. Nicholas Girls’ School, Presbyterian High School, Anderson Primary School and Mayflower Primary School."
        ],
        "details": [
            {
                "para": "Lentor Hills Road",
                "title": "Street Address"
            },
            {
                "para": "D26 - Mandai / Upp Thomson",
                "title": "Postal District"
            },
            {
                "para": "North Region",
                "title": "Geographic Region"
            },
            {
                "para": "Outside Central Region",
                "title": "Market Segment"
            },
            {
                "para": "Private Condominium",
                "title": "Project Category"
            },
            {
                "para": "267 units · Small",
                "title": "Development Size"
            },
            {
                "para": "2nd Mar 2024",
                "title": "Launch Date"
            },
            {
                "para": "2nd Jul 2027 or earlier",
                "title": "Expected TOP"
            },
            {
                "para": "99 Years Leasehold",
                "title": "Land Tenure"
            },
            {
                "para": "116,456 sqft",
                "title": "Site Area"
            },
            {
                "para": "DP Architects Pte Ltd",
                "title": "Project Architect"
            },
            {
                "para": "TID Pte Ltd Hong Leong Holdings Limited Mitsui Fudosan",
                "title": "Joint Developers"
            }
        ],
        "siteplan": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/2652121c6ced36d44b86083288a6dd.jpg",
                "http://api.jomejourney-portal.com/uploads/41836a679e5838c08e0b37ca352eb5.jpg"
            ],
            "facilities": [
                "50m Lap Swimming Pool",
                "Kid's Wading Pool",
                "Shallow Pool Lounge",
                "Hydrotherapy Spa",
                "BBQ Pavilions",
                "Cabana & Sun Deck",
                "Maze Garden",
                "Forest Pavilion",
                "Water Pavilion",
                "Fitness Station",
                "Forest Fitness",
                "Nature Play",
                "Bowling Lawn",
                "Dog Run",
                "Garden Lawn",
                "Whimsical Garden",
                "Fernery",
                "Palm Grove",
                "Jogging / Walking Trail",
                "Orchid Collection",
                "Grand Arrival",
                "Water Feature & Green Wall",
                "Entrance Palm Garden",
                "Biophilic Waiting Area",
                "Garden Lounge / Function Room",
                "Forest Lounge / Function Room",
                "Gymnasium",
                "Yoga Studio",
                "Clubhouse Garden",
                "Suiseki Collection",
                "Sky Jacuzzi",
                "Dining Pavilion",
                "Party Deck",
                "Swing Garden",
                "Board Game Deck",
                "Whimsical Lightscape",
                "Garden Library",
                "Yoga Terrace",
                "Tea Pavilion",
                "Stroll Garden",
                "Outdoor Fitness"
            ]
        },
        "location_map": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/1ee9ccc598d6339955ea33fec2c47b.jpg",
                "http://api.jomejourney-portal.com/uploads/89086e94dd99fe35b9f4f4952b1d43.jpg"
            ],
            "amenities": [
                {
                    "Category": "MRT Stations",
                    "Distance": "0.44 km",
                    "Location": "TE 5 Lentor"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.11 km",
                    "Location": "TE 6 Mayflower"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.16 km",
                    "Location": "NS 15 Yio Chu Kang"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.82 km",
                    "Location": "Anderson Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.92 km",
                    "Location": "CHIJ St. Nicholas Girls'"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.14 km",
                    "Location": "Mayflower Primary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.88 km",
                    "Location": "Presbyterian High"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.90 km",
                    "Location": "Yio Chu Kang Secondary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.92 km",
                    "Location": "CHIJ St. Nicholas Girls'"
                },
                {
                    "Category": "Integrated Schools",
                    "Distance": "0.92 km",
                    "Location": "CHIJ St. Nicholas Girls'"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.68 km",
                    "Location": "Broadway Plaza"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.77 km",
                    "Location": "Djitsun Mall"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.85 km",
                    "Location": "Jubilee Square"
                }
            ]
        },
        "unit_mix": {
            "data": [
                {
                    "unitMix": "8.61%",
                    "unitType": "1 Bedroom",
                    "size_sqft": "538",
                    "totalUnits": "23"
                },
                {
                    "unitMix": "44.94%",
                    "unitType": "2 Bedroom",
                    "size_sqft": "700 - 732",
                    "totalUnits": "120"
                },
                {
                    "unitMix": "26.22%",
                    "unitType": "3 Bedroom",
                    "size_sqft": "915 - 1,119",
                    "totalUnits": "70"
                },
                {
                    "unitMix": "20.22%",
                    "unitType": "4 Bedroom",
                    "size_sqft": "1,206 - 1,345",
                    "totalUnits": "54"
                },
                {
                    "unitMix": "100%",
                    "unitType": "Overall",
                    "size_sqft": "538 - 1,345",
                    "totalUnits": "267"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/af0b9587463f1c4e7ce88ce66c160d.jpg"
            ]
        },
        "balance_units": {
            "data": [
                {
                    "psf": "$2,190 - $2,444",
                    "price": "$1.178M - $1.315M",
                    "unitType": "1 Bedroom",
                    "size_sqft": "538",
                    "availableUnits": "17"
                },
                {
                    "psf": "$1,965 - $2,394",
                    "price": "$1.438M - $1.732M",
                    "unitType": "2 Bedroom",
                    "size_sqft": "700 - 732",
                    "availableUnits": "98"
                },
                {
                    "psf": "$1,974 - $2,500",
                    "price": "$1.848M - $2.503M",
                    "unitType": "3 Bedroom",
                    "size_sqft": "915 - 1,119",
                    "availableUnits": "56"
                },
                {
                    "psf": "$2,052 - $2,425",
                    "price": "$2.538M - $3.075M",
                    "unitType": "4 Bedroom",
                    "size_sqft": "1,206 - 1,345",
                    "availableUnits": "47"
                },
                {
                    "psf": "$1,965 - $2,500",
                    "price": "$1.178M - $3.075M",
                    "unitType": "Overall",
                    "size_sqft": "538 - 1,345",
                    "availableUnits": "218"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/1714b78a4c0032c6551129b2767e20.jpg"
            ]
        },
        "floorplans": [],
        "created_at": "2024-03-12T08:20:30.000Z"
    },
    {
        "id": 3,
        "name": "Lumina Grand",
        "uuid": "luminagrand",
        "description": "Located in the heart of Bukit Batok West Ave 5, Lumina Grand EC is a new launch executive condominium that consists of 512 units on a sprawling site of over 16,600 square metres. Each unit is equipped with innovative smart home features, from an intelligent doorbell to answer your door via a mobile app to a smart gateway for added security and convenience. Offering a mix of 3-bedroom to 5-bedroom units, it is ideal for those with bigger families. The development is also equipped with a wide variety of facilities to cater to all ages, such as a swimming pool, fitness gym, tennis court, clubhouse and children’s playground. In addition, there are several supermarkets as well as Le Quest Shopping Mall in the neighbourhood, allowing residents easy access to their daily necessities. Situated between Bukit Gombak MRT station and the upcoming Tengah Plantation MRT station, residents will be able to enjoy island-wide connectivity via the North-South Line (NSL) and the Jurong Region Line (JRL). There are also several educational institutions nearby, such as Dazhong Primary School, St. Anthony’s Primary School, Dunearn Secondary School, Hillgrove Secondary School, Eden School and Millennia Institute, which will benefit families with school-going children.",
        "launch_date": "2024-01-27T00:00:00.000Z",
        "geographical_region": "West Region",
        "project_developer": "City Developments Limited",
        "project_size": 512,
        "project_status": "completed",
        "project_category": "Executive Condominium",
        "images": [
            "http://api.jomejourney-portal.com/uploads/61baa7c2d8bd02da0b78ee89ec6aa7.jpg",
            "http://api.jomejourney-portal.com/uploads/19bf2b707fc398ea5c7101ef1d1b86.jpg",
            "http://api.jomejourney-portal.com/uploads/46dfb0ba6c0ff71c5c741afc969a5f.jpg",
            "http://api.jomejourney-portal.com/uploads/8df35a622be9b6049e1df2ab460b2b.jpg",
            "http://api.jomejourney-portal.com/uploads/635cdf15ac657840cfa9e81d8b9881.jpg",
            "http://api.jomejourney-portal.com/uploads/f38f510499dd2a35e08a1ea0debb77.jpg",
            "http://api.jomejourney-portal.com/uploads/e3d719b881dfeceb32c9e575fb5159.jpg",
            "http://api.jomejourney-portal.com/uploads/a9e9e2a59f64f2b3c0ec46bae75a29.jpg",
            "http://api.jomejourney-portal.com/uploads/99821831a62aa28c7608265fca507d.jpg",
            "http://api.jomejourney-portal.com/uploads/7ab093460c0de6516ee71dc50c2a90.jpg"
        ],
        "price_showflat": {
            "price": "Priced between $1.344M for a 3 Bedroom unit and $2.324M for a 5 Bedroom unit, the price per square foot (PSF) for Lumina Grand ranges from $1,333 to $1,544. Refer to the Balance Units section below for the latest pricing of the available units in Lumina Grand.",
            "showFlat": "Lumina Grand showflat, located along Yuan Ching Road next to Lakeside MRT, is open for viewing by appointment only. If you're keen to learn more about this property, book an appointment with the sales team to visit Lumina Grand showflat today.",
            "priceheading": "Lumina Grand Price List",
            "showFlatHeading": "Lumina Grand Showflat"
        },
        "features": [
            "Smart home features with cutting-edge technology to enhance living experience.",
            "Easy access to food and amenities with Le Quest Shopping Mall within walking distance, offering retail and dining options.",
            "Excellent island-wide connectivity for commuters with its location between Bukit Gombak MRT station and the upcoming Tengah Plantation MRT station."
        ],
        "details": [
            {
                "para": "Bukit Batok West Ave 5",
                "title": "Street Address"
            },
            {
                "para": "D23 - Dairy Farm / Bukit Panjang / Choa Chu Kang",
                "title": "Postal District"
            },
            {
                "para": "West Region",
                "title": "Geographic Region"
            },
            {
                "para": "Outside Central Region",
                "title": "Market Segment"
            },
            {
                "para": "Executive Condominium",
                "title": "Project Category"
            },
            {
                "para": "512 units · Mid-Sized",
                "title": "Development Size"
            },
            {
                "para": "27th Jan 2024",
                "title": "Launch Date"
            },
            {
                "para": "31st Mar 2029 or earlier",
                "title": "Expected TOP"
            },
            {
                "para": "99 Years Leasehold",
                "title": "Land Tenure"
            },
            {
                "para": "178,936 sqft",
                "title": "Site Area"
            },
            {
                "para": "P&T Consultants Pte Ltd",
                "title": "Project Architect"
            },
            {
                "para": "City Developments Limited",
                "title": "Project Developer"
            }
        ],
        "siteplan": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/5374723cf292a4e66b025a59c7c448.jpg"
            ],
            "facilities": [
                "Arrival Court",
                "Reflective Pond",
                "Zen Garden",
                "Urban Farming",
                "Crafting Pavilion",
                "Botanial Patio",
                "Fun Lawn",
                "BBQ Pavilion",
                "Yoga Lawn",
                "Reflexology Walk",
                "Kids Play",
                "Recreation Pavilion",
                "Fitness Zone",
                "Kids Explore",
                "Garden Path",
                "Tranquil Garden",
                "Social Lawn",
                "Tennis Court",
                "Music Room",
                "Social Room",
                "Dance Room",
                "Games Room",
                "Pets Play",
                "Clubhouse",
                "Grand Lawn",
                "Sun Deck",
                "Steam Room",
                "50m Lap Pool",
                "Pool Deck",
                "Spa Pool",
                "Jacuzzi Pool",
                "Kids Pool",
                "Gymnasium",
                "Reading Lounge",
                "Green Aisle",
                "Relaxation Deck"
            ]
        },
        "location_map": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/90550c94deb526f006ad934c6d6699.jpg"
            ],
            "amenities": [
                {
                    "Category": "MRT Stations",
                    "Distance": "0.96 km",
                    "Location": "JE 2 Tengah Park"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.12 km",
                    "Location": "NS 3 Bukit Gombak"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.13 km",
                    "Location": "JE 1 Tengah Plantation"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.72 km",
                    "Location": "Dazhong Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.17 km",
                    "Location": "Princess Elizabeth Primary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.55 km",
                    "Location": "Dunearn Secondary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "1.11 km",
                    "Location": "Swiss Cottage Secondary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "1.24 km",
                    "Location": "Bukit Batok Secondary"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.45 km",
                    "Location": "Le Quest"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.27 km",
                    "Location": "West Mall"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.99 km",
                    "Location": "Keat Hong Shopping Centre"
                }
            ]
        },
        "unit_mix": {
            "data": [
                {
                    "unitMix": "20.31%",
                    "unitType": "3 Bedroom",
                    "size_sqft": "936 - 1,109",
                    "totalUnits": "104"
                },
                {
                    "unitMix": "39.45%",
                    "unitType": "3 Bedroom Premium",
                    "size_sqft": "969 - 1,173",
                    "totalUnits": "202"
                },
                {
                    "unitMix": "30.27%",
                    "unitType": "4 Bedroom",
                    "size_sqft": "1,141 - 1,453",
                    "totalUnits": "155"
                },
                {
                    "unitMix": "9.96%",
                    "unitType": "5 Bedroom",
                    "size_sqft": "1,496 - 1,711",
                    "totalUnits": "51"
                },
                {
                    "unitMix": "100%",
                    "unitType": "Overall",
                    "size_sqft": "936 - 1,711",
                    "totalUnits": "512"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/2815b32a35b281863aa3d8676e21ae.jpg"
            ]
        },
        "balance_units": {
            "data": [
                {
                    "psf": "$1,333 - $1,544",
                    "price": "$1.344M - $1.505M",
                    "unitType": "3 Bedroom",
                    "size_sqft": "936 - 1,109",
                    "availableUnits": "67"
                },
                {
                    "psf": "$1,440 - $1,506",
                    "price": "$1.395M - $1.459M",
                    "unitType": "3 Bedroom Premium",
                    "size_sqft": "969 - 980",
                    "availableUnits": "31"
                },
                {
                    "psf": "$1,348 - $1,489",
                    "price": "$1.636M - $1.944M",
                    "unitType": "4 Bedroom",
                    "size_sqft": "1,152 - 1,442",
                    "availableUnits": "30"
                },
                {
                    "psf": "$1,358 - $1,489",
                    "price": "$2.11M - $2.324M",
                    "unitType": "5 Bedroom",
                    "size_sqft": "1,496 - 1,711",
                    "availableUnits": "34"
                },
                {
                    "psf": "$1,333 - $1,544",
                    "price": "$1.344M - $2.324M",
                    "unitType": "Overall",
                    "size_sqft": "936 - 1,711",
                    "availableUnits": "162"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/8cd9bf8f5bdd447340fcfa31b170e7.jpg"
            ]
        },
        "floorplans": [],
        "created_at": "2024-03-12T08:20:52.000Z"
    },
    {
        "id": 4,
        "name": "Hillhaven",
        "uuid": "hillhaven",
        "description": "Hillhaven is a 99-year leasehold condo new launch located in the Hillview estate, along Upper Bukit Timah road. It comprises of 341 units in a 27-storey twin tower , complete with a comprehensive range of facilities that include a clubhouse, swimming pool, fitness gym, BBQ pavilions and children’s playground. Nature lovers will also find its proximity to parks and nature reserves like the Bukit Batok Nature Park, Dairy Farm Nature Park and Bukit Timah Nature Reserve appealing. In addition, residents can enjoy the convenience of having HillV2 mall within walking distance, offering them several dining options and services amenities. The Hillview Community Centre situated opposite the development will provide residents with numerous leisure and recreational activities to keep them occupied as well. With Hillview MRT station reachable within a 5-minute walk, residents will be able to commute to the Central Business District (CBD) directly via the Downtown Line (DTL). Those with school-going children will appreciate having schools like CHIJ Our Lady Queen of Peace, Assumption English School and St Francis Methodist School nearby too.",
        "launch_date": "2024-01-20T00:00:00.000Z",
        "geographical_region": "West Region",
        "project_developer": null,
        "project_size": 341,
        "project_status": "completed",
        "project_category": "Private Condominium",
        "images": [
            "http://api.jomejourney-portal.com/uploads/50b3dcedd7514551cafe94e0d02f32.jpg",
            "http://api.jomejourney-portal.com/uploads/833f074cb24ded48c0f387a233efab.jpg",
            "http://api.jomejourney-portal.com/uploads/f8b0accb0dad8be6406619c25fd755.jpg",
            "http://api.jomejourney-portal.com/uploads/99b865aa9c4d84a9419e99222dc70f.jpg",
            "http://api.jomejourney-portal.com/uploads/59016920f30e6fb9abbdd743061552.jpg",
            "http://api.jomejourney-portal.com/uploads/13d9954c26f1a7208bec8cd7a0aaa9.jpg",
            "http://api.jomejourney-portal.com/uploads/2911eb1fbcf0805ffbc71ed73131f1.jpg",
            "http://api.jomejourney-portal.com/uploads/ef8485b4f1a3605c0ad19afd71396d.jpg",
            "http://api.jomejourney-portal.com/uploads/d0d4397559599d43a1aef8a4e7772b.jpg",
            "http://api.jomejourney-portal.com/uploads/99a2a355eca6e27e9609fc9f74fdb7.jpg",
            "http://api.jomejourney-portal.com/uploads/60d1ee33b3d5f55c8b5d7b8be3966f.jpg",
            "http://api.jomejourney-portal.com/uploads/372ad5e0e731b15232782ba7b97805.jpg",
            "http://api.jomejourney-portal.com/uploads/7ef1ac19b36aec7c87052112738135.jpg",
            "http://api.jomejourney-portal.com/uploads/bf14eeca35f1afab3b68200946c9e3.jpg",
            "http://api.jomejourney-portal.com/uploads/7d038e0fa9c46125df084e68fe41f0.jpg",
            "http://api.jomejourney-portal.com/uploads/90431a53486631f0b8a15b3578641e.jpg",
            "http://api.jomejourney-portal.com/uploads/44110404d12e695395badbab5e8906.jpg",
            "http://api.jomejourney-portal.com/uploads/8dd28310cc794d4b50c2998e24a35e.jpg",
            "http://api.jomejourney-portal.com/uploads/e229253e4a12aa0fcf41b7a25702c3.jpg",
            "http://api.jomejourney-portal.com/uploads/33e66f0e28adda38292452e67011a4.jpg",
            "http://api.jomejourney-portal.com/uploads/aff4f79fa229be7a4dc620d86ffa64.jpg",
            "http://api.jomejourney-portal.com/uploads/8908a9b05e2fbc4c0870f3e0f988ec.jpg",
            "http://api.jomejourney-portal.com/uploads/88b2a711299421aef0c70fd105a741.jpg",
            "http://api.jomejourney-portal.com/uploads/a1d0b8bf37891ec6bec6f184938745.jpg",
            "http://api.jomejourney-portal.com/uploads/17520d27a92722e7514c1d1b80d57c.jpg",
            "http://api.jomejourney-portal.com/uploads/282394fdf656811c8a3b69ee0857cb.jpg",
            "http://api.jomejourney-portal.com/uploads/363feb0c343f7970286e8e7d5f74dc.jpg",
            "http://api.jomejourney-portal.com/uploads/38f50c2eb2a414e814bf7406086390.jpg",
            "http://api.jomejourney-portal.com/uploads/58121b811702618a2472b91d172e92.jpg"
        ],
        "price_showflat": {
            "price": "Priced between $1.379M for a 2 Bedroom unit and $2.887M for a 4 Bedroom unit, the price per square foot (PSF) for Hillhaven ranges from $1,925 to $2,280. Refer to the Balance Units section below for the latest pricing of the available units in Hillhaven.",
            "showFlat": "The Hillhaven showflat, located along Elizabeth Drive opposite the actual project site, is open for viewing by appointment only. If you're keen to learn more about this property, book an appointment with the sales team to visit the Hillhaven showflat today.",
            "priceheading": "Hillhaven Price List",
            "showFlatHeading": "Hillhaven Showflat"
        },
        "features": [
            "Surrounded by nature and greenery with direct access to Bukit Batok Nature Park and Dairy Farm Nature Park via the Hillview Park Connector.",
            "A stone’s throw away from HillV2 mall, which provides residents with various amenities, including a supermarket and several dining options.",
            "Within a 5-minute walk to Hillview MRT station, providing excellent connectivity to the Central Business District (CBD) via the DTL."
        ],
        "details": [
            {
                "para": "Hillview Rise",
                "title": "Street Address"
            },
            {
                "para": "D23 - Dairy Farm / Bukit Panjang / Choa Chu Kang",
                "title": "Postal District"
            },
            {
                "para": "West Region",
                "title": "Geographic Region"
            },
            {
                "para": "Outside Central Region",
                "title": "Market Segment"
            },
            {
                "para": "Private Condominium",
                "title": "Project Category"
            },
            {
                "para": "341 units · Small",
                "title": "Development Size"
            },
            {
                "para": "20th Jan 2024",
                "title": "Launch Date"
            },
            {
                "para": "30th Jun 2028 or earlier",
                "title": "Expected TOP"
            },
            {
                "para": "99 Years Leasehold",
                "title": "Land Tenure"
            },
            {
                "para": "111,894 sqft",
                "title": "Site Area"
            },
            {
                "para": "Arc Studio Architecture & Urbanism Pte Ltd",
                "title": "Project Architect"
            },
            {
                "para": "Far East Organization Sekisui House",
                "title": "Joint Developers"
            }
        ],
        "siteplan": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/71a75e34f068f053293afcf36332ec.jpg"
            ],
            "facilities": [
                "Arrival Court",
                "Tropical Palm Garden",
                "Garden Pavilion",
                "Exercise Lawn",
                "Lobby Garden",
                "Urban Farm",
                "Ginger Garden",
                "Garden Walk",
                "Garden Alcove",
                "Bikers' Corner",
                "Bicycle Parking",
                "Central Lawn",
                "BBQ Pavilions",
                "50m Pool",
                "Outdoor Fitness",
                "Pool Deck",
                "Gym",
                "Rock Climbing",
                "Kids Pool",
                "Children Playground",
                "Pickleball Court",
                "Steam Room",
                "Function Room",
                "Spa Tub",
                "Spa Alcove",
                "Lounge Deck",
                "Floating Deck",
                "Al Fresco Deck",
                "Water Deck",
                "Party Pavilion",
                "Reading Corner"
            ]
        },
        "location_map": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/971311df33f97300251a5d2505f939.jpg"
            ],
            "amenities": [
                {
                    "Category": "MRT Stations",
                    "Distance": "0.41 km",
                    "Location": "DT 3 Hillview"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "0.82 km",
                    "Location": "DT 2 Cashew"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.38 km",
                    "Location": "NS 3 Bukit Gombak"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.66 km",
                    "Location": "CHIJ Our Lady Queen of Peace"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.37 km",
                    "Location": "Lianhua Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.44 km",
                    "Location": "Bukit Panjang Primary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.89 km",
                    "Location": "Assumption Pathway"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.93 km",
                    "Location": "Assumption English"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "1.84 km",
                    "Location": "Fajar Secondary"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.09 km",
                    "Location": "HillV2"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.47 km",
                    "Location": "The Rail Mall"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.84 km",
                    "Location": "Hillion Mall"
                }
            ]
        },
        "unit_mix": {
            "data": [
                {
                    "unitMix": "39.3%",
                    "unitType": "2 Bedroom",
                    "size_sqft": "678 - 721",
                    "totalUnits": "134"
                },
                {
                    "unitMix": "14.08%",
                    "unitType": "2 Bedroom + Study",
                    "size_sqft": "797",
                    "totalUnits": "48"
                },
                {
                    "unitMix": "7.92%",
                    "unitType": "3 Bedroom",
                    "size_sqft": "947 - 1,141",
                    "totalUnits": "27"
                },
                {
                    "unitMix": "22.87%",
                    "unitType": "3 Bedroom + Study",
                    "size_sqft": "958 - 1,195",
                    "totalUnits": "78"
                },
                {
                    "unitMix": "15.84%",
                    "unitType": "4 Bedroom",
                    "size_sqft": "1,259 - 1,636",
                    "totalUnits": "54"
                },
                {
                    "unitMix": "100%",
                    "unitType": "Overall",
                    "size_sqft": "678 - 1,636",
                    "totalUnits": "341"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/8cb27cf1aa75c13a98988dfa910b15.jpg"
            ]
        },
        "balance_units": {
            "data": [
                {
                    "psf": "$2,026 - $2,280",
                    "price": "$1.379M - $1.596M",
                    "unitType": "2 Bedroom",
                    "size_sqft": "678 - 721",
                    "availableUnits": "105"
                },
                {
                    "psf": "$1,987 - $2,157",
                    "price": "$1.584M - $1.719M",
                    "unitType": "2 Bedroom + Study",
                    "size_sqft": "797",
                    "availableUnits": "32"
                },
                {
                    "psf": "$1,956 - $2,063",
                    "price": "$1.853M - $1.953M",
                    "unitType": "3 Bedroom",
                    "size_sqft": "947 - 1,141",
                    "availableUnits": "23"
                },
                {
                    "psf": "$1,925 - $2,102",
                    "price": "$1.948M - $2.127M",
                    "unitType": "3 Bedroom + Study",
                    "size_sqft": "958 - 1,195",
                    "availableUnits": "60"
                },
                {
                    "psf": "$1,948 - $2,096",
                    "price": "$2.467M - $2.887M",
                    "unitType": "4 Bedroom",
                    "size_sqft": "1,259 - 1,636",
                    "availableUnits": "53"
                },
                {
                    "psf": "$1,925 - $2,280",
                    "price": "$1.379M - $2.887M",
                    "unitType": "Overall",
                    "size_sqft": "678 - 1,636",
                    "availableUnits": "273"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/6fb5e617d80c79efeb87ef7a126cd7.jpg"
            ]
        },
        "floorplans": [],
        "created_at": "2024-03-12T08:21:15.000Z"
    },
    {
        "id": 5,
        "name": "The Arcady",
        "uuid": "thearcady",
        "description": "Situated on the site of the former Euro-Asia Apartments, between Sungei Whampoa and Kallang River, the Arcady at Boon Keng is a freehold new condo residential development that comes with 172 units in a single 24-storey block. Other than an impressive list of facilities, such as a family pool, bubble pool, mountain/foliage trails, flora/fauna cabanas, karaoke room and chill out lounge, that can be found in the Foliage Garden Zone on the 1st and 2nd storeys, more amenities like sauna, sky gym, Arcady club, star-gazing lawn and farming pots can be found in the Mountain Top Zone on the 14th storey sky terrace and roof terrace. Beyond the compound, there is a wide range of popular dining options and convenience stores in the nearby shophouses. It is also a 7-minute walk to Boon Keng MRT station, providing residents with a seamless connection to the town area via the North-East Line (NEL). For families with school-going children, they will be able to find schools like Bendemeer Primary School, Bendemeer Secondary School, Hong Wen School and Northlight School within walking distance as well.",
        "launch_date": "2024-01-20T00:00:00.000Z",
        "geographical_region": "City Fringe · Central Region",
        "project_developer": null,
        "project_size": 172,
        "project_status": "completed",
        "project_category": "Private Condominium",
        "images": [
            "http://api.jomejourney-portal.com/uploads/a5221b24eab579945745c401710afe.jpg",
            "http://api.jomejourney-portal.com/uploads/85ff190d929c27465f77e5fb6485b9.jpg",
            "http://api.jomejourney-portal.com/uploads/570635afb1817f2d20e6a3d145fb73.jpg",
            "http://api.jomejourney-portal.com/uploads/8d1bc8aabf2703f6e37e044f298874.jpg",
            "http://api.jomejourney-portal.com/uploads/ba451342795dceb3e7f4b1393ba426.jpg",
            "http://api.jomejourney-portal.com/uploads/c542eaa4d0107eb6f6c049e918bbd0.jpg"
        ],
        "price_showflat": {
            "price": "Priced between $1.702M for a 2 Bedroom unit and $7.587M for a Penthouse unit, the price per square foot (PSF) for The Arcady ranges from $2,327 to $2,944. Refer to the Balance Units section below for the latest pricing of the available units in The Arcady.",
            "showFlat": "The Arcady showflat, located along Kitchener Link next to City Square Mall, is open for viewing by appointment only. If you're keen to learn more about this property, book an appointment with the sales team to visit The Arcady showflat today.",
            "priceheading": "The Arcady Price List",
            "showFlatHeading": "The Arcady Showflat"
        },
        "features": [
            "Wide range of facilities that include family pool, bubble pool, mountain/foliage trails, flora/fauna cabanas, karaoke room, chill out lounge, sauna, sky gym, Arcady club and star-gazing lawn spread across the entire condominium.",
            "A multitude of popular dining options and convenience stores available in the shophouses nearby.",
            "A short walk to Boon Keng MRT station, allowing island-wide accessibility via the NEL."
        ],
        "details": [
            {
                "para": "Saint Barnabas Lane",
                "title": "Street Address"
            },
            {
                "para": "D12 - Balestier / Toa Payoh",
                "title": "Postal District"
            },
            {
                "para": "City Fringe · Central Region",
                "title": "Geographic Region"
            },
            {
                "para": "Rest of Central Region",
                "title": "Market Segment"
            },
            {
                "para": "Private Condominium",
                "title": "Project Category"
            },
            {
                "para": "172 units · Small",
                "title": "Development Size"
            },
            {
                "para": "20th Jan 2024",
                "title": "Launch Date"
            },
            {
                "para": "31st Dec 2028 or earlier",
                "title": "Expected TOP"
            },
            {
                "para": "Freehold Status",
                "title": "Land Tenure"
            },
            {
                "para": "56,477 sqft",
                "title": "Site Area"
            },
            {
                "para": "Park + Associates Pte Ltd",
                "title": "Project Architect"
            },
            {
                "para": "Kim Seng Holdings SLB Development Ho Lee Group",
                "title": "Joint Developers"
            }
        ],
        "siteplan": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/7dff7a8db50e862e9b41619840e8ae.jpg"
            ],
            "facilities": [
                "Grand Arrival",
                "Foliage Trail",
                "Mountain Trail",
                "Herbs Stroll",
                "Kids Playground",
                "Social Deck",
                "BBQ Pavilion",
                "Infinity Pool",
                "Spa Pool",
                "Bubble pool",
                "Sun Deck",
                "Botanic Lounge",
                "Water Play Patio",
                "Family Pool",
                "Splash Patio",
                "Family Deck",
                "Flora Cabana",
                "Verdure Cabana",
                "Verde Cabana",
                "Alfresco Dining",
                "Botanic Club",
                "Chill Out Lounge",
                "Karaoke Room",
                "Kids Party Deck",
                "Kids Club",
                "Cocoon Cove",
                "Tranquil Grove",
                "Serene Grove",
                "Sauna",
                "Reading Lounge",
                "Gourmet Vista",
                "Sunrise Garden",
                "Arcady Club",
                "Sky Veranda",
                "Vista Lounge",
                "Sky Gym",
                "Vista Garden",
                "Co-Working Deck",
                "Star Gazing Lawn",
                "Summit Walk",
                "Farm to Table",
                "Farming Pots"
            ]
        },
        "location_map": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/ec5c2ecafec11f61fddfc586d89ff2.jpg"
            ],
            "amenities": [
                {
                    "Category": "MRT Stations",
                    "Distance": "0.46 km",
                    "Location": "NE 9 Boon Keng"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "0.84 km",
                    "Location": "DT 24 Geylang Bahru"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.10 km",
                    "Location": "NE 10 Potong Pasir"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.24 km",
                    "Location": "Bendemeer Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.71 km",
                    "Location": "Hong Wen"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.91 km",
                    "Location": "St. Andrew's Junior"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.35 km",
                    "Location": "Bendemeer Secondary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.85 km",
                    "Location": "St. Andrew's Secondary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "1.02 km",
                    "Location": "Northlight"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.51 km",
                    "Location": "Bendemeer Shopping Mall"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.44 km",
                    "Location": "Shaw Plaza"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.54 km",
                    "Location": "City Square Mall"
                }
            ]
        },
        "unit_mix": {
            "data": [
                {
                    "unitMix": "6.4%",
                    "unitType": "1 Bedroom + Study",
                    "size_sqft": "527",
                    "totalUnits": "11"
                },
                {
                    "unitMix": "22.09%",
                    "unitType": "2 Bedroom",
                    "size_sqft": "667 - 678",
                    "totalUnits": "38"
                },
                {
                    "unitMix": "22.09%",
                    "unitType": "2 Bedroom + Study",
                    "size_sqft": "764",
                    "totalUnits": "38"
                },
                {
                    "unitMix": "12.21%",
                    "unitType": "3 Bedroom",
                    "size_sqft": "969 - 980",
                    "totalUnits": "21"
                },
                {
                    "unitMix": "18.02%",
                    "unitType": "3 Bedroom Premium",
                    "size_sqft": "1,087 - 1,195",
                    "totalUnits": "31"
                },
                {
                    "unitMix": "12.21%",
                    "unitType": "3 Bedroom Premium + Study",
                    "size_sqft": "1,281 - 1,496",
                    "totalUnits": "21"
                },
                {
                    "unitMix": "5.23%",
                    "unitType": "4 Bedroom + Study",
                    "size_sqft": "1,410",
                    "totalUnits": "9"
                },
                {
                    "unitMix": "0.58%",
                    "unitType": "4 Bedroom Premium",
                    "size_sqft": "1,625",
                    "totalUnits": "1"
                },
                {
                    "unitMix": "1.16%",
                    "unitType": "Penthouse",
                    "size_sqft": "2,433 - 2,583",
                    "totalUnits": "2"
                },
                {
                    "unitMix": "100%",
                    "unitType": "Overall",
                    "size_sqft": "527 - 2,583",
                    "totalUnits": "172"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/8965395099f89cf6962037d306b585.jpg"
            ]
        },
        "balance_units": {
            "data": [
                {
                    "psf": "$2,534 - $2,764",
                    "price": "$1.702M - $1.874M",
                    "unitType": "2 Bedroom",
                    "size_sqft": "667 - 678",
                    "availableUnits": "14"
                },
                {
                    "psf": "$2,496 - $2,737",
                    "price": "$1.907M - $2.091M",
                    "unitType": "2 Bedroom + Study",
                    "size_sqft": "764",
                    "availableUnits": "36"
                },
                {
                    "psf": "$2,440 - $2,672",
                    "price": "$2.364M - $2.589M",
                    "unitType": "3 Bedroom",
                    "size_sqft": "969 - 980",
                    "availableUnits": "17"
                },
                {
                    "psf": "$2,443 - $2,641",
                    "price": "$2.656M - $3.156M",
                    "unitType": "3 Bedroom Premium",
                    "size_sqft": "1,087 - 1,195",
                    "availableUnits": "26"
                },
                {
                    "psf": "$2,327 - $2,639",
                    "price": "$3.112M - $3.481M",
                    "unitType": "3 Bedroom Premium + Study",
                    "size_sqft": "1,281 - 1,496",
                    "availableUnits": "18"
                },
                {
                    "psf": "$2,545 - $2,634",
                    "price": "$3.588M - $3.714M",
                    "unitType": "4 Bedroom + Study",
                    "size_sqft": "1,410",
                    "availableUnits": "9"
                },
                {
                    "psf": "$2,358",
                    "price": "$3.831M",
                    "unitType": "4 Bedroom Premium",
                    "size_sqft": "1,625",
                    "availableUnits": "1"
                },
                {
                    "psf": "$2,937 - $2,944",
                    "price": "$7.163M - $7.587M",
                    "unitType": "Penthouse",
                    "size_sqft": "2,433 - 2,583",
                    "availableUnits": "2"
                },
                {
                    "psf": "$2,327 - $2,944",
                    "price": "$1.702M - $7.587M",
                    "unitType": "Overall",
                    "size_sqft": "667 - 2,583",
                    "availableUnits": "123"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/ac43d329dda3d1ee432c80d1ac8a33.jpg"
            ]
        },
        "floorplans": [],
        "created_at": "2024-03-12T08:21:30.000Z"
    },
    {
        "id": 6,
        "name": "Watten House",
        "uuid": "wattenhouse",
        "description": "Nestled amongst the low-rise residential enclave of the prime district in Bukit Timah, Watten House is a freehold new launch condo built on elevated grounds, comprising of 180 units. Designed to be a luscious sanctuary for its residents, the compound is filled with an abundance of greenery and water features to offer a tranquil living environment. There is no lack of facilities too, especially with several pools available for residents to dip in after a long day, along with a Gym, Function Room and Reading Pavilion. With a superb location that is just a 10-minute walk away from Tan Kah Kee MRT station, those travelling by public transport can easily reach the city centre via the Downtown Line (DTL), while those who drive can arrive at Holland Village or Orchard Road in less than 10 minutes. Families with school children will value its proximity to prestigious schools like Raffles Girls’ Primary School, Hwa Chong Institution and Nanyang Girls’ High School.",
        "launch_date": "2023-11-18T00:00:00.000Z",
        "geographical_region": "Prime District · Central Region",
        "project_developer": null,
        "project_size": 180,
        "project_status": "completed",
        "project_category": "Private Condominium",
        "images": [
            "http://api.jomejourney-portal.com/uploads/04bed1cc08c61fef1e79566f19ef7a.jpg",
            "http://api.jomejourney-portal.com/uploads/e8e4babe16acada4819bde9553497d.jpg",
            "http://api.jomejourney-portal.com/uploads/7aabd720d44931401aade0ce0e9559.jpg",
            "http://api.jomejourney-portal.com/uploads/5d4bc7acd78add6b097a8a46b8a293.jpg",
            "http://api.jomejourney-portal.com/uploads/14086ef77b5a1d7ea3fe93205abb62.jpg",
            "http://api.jomejourney-portal.com/uploads/60b086e5575009eab36dfb16a01986.jpg",
            "http://api.jomejourney-portal.com/uploads/4235704433879e613af955256271ee.jpg",
            "http://api.jomejourney-portal.com/uploads/ddf0cdbc20b0d376d6ea9b1157edf1.jpg",
            "http://api.jomejourney-portal.com/uploads/df6915eac98200e821b686b2ea698d.jpg",
            "http://api.jomejourney-portal.com/uploads/34fef4bf5967a6603b1e5a38040135.jpg",
            "http://api.jomejourney-portal.com/uploads/d764d74187634346a7f31a0879f760.jpg",
            "http://api.jomejourney-portal.com/uploads/1526460f4e19e8e0792e885287ba6c.jpg",
            "http://api.jomejourney-portal.com/uploads/dfbc054aeebf475df7387d31b06e12.jpg",
            "http://api.jomejourney-portal.com/uploads/024b335943caede44a5030e2e016a2.jpg"
        ],
        "price_showflat": {
            "price": "Priced between $3.17M for a 3 Bedroom unit and $11.957M for a Penthouse unit, the price per square foot (PSF) for Watten House ranges from $3,118 to $3,504. Refer to the Balance Units section below for the latest pricing of the available units in Watten House.",
            "showFlat": "Situated along Holland Road, Watten House showflat is open for viewing strictly by appointment only. Keen to learn more about this property? Book an appointment with the sales team to visit the exclusive Watten House showflat today.",
            "priceheading": "Watten House Price List",
            "showFlatHeading": "Watten House Showflat"
        },
        "features": [
            "Highly sought-after location in the prime district of Bukit Timah with picturesque views of the Bukit Timah Nature Reserve.",
            "A 10-minute walk to Tan Kah Kee MRT station, providing excellent connectivity to the city centre via the DTL.",
            "Within 1km radius to renowned schools like Hwa Chong Institution, Raffles Girls’ Primary School and Nanyang Girls’ High School."
        ],
        "details": [
            {
                "para": "Shelford Road",
                "title": "Street Address"
            },
            {
                "para": "D11 - Newton / Novena",
                "title": "Postal District"
            },
            {
                "para": "Prime District · Central Region",
                "title": "Geographic Region"
            },
            {
                "para": "Core Central Region",
                "title": "Market Segment"
            },
            {
                "para": "Private Condominium",
                "title": "Project Category"
            },
            {
                "para": "180 units · Small",
                "title": "Development Size"
            },
            {
                "para": "18th Nov 2023",
                "title": "Launch Date"
            },
            {
                "para": "30th Jun 2027 or earlier",
                "title": "Expected TOP"
            },
            {
                "para": "Freehold Status",
                "title": "Land Tenure"
            },
            {
                "para": "220,243 sqft",
                "title": "Site Area"
            },
            {
                "para": "Architects 61 Pte Ltd",
                "title": "Project Architect"
            },
            {
                "para": "UOL Group Singapore Land Group",
                "title": "Joint Developers"
            }
        ],
        "siteplan": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/01ec51d53c5342223c66758b673b8c.jpg"
            ],
            "facilities": [
                "Arrival Lounge",
                "Arrival Terrace",
                "Arrival Water Cascades",
                "Concierge",
                "Sun Deck",
                "Sakura Pool Foyer",
                "Jacuzzi Pool",
                "50m Lap Pool",
                "Poolside Lounge",
                "Spa Pool",
                "Tsubaki Pool Foyer",
                "Aqua Lounge",
                "Cascading Pond",
                "Breeze Walk",
                "Garden Courtyard",
                "Rain Dance",
                "Garden of Dimensions",
                "The Gym",
                "Reading Pavilion",
                "Function Room",
                "Terrace Falls",
                "Aqua Gym",
                "Reflective Pond",
                "Sunshine Play",
                "Wellness Pool"
            ]
        },
        "location_map": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/616ad62d3d7c6283fe4d46c50fee6a.jpg"
            ],
            "amenities": [
                {
                    "Category": "MRT Stations",
                    "Distance": "0.54 km",
                    "Location": "DT 8 Tan Kah Kee"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "0.93 km",
                    "Location": "CC 19DT 9 Botanic Gardens"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.36 km",
                    "Location": "CC 20 Farrer Road"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.47 km",
                    "Location": "Raffles Girls' School"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.99 km",
                    "Location": "Nayang Primary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.73 km",
                    "Location": "National Junior College"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.82 km",
                    "Location": "Hwa Chong Institution"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.93 km",
                    "Location": "Nayang Girls' High"
                },
                {
                    "Category": "Integrated Schools",
                    "Distance": "0.73 km",
                    "Location": "National Junior College"
                },
                {
                    "Category": "Integrated Schools",
                    "Distance": "0.82 km",
                    "Location": "Hwa Chong Institution"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.61 km",
                    "Location": "Coronation Shopping Plaza"
                }
            ]
        },
        "unit_mix": {
            "data": [
                {
                    "unitMix": "22.22%",
                    "unitType": "3 Bedroom",
                    "size_sqft": "990 - 1,163",
                    "totalUnits": "40"
                },
                {
                    "unitMix": "33.33%",
                    "unitType": "3 Bedroom + Study",
                    "size_sqft": "1,539",
                    "totalUnits": "60"
                },
                {
                    "unitMix": "20%",
                    "unitType": "4 Bedroom",
                    "size_sqft": "1,851",
                    "totalUnits": "36"
                },
                {
                    "unitMix": "20%",
                    "unitType": "5 Bedroom",
                    "size_sqft": "2,368",
                    "totalUnits": "36"
                },
                {
                    "unitMix": "4.44%",
                    "unitType": "Penthouse",
                    "size_sqft": "3,412 - 4,080",
                    "totalUnits": "8"
                },
                {
                    "unitMix": "100%",
                    "unitType": "Overall",
                    "size_sqft": "990 - 4,080",
                    "totalUnits": "180"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/0f8123f7241cc4558eb9738bc307f5.jpg"
            ]
        },
        "balance_units": {
            "data": [
                {
                    "psf": "$3,202 - $3,243",
                    "price": "$3.17M - $3.211M",
                    "unitType": "3 Bedroom",
                    "size_sqft": "990",
                    "availableUnits": "2"
                },
                {
                    "psf": "$3,118 - $3,263",
                    "price": "$4.799M - $5.022M",
                    "unitType": "3 Bedroom + Study",
                    "size_sqft": "1,539",
                    "availableUnits": "37"
                },
                {
                    "psf": "$3,291 - $3,351",
                    "price": "$6.092M - $6.202M",
                    "unitType": "4 Bedroom",
                    "size_sqft": "1,851",
                    "availableUnits": "9"
                },
                {
                    "psf": "$3,242 - $3,345",
                    "price": "$7.678M - $7.922M",
                    "unitType": "5 Bedroom",
                    "size_sqft": "2,368",
                    "availableUnits": "6"
                },
                {
                    "psf": "$3,504",
                    "price": "$11.957M",
                    "unitType": "Penthouse",
                    "size_sqft": "3,412",
                    "availableUnits": "2"
                },
                {
                    "psf": "$3,118 - $3,504",
                    "price": "$3.17M - $11.957M",
                    "unitType": "Overall",
                    "size_sqft": "990 - 3,412",
                    "availableUnits": "56"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/e394604b5dabbeb26c6338be6ef9bf.jpg"
            ]
        },
        "floorplans": [],
        "created_at": "2024-03-12T08:21:50.000Z"
    },
    {
        "id": 7,
        "name": "J'Den",
        "uuid": "jden",
        "description": "Presiding over the site of the former Jcube, J'Den is a 99-year leasehold mixed-use development that consists of 368 new condo units in a 40-storey building, which has two levels of retail space. Situated in the heart of the Jurong Lake District, residents can enjoy seamless connection to the Jurong East MRT interchange, providing island-wide access via the East-West Line (EWL) and North-South Line (NSL). There is no lack of amenities too, especially with various shopping centres like JEM, Westgate and IMM within walking distance via the J-Walk pedestrian network. Families with school-going children can also find several schools in the proximity, such as Fuhua Primary School, Yuhua Primary School and Crest Secondary School. Within the compound, residents can seek respite from the bustling hub in its Garden Oasis on Level 3, where a Lazy River runs through a multitude of facilities like a Parkour Gym, a Jacuzzi Pool, a Floating Pavilion and even a Party House.",
        "launch_date": "2023-11-11T00:00:00.000Z",
        "geographical_region": "West Region",
        "project_developer": "CapitaLand Group",
        "project_size": 368,
        "project_status": "completed",
        "project_category": "Private Condominium",
        "images": [
            "http://api.jomejourney-portal.com/uploads/05457556d0cae4f56f4c9fdca2554e.jpg",
            "http://api.jomejourney-portal.com/uploads/37ec853f6a5073ff745e9be2002f6a.jpg",
            "http://api.jomejourney-portal.com/uploads/6352e918394864854425c6c7ac74f2.jpg",
            "http://api.jomejourney-portal.com/uploads/4d36f7ebae769b7c0e22963d8cca6e.jpg",
            "http://api.jomejourney-portal.com/uploads/b5a1bdf5b732512a212967994d339e.jpg",
            "http://api.jomejourney-portal.com/uploads/376f615844b0a0ed543bf1db3bd67f.jpg",
            "http://api.jomejourney-portal.com/uploads/28d89a7a50d321e3750c5afa8d6173.jpg",
            "http://api.jomejourney-portal.com/uploads/bca9051306a556fd254b5e02de8271.jpg"
        ],
        "price_showflat": {
            "price": "Priced between $1.748M for a 1 Bedroom + Study unit and $3.915M for a 4 Bedroom (Premium) unit, the price per square foot (PSF) for J'Den ranges from $2,270 to $2,833. Refer to the Balance Units section below for the latest pricing of the available units in J'Den.",
            "showFlat": "Situated along Science Park Drive, J'Den showflat is open for viewing strictly by appointment only. Keen to learn more about this property? Book an appointment with the sales team to visit the exclusive J'Den showflat today.",
            "priceheading": "J'Den Price List",
            "showFlatHeading": "J'Den Showflat"
        },
        "features": [
            "Strategic location at the former Jcube site with direct connection to Jurong East MRT interchange, providing island-wide access via EWL and NSL.",
            "Excellent proximity to malls like JEM, Westgate and IMM via the J-Walk pedestrian network.",
            "Ideal growth potential with the upcoming Jurong transformation turning the Jurong Lake District into the Future Economy Hub."
        ],
        "details": [
            {
                "para": "Jurong East Central 1",
                "title": "Street Address"
            },
            {
                "para": "D22 - Boon Lay / Jurong / Tuas",
                "title": "Postal District"
            },
            {
                "para": "West Region",
                "title": "Geographic Region"
            },
            {
                "para": "Outside Central Region",
                "title": "Market Segment"
            },
            {
                "para": "Private Condominium",
                "title": "Project Category"
            },
            {
                "para": "368 units · Small",
                "title": "Development Size"
            },
            {
                "para": "11th Nov 2023",
                "title": "Launch Date"
            },
            {
                "para": "30th Nov 2028 or earlier",
                "title": "Expected TOP"
            },
            {
                "para": "99 Years Leasehold",
                "title": "Land Tenure"
            },
            {
                "para": "83,648 sqft",
                "title": "Site Area"
            },
            {
                "para": "Surbana Jurong Consultants Pte Ltd",
                "title": "Project Architect"
            },
            {
                "para": "CapitaLand Group",
                "title": "Project Developer"
            }
        ],
        "siteplan": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/5a2affcafa1bbb3def3b08d41f6041.jpg"
            ],
            "facilities": [
                "Courtyard",
                "Lakeside Walk",
                "Fern Garden",
                "Water Hammocks",
                "Swing Garden",
                "Lake Pool (50m)",
                "Jacuzzi Pool",
                "Lakeside Deck",
                "Floating Pavilion",
                "Cascading Water",
                "Family Deck",
                "Nature Playground",
                "Chill-Out Deck",
                "Bubble Pool",
                "Play Pool",
                "River Creek",
                "River Bridge",
                "Lazy River",
                "Water Curtain",
                "Swing Lawn",
                "Parkour Gym",
                "Cardio Corner",
                "BBQ Pavilion",
                "Party House",
                "Gym",
                "Multi-Purpose Room",
                "Social Lounge"
            ]
        },
        "location_map": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/6f2d4103e78565e8f83e5c84f3f623.jpg"
            ],
            "amenities": [
                {
                    "Category": "MRT Stations",
                    "Distance": "0.15 km",
                    "Location": "NS 1JE 5EW 24 Jurong East"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "0.85 km",
                    "Location": "JE 4 Toh Guan"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "0.98 km",
                    "Location": "JE 6 Jurong Town Hall"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.58 km",
                    "Location": "Fuhua Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.06 km",
                    "Location": "Yuhua Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.77 km",
                    "Location": "Princess Elizabeth Primary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.76 km",
                    "Location": "Shuqun Secondary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "1.17 km",
                    "Location": "Crest Secondary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "1.68 km",
                    "Location": "Commonwealth Secondary"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.21 km",
                    "Location": "Westgate"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.31 km",
                    "Location": "Jem"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.65 km",
                    "Location": "IMM"
                }
            ]
        },
        "unit_mix": {
            "data": [
                {
                    "unitMix": "10.05%",
                    "unitType": "1 Bedroom",
                    "size_sqft": "520",
                    "totalUnits": "37"
                },
                {
                    "unitMix": "10.05%",
                    "unitType": "1 Bedroom + Study",
                    "size_sqft": "620",
                    "totalUnits": "37"
                },
                {
                    "unitMix": "20.11%",
                    "unitType": "2 Bedroom",
                    "size_sqft": "715",
                    "totalUnits": "74"
                },
                {
                    "unitMix": "20.11%",
                    "unitType": "2 Bedroom + Study",
                    "size_sqft": "810 - 850",
                    "totalUnits": "74"
                },
                {
                    "unitMix": "19.84%",
                    "unitType": "3 Bedroom",
                    "size_sqft": "1,140 - 1,180",
                    "totalUnits": "73"
                },
                {
                    "unitMix": "9.78%",
                    "unitType": "3 Bedroom + Study (Premium)",
                    "size_sqft": "1,200",
                    "totalUnits": "36"
                },
                {
                    "unitMix": "10.05%",
                    "unitType": "4 Bedroom (Premium)",
                    "size_sqft": "1,400",
                    "totalUnits": "37"
                },
                {
                    "unitMix": "100%",
                    "unitType": "Overall",
                    "size_sqft": "520 - 1,400",
                    "totalUnits": "368"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/15264b50b9ecf16d5d7ff91853e5a3.jpg"
            ]
        },
        "balance_units": {
            "data": [
                {
                    "psf": "$2,801",
                    "price": "$1.748M",
                    "unitType": "1 Bedroom + Study",
                    "size_sqft": "624",
                    "availableUnits": "1"
                },
                {
                    "psf": "$2,833",
                    "price": "$2.317M",
                    "unitType": "2 Bedroom + Study",
                    "size_sqft": "818",
                    "availableUnits": "1"
                },
                {
                    "psf": "$2,364 - $2,619",
                    "price": "$2.976M - $3.297M",
                    "unitType": "3 Bedroom + Study (Premium)",
                    "size_sqft": "1,259",
                    "availableUnits": "5"
                },
                {
                    "psf": "$2,270 - $2,636",
                    "price": "$3.371M - $3.915M",
                    "unitType": "4 Bedroom (Premium)",
                    "size_sqft": "1,485",
                    "availableUnits": "23"
                },
                {
                    "psf": "$2,270 - $2,833",
                    "price": "$1.748M - $3.915M",
                    "unitType": "Overall",
                    "size_sqft": "624 - 1,485",
                    "availableUnits": "30"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/f7ec47f3db374ae5410cd7827086d4.jpg"
            ]
        },
        "floorplans": [],
        "created_at": "2024-03-12T08:21:58.000Z"
    },
    {
        "id": 8,
        "name": "Hillock Green",
        "uuid": "hillockgreen",
        "description": "Nestled in the peaceful Lentor neighbourhood, Hillock Green is a 99-year leasehold condominium that comes with 474 new launch units across three 23-storey buildings . Surrounded by green spaces like the Lower Peirce Reservoir Park and Thomson Nature Park, residents can enjoy scenic walks to these parks via the park connector at Lentor Hillock Park. There is also a wide range of dining and recreational options nearby with malls like Thomson Plaza, AMK Hub and Greenwich V within a 10-minute drive. Those who take public transport will appreciate the convenience of having Lentor MRT station just a stone’s throw away, providing easy access to the city centre via the Thomson-East Coast Line (TEL). The prestigious educational institutions in the vicinity like CHIJ St Nicholas Girls’ School, Anderson Primary School, Mayflower Primary School, Presbyterian High School, Nanyang Polytechnic and Anderson Serangoon Junior College will also make Hillock Green an irresistible choice for families with school-going children.",
        "launch_date": "2023-11-11T00:00:00.000Z",
        "geographical_region": "North Region",
        "project_developer": null,
        "project_size": 474,
        "project_status": "completed",
        "project_category": "Private Condominium",
        "images": [
            "http://api.jomejourney-portal.com/uploads/9688fa85f475e987048f892b915d94.jpg",
            "http://api.jomejourney-portal.com/uploads/29b98b53d6954129467e858d9f0d9d.jpg",
            "http://api.jomejourney-portal.com/uploads/9729d11afc52c2e420e4784f370b8a.jpg",
            "http://api.jomejourney-portal.com/uploads/e65b70942b3d4a8bc7e46c2c76ac85.jpg",
            "http://api.jomejourney-portal.com/uploads/4eaafb87357a1661dd0fdafa0839a0.jpg",
            "http://api.jomejourney-portal.com/uploads/aecce0442b4f0e8706395ab134f404.jpg",
            "http://api.jomejourney-portal.com/uploads/16fe0d6ee3ab76d9fa99510e4141b2.jpg",
            "http://api.jomejourney-portal.com/uploads/8ad8660683cae6ccff3506a8b55b92.jpg",
            "http://api.jomejourney-portal.com/uploads/e286a7aa7c97b107a4400b4bf97a25.jpg",
            "http://api.jomejourney-portal.com/uploads/2e11856d2c688a8f71819df6e8e8c9.jpg",
            "http://api.jomejourney-portal.com/uploads/099de89ab755689beed8503b0f9814.jpg",
            "http://api.jomejourney-portal.com/uploads/da6b0498df63c26ea7c18d4556c4e2.jpg",
            "http://api.jomejourney-portal.com/uploads/898b0d1138a3b5f75f881cc90e9a06.jpg",
            "http://api.jomejourney-portal.com/uploads/90e864f076d7ee4df11c74d67347a7.jpg",
            "http://api.jomejourney-portal.com/uploads/e655fcaa871487c06d08c0fe2cb463.jpg",
            "http://api.jomejourney-portal.com/uploads/07572927d6d35b3a07d39a8d86f618.jpg",
            "http://api.jomejourney-portal.com/uploads/d5e607bdd20f8ad302e16fbdc6f94d.jpg",
            "http://api.jomejourney-portal.com/uploads/291f69927dd54d5e2e44d47105603b.jpg",
            "http://api.jomejourney-portal.com/uploads/80113ace0faf4aac9e5f072899110f.jpg",
            "http://api.jomejourney-portal.com/uploads/c698a56432709777f106e43b041185.jpg",
            "http://api.jomejourney-portal.com/uploads/5593fd6ef922f9d207a2b9b0d2ccf3.jpg",
            "http://api.jomejourney-portal.com/uploads/dbdf1d9960269fe5fceb03074feb22.jpg"
        ],
        "price_showflat": {
            "price": "Priced between $1.276M for a 1 Bedroom unit and $3.225M for a 4 Bedroom Premium unit, the price per square foot (PSF) for Hillock Green ranges from $1,800 to $2,549. Refer to the Balance Units section below for the latest pricing of the available units in Hillock Green.",
            "showFlat": "Hillock Green showflat is located along Lentor Gardens, beside Atelier Villas, and is open for viewing by appointment only. Keen to learn more about this property? Book an appointment with the sales team to visit the exclusive Hillock Green showflat today.",
            "priceheading": "Hillock Green Price List",
            "showFlatHeading": "Hillock Green Showflat"
        },
        "features": [
            "A tranquil environment surrounded by a multitude of accessible green spaces like the Lower Peirce Reservoir Park and Thomson Nature Park.",
            "A few minutes’ walk to Lentor MRT station for an easy commute to the city centre via the TEL.",
            "Close to reputable educational institutions like CHIJ St Nicholas Girls’ School, Anderson Primary School, Mayflower Primary School, Presbyterian High School, Nanyang Polytechnic and Anderson Serangoon Junior College."
        ],
        "details": [
            {
                "para": "Lentor Central",
                "title": "Street Address"
            },
            {
                "para": "D26 - Mandai / Upp Thomson",
                "title": "Postal District"
            },
            {
                "para": "North Region",
                "title": "Geographic Region"
            },
            {
                "para": "Outside Central Region",
                "title": "Market Segment"
            },
            {
                "para": "Private Condominium",
                "title": "Project Category"
            },
            {
                "para": "474 units · Mid-Sized",
                "title": "Development Size"
            },
            {
                "para": "11th Nov 2023",
                "title": "Launch Date"
            },
            {
                "para": "15th Jan 2028 or earlier",
                "title": "Expected TOP"
            },
            {
                "para": "99 Years Leasehold",
                "title": "Land Tenure"
            },
            {
                "para": "144,714 sqft",
                "title": "Site Area"
            },
            {
                "para": "DP Architects Pte Ltd",
                "title": "Project Architect"
            },
            {
                "para": "United Engineers Soilbuild Group Forsea Holdings",
                "title": "Joint Developers"
            }
        ],
        "siteplan": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/bd3747462dda2c389190fbe4bc9d49.jpg",
                "http://api.jomejourney-portal.com/uploads/e077ce2cc28b12d190c53becd8b411.jpg"
            ],
            "facilities": [
                "Water Courtyard",
                "Grand Arrival",
                "Grand Stairway",
                "Open Atrium",
                "Spiral Stairway",
                "Herbs Garden",
                "Tropical Garden",
                "Relaxation Pods",
                "Wellness Lawn",
                "Tranquility Pods",
                "Swing Courtyard",
                "Relaxation Lawn",
                "Meditation Lawn",
                "Cabana Terrace",
                "Grand Lawn",
                "Grand Tree",
                "Elevated Broadwalk",
                "BBQ Pavilion 1",
                "BBQ Pavilion 2",
                "Picnic Lawn",
                "Jogging Trail",
                "Pets’ Lawn",
                "Kids’ Pool",
                "50m Infinity Pool",
                "Water Loungers",
                "Pool Deck",
                "Spa Alcove",
                "Spa Seats",
                "Family Deck",
                "Adventure Playground",
                "Grand Clubhouse",
                "Entertainment Lounge",
                "Karaoke Room",
                "Residents’ Lounge",
                "Reading Lounge",
                "Kids’ Adventure Play",
                "Indoor Gymnasium",
                "Steam Room",
                "Yoga Dance Studio",
                "Community Workspace",
                "Coffee Lounge",
                "Meeting Lounge",
                "Workspace Commons",
                "Networking Nook",
                "Community Lounge",
                "Interaction Lounge",
                "Reading Alcove",
                "Sky Lookout",
                "Scented Garden",
                "Sensory Garden",
                "Fern Garden",
                "Foliage Garden",
                "Flower Garden",
                "Healing Garden",
                "Sun Deck",
                "Serenity Garden",
                "Garden Alcove",
                "Botanical Garden",
                "Serenity Alcove",
                "Kidtopia Play",
                "Kids’ Play Panel",
                "Family Lounge",
                "Fitness Terrace",
                "Play Deck",
                "Kids’ Funland",
                "Kiddie Playland",
                "Family Haven",
                "Cozy Alcove",
                "Swing Garden",
                "Social Lounge",
                "Sky Dining Lounge",
                "Sky Living Lounge",
                "Swing Haven",
                "Social Terrace",
                "Relaxation Nook",
                "Sky Lounge",
                "Sky Gourmet Lounge",
                "Skyline Lounge",
                "Community Space"
            ]
        },
        "location_map": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/ebc836177c9f35e258c42258df1947.jpg"
            ],
            "amenities": [
                {
                    "Category": "MRT Stations",
                    "Distance": "0.15 km",
                    "Location": "TE 5 Lentor"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.23km",
                    "Location": "NS 15 Yio Chu Kang"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.46 km",
                    "Location": "TE 6 Mayflower"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.79 km",
                    "Location": "Anderson Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.28 km",
                    "Location": "CHIJ St. Nicholas Girls'"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.38 km",
                    "Location": "Mayflower Primary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.97 km",
                    "Location": "Presbyterian High"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "1.12 km",
                    "Location": "Yio Chu Kang"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "1.28 km",
                    "Location": "CHIJ St. Nicholas Girls'"
                },
                {
                    "Category": "Integrated Schools",
                    "Distance": "1.28 km",
                    "Location": "CHIJ St. Nicholas Girls'"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.94 km",
                    "Location": "Broadway Plaza"
                }
            ]
        },
        "unit_mix": {
            "data": [
                {
                    "unitMix": "4.64%",
                    "unitType": "1 Bedroom",
                    "size_sqft": "517 - 689",
                    "totalUnits": "22"
                },
                {
                    "unitMix": "13.92%",
                    "unitType": "2 Bedroom Classic",
                    "size_sqft": "624 - 818",
                    "totalUnits": "66"
                },
                {
                    "unitMix": "13.92%",
                    "unitType": "2 Bedroom",
                    "size_sqft": "710 - 883",
                    "totalUnits": "66"
                },
                {
                    "unitMix": "12.87%",
                    "unitType": "2 Bedroom + Study",
                    "size_sqft": "753 - 958",
                    "totalUnits": "61"
                },
                {
                    "unitMix": "13.92%",
                    "unitType": "3 Bedroom",
                    "size_sqft": "904 - 1,141",
                    "totalUnits": "66"
                },
                {
                    "unitMix": "18.57%",
                    "unitType": "3 Bedroom + Study",
                    "size_sqft": "1,023 - 1,270",
                    "totalUnits": "88"
                },
                {
                    "unitMix": "4.43%",
                    "unitType": "3 Bedroom Premium",
                    "size_sqft": "1,184 - 1,442",
                    "totalUnits": "21"
                },
                {
                    "unitMix": "4.64%",
                    "unitType": "4 Bedroom Classic",
                    "size_sqft": "1,184 - 1,432",
                    "totalUnits": "22"
                },
                {
                    "unitMix": "13.08%",
                    "unitType": "4 Bedroom Premium",
                    "size_sqft": "1,313 - 1,572",
                    "totalUnits": "62"
                },
                {
                    "unitMix": "100%",
                    "unitType": "Overall",
                    "size_sqft": "517 - 1,572",
                    "totalUnits": "474"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/7bd8cfeb7402f721bc8dfc35c8d34f.jpg"
            ]
        },
        "balance_units": {
            "data": [
                {
                    "psf": "$2,109 - $2,549",
                    "price": "$1.276M - $1.453M",
                    "unitType": "1 Bedroom",
                    "size_sqft": "517 - 689",
                    "availableUnits": "5"
                },
                {
                    "psf": "$1,944 - $2,518",
                    "price": "$1.486M - $1.723M",
                    "unitType": "2 Bedroom Classic",
                    "size_sqft": "624 - 818",
                    "availableUnits": "23"
                },
                {
                    "psf": "$1,896 - $2,492",
                    "price": "$1.54M - $1.88M",
                    "unitType": "2 Bedroom",
                    "size_sqft": "710 - 883",
                    "availableUnits": "30"
                },
                {
                    "psf": "$1,864 - $2,486",
                    "price": "$1.698M - $2.053M",
                    "unitType": "2 Bedroom + Study",
                    "size_sqft": "753 - 958",
                    "availableUnits": "38"
                },
                {
                    "psf": "$1,885 - $2,312",
                    "price": "$1.916M - $2.328M",
                    "unitType": "3 Bedroom",
                    "size_sqft": "904 - 1,141",
                    "availableUnits": "38"
                },
                {
                    "psf": "$1,876 - $2,343",
                    "price": "$2.094M - $2.613M",
                    "unitType": "3 Bedroom + Study",
                    "size_sqft": "1,023 - 1,270",
                    "availableUnits": "71"
                },
                {
                    "psf": "$1,891 - $2,338",
                    "price": "$2.459M - $2.909M",
                    "unitType": "3 Bedroom Premium",
                    "size_sqft": "1,184 - 1,442",
                    "availableUnits": "21"
                },
                {
                    "psf": "$1,876 - $2,278",
                    "price": "$2.36M - $2.827M",
                    "unitType": "4 Bedroom Classic",
                    "size_sqft": "1,184 - 1,432",
                    "availableUnits": "19"
                },
                {
                    "psf": "$1,800 - $2,292",
                    "price": "$2.584M - $3.225M",
                    "unitType": "4 Bedroom Premium",
                    "size_sqft": "1,313 - 1,582",
                    "availableUnits": "52"
                },
                {
                    "psf": "$1,800 - $2,549",
                    "price": "$1.276M - $3.225M",
                    "unitType": "Overall",
                    "size_sqft": "517 - 1,582",
                    "availableUnits": "297"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/36d435c40cfaca709e09ae4bd2a822.jpg"
            ]
        },
        "floorplans": [],
        "created_at": "2024-03-12T08:22:32.000Z"
    },
    {
        "id": 9,
        "name": "The Shorefront",
        "uuid": "theshorefront",
        "description": "Embrace luxurious seaside living at the Shorefront, a 999-year leasehold new condo launch located in Loyang, which comprises of 23 exclusive residential units in a single 5-storey block. Located within a 5-minute walk to Pasir Ris Park, the Shorefront offers a stunning view of the coastline, allowing residents to experience the idyllic beachfront lifestyle. Other than offering communal facilities within the condominium such as Sky Pool, Sky Gym, Sky Jacuzzi, Aqua Deck and Beach Deck, it is also close to several community hotspots such as Downtown East and Wild Wild Wet, providing access to more familial activities. For additional amenities, White Sands shopping mall, Pasir Ris Central Hawker Centre and Pasir Ris MRT station are all within a 15-minute bus ride away. Those with school-going children can find various popular schools nearby as well, such as Pasir Ris Primary School, Casuarina Primary School, Hai Sing Catholic School and Pasir Ris Crest Secondary School.",
        "launch_date": "2023-09-22T00:00:00.000Z",
        "geographical_region": "East Region",
        "project_developer": "Jinmac Pte Ltd",
        "project_size": 23,
        "project_status": "completed",
        "project_category": "Private Condominium",
        "images": [
            "http://api.jomejourney-portal.com/uploads/c316af9ad4d3f0e1102c21fb7de3a5.jpg",
            "http://api.jomejourney-portal.com/uploads/1f5e643fb5aa926c0d039946726285.jpg",
            "http://api.jomejourney-portal.com/uploads/39363272678c7296ce33843f29af1b.jpg",
            "http://api.jomejourney-portal.com/uploads/38200c7418edf7b801824cb1b2d810.jpg",
            "http://api.jomejourney-portal.com/uploads/a858fdd224ebc6fc435d6c09297f9b.jpg",
            "http://api.jomejourney-portal.com/uploads/c21f071facb8ed92bf486190d00b4d.jpg",
            "http://api.jomejourney-portal.com/uploads/610b362c48fd5a38b608d10c1d0745.jpg",
            "http://api.jomejourney-portal.com/uploads/135de6183064cc8f755727cf69e291.jpg",
            "http://api.jomejourney-portal.com/uploads/12e78a1060b36ac0e68ea4709e3c82.jpg",
            "http://api.jomejourney-portal.com/uploads/08e9c1a7ad3acdd64a8deda928816a.jpg",
            "http://api.jomejourney-portal.com/uploads/fbab2dc9260f92cbd0be9613c3a11e.jpg"
        ],
        "price_showflat": {
            "price": "Priced between $1.471M for a 2 Bedroom unit and $2.988M for a 3 Bedroom Penthouse unit, the price per square foot (PSF) for The Shorefront ranges from $1,779 to $1,956. Refer to the Balance Units section below for the latest pricing of the available units in The Shorefront.",
            "showFlat": "The Shorefront showflat is located on the actual site along Jalan Loyang Besar, and is open for viewing by appointment only. Keen to learn more about this property? Book an appointment with the sales team to visit The Shorefront showflat today.",
            "priceheading": "The Shorefront Price List",
            "showFlatHeading": "The Shorefront Showflat"
        },
        "features": [
            "Gorgeous seafront view in proximity to Pasir Ris Park, Downtown East and Wild Wild Wet.",
            "Within a 2km distance to Pasir Ris MRT station, providing direct commute to the city centre via East-West Line and Cross Island Line.",
            "Popular schools nearby such as Pasir Ris Primary School, Casuarina Primary School, Hai Sing Catholic School and Pasir Ris Crest Secondary School."
        ],
        "details": [
            {
                "para": "Jalan Loyang Besar",
                "title": "Street Address"
            },
            {
                "para": "D17 - Changi Airport / Changi Village",
                "title": "Postal District"
            },
            {
                "para": "East Region",
                "title": "Geographic Region"
            },
            {
                "para": "Outside Central Region",
                "title": "Market Segment"
            },
            {
                "para": "Private Condominium",
                "title": "Project Category"
            },
            {
                "para": "23 units · Boutique",
                "title": "Development Size"
            },
            {
                "para": "22nd Sep 2023",
                "title": "Launch Date"
            },
            {
                "para": "31st Dec 2026 or earlier",
                "title": "Expected TOP"
            },
            {
                "para": "999 Years Leasehold",
                "title": "Land Tenure"
            },
            {
                "para": "15,922 sqft",
                "title": "Site Area"
            },
            {
                "para": "Studioshen",
                "title": "Project Architect"
            },
            {
                "para": "Jinmac Pte Ltd",
                "title": "Project Developer"
            }
        ],
        "siteplan": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/dc6c0667c9fc9924d9ee8a417bc1db.jpg"
            ],
            "facilities": [
                "Sky Pool",
                "Sky Gym",
                "Sky Bar",
                "Sky Dining",
                "Sky Jacuzzi",
                "Aqua Deck",
                "Beach Deck",
                "Outdoor Shower"
            ]
        },
        "location_map": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/f6882cf4cf3daaf21451a255d2069d.jpg"
            ],
            "amenities": [
                {
                    "Category": "MRT Stations",
                    "Distance": "1.29 km",
                    "Location": "CR 4 Pasir Ris East"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.38 km",
                    "Location": "EW 1CP 1CR 5 Pasir Ris"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "1.57 km",
                    "Location": "CR 3 Loyang"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.79 km",
                    "Location": "Pasir Ris Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.81 km",
                    "Location": "Casuarina Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.50 km",
                    "Location": "White Sands Primary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.75 km",
                    "Location": "Pasir Ris Crest Secondary"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "0.78 km",
                    "Location": "Hai Sing Catholic"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "1.12 km",
                    "Location": "Greenview Secondary"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.67 km",
                    "Location": "Downtown East"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.37 km",
                    "Location": "White Sands"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "1.49 km",
                    "Location": "Loyang Point"
                }
            ]
        },
        "unit_mix": {
            "data": [
                {
                    "unitMix": "34.78%",
                    "unitType": "2 Bedroom",
                    "size_sqft": "775 - 883",
                    "totalUnits": "8"
                },
                {
                    "unitMix": "4.35%",
                    "unitType": "2 Bedroom (Loft)",
                    "size_sqft": "775",
                    "totalUnits": "1"
                },
                {
                    "unitMix": "43.48%",
                    "unitType": "3 Bedroom",
                    "size_sqft": "926 - 980",
                    "totalUnits": "10"
                },
                {
                    "unitMix": "8.7%",
                    "unitType": "3 Bedroom (Loft)",
                    "size_sqft": "980",
                    "totalUnits": "2"
                },
                {
                    "unitMix": "4.35%",
                    "unitType": "3 Bedroom Penthouse",
                    "size_sqft": "1,679",
                    "totalUnits": "1"
                },
                {
                    "unitMix": "4.35%",
                    "unitType": "4 Bedroom Penthouse",
                    "size_sqft": "1,572",
                    "totalUnits": "1"
                },
                {
                    "unitMix": "100%",
                    "unitType": "Overall",
                    "size_sqft": "775 - 1,679",
                    "totalUnits": "23"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/c685a9c93f2931d129b7e37de44b77.jpg"
            ]
        },
        "balance_units": {
            "data": [
                {
                    "psf": "$1,883 - $1,956",
                    "price": "$1.471M - $1.554M",
                    "unitType": "2 Bedroom",
                    "size_sqft": "775 - 818",
                    "availableUnits": "6"
                },
                {
                    "psf": "$1,878 - $1,911",
                    "price": "$1.739M - $1.869M",
                    "unitType": "3 Bedroom",
                    "size_sqft": "926 - 980",
                    "availableUnits": "7"
                },
                {
                    "psf": "$1,933 - $1,938",
                    "price": "$1.894M - $1.899M",
                    "unitType": "3 Bedroom (Loft)",
                    "size_sqft": "980",
                    "availableUnits": "2"
                },
                {
                    "psf": "$1,780",
                    "price": "$2.988M",
                    "unitType": "3 Bedroom Penthouse",
                    "size_sqft": "1,679",
                    "availableUnits": "1"
                },
                {
                    "psf": "$1,779",
                    "price": "$2.797M",
                    "unitType": "4 Bedroom Penthouse",
                    "size_sqft": "1,572",
                    "availableUnits": "1"
                },
                {
                    "psf": "$1,779 - $1,956",
                    "price": "$1.471M - $2.988M",
                    "unitType": "Overall",
                    "size_sqft": "775 - 1,679",
                    "availableUnits": "17"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/f9982ac03ddeebbf3e394bcf473718.jpg"
            ]
        },
        "floorplans": [],
        "created_at": "2024-03-12T08:22:47.000Z"
    },
    {
        "id": 10,
        "name": "TMW Maxwell",
        "uuid": "tmwmaxwell",
        "description": "Nestled in the heart of the urban centre, TMW Maxwell is a 99-year leasehold mixed development that comprises 324 residential units, along with four levels of commercial units for retail, F&B and offices. Designed for the modern urbanites, it blends home, office, park and galleria into a holistic offering for highly versatile living. Housed within a single 20-storey new condo launch building is a series of stacked vertical gardens, social spaces and recreational facilities such as Infinity Sky Pool, Sky Jacuzzi, Sky Gym and Sky Bar. Surrounded by bustling streets, such as Club Street and Keong Siak Road, with Maxwell Food Centre just across the road, there is no lack of food, retail and entertainment options in the neighbourhood. Residents can also easily travel to other parts of the island via the Thomson-East Coast Line (TEL) with Maxwell MRT station a mere 2-minute walk away.",
        "launch_date": "2023-08-12T00:00:00.000Z",
        "geographical_region": "Downtown Core · Central Region",
        "project_developer": null,
        "project_size": 324,
        "project_status": "completed",
        "project_category": "Private Condominium",
        "images": [
            "http://api.jomejourney-portal.com/uploads/e19427cdd0f948cc9d42cc1e37de9c.jpg",
            "http://api.jomejourney-portal.com/uploads/d7155470d018d19d17eb0272134c16.jpg",
            "http://api.jomejourney-portal.com/uploads/aba5c7b02daeed17e97d7f0a966e45.jpg",
            "http://api.jomejourney-portal.com/uploads/a91de89587920fb0d890df55050ecd.jpg",
            "http://api.jomejourney-portal.com/uploads/1c452d33c246d352462f5a407d4efd.jpg",
            "http://api.jomejourney-portal.com/uploads/461e78aa56789bd4eba218f9fe2c89.jpg",
            "http://api.jomejourney-portal.com/uploads/e3f61e92c01a6a241719b4c6961f0f.jpg",
            "http://api.jomejourney-portal.com/uploads/53dd800a6e6f821e104ea335687428.jpg",
            "http://api.jomejourney-portal.com/uploads/03de46e66936cc2efd8ee26fd7c66c.jpg",
            "http://api.jomejourney-portal.com/uploads/65f7da7009828fe8e06d9475aae30e.jpg",
            "http://api.jomejourney-portal.com/uploads/48a972070fff82079284882f0e24e7.jpg",
            "http://api.jomejourney-portal.com/uploads/33c542e201506adc8f44f584eea078.jpg",
            "http://api.jomejourney-portal.com/uploads/e83d1a3a3bda6e7b7312bee8c2a5aa.jpg",
            "http://api.jomejourney-portal.com/uploads/7b3b2a56942b11e51a82ddc7e74115.jpg",
            "http://api.jomejourney-portal.com/uploads/b71ab5bafa9bf22a5cfbeb7cff5bac.jpg",
            "http://api.jomejourney-portal.com/uploads/5dde4be1b3f16f169fe68a116ab76b.jpg",
            "http://api.jomejourney-portal.com/uploads/27c9182f4eb918cb48672b0d8faf2d.jpg",
            "http://api.jomejourney-portal.com/uploads/2cc7d34c3e3aa7356282e14a25d77d.jpg",
            "http://api.jomejourney-portal.com/uploads/6eb7da3b9a221e75e1eeb3c38038f3.jpg",
            "http://api.jomejourney-portal.com/uploads/d6ae80dcc24143efabc2f08fd7131c.jpg"
        ],
        "price_showflat": {
            "price": "Priced between $1.482M for a Flip/Switch (Studio) unit and $2.685M for a 2 Bedroom Dual-Key unit, the price per square foot (PSF) for TMW Maxwell ranges from $2,749 to $3,327. Refer to the Balance Units section below for the latest pricing of the available units in TMW Maxwell.",
            "showFlat": "The TMW Maxwell showflat is located along Peck Seah Street, near Tanjong Pagar MRT station, but is open for viewing by appointment only. Keen to learn more about this property? Book an appointment with the sales team to visit the exclusive TMW Maxwell showflat today.",
            "priceheading": "TMW Maxwell Price List",
            "showFlatHeading": "TMW Maxwell Showflat"
        },
        "features": [
            "Prime location in District 2, surrounded by numerous dining, recreational and entertainment establishments.",
            "Seamlessly blending home, office, park and galleria spaces into a single iconic building for unparalleled convenience.",
            "A 2-minute walk to Maxwell MRT station, 4-minute walk to Tanjong Pagar MRT station and 6-minute walk to Telok Ayer MRT station, allowing island-wide accessibility via the Thomson-East Coast Line (TEL), East-West Line (EWL) and Downtown Line (DTL), respectively."
        ],
        "details": [
            {
                "para": "Tras Street",
                "title": "Street Address"
            },
            {
                "para": "D2 - Chinatown / Tanjong Pagar",
                "title": "Postal District"
            },
            {
                "para": "Downtown Core · Central Region",
                "title": "Geographic Region"
            },
            {
                "para": "Rest of Central Region",
                "title": "Market Segment"
            },
            {
                "para": "Private Condominium",
                "title": "Project Category"
            },
            {
                "para": "324 units · Small",
                "title": "Development Size"
            },
            {
                "para": "12th Aug 2023",
                "title": "Launch Date"
            },
            {
                "para": "30th Jun 2028 or earlier",
                "title": "Expected TOP"
            },
            {
                "para": "99 Years Leasehold",
                "title": "Land Tenure"
            },
            {
                "para": "41,799 sqft",
                "title": "Site Area"
            },
            {
                "para": "Formwerkz Architects",
                "title": "Project Architect"
            },
            {
                "para": "Chip Eng Seng Corporation SingHaiyi",
                "title": "Joint Developers"
            }
        ],
        "siteplan": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/9542bb5c41cd161a38d1127d1642e1.jpg",
                "http://api.jomejourney-portal.com/uploads/2cde1d3878f84e07dce0ca8a3470de.jpg"
            ],
            "facilities": [
                "Sky Pavilion",
                "Sky Lounger",
                "Sky Deck",
                "Infinity Sky Pool",
                "Sky Gym",
                "Panorama",
                "All-Day Bar",
                "Cocktail Bar",
                "Wellness Deck",
                "Lazy Deck",
                "Sky Jacuzzi",
                "Plug & Work",
                "TMW Social Club",
                "Social Lounge",
                "Social Blooms",
                "Executive Lounge",
                "Breakout Pod",
                "The Living Room",
                "Plug & Play",
                "Reading Alcove",
                "Working Lounge",
                "Courtyard Dining",
                "Fitness Courtyard",
                "Festival Lawn",
                "Courtyard Garden",
                "Courtyard Lounge",
                "Farm-to-Fork Garden"
            ]
        },
        "location_map": {
            "images": [
                "http://api.jomejourney-portal.com/uploads/5e6eb4b7f37687a811d37ae5ca22ed.jpg"
            ],
            "amenities": [
                {
                    "Category": "MRT Stations",
                    "Distance": "0.22 km",
                    "Location": "TE 18 Maxwell"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "0.32 km",
                    "Location": "EW 15 Tanjong Pagar"
                },
                {
                    "Category": "MRT Stations",
                    "Distance": "0.54 km",
                    "Location": "DT 18 Telok Ayer"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "0.66 km",
                    "Location": "Cantonment Primary"
                },
                {
                    "Category": "Primary Schools",
                    "Distance": "1.89 km",
                    "Location": "CHIJ (Kellock)"
                },
                {
                    "Category": "Secondary Schools",
                    "Distance": "1.18 km",
                    "Location": "Outram Secondary"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.26 km",
                    "Location": "Tanjong Pagar Centre"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.52 km",
                    "Location": "Pearls Centre"
                },
                {
                    "Category": "Shopping Malls",
                    "Distance": "0.56 km",
                    "Location": "China Square Central"
                }
            ]
        },
        "unit_mix": {
            "data": [
                {
                    "unitMix": "62.04%",
                    "unitType": "Flip/Switch (Studio)",
                    "size_sqft": "474 - 484",
                    "totalUnits": "201"
                },
                {
                    "unitMix": "10.49%",
                    "unitType": "1 Bedroom",
                    "size_sqft": "474 - 517",
                    "totalUnits": "34"
                },
                {
                    "unitMix": "10.49%",
                    "unitType": "1 Bedroom + Study",
                    "size_sqft": "538 - 560",
                    "totalUnits": "34"
                },
                {
                    "unitMix": "1.54%",
                    "unitType": "1 Bedroom Loft",
                    "size_sqft": "840 - 861",
                    "totalUnits": "5"
                },
                {
                    "unitMix": "4.94%",
                    "unitType": "2 Bedroom Premium",
                    "size_sqft": "786",
                    "totalUnits": "16"
                },
                {
                    "unitMix": "10.49%",
                    "unitType": "2 Bedroom Dual-Key",
                    "size_sqft": "829 - 850",
                    "totalUnits": "34"
                },
                {
                    "unitMix": "100%",
                    "unitType": "Overall",
                    "size_sqft": "474 - 861",
                    "totalUnits": "324"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/c7d87c7dd7d7a0959fd8dc4ba3c2e2.jpg"
            ]
        },
        "balance_units": {
            "data": [
                {
                    "psf": "$3,127 - $3,327",
                    "price": "$1.482M - $1.581M",
                    "unitType": "Flip/Switch (Studio)",
                    "size_sqft": "474 - 484",
                    "availableUnits": "198"
                },
                {
                    "psf": "$3,133 - $3,240",
                    "price": "$1.62M - $1.675M",
                    "unitType": "1 Bedroom",
                    "size_sqft": "474 - 517",
                    "availableUnits": "33"
                },
                {
                    "psf": "$3,109 - $3,154",
                    "price": "$1.707M - $1.798M",
                    "unitType": "1 Bedroom + Study",
                    "size_sqft": "538 - 560",
                    "availableUnits": "34"
                },
                {
                    "psf": "$2,749",
                    "price": "$2.309M",
                    "unitType": "1 Bedroom Loft",
                    "size_sqft": "840 - 861",
                    "availableUnits": "5"
                },
                {
                    "psf": "$3,059 - $3,097",
                    "price": "$2.404M - $2.434M",
                    "unitType": "2 Bedroom Premium",
                    "size_sqft": "786",
                    "availableUnits": "15"
                },
                {
                    "psf": "$3,045 - $3,081",
                    "price": "$2.623M - $2.685M",
                    "unitType": "2 Bedroom Dual-Key",
                    "size_sqft": "829 - 850",
                    "availableUnits": "34"
                },
                {
                    "psf": "$2,749 - $3,327",
                    "price": "$1.482M - $2.685M",
                    "unitType": "Overall",
                    "size_sqft": "474 - 861",
                    "availableUnits": "319"
                }
            ],
            "images": [
                "http://api.jomejourney-portal.com/uploads/f5478457bc0f9e8b03266d0e4cda66.jpg"
            ]
        },
        "floorplans": [],
        "created_at": "2024-03-12T08:23:04.000Z"
    }
]
        

        start();
        
        
        async function start(){
            const data = await fetchNewListings();
            if(data.length > 0){
                listings = data;

            }
            openMap();
            populatAllListings(listings);
            await fetchCoordinatesAndPopulateMap(listings);
            new Glide('.glide', {
                type: 'carousel',
                autoplay: 3500,
                perView: 3,
                breakpoints: {
                1024: {
                perView: 2
                },
                600: {
                perView: 1
                }
            }
            }).mount();
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

            recommendedContainer.innerHTML = "";

            for(let i = 0; i < listings.length && i < 10; i++){
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
            
                recommendedContainer.innerHTML += `
                <div class="card my-3" style="max-width: 100%">
                      <div class="row g-0">
                        <div class="col-md-4">
                          <img class="w-100" style="height:200px" src="${listings[i].images[0]}" alt="">
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


        function openAllListingsInner() {
            document.getElementById("all-listings-inner").classList.remove("d-none");
            document.getElementById("starting-page").classList.add("d-none");
            populateAllListingsInner();
        }


        function populateAllListingsInner(params) {
            
            const container  = document.getElementById("all-listings-inner");
            container.innerHTML = "";
            container.innerHTML = `
                <div class="row position-relative ">
              <i class="fa-solid fa-arrow-left fa-xl position-absolute text-black" onclick="showMainPage()" style="top:25px; left:20px; cursor:pointer"></i>
                    <div class="col-md-12">
                        <h5 class="text-center mt-3">All Listings</h3>
                    </div>
                </div>
            `;
            for (let i = 0; i < listings.length; i++) {
                
                container.innerHTML += `
                    <div class="card my-3" style="max-width: 100%">
                        <div class="row g-0">
                            <div class="col-md-4">
                            <img class="w-100" style="height:200px" src="${listings[i].images[0]}" alt="">
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