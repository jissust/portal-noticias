// Response | GET : https://v3.football.api-sports.io/teams?id=460
// Response | GET : https://v3.football.api-sports.io/teams?name=san%20lorenzo
export const teams = [
    {
        get: "teams",
        parameters: {
            name: "san lorenzo"
        },
        errors: [],
        results: 1,
        paging: {
            current: 1,
            total: 1
        },
        response: [
            {
                team: {
                    id: 460,
                    name: "San Lorenzo",
                    code: "LOR",
                    country: "Argentina",
                    founded: 1908,
                    national: false,
                    logo: "https://media.api-sports.io/football/teams/460.png"
                },
                venue: {
                    id: 103,
                    name: "Estadio Pedro Bidegaín",
                    address: "Avenida Perito Moreno y Avenida Varela 1437",
                    city: "Capital Federal, Ciudad de Buenos Aires",
                    capacity: 43494,
                    surface: "grass",
                    image: "https://media.api-sports.io/football/venues/103.png"
                }
            }
        ]
    }
];