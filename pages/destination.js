/* =========================================================
   SAKUM DESTINATION ENGINE
========================================================= */


/* =========================================================
   DESTINATION DATABASE
========================================================= */

const destinations = {


    /* =====================================================
       INDIA
    ====================================================== */

    "Manali": {

        country: "India",

        tagline:
            "A Himalayan escape filled with mountains, valleys and adventure.",

        image:
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D",

        geography:
            "Manali sits in the Kullu Valley of Himachal Pradesh along the Beas River, surrounded by the western Himalayas.",

        climate:
            "Cool mountain climate. Summers are generally pleasant, while winters are cold and can bring snow. Weather changes quickly at higher elevations.",

        culture:
            "Himachali traditions, local mountain communities, temples, handicrafts and regional food are major parts of the experience.",

        language:
            "Hindi and English are commonly useful for visitors; local Himachali languages are also spoken.",

        currency:
            "Indian Rupee (₹)",

        bestTime:
            "March–June and October–February",

        timezone:
            "IST (UTC +5:30)",

        safety: [

            "Check mountain weather before long journeys.",

            "Keep extra time for road travel because mountain conditions can change quickly.",

            "Follow local guidance around rivers, trails and high-altitude areas.",

            "Keep identification and important travel documents secure."

        ],

        emergency: [

            {
                label: "National emergency",
                number: "112"
            },

            {
                label: "Tourist helpline",
                number: "1363"
            }

        ],

        places: [

            {
                name: "Old Manali",
                description:
                    "Cafés, local streets, mountain views and a relaxed traveller atmosphere.",
                image:
                    "https://images.unsplash.com/photo-1517825738774-7de9363ef735"
            },

            {
                name: "Solang Valley",
                description:
                    "A scenic valley known for mountain landscapes and outdoor tourism.",
                image:
                    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
            },

            {
                name: "Rohtang region",
                description:
                    "High mountain landscapes where weather and access depend strongly on season.",
                image:
                    "https://images.unsplash.com/photo-1464278533981-50106e6176b1"
            },

            {
                name: "Vashisht",
                description:
                    "A hillside village known for temples, local character and views over the valley.",
                image:
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹10k–₹16k",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹3k–₹5k"],
                    ["Food", "₹2k–₹3k"],
                    ["Local transport", "₹2k–₹3k"],
                    ["Activities", "₹1k–₹2k"],
                    ["Extras", "₹1k–₹3k"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹20k–₹30k",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹8k–₹12k"],
                    ["Food", "₹4k–₹6k"],
                    ["Transport", "₹3k–₹5k"],
                    ["Activities", "₹3k–₹4k"],
                    ["Extras", "₹2k–₹3k"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹40k+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹18k+"],
                    ["Food", "₹7k+"],
                    ["Transport", "₹7k+"],
                    ["Activities", "₹5k+"],
                    ["Extras", "₹3k+"]
                ]
            }

        },

        tips: [

            "Keep warm layers even when daytime weather appears comfortable.",

            "Allow flexibility for road and weather changes.",

            "Respect local customs at temples and villages.",

            "Carry water and take breaks when travelling to higher elevations.",

            "Use authorised guides and operators for activities."

        ]

    },


    "Goa": {

        country: "India",

        tagline:
            "Tropical beaches, Portuguese-influenced heritage, food and relaxed coastal living.",

        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",

        geography:
            "Goa is a small coastal state on India's Arabian Sea coast, with beaches, estuaries, forested areas and lateritic plateaus.",

        climate:
            "Tropical climate with hot, humid conditions for much of the year and a strong monsoon season.",

        culture:
            "Goan culture reflects Konkani traditions, Hindu and Christian heritage, coastal food traditions, music and Portuguese influence.",

        language:
            "Konkani is the official language; English and Hindi are widely useful for visitors.",

        currency:
            "Indian Rupee (₹)",

        bestTime:
            "November–February",

        timezone:
            "IST (UTC +5:30)",

        safety: [

            "Use designated swimming areas and pay attention to beach conditions.",

            "Take care with traffic and road crossings.",

            "Keep valuables secure in busy tourist areas.",

            "Check weather conditions during the monsoon season."

        ],

        emergency: [

            {
                label: "National emergency",
                number: "112"
            },

            {
                label: "Tourist helpline",
                number: "1363"
            }

        ],

        places: [

            {
                name: "Panaji",
                description:
                    "The state capital, with colourful streets, heritage architecture and riverfront areas.",
                image:
                    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2"
            },

            {
                name: "North Goa beaches",
                description:
                    "Popular coastal areas with restaurants, markets and beach experiences.",
                image:
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            },

            {
                name: "South Goa",
                description:
                    "Quieter beaches and a more relaxed coastal atmosphere.",
                image:
                    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57"
            },

            {
                name: "Old Goa",
                description:
                    "A major heritage area with historic churches and monuments.",
                image:
                    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹9k–₹15k",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹3k–₹5k"],
                    ["Food", "₹2k–₹3k"],
                    ["Transport", "₹1k–₹2k"],
                    ["Activities", "₹1k–₹2k"],
                    ["Extras", "₹2k–₹3k"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹20k–₹30k",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹8k–₹12k"],
                    ["Food", "₹4k–₹5k"],
                    ["Transport", "₹3k–₹4k"],
                    ["Activities", "₹2k–₹4k"],
                    ["Extras", "₹3k–₹5k"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹45k+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹20k+"],
                    ["Food", "₹8k+"],
                    ["Transport", "₹6k+"],
                    ["Activities", "₹6k+"],
                    ["Extras", "₹5k+"]
                ]
            }

        },

        tips: [

            "Check the sea and weather conditions before swimming.",

            "Respect local communities and religious sites.",

            "Use licensed transport services where practical.",

            "Carry sun protection and stay hydrated.",

            "During monsoon months, expect heavy rain and changing conditions."

        ]

    },


    "Darjeeling": {

        country: "India",

        tagline:
            "Misty Himalayan hills, tea gardens and spectacular mountain scenery.",

        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",

        geography:
            "Darjeeling is a hill town in West Bengal in the eastern Himalayas, known for steep slopes, tea plantations and mountain views.",

        climate:
            "Cooler mountain climate with wet monsoon months, pleasant spring and autumn weather, and cold winters.",

        culture:
            "The region has a rich mixture of Nepali, Tibetan, Bengali and Himalayan influences, visible in food, language, festivals and architecture.",

        language:
            "Nepali, Bengali, Hindi and English are commonly encountered.",

        currency:
            "Indian Rupee (₹)",

        bestTime:
            "March–May and October–December",

        timezone:
            "IST (UTC +5:30)",

        safety: [

            "Allow extra time for mountain road journeys.",

            "Carry layers because temperatures can change quickly.",

            "Check visibility and weather before mountain viewpoints.",

            "Use caution on steep roads and walking routes."

        ],

        emergency: [

            {
                label: "National emergency",
                number: "112"
            },

            {
                label: "Tourist helpline",
                number: "1363"
            }

        ],

        places: [

            {
                name: "Tiger Hill",
                description:
                    "A famous viewpoint for sunrise and mountain panoramas.",
                image:
                    "https://images.unsplash.com/photo-1464278533981-50106e6176b1"
            },

            {
                name: "Darjeeling town",
                description:
                    "Historic streets, markets, cafés and Himalayan views.",
                image:
                    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
            },

            {
                name: "Tea gardens",
                description:
                    "Rolling tea estates and one of the defining landscapes of the region.",
                image:
                    "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
            },

            {
                name: "Batasia Loop",
                description:
                    "A scenic railway loop with views over the surrounding hills.",
                image:
                    "https://images.unsplash.com/photo-1500534623283-312aade485b7"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹10k–₹15k",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹3k–₹5k"],
                    ["Food", "₹2k–₹3k"],
                    ["Transport", "₹2k–₹3k"],
                    ["Activities", "₹1k–₹2k"],
                    ["Extras", "₹1k–₹2k"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹20k–₹30k",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹7k–₹11k"],
                    ["Food", "₹4k–₹6k"],
                    ["Transport", "₹3k–₹5k"],
                    ["Activities", "₹2k–₹4k"],
                    ["Extras", "₹2k–₹4k"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹40k+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹18k+"],
                    ["Food", "₹7k+"],
                    ["Transport", "₹5k+"],
                    ["Activities", "₹5k+"],
                    ["Extras", "₹5k+"]
                ]
            }

        },

        tips: [

            "Early mornings often offer the clearest mountain views.",

            "Carry waterproof layers during wetter months.",

            "Respect tea garden property and local communities.",

            "Allow additional time for hill traffic.",

            "Keep comfortable footwear for steep streets."

        ]

    },


    /* =====================================================
       JAPAN
    ====================================================== */

    "Tokyo": {

        country: "Japan",

        tagline:
            "A fascinating mix of tradition, technology, neighbourhood culture and food.",

        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",

        geography:
            "Tokyo is a massive metropolitan area on Japan's eastern coast, extending from a dense urban core toward western mountain areas.",

        climate:
            "Humid subtropical climate with hot summers, mild-to-cool winters, a rainy season and occasional typhoon impacts.",

        culture:
            "Traditional temples and shrines exist alongside modern neighbourhoods, pop culture, design, food culture and highly organised urban life.",

        language:
            "Japanese. English is commonly encountered in major tourist areas, transport and hotels.",

        currency:
            "Japanese Yen (¥)",

        bestTime:
            "March–May and October–November",

        timezone:
            "JST (UTC +9)",

        safety: [

            "Keep emergency contacts saved offline.",

            "Follow instructions during earthquakes or severe weather.",

            "Be aware of train station and pedestrian crowding.",

            "Carry your accommodation address in Japanese where useful."

        ],

        emergency: [

            {
                label: "Police",
                number: "110"
            },

            {
                label: "Fire / Ambulance",
                number: "119"
            },

            {
                label: "JNTO visitor hotline",
                number: "050-3816-2787"
            }

        ],

        places: [

            {
                name: "Shibuya",
                description:
                    "One of Tokyo's most energetic districts for shopping, food and city culture.",
                image:
                    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"
            },

            {
                name: "Asakusa",
                description:
                    "Historic streets and temple culture around Senso-ji.",
                image:
                    "https://images.unsplash.com/photo-1528360983277-13d401cdc186"
            },

            {
                name: "Shinjuku",
                description:
                    "Major transport hub with skyscrapers, shopping and entertainment.",
                image:
                    "https://images.unsplash.com/photo-1513407030348-c983a97b98d8"
            },

            {
                name: "Meiji Shrine",
                description:
                    "A forested Shinto shrine area near the centre of the city.",
                image:
                    "https://images.unsplash.com/photo-1528360983277-13d401cdc186"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹45k–₹70k",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹15k–₹22k"],
                    ["Food", "₹8k–₹12k"],
                    ["Transport", "₹5k–₹8k"],
                    ["Activities", "₹5k–₹10k"],
                    ["Extras", "₹5k–₹8k"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹90k–₹1.3L",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹35k+"],
                    ["Food", "₹15k+"],
                    ["Transport", "₹10k+"],
                    ["Activities", "₹15k+"],
                    ["Extras", "₹10k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹2L+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹80k+"],
                    ["Food", "₹30k+"],
                    ["Transport", "₹20k+"],
                    ["Activities", "₹30k+"],
                    ["Extras", "₹20k+"]
                ]
            }

        },

        tips: [

            "Use an IC card or appropriate transit pass for city travel.",

            "Keep noise low on public transport.",

            "Cash is still useful in some smaller businesses.",

            "Check the weather during typhoon season.",

            "Learn a few basic Japanese phrases for smoother communication."

        ]

    },


    /* =====================================================
       USA
    ====================================================== */

    "New York": {

        country: "USA",

        tagline:
            "A global city of iconic architecture, neighbourhoods, museums, food and culture.",

        image:
            "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee",

        geography:
            "New York City lies on the Atlantic coast at the mouth of the Hudson River and includes Manhattan, Brooklyn, Queens, the Bronx and Staten Island.",

        climate:
            "Humid continental climate with warm-to-hot summers, cold winters and variable spring and autumn weather.",

        culture:
            "The city is globally multicultural, with major influences from immigrant communities, arts, finance, fashion, music and food.",

        language:
            "English is the main language; many other languages are commonly spoken.",

        currency:
            "US Dollar ($)",

        bestTime:
            "April–June and September–November",

        timezone:
            "Eastern Time",

        safety: [

            "Stay aware of your surroundings in crowded areas.",

            "Keep passports and valuables secure.",

            "Use official transport and licensed services.",

            "Check local conditions and transit updates before moving around the city."

        ],

        emergency: [

            {
                label: "Emergency",
                number: "911"
            }

        ],

        places: [

            {
                name: "Manhattan",
                description:
                    "Central districts containing many of the city's famous landmarks and museums.",
                image:
                    "https://images.unsplash.com/photo-1522083165195-3424ed129620"
            },

            {
                name: "Central Park",
                description:
                    "A huge urban green space in the centre of Manhattan.",
                image:
                    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8"
            },

            {
                name: "Brooklyn",
                description:
                    "Known for neighbourhood culture, waterfront views, parks and food.",
                image:
                    "https://images.unsplash.com/photo-1518391846015-55a9cc003b25"
            },

            {
                name: "Times Square",
                description:
                    "The bright commercial heart of Midtown Manhattan.",
                image:
                    "https://images.unsplash.com/photo-1534430480872-3498386e7856"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹80k–₹1.1L",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹30k+"],
                    ["Food", "₹12k+"],
                    ["Transport", "₹6k+"],
                    ["Activities", "₹8k+"],
                    ["Extras", "₹10k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹1.5L–₹2.2L",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹65k+"],
                    ["Food", "₹25k+"],
                    ["Transport", "₹10k+"],
                    ["Activities", "₹25k+"],
                    ["Extras", "₹20k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹3L+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹1.4L+"],
                    ["Food", "₹50k+"],
                    ["Transport", "₹25k+"],
                    ["Activities", "₹45k+"],
                    ["Extras", "₹30k+"]
                ]
            }

        },

        tips: [

            "Use public transport to cover large distances efficiently.",

            "Book major attractions early during busy periods.",

            "Wear comfortable shoes because walking distances can be large.",

            "Check event and neighbourhood information before visiting unfamiliar areas.",

            "Keep an emergency contact and accommodation address accessible."

        ]

    },


    /* =====================================================
       MALDIVES
    ====================================================== */

    "Maldives": {

        country: "Maldives",

        tagline:
            "An Indian Ocean archipelago known for reefs, lagoons, islands and marine experiences.",

        image:
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",

        geography:
            "The Maldives is a low-lying archipelago of coral islands and atolls in the Indian Ocean southwest of Sri Lanka and India.",

        climate:
            "Tropical climate with warm temperatures throughout the year and seasonal monsoon patterns.",

        culture:
            "Maldivian culture is shaped by island life, fishing traditions, Islamic heritage, local crafts and Indian Ocean influences.",

        language:
            "Dhivehi is the national language; English is widely useful in tourist areas.",

        currency:
            "Maldivian Rufiyaa (MVR)",

        bestTime:
            "December–April for generally drier conditions",

        timezone:
            "Maldives Time (UTC +5)",

        safety: [

            "Follow local marine and weather guidance.",

            "Use only authorised operators for water activities.",

            "Respect local customs, especially on inhabited islands.",

            "Keep travel insurance information accessible."

        ],

        emergency: [

            {
                label: "Police",
                number: "119"
            },

            {
                label: "Ambulance",
                number: "102"
            },

            {
                label: "Fire & Rescue",
                number: "118"
            },

            {
                label: "Tourist Police",
                number: "1478"
            }

        ],

        places: [

            {
                name: "Malé",
                description:
                    "The capital, with markets, mosques, museums and dense island-city life.",
                image:
                    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86"
            },

            {
                name: "North Malé Atoll",
                description:
                    "A popular area for island resorts and reef experiences.",
                image:
                    "https://images.unsplash.com/photo-1514282401047-d79a71a590e8"
            },

            {
                name: "South Malé Atoll",
                description:
                    "Known for reefs, lagoons and resort islands.",
                image:
                    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            },

            {
                name: "Local islands",
                description:
                    "A closer view of everyday Maldivian island communities and culture.",
                image:
                    "https://images.unsplash.com/photo-1540202404-a2f29016b523"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹45k–₹70k",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹15k+"],
                    ["Food", "₹8k+"],
                    ["Transport", "₹6k+"],
                    ["Activities", "₹5k+"],
                    ["Extras", "₹5k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹1L–₹1.7L",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹55k+"],
                    ["Food", "₹18k+"],
                    ["Transfers", "₹12k+"],
                    ["Activities", "₹20k+"],
                    ["Extras", "₹10k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹3L+",
                note: "4-day planning estimate",
                items: [
                    ["Resort", "₹1.8L+"],
                    ["Food", "₹40k+"],
                    ["Transfers", "₹30k+"],
                    ["Activities", "₹40k+"],
                    ["Extras", "₹20k+"]
                ]
            }

        },

        tips: [

            "Respect local island customs and dress expectations.",

            "Use reef-safe and environmentally responsible practices.",

            "Weather can affect boat and seaplane transfers.",

            "Keep copies of booking and transfer details.",

            "Never ignore local marine safety instructions."

        ]

    },


    /* =====================================================
       UAE
    ====================================================== */

    "Dubai": {

        country: "United Arab Emirates",

        tagline:
            "A modern Gulf metropolis combining architecture, shopping, desert landscapes and coastal experiences.",

        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",

        geography:
            "Dubai is a coastal emirate on the southeastern Arabian Gulf, with a dense urban core bordered by desert and coastal environments.",

        climate:
            "Hot desert climate. Summers are extremely hot, while winter is generally more comfortable for outdoor tourism.",

        culture:
            "Dubai blends Emirati traditions with a highly international population and strong influences from the wider Gulf and global business communities.",

        language:
            "Arabic is official; English is extremely common in tourism and business.",

        currency:
            "UAE Dirham (AED)",

        bestTime:
            "November–March",

        timezone:
            "GST (UTC +4)",

        safety: [

            "Respect UAE laws and local customs.",

            "Stay hydrated and limit prolonged exposure to extreme heat.",

            "Follow official guidance for desert and marine activities.",

            "Use licensed transport and authorised operators."

        ],

        emergency: [

            {
                label: "Police",
                number: "999"
            },

            {
                label: "Ambulance",
                number: "998"
            },

            {
                label: "Fire",
                number: "997"
            },

            {
                label: "Coastguard",
                number: "996"
            },

            {
                label: "Tourism Police",
                number: "901"
            }

        ],

        places: [

            {
                name: "Downtown Dubai",
                description:
                    "Burj Khalifa, Dubai Mall and the city's famous modern skyline.",
                image:
                    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
            },

            {
                name: "Jumeirah",
                description:
                    "Coastal neighbourhoods, beaches and major waterfront attractions.",
                image:
                    "https://images.unsplash.com/photo-1528709021733-0c6a3561a9e8"
            },

            {
                name: "Dubai Marina",
                description:
                    "High-rise waterfront architecture, promenades and restaurants.",
                image:
                    "https://images.unsplash.com/photo-1518684079-3c830dcef090"
            },

            {
                name: "Old Dubai",
                description:
                    "Historic districts, souks, creeks and older layers of the city.",
                image:
                    "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹40k–₹60k",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹12k+"],
                    ["Food", "₹7k+"],
                    ["Transport", "₹5k+"],
                    ["Activities", "₹8k+"],
                    ["Extras", "₹5k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹90k–₹1.4L",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹40k+"],
                    ["Food", "₹15k+"],
                    ["Transport", "₹8k+"],
                    ["Activities", "₹20k+"],
                    ["Extras", "₹10k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹2.5L+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹1.2L+"],
                    ["Food", "₹40k+"],
                    ["Transport", "₹25k+"],
                    ["Activities", "₹50k+"],
                    ["Extras", "₹25k+"]
                ]
            }

        },

        tips: [

            "Plan outdoor activities for cooler parts of the day.",

            "Carry water during summer travel.",

            "Dress appropriately for religious and traditional settings.",

            "Check attraction hours and booking requirements.",

            "Use official taxis and transport services."

        ]

    },


    /* =====================================================
       CHINA
    ====================================================== */

    "Shanghai": {

        country: "China",

        tagline:
            "A spectacular metropolis where historic neighbourhoods meet a futuristic skyline.",

        image:
            "https://images.unsplash.com/photo-1548919973-5cef591cdbc9",

        geography:
            "Shanghai lies on China's eastern coast at the Yangtze River Delta and Huangpu River, forming one of the country's largest urban regions.",

        climate:
            "Humid subtropical climate with hot summers, cool winters and rainfall throughout the year.",

        culture:
            "Shanghai combines historic Chinese traditions with modern architecture, food, commerce, arts and a strong cosmopolitan identity.",

        language:
            "Mandarin is the main language; Shanghainese is also spoken. English is more common in major tourist and business areas.",

        currency:
            "Chinese Yuan / Renminbi (¥)",

        bestTime:
            "March–May and October–November",

        timezone:
            "China Standard Time (UTC +8)",

        safety: [

            "Keep your passport and travel documents secure.",

            "Use official transport and accommodation services.",

            "Check current entry, payment and connectivity arrangements before travel.",

            "Follow local instructions during severe weather."

        ],

        emergency: [

            {
                label: "Police",
                number: "110"
            },

            {
                label: "Ambulance",
                number: "120"
            },

            {
                label: "Fire",
                number: "119"
            },

            {
                label: "Traffic police",
                number: "122"
            }

        ],

        places: [

            {
                name: "The Bund",
                description:
                    "Historic waterfront promenade facing Shanghai's modern skyline.",
                image:
                    "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403"
            },

            {
                name: "Pudong",
                description:
                    "The futuristic financial district across the Huangpu River.",
                image:
                    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956"
            },

            {
                name: "Yu Garden",
                description:
                    "Classical Chinese garden and historic old-city area.",
                image:
                    "https://images.unsplash.com/photo-1548919973-5cef591cdbc9"
            },

            {
                name: "French Concession",
                description:
                    "Tree-lined streets, architecture, cafés and neighbourhood culture.",
                image:
                    "https://images.unsplash.com/photo-1548013146-72479768bada"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹40k–₹60k",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹12k+"],
                    ["Food", "₹6k+"],
                    ["Transport", "₹5k+"],
                    ["Activities", "₹6k+"],
                    ["Extras", "₹6k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹85k–₹1.3L",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹35k+"],
                    ["Food", "₹15k+"],
                    ["Transport", "₹8k+"],
                    ["Activities", "₹18k+"],
                    ["Extras", "₹10k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹2L+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹90k+"],
                    ["Food", "₹35k+"],
                    ["Transport", "₹20k+"],
                    ["Activities", "₹35k+"],
                    ["Extras", "₹20k+"]
                ]
            }

        },

        tips: [

            "Carry offline copies of important booking details.",

            "Check current payment and connectivity options before departure.",

            "Use official transport services.",

            "Respect local rules around photography and restricted areas.",

            "Keep the address of your accommodation available in local script where practical."

        ]

    },


    /* =====================================================
       RUSSIA
    ====================================================== */

    "Moscow": {

        country: "Russia",

        tagline:
            "A historic capital known for monumental architecture, museums and grand public spaces.",

        image:
            "https://wallpapercave.com/wp/wp12215575.jpg",

        geography:
            "Moscow lies in western Russia along the Moskva River and is surrounded by a broad plain with a continental climate.",

        climate:
            "Humid continental climate with warm summers and cold winters, including substantial seasonal variation.",

        culture:
            "Russian history, literature, classical arts, architecture and Orthodox heritage have strongly shaped the city.",

        language:
            "Russian",

        currency:
            "Russian Ruble (₽)",

        bestTime:
            "May–September for milder conditions",

        timezone:
            "Moscow Standard Time (UTC +3)",

        safety: [

            "Check current government travel advisories before planning travel.",

            "Verify visa, payment, connectivity and transport arrangements carefully.",

            "Keep copies of important documents.",

            "Follow instructions from local authorities."

        ],

        emergency: [

            {
                label: "Emergency",
                number: "112"
            }

        ],

        places: [

            {
                name: "Red Square",
                description:
                    "One of Moscow's best-known historic public spaces.",
                image:
                    "https://images.unsplash.com/photo-1547448415-e9f5b3a4412e"
            },

            {
                name: "Kremlin area",
                description:
                    "Historic fortified complex and major centre of Russian history.",
                image:
                    "https://images.unsplash.com/photo-1513326738677-b964603b136d"
            },

            {
                name: "Arbat",
                description:
                    "Historic pedestrian-oriented street area with shops and cafés.",
                image:
                    "https://images.unsplash.com/photo-1513326738677-b964603b136d"
            },

            {
                name: "Moscow Metro",
                description:
                    "Famous underground network with elaborately designed stations.",
                image:
                    "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹45k–₹65k",
                note: "Illustrative planning range",
                items: [
                    ["Stay", "₹15k+"],
                    ["Food", "₹7k+"],
                    ["Transport", "₹4k+"],
                    ["Activities", "₹7k+"],
                    ["Extras", "₹6k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹90k–₹1.3L",
                note: "Illustrative planning range",
                items: [
                    ["Stay", "₹35k+"],
                    ["Food", "₹15k+"],
                    ["Transport", "₹7k+"],
                    ["Activities", "₹18k+"],
                    ["Extras", "₹10k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹2L+",
                note: "Illustrative planning range",
                items: [
                    ["Stay", "₹85k+"],
                    ["Food", "₹35k+"],
                    ["Transport", "₹20k+"],
                    ["Activities", "₹35k+"],
                    ["Extras", "₹20k+"]
                ]
            }

        },

        tips: [

            "Check your government's latest travel advice before booking.",

            "Verify payment methods and card availability in advance.",

            "Carry essential documents and backup copies.",

            "Check transport and airspace information close to departure.",

            "Follow all local laws and official instructions."

        ]

    },


    /* =====================================================
       GERMANY
    ====================================================== */

    "Berlin": {

        country: "Germany",

        tagline:
            "A creative European capital where modern culture meets layers of twentieth-century history.",

        image:
            "https://images.unsplash.com/photo-1560969184-10fe8719e047",

        geography:
            "Berlin lies in northeastern Germany on a largely flat landscape shaped by rivers, lakes and surrounding forests.",

        climate:
            "Temperate seasonal climate with warm summers, cool winters and changeable spring and autumn weather.",

        culture:
            "Berlin is known for museums, contemporary art, music, architecture, history and a highly international population.",

        language:
            "German; English is widely useful in tourist settings.",

        currency:
            "Euro (€)",

        bestTime:
            "May–September",

        timezone:
            "Central European Time / Summer Time",

        safety: [

            "Take normal urban precautions around busy stations and nightlife areas.",

            "Keep valuables secure in crowded public transport.",

            "Follow pedestrian and cycling rules carefully.",

            "Keep your accommodation details available."

        ],

        emergency: [

            {
                label: "Police",
                number: "110"
            },

            {
                label: "Ambulance / Fire",
                number: "112"
            }

        ],

        places: [

            {
                name: "Brandenburg Gate",
                description:
                    "One of Berlin's most recognisable historic landmarks.",
                image:
                    "https://images.unsplash.com/photo-1560969184-10fe8719e047"
            },

            {
                name: "Museum Island",
                description:
                    "A UNESCO-listed cultural district with major museums.",
                image:
                    "https://images.unsplash.com/photo-1560942485-b2a11cc13456"
            },

            {
                name: "East Side Gallery",
                description:
                    "A preserved section of the former Berlin Wall covered with murals.",
                image:
                    "https://images.unsplash.com/photo-1564399579883-451a5d44ec08"
            },

            {
                name: "Tiergarten",
                description:
                    "Large central park ideal for a quieter break from the city.",
                image:
                    "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹45k–₹65k",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹15k+"],
                    ["Food", "₹8k+"],
                    ["Transport", "₹5k+"],
                    ["Activities", "₹6k+"],
                    ["Extras", "₹6k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹90k–₹1.4L",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹35k+"],
                    ["Food", "₹16k+"],
                    ["Transport", "₹8k+"],
                    ["Activities", "₹20k+"],
                    ["Extras", "₹10k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹2L+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹90k+"],
                    ["Food", "₹35k+"],
                    ["Transport", "₹20k+"],
                    ["Activities", "₹35k+"],
                    ["Extras", "₹20k+"]
                ]
            }

        },

        tips: [

            "Public transport makes exploring Berlin relatively straightforward.",

            "Many museums require timed or advance tickets.",

            "Watch dedicated cycling lanes when walking.",

            "Carry a reusable water bottle.",

            "Keep an eye on personal belongings in crowded stations."

        ]

    },


    /* =====================================================
       FRANCE
    ====================================================== */

    "Paris": {

        country: "France",

        tagline:
            "An iconic city of art, architecture, cuisine, museums and historic neighbourhoods.",

        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",

        geography:
            "Paris lies along the Seine in northern France and forms the centre of a large metropolitan region.",

        climate:
            "Oceanic-influenced climate with mild winters, warm summers and rainfall distributed throughout the year.",

        culture:
            "Paris is renowned for art, fashion, architecture, literature, food and café culture.",

        language:
            "French; English is common in major tourist areas.",

        currency:
            "Euro (€)",

        bestTime:
            "April–June and September–October",

        timezone:
            "Central European Time / Summer Time",

        safety: [

            "Keep an eye on belongings in busy tourist areas and public transport.",

            "Use official transport and accommodation services.",

            "Keep your passport secure and carry an appropriate copy.",

            "Check major attraction access and opening information."

        ],

        emergency: [

            {
                label: "European emergency",
                number: "112"
            },

            {
                label: "Medical emergency",
                number: "15"
            },

            {
                label: "Police",
                number: "17"
            },

            {
                label: "Fire",
                number: "18"
            }

        ],

        places: [

            {
                name: "Eiffel Tower",
                description:
                    "Paris's internationally recognised landmark on the Seine.",
                image:
                    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            },

            {
                name: "Louvre area",
                description:
                    "Historic museum district and one of the city's major cultural areas.",
                image:
                    "https://images.unsplash.com/photo-1541961017774-22349e4a1262"
            },

            {
                name: "Montmartre",
                description:
                    "Hilltop neighbourhood associated with artists, streets and Sacré-Cœur.",
                image:
                    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade"
            },

            {
                name: "Latin Quarter",
                description:
                    "Historic central neighbourhood with cafés, bookshops and landmarks.",
                image:
                    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹60k–₹80k",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹22k+"],
                    ["Food", "₹10k+"],
                    ["Transport", "₹5k+"],
                    ["Activities", "₹8k+"],
                    ["Extras", "₹7k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹1.2L–₹1.8L",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹50k+"],
                    ["Food", "₹20k+"],
                    ["Transport", "₹8k+"],
                    ["Activities", "₹25k+"],
                    ["Extras", "₹15k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹2.8L+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹1.3L+"],
                    ["Food", "₹45k+"],
                    ["Transport", "₹20k+"],
                    ["Activities", "₹50k+"],
                    ["Extras", "₹25k+"]
                ]
            }

        },

        tips: [

            "Reserve popular museums and landmarks ahead of time.",

            "Metro and walking are useful ways to explore central districts.",

            "Learn a few basic French phrases.",

            "Watch belongings carefully in crowded tourist areas.",

            "Take time to explore neighbourhoods instead of only major monuments."

        ]

    },


    /* =====================================================
       ITALY
    ====================================================== */

    "Italy": {

        country: "Italy",

        tagline:
            "Ancient history, Renaissance art, dramatic landscapes and one of the world's great food cultures.",

        image:
            "https://images.unsplash.com/photo-1529260830199-42c24126f198",

        geography:
            "Italy occupies much of the central Mediterranean, with the Alps in the north, the Apennines running through the peninsula and long Mediterranean coastlines.",

        climate:
            "Generally Mediterranean, but climate varies considerably from alpine conditions in the north to warmer southern and island regions.",

        culture:
            "Italian culture is deeply associated with art, architecture, regional food traditions, design, music and historic city life.",

        language:
            "Italian; English is commonly encountered in major tourist areas.",

        currency:
            "Euro (€)",

        bestTime:
            "April–June and September–October",

        timezone:
            "Central European Time / Summer Time",

        safety: [

            "Protect belongings in major tourist centres and crowded transport.",

            "Respect historic sites and heritage rules.",

            "Keep hydration and sun protection in mind during summer.",

            "Use official transport and booking channels."

        ],

        emergency: [

            {
                label: "Emergency",
                number: "112"
            },

            {
                label: "Police",
                number: "113"
            },

            {
                label: "Fire",
                number: "115"
            },

            {
                label: "Medical emergency",
                number: "118"
            }

        ],

        places: [

            {
                name: "Rome",
                description:
                    "Ancient monuments, museums, piazzas and layers of Roman history.",
                image:
                    "https://images.unsplash.com/photo-1529260830199-42c24126f198"
            },

            {
                name: "Florence",
                description:
                    "Renaissance art, architecture and compact historic streets.",
                image:
                    "https://images.unsplash.com/photo-1533105079780-92b9be482077"
            },

            {
                name: "Venice",
                description:
                    "Canals, historic architecture and a distinctive lagoon setting.",
                image:
                    "https://images.unsplash.com/photo-1514890547357-a9ee288728e0"
            },

            {
                name: "Amalfi Coast",
                description:
                    "Dramatic coastal scenery and hillside towns overlooking the Mediterranean.",
                image:
                    "https://images.unsplash.com/photo-1530789253388-582c481c54b0"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹60k–₹80k",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹20k+"],
                    ["Food", "₹10k+"],
                    ["Transport", "₹7k+"],
                    ["Activities", "₹8k+"],
                    ["Extras", "₹8k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹1.2L–₹1.8L",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹50k+"],
                    ["Food", "₹20k+"],
                    ["Transport", "₹10k+"],
                    ["Activities", "₹25k+"],
                    ["Extras", "₹15k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹2.8L+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹1.3L+"],
                    ["Food", "₹45k+"],
                    ["Transport", "₹25k+"],
                    ["Activities", "₹50k+"],
                    ["Extras", "₹25k+"]
                ]
            }

        },

        tips: [

            "Book major museums and monuments early in high season.",

            "Validate train information on official operators.",

            "Keep your belongings secure in major visitor centres.",

            "Respect church and religious-site dress expectations.",

            "Leave time for regional food and neighbourhood experiences."

        ]

    },


    /* =====================================================
       UNITED KINGDOM / ENGLAND
    ====================================================== */

    "England": {

        country: "United Kingdom",

        tagline:
            "Historic cities, royal heritage, countryside, museums and coastal landscapes.",

        image:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",

        geography:
            "England occupies the southern and central part of Great Britain, combining urban regions, rolling countryside, national parks and a varied coastline.",

        climate:
            "Temperate maritime climate with relatively mild winters, cool summers and frequent changeable weather.",

        culture:
            "English culture includes literature, music, historic institutions, sport, theatre, architecture and strong regional traditions.",

        language:
            "English",

        currency:
            "Pound Sterling (£)",

        bestTime:
            "May–September",

        timezone:
            "GMT / British Summer Time",

        safety: [

            "Keep valuables secure in busy transport hubs.",

            "Weather can change quickly, so carry suitable layers.",

            "Take care when driving or crossing roads; traffic drives on the left.",

            "Use official transport and accommodation services."

        ],

        emergency: [

            {
                label: "Emergency",
                number: "999"
            },

            {
                label: "Emergency",
                number: "112"
            }

        ],

        places: [

            {
                name: "London",
                description:
                    "Historic capital with museums, architecture, parks and global culture.",
                image:
                    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
            },

            {
                name: "Bath",
                description:
                    "Historic city famous for Roman heritage and Georgian architecture.",
                image:
                    "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22"
            },

            {
                name: "Lake District",
                description:
                    "Mountain and lake landscapes in northwest England.",
                image:
                    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
            },

            {
                name: "Cornwall",
                description:
                    "Dramatic coastline, beaches and distinctive southwest landscapes.",
                image:
                    "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹65k–₹85k",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹25k+"],
                    ["Food", "₹10k+"],
                    ["Transport", "₹7k+"],
                    ["Activities", "₹8k+"],
                    ["Extras", "₹8k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹1.3L–₹1.9L",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹55k+"],
                    ["Food", "₹22k+"],
                    ["Transport", "₹12k+"],
                    ["Activities", "₹25k+"],
                    ["Extras", "₹15k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹3L+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹1.4L+"],
                    ["Food", "₹50k+"],
                    ["Transport", "₹25k+"],
                    ["Activities", "₹50k+"],
                    ["Extras", "₹25k+"]
                ]
            }

        },

        tips: [

            "Carry a waterproof layer because weather changes quickly.",

            "Rail travel is useful for connecting many major cities.",

            "Check attraction booking requirements.",

            "Respect heritage sites and countryside paths.",

            "Keep emergency contact information accessible."

        ]

    },


    /* =====================================================
       INDONESIA / BALI
    ====================================================== */

    "Bali": {

        country: "Indonesia",

        tagline:
            "Tropical scenery, temples, rice terraces, beaches and a distinctive cultural landscape.",

        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4",

        geography:
            "Bali is a volcanic Indonesian island between Java and Lombok, combining mountains, rice terraces, forests, beaches and coastal communities.",

        climate:
            "Tropical climate with warm temperatures year-round and wetter and drier seasonal patterns.",

        culture:
            "Balinese Hindu traditions, temples, ceremonies, dance, crafts and community life strongly shape the island's identity.",

        language:
            "Indonesian and Balinese; English is common in major tourist areas.",

        currency:
            "Indonesian Rupiah (IDR)",

        bestTime:
            "April–October",

        timezone:
            "Central Indonesia Time (UTC +8)",

        safety: [

            "Use authorised transport and activity providers.",

            "Check sea and weather conditions before coastal activities.",

            "Respect temple rules and local religious customs.",

            "Be careful around traffic and busy roads."

        ],

        emergency: [

            {
                label: "Police",
                number: "110"
            },

            {
                label: "Ambulance",
                number: "118 / 119"
            },

            {
                label: "Fire",
                number: "112"
            }

        ],

        places: [

            {
                name: "Ubud",
                description:
                    "A cultural centre surrounded by rice terraces, forests, arts and temples.",
                image:
                    "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
            },

            {
                name: "Seminyak",
                description:
                    "Coastal area with restaurants, shopping and beach sunsets.",
                image:
                    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8"
            },

            {
                name: "Uluwatu",
                description:
                    "Clifftop landscapes and coastal scenery on Bali's southern peninsula.",
                image:
                    "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8"
            },

            {
                name: "Nusa Dua",
                description:
                    "Developed resort area with beaches and waterfront stays.",
                image:
                    "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹35k–₹50k",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹10k+"],
                    ["Food", "₹6k+"],
                    ["Transport", "₹5k+"],
                    ["Activities", "₹6k+"],
                    ["Extras", "₹5k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹75k–₹1.1L",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹30k+"],
                    ["Food", "₹12k+"],
                    ["Transport", "₹8k+"],
                    ["Activities", "₹15k+"],
                    ["Extras", "₹10k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹2L+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹85k+"],
                    ["Food", "₹35k+"],
                    ["Transport", "₹25k+"],
                    ["Activities", "₹35k+"],
                    ["Extras", "₹20k+"]
                ]
            }

        },

        tips: [

            "Respect temple dress codes and ceremony areas.",

            "Keep hydrated in hot and humid weather.",

            "Use official or reputable transport providers.",

            "Check weather before boat or coastal travel.",

            "Avoid disturbing religious ceremonies or offerings."

        ]

    },


    /* =====================================================
       SWITZERLAND
    ====================================================== */

    "Swiss Alps": {

        country: "Switzerland",

        tagline:
            "Spectacular alpine scenery, mountain villages, lakes and scenic rail journeys.",

        image:
            "https://images.unsplash.com/photo-1527668752968-14dc70a27c95",

        geography:
            "The Swiss Alps cover a large part of Switzerland and include high peaks, valleys, glaciers, lakes and mountain communities.",

        climate:
            "Climate varies strongly with altitude. Valleys can be relatively mild while higher elevations remain cold and snowy for much of the year.",

        culture:
            "Swiss culture combines German, French, Italian and Romansh influences with strong regional traditions.",

        language:
            "German, French, Italian and Romansh; English is common in tourist regions.",

        currency:
            "Swiss Franc (CHF)",

        bestTime:
            "June–September for hiking; December–March for winter tourism",

        timezone:
            "Central European Time / Summer Time",

        safety: [

            "Mountain weather can change quickly.",

            "Check official trail and lift conditions before going into the mountains.",

            "Stay on appropriate marked routes.",

            "Travel insurance is especially important for mountain travel."

        ],

        emergency: [

            {
                label: "General emergency",
                number: "112"
            },

            {
                label: "Police",
                number: "117"
            },

            {
                label: "Fire",
                number: "118"
            },

            {
                label: "Ambulance",
                number: "144"
            }

        ],

        places: [

            {
                name: "Zermatt",
                description:
                    "Famous alpine resort village near the Matterhorn.",
                image:
                    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7"
            },

            {
                name: "Interlaken",
                description:
                    "A base between two lakes surrounded by dramatic mountain scenery.",
                image:
                    "https://images.unsplash.com/photo-1527668752968-14dc70a27c95"
            },

            {
                name: "Lucerne",
                description:
                    "Historic lakeside city surrounded by Alpine landscapes.",
                image:
                    "https://images.unsplash.com/photo-1527668752968-14dc70a27c95"
            },

            {
                name: "Lauterbrunnen",
                description:
                    "Dramatic valley with waterfalls and steep mountain walls.",
                image:
                    "https://images.unsplash.com/photo-1521292270410-a8c4d716d518"
            }

        ],

        budgets: {

            limited: {
                title: "Limited budget",
                price: "₹70k–₹95k",
                note: "4-day on-ground estimate",
                items: [
                    ["Stay", "₹28k+"],
                    ["Food", "₹12k+"],
                    ["Transport", "₹10k+"],
                    ["Activities", "₹10k+"],
                    ["Extras", "₹8k+"]
                ]
            },

            comfortable: {
                title: "Comfortable",
                price: "₹1.4L–₹2L",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹60k+"],
                    ["Food", "₹22k+"],
                    ["Transport", "₹18k+"],
                    ["Activities", "₹30k+"],
                    ["Extras", "₹15k+"]
                ]
            },

            luxury: {
                title: "Luxury",
                price: "₹3L+",
                note: "4-day planning estimate",
                items: [
                    ["Stay", "₹1.4L+"],
                    ["Food", "₹50k+"],
                    ["Transport", "₹35k+"],
                    ["Activities", "₹55k+"],
                    ["Extras", "₹30k+"]
                ]
            }

        },

        tips: [

            "Check mountain weather and route conditions before setting out.",

            "Carry layers because temperatures vary with altitude.",

            "Use official rail information for scenic journeys.",

            "Respect marked routes and environmental rules.",

            "Don't underestimate travel time between mountain areas."

        ]

    },


    /* =====================================================
       ANTARCTICA
    ====================================================== */

    "Antarctica": {

        country: "Antarctica",

        tagline:
            "A remote polar wilderness of ice, sea, mountains and extraordinary wildlife.",

        image:
            "https://img.magnific.com/premium-photo/minimalist-antarctica-day-background-featuring-icy-landscape_698349-118.jpg?semt=ais_hybrid&w=740&q=80",

        geography:
            "Antarctica surrounds the South Pole and is covered by a vast ice sheet. Most tourism occurs around the Antarctic Peninsula and nearby islands.",

        climate:
            "Extremely cold polar climate with severe, rapidly changing weather. Antarctic summer is the principal visitor season.",

        culture:
            "There is no permanent indigenous population or conventional local culture. Visitors encounter a scientific and expedition environment governed by Antarctic Treaty arrangements.",

        language:
            "No single local language. Expedition and research operations use different national languages; English is common in tourism.",

        currency:
            "No local currency",

        bestTime:
            "November–February",

        timezone:
            "Varies by expedition location",

        safety: [

            "Travel only through properly organised and authorised expedition arrangements.",

            "Follow your expedition leader's safety instructions at all times.",

            "Antarctic weather can change rapidly and rescue may be far away.",

            "Carry appropriate specialist travel insurance and emergency coverage.",

            "Do not disturb wildlife or protected environments."

        ],

        emergency: [

            {
                label: "Emergency",
                number: "Contact expedition operator"
            },

            {
                label: "Expedition leader",
                number: "Carry operator contact"
            }

        ],

        places: [

            {
                name: "Antarctic Peninsula",
                description:
                    "The most accessible part of Antarctica for many organised expeditions.",
                image:
                    "https://images.unsplash.com/photo-1551415923-2f8fe11b4c0a"
            },

            {
                name: "South Shetland Islands",
                description:
                    "Island group close to the Antarctic Peninsula and common expedition region.",
                image:
                    "https://images.unsplash.com/photo-1517783999520-f068d7431a60"
            },

            {
                name: "Lemaire Channel",
                description:
                    "A spectacular narrow waterway surrounded by steep polar peaks.",
                image:
                    "https://images.unsplash.com/photo-1483347756197-71ef80e95f73"
            },

            {
                name: "Deception Island",
                description:
                    "A volcanic island and notable Antarctic expedition destination.",
                image:
                    "https://images.unsplash.com/photo-1491002052546-bf38f186af45"
            }

        ],

        budgets: {

            limited: {
                title: "Limited expedition",
                price: "₹2L–₹3.5L+",
                note: "Highly variable expedition pricing",
                items: [
                    ["Expedition", "Largest cost"],
                    ["Transfers", "Route dependent"],
                    ["Activities", "Usually package dependent"],
                    ["Insurance", "Essential"],
                    ["Extras", "Variable"]
                ]
            },

            comfortable: {
                title: "Comfortable expedition",
                price: "₹4L–₹7L+",
                note: "Highly variable expedition pricing",
                items: [
                    ["Expedition", "Largest cost"],
                    ["Cabin", "Category dependent"],
                    ["Transfers", "Route dependent"],
                    ["Insurance", "Essential"],
                    ["Extras", "Variable"]
                ]
            },

            luxury: {
                title: "Premium expedition",
                price: "₹8L+",
                note: "Highly variable expedition pricing",
                items: [
                    ["Expedition", "Largest cost"],
                    ["Cabin", "Premium category"],
                    ["Transfers", "Route dependent"],
                    ["Insurance", "Essential"],
                    ["Extras", "Variable"]
                ]
            }

        },

        tips: [

            "Choose an experienced expedition operator with strong safety procedures.",

            "Prepare for cold, wind and rapidly changing weather.",

            "Ask the operator about medical facilities and evacuation procedures.",

            "Follow Antarctic environmental visitor guidelines.",

            "Never assume a conventional city-style emergency service is nearby."

        ]

    }

};


/* =========================================================
   HELPER
========================================================= */

function getDestinationFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    return params.get("place");

}



/* =========================================================
   RENDER FACTS
========================================================= */

function renderFacts(destination) {

    document.getElementById(
        "factGeography"
    ).textContent =
        destination.geography;


    document.getElementById(
        "factClimate"
    ).textContent =
        destination.climate;


    document.getElementById(
        "factLanguage"
    ).textContent =
        destination.language;


    document.getElementById(
        "factCurrency"
    ).textContent =
        destination.currency;


    document.getElementById(
        "factBestTime"
    ).textContent =
        destination.bestTime;


    document.getElementById(
        "factTimezone"
    ).textContent =
        destination.timezone;

}


/* =========================================================
   RENDER PLACES
========================================================= */

function renderPlaces(destination) {

    const grid =
        document.getElementById(
            "placesGrid"
        );


    grid.innerHTML = "";


    destination.places.forEach(
        function (place) {

            grid.innerHTML += `

                <article class="place-card">

                    <img
                        class="place-image"
                        src="${place.image}"
                        alt="${place.name}"
                        loading="lazy"
                    >

                    <div class="place-content">

                        <h3>
                            ${place.name}
                        </h3>

                        <p>
                            ${place.description}
                        </p>

                    </div>

                </article>

            `;

        }
    );

}


/* =========================================================
   RENDER BUDGETS
========================================================= */

function renderBudgets(destination) {

    const grid =
        document.getElementById(
            "budgetGrid"
        );


    grid.innerHTML = "";


    const budgetTypes = [

        {
            key: "limited",
            label: "LIMITED"
        },

        {
            key: "comfortable",
            label: "COMFORTABLE"
        },

        {
            key: "luxury",
            label: "LUXURY"
        }

    ];


    budgetTypes.forEach(
        function (type, index) {

            const budget =
                destination
                    .budgets[type.key];


            const itemsHTML =
                budget.items.map(
                    function (item) {

                        return `

                            <div>

                                <span>
                                    ${item[0]}
                                </span>

                                <strong>
                                    ${item[1]}
                                </strong>

                            </div>

                        `;

                    }
                ).join("");


            grid.innerHTML += `

                <article
                    class="budget-card
                    ${index === 1 ? "featured" : ""}"
                >

                    <span class="budget-type">
                        ${type.label}
                    </span>

                    <h3>
                        ${budget.title}
                    </h3>

                    <strong class="budget-price">
                        ${budget.price}
                    </strong>

                    <span class="budget-note">
                        ${budget.note}
                    </span>


                    <div class="budget-list">

                        ${itemsHTML}

                    </div>

                </article>

            `;

        }
    );

}


/* =========================================================
   RENDER SAFETY
========================================================= */

function renderSafety(destination) {

    const safetyList =
        document.getElementById(
            "safetyList"
        );


    safetyList.innerHTML = "";


    destination.safety.forEach(
        function (item) {

            safetyList.innerHTML += `
                <li>
                    ${item}
                </li>
            `;

        }
    );


    const emergencyList =
        document.getElementById(
            "emergencyList"
        );


    emergencyList.innerHTML = "";


    destination.emergency.forEach(
        function (item) {

            const cleanNumber =
                item.number
                    .replace(/[^0-9+]/g, "");


            emergencyList.innerHTML += `

                <div class="emergency-item">

                    <span>
                        ${item.label}
                    </span>

                    <a
                        href="tel:${cleanNumber}"
                    >
                        ${item.number}
                    </a>

                </div>

            `;

        }
    );

}


/* =========================================================
   RENDER TIPS
========================================================= */

function renderTips(destination) {

    const grid =
        document.getElementById(
            "tipsGrid"
        );


    grid.innerHTML = "";


    destination.tips.forEach(
        function (tip, index) {

            grid.innerHTML += `

                <article class="tip-card">

                    <span class="tip-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                        Traveller tip
                    </h3>

                    <p>
                        ${tip}
                    </p>

                </article>

            `;

        }
    );

}


/* =========================================================
   OPEN DESTINATION
========================================================= */

function renderDestination(destination, name) {

    document.title =
        `${name} | SAKUM`;


    document.getElementById(
        "heroTitle"
    ).textContent =
        name;


    document.getElementById(
        "heroCountry"
    ).textContent =
        destination.country
            .toUpperCase();


    document.getElementById(
        "heroTagline"
    ).textContent =
        destination.tagline;


    document.getElementById(
        "overviewTitle"
    ).textContent =
        `About ${name}`;


    document.getElementById(
        "overviewDescription"
    ).textContent =
        destination.geography;


    document.getElementById(
        "geographyText"
    ).textContent =
        destination.geography;


    document.getElementById(
        "climateText"
    ).textContent =
        destination.climate;


    document.getElementById(
        "cultureText"
    ).textContent =
        destination.culture;


    document.getElementById(
        "languageText"
    ).textContent =
        destination.language;


    document.getElementById(
        "destinationHero"
    ).style.backgroundImage =
        `url("${destination.image}")`;


    const planURL =
        `../dashboard/dashboard.html?destination=${encodeURIComponent(name)}`;


    document.getElementById(
        "planTripButton"
    ).href =
        planURL;


    document.getElementById(
        "finalPlanButton"
    ).href =
        planURL;


    renderFacts(destination);

    renderPlaces(destination);

    renderBudgets(destination);

    renderSafety(destination);

    renderTips(destination);

}


/* =========================================================
   PRINT
========================================================= */

document
    .getElementById(
        "printGuideButton"
    )
    .addEventListener(
        "click",
        function () {

            window.print();

        }
    );


/* =========================================================
   START DESTINATION PAGE
   PUBLIC PAGE — NO LOGIN REQUIRED
========================================================= */

function startDestinationPage() {

    const name =
        getDestinationFromURL();


    if (!name) {

        window.location.href =
            "search.html";

        return;

    }


    const destination =
        destinations[name];


    if (!destination) {

        window.location.href =
            "search.html";

        return;

    }


    renderDestination(
        destination,
        name
    );

}


startDestinationPage();