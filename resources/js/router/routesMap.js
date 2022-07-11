export default class {
    constructor(routes) {
        this.routes = routes;
        this.map = new Map();
        this.mapForShotKeys = new Map();
        this._createMap();
        this.getUrlByKey = this.getUrlByKey.bind(this);
        this.getUrlByShortKey = this.getUrlByShortKey.bind(this);
    }

    _createMap() {
        this.routes.forEach((route) => {
            this.map.set(route.name, route.path);
            this.mapForShotKeys.set(route.name, route.path);
            if ("childeRoutes" in route) {
                route.childeRoutes.forEach((childRoute) => {
                    this.map.set(
                        route.name + "." + childRoute.name,
                        route.path + childRoute.path
                    );
                    this.mapForShotKeys.set(childRoute.name, childRoute.path);
                });
            }
        });
    }

    getUrlByKey(key) {
        if (this.map.has(key)) {
            return this.map.get(key);
        }
        throw new Error(`Rout with name --${key}-- not found!!!`);
    }

    getUrlByShortKey(key) {
        if (this.mapForShotKeys.has(key)) {
            return this.mapForShotKeys.get(key);
        }
        throw new Error(`Rout with name --${key}-- not found!!!`);
    }
}
