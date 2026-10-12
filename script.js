/* =========================================================

   SAKUM - FRONTEND AUTHENTICATION DEMO

========================================================= */

/* ---------------------------------------------------------

   SHOW / HIDE PASSWORD

--------------------------------------------------------- */

const passwordButtons =

    document.querySelectorAll(".password-toggle");

passwordButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const targetId =

            button.getAttribute("data-target");

        const input =

            document.getElementById(targetId);

        if (!input) {

            return;

        }

        if (input.type === "password") {

            input.type = "text";

            button.textContent = "🙈";

            button.setAttribute(

                "aria-label",

                "Hide password"

            );

        } else {

            input.type = "password";

            button.textContent = "👁";

            button.setAttribute(

                "aria-label",

                "Show password"

            );

        }

    });

});

/* ---------------------------------------------------------

   LOGIN

--------------------------------------------------------- */

/* =========================================================

   LOGIN

========================================================= */

const loginForm =

    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(

        "submit",

        async function (event) {

            event.preventDefault();

            const email =

                document

                    .getElementById("loginEmail")

                    .value

                    .trim()

                    .toLowerCase();

            const password =

                document

                    .getElementById("loginPassword")

                    .value;

            const message =

                document.getElementById(

                    "loginMessage"

                );

            const submitButton =

                loginForm.querySelector(

                    'button[type="submit"]'

                );

            const originalButtonText =

                submitButton.innerHTML;

            /* ==========================================

               BASIC VALIDATION

            ========================================== */

            if (!email || !password) {

                message.textContent =

                    "Please enter your email and password.";

                message.className =

                    "form-message error";

                return;

            }

            /* ==========================================

               LOADING

            ========================================== */

            submitButton.disabled =

                true;

            submitButton.innerHTML = `

                <span>Signing in...</span>

                <span>...</span>

            `;

            message.textContent =

                "";

            message.className =

                "form-message";

            try {

                /* ======================================

                   SEND LOGIN REQUEST

                ====================================== */

                const response =

                    await fetch(

                        "/api/auth/login",

                        {

                            method: "POST",

                            headers: {

                                "Content-Type":

                                    "application/json"

                            },

                            body:

                                JSON.stringify({

                                    email: email,

                                    password: password

                                })

                        }

                    );

                const data =

                    await response.json();

                /* ======================================

                   FAILED LOGIN

                ====================================== */

                if (!response.ok) {

                    message.textContent =

                        data.message ||

                        "Login failed.";

                    message.className =

                        "form-message error";

                    submitButton.disabled =

                        false;

                    submitButton.innerHTML =

                        originalButtonText;

                    return;

                }

                /* ======================================

                   SUCCESS

                ====================================== */

                message.textContent =

                    "Login successful! Welcome to SAKUM.";

                message.className =

                    "form-message success";

                /*

                    IMPORTANT:

                    No localStorage authentication.

                    The server has created the

                    session cookie.

                */

                setTimeout(

                    function () {

                        window.location.href =

                            "../index.html";

                    },

                    800

                );

            } catch (error) {

                console.error(

                    "Login request failed:",

                    error

                );

                message.textContent =

                    "Unable to connect to SAKUM server.";

                message.className =

                    "form-message error";

                submitButton.disabled =

                    false;

                submitButton.innerHTML =

                    originalButtonText;

            }

        }

    );

}

/* ---------------------------------------------------------

   REGISTER

--------------------------------------------------------- */

/* =========================================================

   REGISTER

========================================================= */

const registerForm =

    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener(

        "submit",

        async function (event) {

            event.preventDefault();

            const name =

                document

                    .getElementById("registerName")

                    .value

                    .trim();

            const email =

                document

                    .getElementById("registerEmail")

                    .value

                    .trim()

                    .toLowerCase();

            const password =

                document

                    .getElementById("registerPassword")

                    .value;

            const confirmPassword =

                document

                    .getElementById("confirmPassword")

                    .value;

            const terms =

                document

                    .getElementById("terms")

                    .checked;

            const message =

                document.getElementById(

                    "registerMessage"

                );

            /* -----------------------------------------

               FRONTEND VALIDATION

            ----------------------------------------- */

            if (name.length < 2) {

                message.textContent =

                    "Please enter your full name.";

                message.className =

                    "form-message error";

                return;

            }

            if (password.length < 6) {

                message.textContent =

                    "Password must contain at least 6 characters.";

                message.className =

                    "form-message error";

                return;

            }

            if (password !== confirmPassword) {

                message.textContent =

                    "Passwords do not match.";

                message.className =

                    "form-message error";

                return;

            }

            if (!terms) {

                message.textContent =

                    "Please accept the Terms & Privacy Policy.";

                message.className =

                    "form-message error";

                return;

            }

            /* -----------------------------------------

               SHOW LOADING STATE

            ----------------------------------------- */

            const submitButton =

                registerForm.querySelector(

                    'button[type="submit"]'

                );

            const originalButtonText =

                submitButton.innerHTML;

            submitButton.disabled = true;

            submitButton.innerHTML =

                `

                <span>Creating account...</span>

                <span>...</span>

                `;

            message.textContent = "";

            message.className =

                "form-message";

            try {

                /* -------------------------------------

                   SEND DATA TO EXPRESS

                ------------------------------------- */

                const response =

                    await fetch(

                        "/api/auth/register",

                        {

                            method: "POST",

                            headers: {

                                "Content-Type":

                                    "application/json"

                            },

                            body:

                                JSON.stringify({

                                    name: name,

                                    email: email,

                                    password: password

                                })

                        }

                    );

                const data =

                    await response.json();

                /* -------------------------------------

                   SERVER RESPONSE

                ------------------------------------- */

                if (!response.ok) {

                    message.textContent =

                        data.message ||

                        "Registration failed.";

                    message.className =

                        "form-message error";

                    submitButton.disabled =

                        false;

                    submitButton.innerHTML =

                        originalButtonText;

                    return;

                }

                /* -------------------------------------

                   SUCCESS

                ------------------------------------- */

                message.textContent =

                    "Account created successfully! Redirecting to login...";

                message.className =

                    "form-message success";

                setTimeout(

                    function () {

                        window.location.href =

                            "login.html";

                    },

                    1200

                );

            } catch (error) {

                console.error(

                    "Registration request failed:",

                    error

                );

                message.textContent =

                    "Unable to connect to SAKUM server.";

                message.className =

                    "form-message error";

                submitButton.disabled =

                    false;

                submitButton.innerHTML =

                    originalButtonText;

            }

        }

    );

}

/* ---------------------------------------------------------

   FORGOT PASSWORD

--------------------------------------------------------- */

const forgotPassword =

    document.getElementById(

        "forgotPassword"

    );

if (forgotPassword) {

    forgotPassword.addEventListener(

        "click",

        function () {

            const message =

                document.getElementById(

                    "loginMessage"

                );

            message.textContent =

                "Password recovery will be connected to email services in the production version.";

            message.className =

                "form-message info";

        }

    );

}

/* ---------------------------------------------------------

   TERMS LINK

--------------------------------------------------------- */

const termsLink =

    document.getElementById("termsLink");

if (termsLink) {

    termsLink.addEventListener(

        "click",

        function (event) {

            event.preventDefault();

            alert(

                "SAKUM Terms & Privacy Policy\n\n" +

                "This is a frontend demo page. " +

                "A complete legal policy will be added before deployment."

            );

        }

    );

}

/* =========================================================
   SERVER-SESSION NAVIGATION
   Do not use the old localStorage login flags here. The Express
   session cookie is the source of truth for authentication.
========================================================= */

let homepageSessionUser = null;
let homepageAuthReady = false;
let homepageAuthPromise = Promise.resolve(null);
let currentWorkspaceView = "dashboard";

/* =========================================================

   TRAVEL SEARCH

========================================================= */

const travelSearchForm =

    document.getElementById(

        "travelSearchForm"

    );

if (travelSearchForm) {

    travelSearchForm.addEventListener(

        "submit",

        async function (event) {

            event.preventDefault();

            const destination =

                document

                    .getElementById("destination")

                    .value

                    .trim();

            const date =

                document

                    .getElementById("date")

                    .value;

            const budget =

                document

                    .getElementById("budget")

                    .value;

            const message =

                document.getElementById(

                    "searchMessage"

                );

            /* -----------------------------------------

               VALIDATION

            ----------------------------------------- */

            if (!destination) {

                message.textContent =

                    "Please enter a destination.";

                message.classList.add(

                    "show"

                );

                return;

            }

            message.classList.remove(

                "show"

            );

            try {

                /* -------------------------------------

                   CHECK SERVER SESSION

                ------------------------------------- */

                const response =

                    await fetch(

                        "/api/auth/me",

                        {

                            method: "GET",

                            credentials: "same-origin"

                        }

                    );

                /* -------------------------------------

                   NOT LOGGED IN

                ------------------------------------- */

                if (!response.ok) {

                    /*

                       Save the search temporarily so

                       we can restore it after login.

                    */

                    sessionStorage.setItem(

                        "sakumPendingSearch",

                        JSON.stringify({

                            destination:

                                destination,

                            date:

                                date,

                            budget:

                                budget

                        })

                    );

                    window.location.href =

                        "pages/login.html";

                    return;

                }

                /* -------------------------------------

                   LOGGED IN

                ------------------------------------- */

                const searchParams =

                    new URLSearchParams({

                        destination:

                            destination,

                        date:

                            date,

                        budget:

                            budget

                    });

                window.location.href =

                    `pages/search.html?${searchParams.toString()}`;

            } catch (error) {

                console.error(

                    "Search error:",

                    error

                );

                message.textContent =

                    "Unable to connect to SAKUM.";

                message.classList.add(

                    "show"

                );

            }

        }

    );

}

/* =========================================================

   DESTINATION CARD ROUTING

   DESTINATION GUIDES ARE PUBLIC

========================================================= */

const destinationCards =

    document.querySelectorAll(

        ".destination-card[data-destination]"

    );

destinationCards.forEach(function (card) {

    card.addEventListener(

        "click",

        function () {

            const destination =

                card.dataset.destination;

            if (!destination) {

                return;

            }

            window.location.href =

                `pages/destination.html?place=${encodeURIComponent(destination)}`;

        }

    );

});

/* =========================================================
   HOMEPAGE SESSION + WORKSPACE VIEW CONTROLLER
========================================================= */

function closeHomepageMenus() {
    const workspaceDropdown = document.getElementById("workspaceDropdown");
    const profileDropdown = document.getElementById("profileDropdown");
    const workspaceButton = document.getElementById("workspaceButton");
    const profileButton = document.getElementById("profileButton");

    workspaceDropdown?.classList.remove("open");
    profileDropdown?.classList.remove("open");
    workspaceButton?.setAttribute("aria-expanded", "false");
    profileButton?.setAttribute("aria-expanded", "false");
}

function setActiveHomepageNav(view) {
    document.querySelectorAll(".nav-links .nav-link").forEach(function (link) {
        link.classList.remove("active");
    });

    let target = null;
    if (view === "trips" || view === "dashboard" || view === "itinerary" || view === "notes" || view === "tickets" || view === "saved" || view === "budget" || view === "profile" || view === "settings") {
        target = document.querySelector('.nav-links .nav-link[data-workspace-view="trips"]');
    } else if (view === "journal") {
        target = document.querySelector('.nav-links .nav-link[data-workspace-view="journal"]');
    }

    target?.classList.add("active");
}

function showHomepage(targetId) {
    document.body.classList.remove("workspace-mode");

    const panel = document.getElementById("workspacePanel");
    if (panel) panel.hidden = true;

    closeHomepageMenus();

    document.querySelectorAll(".nav-links .nav-link").forEach(function (link) {
        link.classList.remove("active");
    });

    const homeLink = document.querySelector('.nav-links .nav-link[data-home-target="home"]');
    if (targetId === "home" || !targetId) homeLink?.classList.add("active");

    if (targetId) {
        const destination = document.getElementById(targetId);
        if (destination) {
            history.replaceState(null, "", `#${targetId}`);
            requestAnimationFrame(function () {
                destination.scrollIntoView({ behavior: "smooth", block: "start" });
            });
        }
    } else {
        history.replaceState(null, "", window.location.pathname);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function workspaceTitle(view) {
    const titles = {
        dashboard: "Dashboard",
        trips: "My Trips",
        itinerary: "Itinerary",
        journal: "Write Journal",
        notes: "Notes",
        tickets: "Tickets",
        saved: "Saved Places",
        budget: "Budget",
        profile: "Profile",
        settings: "Settings"
    };
    return titles[view] || "Dashboard";
}

async function openWorkspace(view) {
    const validViews = new Set([
        "dashboard", "trips", "itinerary", "journal", "notes",
        "tickets", "saved", "budget", "profile", "settings"
    ]);
    if (!validViews.has(view)) view = "dashboard";

    // Wait for the server-session check to finish before deciding whether login is needed.
    if (!homepageAuthReady) {
        try { await homepageAuthPromise; } catch (_) { /* handled by auth initializer */ }
    }

    if (!homepageSessionUser) {
        sessionStorage.setItem("sakumPendingWorkspaceView", view);
        window.location.href = "pages/login.html";
        return;
    }

    const panel = document.getElementById("workspacePanel");
    const frame = document.getElementById("workspaceFrame");
    const title = document.getElementById("workspacePanelTitle");
    const welcome = document.getElementById("workspaceWelcome");

    if (!panel || !frame) {
        console.error("The embedded workspace panel is missing from index.html.");
        return;
    }

    currentWorkspaceView = view;
    document.body.classList.add("workspace-mode");
    panel.hidden = false;
    if (title) title.textContent = workspaceTitle(view);
    if (welcome) welcome.textContent = `Welcome, ${homepageSessionUser.name || "traveller"}.`;
    setActiveHomepageNav(view);
    closeHomepageMenus();
    window.scrollTo({ top: 0, behavior: "smooth" });

    const requestedSrc = `dashboard/dashboard.html?view=${encodeURIComponent(view)}`;
    const frameWindow = frame.contentWindow;

    if (frame.dataset.loaded === "true" && frameWindow && typeof frameWindow.openSakumDashboardSection === "function") {
        frameWindow.openSakumDashboardSection(view);
        frame.dataset.pendingView = "";
    } else {
        frame.dataset.pendingView = view;
        // Set (or reload) the frame URL. The browser address bar remains on index.html.
        if (frame.getAttribute("src") !== requestedSrc || frame.dataset.loaded === "true") {
            frame.src = requestedSrc;
            frame.dataset.loaded = "false";
        } else if (!frame.getAttribute("src") || frame.getAttribute("src") === "about:blank") {
            frame.src = requestedSrc;
        }
    }
}

window.openSakumWorkspace = openWorkspace;
window.showSakumHomepage = showHomepage;

// Homepage public navigation: restore the landing content before scrolling to sections.
document.addEventListener("click", function (event) {
    const homeLink = event.target.closest("[data-home-target]");
    if (!homeLink) return;
    event.preventDefault();
    showHomepage(homeLink.dataset.homeTarget || "home");
});

// Workspace links work from the top navbar, workspace dropdown, profile menu and hero actions.
document.addEventListener("click", function (event) {
    const workspaceLink = event.target.closest("[data-workspace-view]");
    if (!workspaceLink) return;
    event.preventDefault();
    openWorkspace(workspaceLink.dataset.workspaceView || "dashboard");
});

const workspaceHomeButton = document.getElementById("workspaceHomeButton");
workspaceHomeButton?.addEventListener("click", function () {
    showHomepage("home");
});

const workspaceButton = document.getElementById("workspaceButton");
const workspaceDropdown = document.getElementById("workspaceDropdown");
const profileButton = document.getElementById("profileButton");
const profileDropdown = document.getElementById("profileDropdown");

workspaceButton?.addEventListener("click", function (event) {
    event.stopPropagation();
    const willOpen = !workspaceDropdown?.classList.contains("open");
    closeHomepageMenus();
    workspaceDropdown?.classList.toggle("open", willOpen);
    workspaceButton.setAttribute("aria-expanded", String(willOpen));
});

profileButton?.addEventListener("click", function (event) {
    event.stopPropagation();
    const willOpen = !profileDropdown?.classList.contains("open");
    closeHomepageMenus();
    profileDropdown?.classList.toggle("open", willOpen);
    profileButton.setAttribute("aria-expanded", String(willOpen));
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".workspace-menu, .profile-menu")) {
        closeHomepageMenus();
    }
});

// Bridge the existing dashboard into the homepage without copying its many features.
const workspaceFrame = document.getElementById("workspaceFrame");
workspaceFrame?.addEventListener("load", function () {
    if (!workspaceFrame.getAttribute("src") || workspaceFrame.getAttribute("src") === "about:blank") return;

    try {
        const frameWindow = workspaceFrame.contentWindow;
        const frameDocument = workspaceFrame.contentDocument;
        const framePath = frameWindow.location.pathname;

        // If the protected dashboard redirects to login, send the whole tab to login (not just the iframe).
        if (framePath.endsWith("/pages/login.html")) {
            sessionStorage.setItem("sakumPendingWorkspaceView", currentWorkspaceView);
            window.location.href = "pages/login.html";
            return;
        }

        if (!framePath.endsWith("/dashboard.html") || !frameDocument) return;
        workspaceFrame.dataset.loaded = "true";

        const pendingView = workspaceFrame.dataset.pendingView || currentWorkspaceView;
        if (typeof frameWindow.openSakumDashboardSection === "function") {
            frameWindow.openSakumDashboardSection(pendingView);
            workspaceFrame.dataset.pendingView = "";
        }

        // Make the dashboard's SAKUM brand return to the outer homepage, not load index.html inside the frame.
        if (!frameDocument.documentElement.dataset.sakumParentBridge) {
            frameDocument.documentElement.dataset.sakumParentBridge = "true";
            frameDocument.addEventListener("click", function (frameEvent) {
                const anchor = frameEvent.target.closest("a[href]");
                if (!anchor) return;
                try {
                    const targetURL = new URL(anchor.href, frameWindow.location.href);
                    if (targetURL.pathname.endsWith("/index.html") || targetURL.pathname === "/") {
                        frameEvent.preventDefault();
                        showHomepage("home");
                    }
                } catch (_) { /* ignore malformed links */ }
            }, true);
        }
    } catch (error) {
        // Cross-origin documents cannot be inspected; the workspace still loads normally.
        console.warn("Could not attach the homepage workspace bridge:", error);
    }
});

async function initializeHomepageAuth() {
    const guestNav = document.getElementById("guestNav");
    const userNav = document.getElementById("userNav");
    const profileName = document.getElementById("profileName");
    const profileAvatar = document.getElementById("profileAvatar");
    const profileDropdownName = document.getElementById("profileDropdownName");
    const profileDropdownEmail = document.getElementById("profileDropdownEmail");
    const homepageLogout = document.getElementById("homepageLogout");

    try {
        const response = await fetch("/api/auth/me", {
            method: "GET",
            credentials: "same-origin",
            headers: { "Accept": "application/json" }
        });

        if (!response.ok) throw new Error("No active session");

        const data = await response.json();
        if (!data || !data.user) throw new Error("Session response did not include a user");

        homepageSessionUser = data.user;
        const name = data.user.name || "Traveller";
        const email = data.user.email || "";
        const firstLetter = name.trim().charAt(0).toUpperCase() || "S";

        if (guestNav) guestNav.hidden = true;
        if (userNav) userNav.hidden = false;
        if (profileName) profileName.textContent = name;
        if (profileAvatar) profileAvatar.textContent = firstLetter;
        if (profileDropdownName) profileDropdownName.textContent = name;
        if (profileDropdownEmail) profileDropdownEmail.textContent = email;

        const heroTitle = document.getElementById("heroTitle");
        const heroText = document.getElementById("heroText");
        if (heroTitle) heroTitle.textContent = `Welcome back, ${name}.`;
        if (heroText) {
            heroText.textContent = "Your next adventure is waiting. Continue planning your trips, discovering places and collecting memories.";
        }

        homepageAuthReady = true;

        const pendingView = sessionStorage.getItem("sakumPendingWorkspaceView");
        if (pendingView) {
            sessionStorage.removeItem("sakumPendingWorkspaceView");
            window.setTimeout(function () { openWorkspace(pendingView); }, 0);
        }
    } catch (error) {
        homepageSessionUser = null;
        if (guestNav) guestNav.hidden = false;
        if (userNav) userNav.hidden = true;
        homepageAuthReady = true;

        // A normal guest should see the public landing page. Do not treat a missing session as a JS crash.
        if (error.message !== "No active session" && error.message !== "Session response did not include a user") {
            console.error("Homepage authentication check failed:", error);
        }
    }

    if (homepageLogout) {
        homepageLogout.addEventListener("click", async function () {
            homepageLogout.disabled = true;
            try {
                const response = await fetch("/api/auth/logout", {
                    method: "POST",
                    credentials: "same-origin",
                    headers: { "Accept": "application/json" }
                });
                if (!response.ok) throw new Error("Logout failed");
                sessionStorage.removeItem("sakumPendingWorkspaceView");
                window.location.replace("index.html");
            } catch (error) {
                console.error("Homepage logout error:", error);
                alert("Unable to log out right now. Please try again.");
                homepageLogout.disabled = false;
            }
        });
    }

    return homepageSessionUser;
}

homepageAuthPromise = initializeHomepageAuth();
