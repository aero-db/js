/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get a user by id */
        get: operations["GetUser"];
        put?: never;
        post?: never;
        /** @description Delete a user */
        delete: operations["DeleteUser"];
        options?: never;
        head?: never;
        /** @description Update a user */
        patch: operations["UpdateUser"];
        trace?: never;
    };
    "/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get all users */
        get: operations["GetUsers"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cityCodes/{code}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get one City code information by its ICAO code */
        get: operations["GetCityCode"];
        put?: never;
        post?: never;
        /** @description Delete a city code */
        delete: operations["DeleteCityCode"];
        options?: never;
        head?: never;
        /** @description Update a city code */
        patch: operations["UpdateCityCode"];
        trace?: never;
    };
    "/cityCodes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get all city codes */
        get: operations["GetCityCodes"];
        put?: never;
        /** @description Create a new city code */
        post: operations["CreateCityCode"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/signup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Create a new account */
        post: operations["Signup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Authenticate using email and password */
        post: operations["Login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/refreshToken": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Refresh a token */
        post: operations["RefreshToken"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get informations about the current session */
        get: operations["Me"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apiKeys/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get all api keys belonging to a user */
        get: operations["GetForUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apiKeys/{userId}/regenerate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Regenerate a user's api key */
        post: operations["RegenerateUserApiKey"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/apiKeys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get all api keys */
        get: operations["GetApiKeys"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/airports/{icao}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get one airport by its ICAO code */
        get: operations["GetAirport"];
        put?: never;
        post?: never;
        /** @description Delete an airport */
        delete: operations["DeleteAirport"];
        options?: never;
        head?: never;
        /** @description Update an airport */
        patch: operations["UpdateAirport"];
        trace?: never;
    };
    "/airports/{icao}/internal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get the internal data of one airport by its ICAO code */
        get: operations["GetAirportInternalData"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/airports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get all airports */
        get: operations["GetAirports"];
        put?: never;
        /** @description Create a new airport */
        post: operations["CreateAirport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/airlines/{airlineId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get one airline by its internal id */
        get: operations["GetAirline"];
        put?: never;
        post?: never;
        /** @description Delete an airline */
        delete: operations["DeleteAirline"];
        options?: never;
        head?: never;
        /** @description Update an airline */
        patch: operations["UpdateAirline"];
        trace?: never;
    };
    "/airlines": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get all airlines */
        get: operations["GetAirlines"];
        put?: never;
        /** @description Create a new airline */
        post: operations["CreateAirline"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/aircraftTypes/{icao}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get one aircraft type by its ICAO code */
        get: operations["GetAirport"];
        put?: never;
        post?: never;
        /** @description Delete an aircraft type */
        delete: operations["DeleteAircraftType"];
        options?: never;
        head?: never;
        /** @description Update an aircraft type */
        patch: operations["UpdateAircraftType"];
        trace?: never;
    };
    "/aircraftTypes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** @description Get all aircraft types */
        get: operations["GetAirports"];
        put?: never;
        /** @description Create a new aircraft type */
        post: operations["CreateAircraftType"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/apiKeys/{userId}/generateAdmin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** @description Generate an admin api key for the given user
         *
         *     **Note** This will revoke the user's existing key */
        delete: operations["GenerateAdminApiKey"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        User: {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            verified: boolean;
            verificationToken?: string;
            verificationTokenExpiry?: string;
            verificationDate?: string;
            disabled: boolean;
            permissions: ("ADMIN" | "USER")[];
        };
        CityCode: {
            code: string;
            name: string;
            location: {
                county: string;
                state: string;
                city: string;
                country: string;
                /** Format: double */
                elevation: number;
                /** Format: double */
                longitude: number;
                /** Format: double */
                latitude: number;
            };
            timezone: string;
        };
        /** @description From T, pick a set of properties whose keys are in the union K */
        "Pick_User.email-or-password-or-firstName-or-lastName_": {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
        };
        SignupParams: components["schemas"]["Pick_User.email-or-password-or-firstName-or-lastName_"];
        /** @description From T, pick a set of properties whose keys are in the union K */
        "Pick_User.email-or-password_": {
            email: string;
            password: string;
        };
        LoginParams: components["schemas"]["Pick_User.email-or-password_"];
        RefreshTokenResponse: {
            token: string;
            /** Format: date-time */
            tokenExpires: string;
        };
        /** @enum {string} */
        ApiKeyScope: "public" | "admin";
        ApiKey: {
            key: string;
            userId: string;
            /** Format: date-time */
            expires: string;
            scopes: components["schemas"]["ApiKeyScope"][];
        };
        Runway: {
            /** @description The name of the runway. */
            name: string;
            /**
             * Format: double
             * @description The length of the runway in meters.
             */
            length?: number;
            /**
             * Format: double
             * @description The width of the runway in meters.
             */
            width?: number;
            /**
             * Format: double
             * @description The heading of the runway in degrees.
             */
            heading?: number;
            /**
             * @description The surface of the runway.
             * @enum {string}
             */
            surface: "ASP" | "BIT" | "BRI" | "CLA" | "COM" | "CON" | "COP" | "COR" | "GRE" | "GRS" | "GVL" | "ICE" | "LAT" | "MAC" | "PEM" | "PER" | "PSP" | "SAN" | "SMT" | "SNO" | "U" | "WAT";
        };
        Frequency: {
            /** @description The name of the frequency. */
            name: string;
            /**
             * Format: double
             * @description The frequency in MHz.
             */
            frequency: number;
        };
        /** @description Airport raw internal data provided by scrappers */
        AirportInternal: {
            fsx_runways: string;
            fsx_airport: string;
        };
        /**
         * @description Represents an airport.
         * @example {
         *       "name": "John F. Kennedy International Airport",
         *       "icao": "KJFK",
         *       "iata": "JFK",
         *       "coordinates": {
         *         "latitude": 40.6413,
         *         "longitude": -73.7781
         *       },
         *       "elevation": 13,
         *       "countryCode": "US",
         *       "city": "New York",
         *       "state": "New York",
         *       "county": "Queens",
         *       "timezone": "America/New_York",
         *       "websiteUrl": "https://www.jfkairport.com/",
         *       "runways": [
         *         {
         *           "name": "Runway 1",
         *           "length": 10000,
         *           "surface": "CON"
         *         },
         *         {
         *           "name": "Runway 2",
         *           "length": 8000,
         *           "surface": "ASP"
         *         }
         *       ],
         *       "frequencies": [
         *         {
         *           "name": "Tower",
         *           "frequency": 118.3
         *         },
         *         {
         *           "name": "Ground",
         *           "frequency": 121.9
         *         }
         *       ]
         *     }
         */
        Airport: {
            /** @description The name of the airport. */
            name: string;
            icao: string;
            iata?: string;
            coordinates?: {
                /** Format: double */
                longitude: number;
                /** Format: double */
                latitude: number;
            };
            /** Format: double */
            elevation?: number;
            /**
             * @description The country where the airport is located.
             *
             *     ISO 3166-1 alpha-2 code.
             * @example US
             */
            countryCode?: string;
            city?: string;
            state?: string;
            county?: string;
            /**
             * @description The timezone of the airport in the TZ database format.
             * @example America/New_York
             */
            timezone?: string;
            websiteUrl?: string;
            runways?: components["schemas"]["Runway"][];
            frequencies?: components["schemas"]["Frequency"][];
            /** @description Internal properties */
            _internal?: components["schemas"]["AirportInternal"];
        };
        QueryParameters: {
            /** @description JSON filters to apply to the query
             *
             *     Example: `{ "icao": "KJFK" }`
             *
             *      [More details](https://www.mongodb.com/docs/compass/current/query/filter/) */
            filters?: string;
            /**
             * Format: double
             * @description Number of items to return
             * @default 50
             * @example 50
             */
            limit: number;
            /**
             * Format: double
             * @description Page number
             * @default 1
             * @example 1
             */
            page: number;
        };
        Airline: {
            /** @description The name of the airline. */
            name: string;
            /** @description The ICAO code of the airline. */
            icao?: string;
            /** @description The IATA code of the airline. */
            iata?: string;
            /** @description The call sign of the airline. */
            callSign?: string;
            websiteUrl?: string;
            location?: string;
            /** @description True if the airline is defunct and no longer operating. */
            isDefunct: boolean;
        };
        /**
         * @description Represents an aircraft type.
         * @example {
         *       "name": "Airbus A380",
         *       "icao": "A388",
         *       "manufacturer": "Airbus",
         *       "categorie": "landplane",
         *       "engineType": "jet",
         *       "engineCount": 4,
         *       "wakeTurbulenceCategories": [
         *         "H",
         *         "J"
         *       ]
         *     }
         */
        AircraftType: {
            /** @description The name of the aircraft type. */
            name: string;
            /** @description The ICAO code of the aircraft type. */
            icao: string;
            /** @description The manufacturer of the aircraft type. */
            manufacturer: string;
            /** @enum {string} */
            categorie: "amphibian" | "gyrocopter" | "helicopter" | "landplane" | "seaplane" | "tiltrotor";
            /** @enum {string} */
            engineType: "electric" | "turboprop" | "jet" | "piston" | "rocket";
            /** Format: double */
            engineCount?: number;
            /** @description The wake turbulence categories of the aircraft type.
             *
             *     - `L`: Light
             *
             *     - `M`: Medium
             *
             *     - `H`: Heavy
             *
             *     - `J`: Super */
            wakeTurbulenceCategories: ("L" | "M" | "H" | "J")[];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    GetUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    DeleteUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    UpdateUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["User"];
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    GetUsers: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"][];
                };
            };
        };
    };
    GetCityCode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CityCode"];
                };
            };
        };
    };
    DeleteCityCode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CityCode"];
                };
            };
        };
    };
    UpdateCityCode: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                code: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CityCode"];
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CityCode"];
                };
            };
        };
    };
    GetCityCodes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CityCode"][];
                };
            };
        };
    };
    CreateCityCode: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CityCode"];
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    Signup: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SignupParams"];
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    Login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoginParams"];
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** Format: date-time */
                        tokenRefreshExpires: string;
                        tokenRefresh: string;
                        /** Format: date-time */
                        tokenExpires: string;
                        token: string;
                        user: components["schemas"]["User"];
                    };
                };
            };
        };
    };
    RefreshToken: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    refreshToken: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RefreshTokenResponse"];
                };
            };
        };
    };
    Me: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        user: components["schemas"]["User"];
                    };
                };
            };
        };
    };
    GetForUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKey"][];
                };
            };
        };
    };
    RegenerateUserApiKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKey"];
                };
            };
        };
    };
    GetApiKeys: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKey"][];
                };
            };
        };
    };
    GetAirport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description code of the airport */
                icao: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Airport"];
                };
            };
        };
    };
    DeleteAirport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                icao: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Airport"];
                };
            };
        };
    };
    UpdateAirport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                icao: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Airport"];
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Airport"];
                };
            };
        };
    };
    GetAirportInternalData: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description code of the airport */
                icao: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AirportInternal"];
                };
            };
        };
    };
    GetAirports: {
        parameters: {
            query?: {
                /** @description JSON filters to apply to the query
                 *
                 *     Example: `{ "icao": "KJFK" }`
                 *
                 *      [More details](https://www.mongodb.com/docs/compass/current/query/filter/) */
                filters?: string;
                /**
                 * @description Number of items to return
                 * @example 50
                 */
                limit?: number;
                /**
                 * @description Page number
                 * @example 1
                 */
                page?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Airport"][];
                };
            };
        };
    };
    CreateAirport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Airport"];
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Airport"];
                };
            };
        };
    };
    GetAirline: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                airlineId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Airline"];
                };
            };
        };
    };
    DeleteAirline: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                airlineId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Airline"];
                };
            };
        };
    };
    UpdateAirline: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                airlineId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Airline"];
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Airline"];
                };
            };
        };
    };
    GetAirlines: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Airline"][];
                };
            };
        };
    };
    CreateAirline: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Airline"];
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Airline"];
                };
            };
        };
    };
    GetAirport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description code of the aircraft type */
                icao: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AircraftType"];
                };
            };
        };
    };
    DeleteAircraftType: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                icao: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AircraftType"];
                };
            };
        };
    };
    UpdateAircraftType: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                icao: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AircraftType"];
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AircraftType"];
                };
            };
        };
    };
    GetAirports: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AircraftType"][];
                };
            };
        };
    };
    CreateAircraftType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AircraftType"];
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AircraftType"];
                };
            };
        };
    };
    GenerateAdminApiKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKey"];
                };
            };
        };
    };
}
