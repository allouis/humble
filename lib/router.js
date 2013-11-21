module.exports = routeHandler;

function routeHandler() {
    
    var routes = [],
        currentHash, hash;

    window.addEventListener("popstate", onpop);

    function routeToRegEx(route) {
        route = route.replace(/:[^/]+/g, "([^/]+/?)");
        return new RegExp("^" + route + "$");
    }

    function onpop (event) {
        hash = location.hash.replace('#','');
        hash = hash[0] === "/" ? hash.substr(1) : hash;
        hash = hash[hash.length - 1] === "/" ? hash.substring(hash.length - 1, 0) : hash;
        if(hash === currentHash) return;
        currentHash = hash;
        routes.forEach(function(route){
            if(route.regEx.test(hash)) {
                route.handler.apply(null, hash.match(route.regEx).splice(1));
            }
        });
    }

    this.handleRoute = function(routeString, callback){
        var route = {};
        route.regEx = routeToRegEx(routeString);
        route.handler = callback;
        routes.push(route);
    };

}
