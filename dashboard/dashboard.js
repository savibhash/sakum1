(async function initSakumDashboard() {

/* =========================================================

   SAKUM DASHBOARD

   AUTHENTICATION CHECK

========================================================= */

const authResponse = await fetch(

    "/api/auth/me",

    {

        method: "GET",

        credentials: "same-origin"

    }

);

if (!authResponse.ok) {

    window.location.replace(

        "../pages/login.html"

    );

    throw new Error(

        "User is not authenticated."

    );

}

const authData =

    await authResponse.json();

/* =========================================================

   CURRENT USER

========================================================= */

const currentUser =

    authData.user;

console.log(

    "Logged in as:",

    currentUser?.name ?? "Unknown user"

);

/* =========================================================

   HELPER

========================================================= */

function getData(key) {

    return JSON.parse(

        localStorage.getItem(key)

    ) || [];

}

function saveData(key, data) {

    localStorage.setItem(

        key,

        JSON.stringify(data)

    );

}

/* =========================================================

   USER INFORMATION

========================================================= */

const user =

    currentUser || {

        name: "Traveller",

        email: "traveller@example.com"

    };

const firstLetter =

    user.name

        .charAt(0)

        .toUpperCase();

document.getElementById(

    "welcomeTitle"

).textContent =

    `Welcome back, ${user.name}.`;

document.getElementById(

    "topbarName"

).textContent =

    user.name;

document.getElementById(

    "topAvatar"

).textContent =

    firstLetter;

document.getElementById(

    "profileName"

).textContent =

    user.name;

document.getElementById(

    "profileEmail"

).textContent =

    user.email;

/* =========================================================

   NAVIGATION

========================================================= */

const sideLinks =

    document.querySelectorAll(

        ".side-link"

    );

const sections =

    document.querySelectorAll(

        ".dashboard-section"

    );

const pageTitle =

    document.getElementById(

        "pageTitle"

    );

function openSection(sectionName) {

    sideLinks.forEach(function (link) {

        link.classList.toggle(

            "active",

            link.dataset.section === sectionName

        );

    });

    sections.forEach(function (section) {

        section.classList.toggle(

            "active",

            section.id ===

            `section-${sectionName}`

        );

    });

    const activeLink =

        document.querySelector(

            `.side-link[data-section="${sectionName}"]`

        );

    if (activeLink) {

        pageTitle.textContent =

            activeLink

                .querySelector("span:last-child")

                .textContent;

    }

}

sideLinks.forEach(function (link) {

    link.addEventListener(

        "click",

        function () {

            openSection(

                link.dataset.section

            );

        }

    );

});

/* Open dashboard sections from the homepage workspace without navigating the outer page. */
function openRequestedDashboardSection(viewName) {
    const normalize = function (value) {
        return String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    };

    const requested = normalize(viewName || "dashboard");
    const aliases = {
        dashboard: ["dashboard", "home", "overview"],
        trips: ["trips", "mytrips"],
        itinerary: ["itinerary", "plan"],
        journal: ["journal", "writejournal", "myjournal"],
        notes: ["notes", "note"],
        tickets: ["tickets", "ticket"],
        saved: ["saved", "savedplace", "savedplaces", "favorites", "favourites"],
        budget: ["budget", "expenses"],
        profile: ["profile", "account"],
        settings: ["settings", "setting"]
    };
    const wanted = aliases[requested] || [requested];

    const link = Array.from(sideLinks).find(function (candidate) {
        const key = normalize(candidate.dataset.section);
        const text = normalize(candidate.textContent);
        return wanted.includes(key) || wanted.includes(text) || wanted.some(function (alias) {
            return key.includes(alias) || text.includes(alias);
        });
    });

    if (link && link.dataset.section) {
        openSection(link.dataset.section);
        return true;
    }

    const section = Array.from(sections).find(function (candidate) {
        const key = normalize(candidate.id.replace(/^section-/, ""));
        return wanted.includes(key) || wanted.some(function (alias) { return key.includes(alias); });
    });

    if (section) {
        openSection(section.id.replace(/^section-/, ""));
        return true;
    }

    // A wrong/unknown view should fall back to the dashboard, not leave a blank area.
    const dashboardLink = Array.from(sideLinks).find(function (candidate) {
        return normalize(candidate.dataset.section) === "dashboard" || normalize(candidate.textContent).includes("dashboard");
    });
    if (dashboardLink && dashboardLink.dataset.section) {
        openSection(dashboardLink.dataset.section);
        return true;
    }
    return false;
}

window.openSakumDashboardSection = openRequestedDashboardSection;

const initialWorkspaceView = new URLSearchParams(window.location.search).get("view");
if (initialWorkspaceView) {
    openRequestedDashboardSection(initialWorkspaceView);
}


/* Quick action buttons */

document

    .querySelectorAll(

        "[data-open-section]"

    )

    .forEach(function (button) {

        button.addEventListener(

            "click",

            function () {

                openSection(

                    button.dataset.openSection

                );

            }

        );

    });

/* =========================================================

   MOBILE SIDEBAR

========================================================= */

const sidebar =

    document.getElementById("sidebar");

const mobileMenu =

    document.getElementById("mobileMenu");

const sidebarClose =

    document.getElementById("sidebarClose");

const sidebarOverlay =

    document.getElementById("sidebarOverlay");

function openSidebar() {

    if (sidebar) {

        sidebar.classList.add("open");

    }

    if (sidebarOverlay) {

        sidebarOverlay.classList.add("open");

    }

}

function closeSidebar() {

    if (sidebar) {

        sidebar.classList.remove("open");

    }

    if (sidebarOverlay) {

        sidebarOverlay.classList.remove("open");

    }

}

/* Open sidebar */

if (mobileMenu) {

    mobileMenu.addEventListener(

        "click",

        openSidebar

    );

}

/* Close sidebar */

if (sidebarClose) {

    sidebarClose.addEventListener(

        "click",

        closeSidebar

    );

}

/* Click outside sidebar */

if (sidebarOverlay) {

    sidebarOverlay.addEventListener(

        "click",

        closeSidebar

    );

}

/* =========================================================

   TRIPS

========================================================= */

let trips = JSON.parse(

    localStorage.getItem("sakumTrips")

) || [];

const tripForm =

    document.getElementById("tripForm");

const tripList =

    document.getElementById("tripList");

function renderTrips() {

    if (!tripList) {

        return;

    }

    tripList.innerHTML = "";

    if (trips.length === 0) {

        tripList.innerHTML = `

            <div class="saved-item">

                <div>

                    <h3>No trips yet</h3>

                    <p>

                        Create your first journey above.

                    </p>

                </div>

            </div>

        `;

        return;

    }

    trips.forEach(function (trip, index) {

        const article =

            document.createElement("article");

        article.className =

            "saved-item";

        article.innerHTML = `

            <div>

                <h3>

                    ${escapeHTML(trip.name)}

                </h3>

                <p>

                    📍 ${escapeHTML(trip.destination)}

                </p>

                <span>

                    ${trip.date}

                    • ₹${Number(trip.budget).toLocaleString("en-IN")}

                </span>

            </div>

            <button

                type="button"

                class="delete-button"

                data-trip-index="${index}"

            >

                Delete

            </button>

        `;

        tripList.appendChild(article);

    });

    document

        .querySelectorAll("[data-trip-index]")

        .forEach(function (button) {

            button.addEventListener(

                "click",

                function () {

                    const index =

                        Number(

                            button.dataset.tripIndex

                        );

                    trips.splice(index, 1);

                    localStorage.setItem(

                        "sakumTrips",

                        JSON.stringify(trips)

                    );

                    renderTrips();

                    updateStats();

                }

            );

        });

}

/* SAVE TRIP */

if (tripForm) {

    tripForm.addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            const name =

                document

                    .getElementById("tripName")

                    .value

                    .trim();

            const destination =

                document

                    .getElementById("tripDestination")

                    .value

                    .trim();

            const date =

                document

                    .getElementById("tripDate")

                    .value;

            const budget =

                document

                    .getElementById("tripBudget")

                    .value;

            if (

                !name ||

                !destination ||

                !date ||

                !budget

            ) {

                alert(

                    "Please fill in all trip details."

                );

                return;

            }

            const newTrip = {

                name: name,

                destination: destination,

                date: date,

                budget: Number(budget)

            };

            trips.push(newTrip);

            localStorage.setItem(

                "sakumTrips",

                JSON.stringify(trips)

            );

            tripForm.reset();

            renderTrips();

            updateStats();

            alert(

                "Trip saved successfully! 🧳"

            );

        }

    );

}

/* First render */

renderTrips();

/* =========================================================

   ITINERARY

========================================================= */

let itinerary =

    getData("sakumItinerary");

function renderItinerary() {

    const list =

        document.getElementById(

            "itineraryList"

        );

    list.innerHTML = "";

    if (itinerary.length === 0) {

        list.innerHTML = `

            <div class="saved-item">

                <div>

                    <h3>No itinerary items</h3>

                    <p>Add activities for your trip.</p>

                </div>

            </div>

        `;

        return;

    }

    itinerary.forEach(function (item, index) {

        list.innerHTML += `

            <article class="saved-item">

                <div>

                    <h3>

                        ${item.title}

                    </h3>

                    <p>

                        ${item.date}

                        ${item.time ? " • " + item.time : ""}

                    </p>

                </div>

                <button

                    class="delete-button"

                    data-itinerary="${index}"

                >

                    Delete

                </button>

            </article>

        `;

    });

    document

        .querySelectorAll(

            "[data-itinerary]"

        )

        .forEach(function (button) {

            button.addEventListener(

                "click",

                function () {

                    itinerary.splice(

                        Number(

                            button.dataset.itinerary

                        ),

                        1

                    );

                    saveData(

                        "sakumItinerary",

                        itinerary

                    );

                    renderItinerary();

                }

            );

        });

}

document

    .getElementById("itineraryForm")

    .addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            itinerary.push({

                date:

                    document

                        .getElementById("itemDate")

                        .value,

                time:

                    document

                        .getElementById("itemTime")

                        .value,

                title:

                    document

                        .getElementById("itemTitle")

                        .value

                        .trim()

            });

            saveData(

                "sakumItinerary",

                itinerary

            );

            event.target.reset();

            renderItinerary();

            alert(

                "Itinerary item added!"

            );

        }

    );

/* =========================================================

   JOURNAL

========================================================= */

let journals =

    getData("sakumJournals");

function renderJournals() {

    const list =

        document.getElementById(

            "journalList"

        );

    list.innerHTML = "";

    if (journals.length === 0) {

        list.innerHTML = `

            <div class="saved-item">

                <div>

                    <h3>No stories yet</h3>

                    <p>Your first travel story starts here.</p>

                </div>

            </div>

        `;

        return;

    }

    journals.forEach(function (journal, index) {

        list.innerHTML += `

            <article class="saved-item">

                <div>

                    <h3>

                        ${journal.title}

                    </h3>

                    <p>

                        ${journal.text}

                    </p>

                </div>

                <button

                    class="delete-button"

                    data-journal="${index}"

                >

                    Delete

                </button>

            </article>

        `;

    });

    document

        .querySelectorAll(

            "[data-journal]"

        )

        .forEach(function (button) {

            button.addEventListener(

                "click",

                function () {

                    journals.splice(

                        Number(

                            button.dataset.journal

                        ),

                        1

                    );

                    saveData(

                        "sakumJournals",

                        journals

                    );

                    renderJournals();

                    updateStats();

                }

            );

        });

}

document

    .getElementById("journalForm")

    .addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            journals.push({

                title:

                    document

                        .getElementById("journalTitle")

                        .value

                        .trim(),

                text:

                    document

                        .getElementById("journalText")

                        .value

                        .trim()

            });

            saveData(

                "sakumJournals",

                journals

            );

            event.target.reset();

            renderJournals();

            updateStats();

            alert(

                "Journal saved!"

            );

        }

    );

/* =========================================================

   NOTES

========================================================= */

let notes =

    getData("sakumNotes");

function renderNotes() {

    const list =

        document.getElementById(

            "notesList"

        );

    list.innerHTML = "";

    notes.forEach(function (note, index) {

        list.innerHTML += `

            <article class="saved-item">

                <div>

                    <h3>

                        Note ${index + 1}

                    </h3>

                    <p>

                        ${note}

                    </p>

                </div>

                <button

                    class="delete-button"

                    data-note="${index}"

                >

                    Delete

                </button>

            </article>

        `;

    });

}

document

    .getElementById("notesForm")

    .addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            const note =

                document

                    .getElementById("noteText")

                    .value

                    .trim();

            notes.push(note);

            saveData(

                "sakumNotes",

                notes

            );

            event.target.reset();

            renderNotes();

        }

    );

/* =========================================================

   TICKETS

========================================================= */

let tickets =

    getData("sakumTickets");

function renderTickets() {

    const list =

        document.getElementById(

            "ticketList"

        );

    list.innerHTML = "";

    tickets.forEach(function (ticket, index) {

        list.innerHTML += `

            <article class="saved-item">

                <div>

                    <h3>

                        ${ticket.type}

                    </h3>

                    <p>

                        ${ticket.details}

                    </p>

                </div>

                <button

                    class="delete-button"

                    data-ticket="${index}"

                >

                    Delete

                </button>

            </article>

        `;

    });

}

document

    .getElementById("ticketForm")

    .addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            tickets.push({

                type:

                    document

                        .getElementById("ticketType")

                        .value,

                details:

                    document

                        .getElementById("ticketName")

                        .value

                        .trim()

            });

            saveData(

                "sakumTickets",

                tickets

            );

            event.target.reset();

            renderTickets();

        }

    );

/* =========================================================

   SAVED PLACES

========================================================= */

let savedPlaces =

    getData("sakumSavedPlaces");

function renderSavedPlaces() {

    const list =

        document.getElementById(

            "savedList"

        );

    list.innerHTML = "";

    if (savedPlaces.length === 0) {

        list.innerHTML = `

            <div class="saved-item">

                <div>

                    <h3>No saved places</h3>

                    <p>Add destinations you want to visit.</p>

                </div>

            </div>

        `;

        return;

    }

    savedPlaces.forEach(function (place, index) {

        list.innerHTML += `

            <article class="saved-item">

                <div>

                    <h3>

                        ♥ ${place}

                    </h3>

                    <p>

                        Saved destination

                    </p>

                </div>

                <button

                    class="delete-button"

                    data-place="${index}"

                >

                    Remove

                </button>

            </article>

        `;

    });

    document

        .querySelectorAll(

            "[data-place]"

        )

        .forEach(function (button) {

            button.addEventListener(

                "click",

                function () {

                    savedPlaces.splice(

                        Number(

                            button.dataset.place

                        ),

                        1

                    );

                    saveData(

                        "sakumSavedPlaces",

                        savedPlaces

                    );

                    renderSavedPlaces();

                    updateStats();

                }

            );

        });

}

document

    .getElementById("savedForm")

    .addEventListener(

        "submit",

        function (event) {

            event.preventDefault();

            savedPlaces.push(

                document

                    .getElementById("savedPlace")

                    .value

                    .trim()

            );

            saveData(

                "sakumSavedPlaces",

                savedPlaces

            );

            event.target.reset();

            renderSavedPlaces();

            updateStats();

        }

    );

/* =========================================================

   BUDGET

========================================================= */

function renderBudget() {

    const total =

        trips.reduce(

            function (sum, trip) {

                return sum +

                    Number(trip.budget || 0);

            },

            0

        );

    document.getElementById(

        "budgetPageTotal"

    ).textContent =

        `₹${total.toLocaleString("en-IN")}`;

    const list =

        document.getElementById(

            "budgetList"

        );

    list.innerHTML = "";

    trips.forEach(function (trip) {

        list.innerHTML += `

            <article class="saved-item">

                <div>

                    <h3>

                        ${trip.name}

                    </h3>

                    <p>

                        ${trip.destination}

                    </p>

                </div>

                <strong>

                    ₹${Number(trip.budget).toLocaleString("en-IN")}

                </strong>

            </article>

        `;

    });

}

/* =========================================================

   STATS

========================================================= */

function updateStats() {

    document.getElementById(

        "tripCount"

    ).textContent =

        trips.length;

    document.getElementById(

        "journalCount"

    ).textContent =

        journals.length;

    document.getElementById(

        "savedCount"

    ).textContent =

        savedPlaces.length;

    const total =

        trips.reduce(

            function (sum, trip) {

                return sum +

                    Number(trip.budget || 0);

            },

            0

        );

    document.getElementById(

        "budgetTotal"

    ).textContent =

        `₹${total.toLocaleString("en-IN")}`;

    renderBudget();

}

/* =========================================================

   PROFILE PHOTO

========================================================= */

const photoInput =

    document.getElementById(

        "photoInput"

    );

const profilePhoto =

    document.getElementById(

        "profilePhoto"

    );

const storedPhoto =

    localStorage.getItem(

        "sakumProfilePhoto"

    );

function displayProfilePhoto(photo) {

    profilePhoto.innerHTML = `

        <img

            src="${photo}"

            alt="Profile photo"

        >

    `;

    document.getElementById(

        "topAvatar"

    ).innerHTML = `

        <img

            src="${photo}"

            alt="Profile photo"

            style="width:100%;height:100%;object-fit:cover;border-radius:50%;"

        >

    `;

}

if (storedPhoto) {

    displayProfilePhoto(

        storedPhoto

    );

} else {

    profilePhoto.textContent =

        firstLetter;

}

photoInput.addEventListener(

    "change",

    function () {

        const file =

            photoInput.files[0];

        if (!file) {

            return;

        }

        const reader =

            new FileReader();

        reader.onload =

            function (event) {

                const photo =

                    event.target.result;

                localStorage.setItem(

                    "sakumProfilePhoto",

                    photo

                );

                displayProfilePhoto(

                    photo

                );

            };

        reader.readAsDataURL(file);

    }

);

/* =========================================================

   SETTINGS

========================================================= */

const compactToggle =

    document.getElementById(

        "compactToggle"

    );

compactToggle.addEventListener(

    "click",

    function () {

        const active =

            compactToggle.textContent ===

            "ON";

        if (active) {

            compactToggle.textContent =

                "OFF";

            document.body.classList.remove(

                "compact-sidebar"

            );

        } else {

            compactToggle.textContent =

                "ON";

            document.body.classList.add(

                "compact-sidebar"

            );

        }

    }

);

/* =========================================================

   LOGOUT

========================================================= */

const logoutButton =

    document.getElementById(

        "dashboardLogout"

    );

if (logoutButton) {

    logoutButton.addEventListener(

        "click",

        async function () {

            try {

                const response =

                    await fetch(

                        "/api/auth/logout",

                        {

                            method: "POST"

                        }

                    );

                if (!response.ok) {

                    alert(

                        "Logout failed."

                    );

                    return;

                }

                window.location.href =

                    "../pages/login.html";

            } catch (error) {

                console.error(

                    "Logout error:",

                    error

                );

                alert(

                    "Unable to logout."

                );

            }

        }

    );

}

/* =========================================================

   INITIAL RENDER

========================================================= */

renderTrips();

renderItinerary();

renderJournals();

renderNotes();

renderTickets();

renderSavedPlaces();

updateStats();

const resizer = document.getElementById('sidebarResizer');

if (sidebar && resizer) {

    let isResizing = false;

    resizer.addEventListener('mousedown', (e) => {

        isResizing = true;

        resizer.classList.add('is-resizing');

        document.body.style.cursor = 'col-resize';

        document.body.style.userSelect = 'none'; // Prevent accidental text selection while dragging

    });

    document.addEventListener('mousemove', (e) => {

        if (!isResizing) return;

        // Calculate new width relative to the left edge of the screen

        const newWidth = e.clientX;

        // Set min and max constraints (e.g., between 200px and 450px)

        if (newWidth >= 180 && newWidth <= 450) {

            sidebar.style.width = `${newWidth}px`;

            sidebar.style.minWidth = `${newWidth}px`; // ensure flex doesn't shrink it

        }

    });

    document.addEventListener('mouseup', () => {

        if (isResizing) {

            isResizing = false;

            resizer.classList.remove('is-resizing');

            document.body.style.cursor = '';

            document.body.style.userSelect = '';

        }

    });

}

function escapeHTML(value) {

    const div =

        document.createElement("div");

    div.textContent = value;

    return div.innerHTML;

}


})();
