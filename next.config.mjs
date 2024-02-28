/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        proxyTimeout: 1000000,
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${process.env.APIAPP_HOST ?? "http://localhost:3000"
                    }/:path*`, // Proxy to Backend
            },
        ];
    },
    //region load envvar
    /*
    //NOTE We want this code working but with nextjs webapp flow, cannot -> nextjs has a different way to load .env than replace process.env.varname by its value at buildtime  ref https://nextjs.org/docs/app/api-reference/next-config-js/env
    //                    process.env.PWD <- dodge __dirname error > ReferenceError: __dirname is not defined in ES module scope  ref https://stackoverflow.com/a/28279609/248616
    dotenv.config({ path:`${process.env.PWD}/.env` })
    //    .config   path <- custom .env path ref https://stackoverflow.com/a/69694614/248616
    */
    // instead, define nextjs env in nextConfig as below
    env: {
        APIAPP_HOST: process.env.APIAPP_HOST ?? "http://localhost:3000", //TODO how to set this for webapp :local, webapp :develop, webapp :container
        //           process.env.APIAPP_HOST in docker container we will pass in this envvar from compose up,
    },
    //endregion load envvar
};

export default nextConfig;