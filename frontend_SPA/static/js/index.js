
import Home from "./views/Home.js";
import apiPage from "./views/api-page.js";
import about from "./views/about.js";

//This allow to keep the same nav bar
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

//client site router
const router = async () => {
    const routes = [
        // {path: "/", view: () => console.log("View of Home Page")}, //when user is at the root page, view home page
        {path: "/", view: Home },
        // {path: "/api", view: () => console.log("View of API Data Page")},
        {path: "/api", view: apiPage },
        // {path: "/about", view: () => console.log("View of About Me Page")}
        {path: "/about", view: about }
    ];

    //Test each route for potential match for each of the page route
    const potMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname == route.path
        };
    });
    //This selecte only the route that match
    let match = potMatches.find(match => match.isMatch)

    if(!match) {
        match = {
            //if no mach default to homepage or route[0]
            route: routes[0],
            isMatch: true
        };
    }

    //creating new instance of the view at the mach route (routes[0])
    const view = new match.route.view();

    //getting the html from the method in Home.js, and injecting it to the innerhtml of the #app element that we'll create
    //in index.html
    document.querySelector("#app").innerHTML = await view.getHtml();


    console.log(match.route.view)
};

//Window: popstate event
window.addEventListener("popstate", router);


document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    

    router();
})