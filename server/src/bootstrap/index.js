const Server = require('./server');

        // Define services
        // const API_KEY = "26b55e337bd07a6a46810bce43adcaf4";
        // const TMDBProvider = new TMBD({API_KEY});
        // const providers = [
        //     { name: 'TMDB', provider: TMDBProvider },
        // ];
        // const mediaDB = await new MediaDB({ providers, defaultProvider: 'TMDB' }).init();
        //loop through services and intitialze and inject into routes that require it. 

function bootstrap(server) {
    return async ({routers, services}) => {
        try {
            services = await Promise.all(
                services.map(async ({ name, service }) => ({ name, service: await service.init()}))
            );

            services = services.reduce((services, { name, service }) => {
                services[name] = service;
                return services;
            }, {});
            const server = new Server({ routers, services });
            return server.init();
        } catch (error) {
            console.log("bootstrap: ", error);
        }
    }
}


module.exports = bootstrap(Server);