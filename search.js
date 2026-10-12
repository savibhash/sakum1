/* =========================================================
   SAKUM SEARCH RESULTS
========================================================= */


const params =
    new URLSearchParams(
        window.location.search
    );


const destination =
    params.get("destination") || "";


const date =
    params.get("date") || "";


const budget =
    params.get("budget") || "";


/* =========================================================
   SEARCH SUMMARY
========================================================= */

const searchSummary =
    document.getElementById(
        "searchSummary"
    );


if (destination) {

    searchSummary.innerHTML += `
        <span class="search-tag">
            📍 ${destination}
        </span>
    `;

}


if (date) {

    searchSummary.innerHTML += `
        <span class="search-tag">
            📅 ${date}
        </span>
    `;

}


if (budget) {

    searchSummary.innerHTML += `
        <span class="search-tag">
            💰 Budget selected
        </span>
    `;

}


/* =========================================================
   DESTINATION DATA
========================================================= */

const destinations = [

    {
        name: "Manali",
        country: "India",
        category: "Mountains • Adventure • Nature",
        description:
            "Peaceful Himalayan landscapes, adventure and mountain escapes.",
        image:
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        name: "Goa",
        country: "India",
        category: "Beaches • Food • Nightlife",
        description:
            "Beautiful beaches, local food and unforgettable sunsets.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },

    {
        name: "Tokyo",
        country: "Japan",
        category: "Culture • Technology • Food",
        description:
            "An energetic city mixing tradition, technology and incredible food.",
        image:
            "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e"
    },

    {
        name: "New York",
        country: "USA",
        category: "City • Culture • Shopping",
        description:
            "Iconic skyline, museums, food and one of the world's busiest cities.",
        image:
            "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee"
    },

    {
        name: "Maldives",
        country: "Maldives",
        category: "Islands • Beaches • Relaxation",
        description:
            "Clear waters, tropical islands and peaceful coastal escapes.",
        image:
            "https://images.unsplash.com/photo-1514282401047-d79a71a590e8"
    },

    {
        name: "Dubai",
        country: "UAE",
        category: "Luxury • Architecture • Adventure",
        description:
            "Modern architecture, desert adventures and luxury experiences.",
        image:
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
    },

    {
        name: "Darjeeling",
        country: "India",
        category: "Mountains • Tea • Nature",
        description:
            "Hills, tea gardens, mountain views and peaceful escapes.",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    },

    {
        name: "Shanghai",
        country: "China",
        category: "City • Food • Culture",
        description:
            "A spectacular combination of modern skyline and historic culture.",
        image:
            "https://images.unsplash.com/photo-1548919973-5cef591cdbc9"
    },

    {
        name: "Moscow",
        country: "Russia",
        category: "History • Architecture • Culture",
        description:
            "Historic landmarks, impressive architecture and rich cultural heritage.",
        image:
            "https://wallpapercave.com/wp/wp12215575.jpg"
    },

    {
        name: "Berlin",
        country: "Germany",
        category: "History • Art • Nightlife",
        description:
            "Creative neighbourhoods, history, museums and modern culture.",
        image:
            "https://images.unsplash.com/photo-1560969184-10fe8719e047"
    },

    {
        name: "Italy",
        country: "Italy",
        category: "History • Food • Art",
        description:
            "Historic cities, incredible food, architecture and art.",
        image:
            "https://images.unsplash.com/photo-1529260830199-42c24126f198"
    },

    {
        name: "England",
        country: "United Kingdom",
        category: "History • Cities • Countryside",
        description:
            "Historic towns, iconic cities and beautiful countryside.",
        image:
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad"
    },

    {
        name: "Antarctica",
        country: "Antarctica",
        category: "Adventure • Wildlife • Ice",
        description:
            "Remote landscapes, ice-covered wilderness and extraordinary expeditions.",
        image:
            "https://img.magnific.com/premium-photo/minimalist-antarctica-day-background-featuring-icy-landscape_698349-118.jpg?semt=ais_hybrid&w=740&q=80"
    },

    {
        name: "Paris",
        country: "France",
        category: "Art • Food • Architecture",
        description:
            "Romantic streets, museums, architecture and legendary cafés.",
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    },

    {
        name: "Bali",
        country: "Indonesia",
        category: "Beaches • Temples • Nature",
        description:
            "Tropical scenery, temples, beaches and vibrant culture.",
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
    },

    {
        name: "Swiss Alps",
        country: "Switzerland",
        category: "Mountains • Nature • Adventure",
        description:
            "Snowy peaks, alpine villages and spectacular landscapes.",
        image:
            "https://images.unsplash.com/photo-1527668752968-14dc70a27c95"
    }

];

/* =========================================================
   FILTER
========================================================= */

const filtered =
    destinations.filter(
        function (place) {

            if (!destination) {
                return true;
            }

            const query =
                destination
                    .toLowerCase()
                    .trim();


            return (
                place.name
                    .toLowerCase()
                    .includes(query)

                ||

                place.country
                    .toLowerCase()
                    .includes(query)

                ||

                place.category
                    .toLowerCase()
                    .includes(query)
            );

        }
    );


/* =========================================================
   RENDER
========================================================= */

const resultsGrid =
    document.getElementById(
        "resultsGrid"
    );


if (filtered.length === 0) {

    resultsGrid.innerHTML = `

        <div class="no-results">

            <h2>
                No matching destination found.
            </h2>

            <p>
                Try another destination such as
                Manali, Goa, Tokyo, Bali or Paris.
            </p>

        </div>

    `;

} else {

    filtered.forEach(
        function (place) {

            resultsGrid.innerHTML += `

                <article class="result-card">

                    <div
                        class="result-image"
                        style="
                            background-image:
                            url('${place.image}');
                        "
                    ></div>


                    <div class="result-content">

                        <h2>
    ${place.name}
</h2>

<p>
    ${place.country}
    •
    ${place.category}
</p>

<p>
    ${place.description}
</p>

                        <a
                            href="../pages/destination.html?place=${encodeURIComponent(place.name)}"
                            class="result-btn"
                        >
                            Explore destination →
                        </a>

                    </div>

                </article>

            `;

        }
    );

}