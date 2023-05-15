import axios from "axios";

/*
    Spaceflight News API (SNAPI) V3

    "enables developers to add the latest spaceflight news to their apps."
    source: https://spaceflightnewsapi.net
*/
const SNAPI = {
    
    // create axios instance for reusable options
    SNAPIClient: axios.create({
        baseURL: 'https://api.spaceflightnewsapi.net/v3/',
        headers: {
            // 'x-api-key': process.env.API_KEY @DEMO
        }
    }),

    /* 
        Fetch of most recent spaceflight articles
        (request already retrieves latest entries)
        @param (int) limit max results
    */
    fetchLatestNews: async function(limitResults) {
        const response = await this.SNAPIClient.get( 'articles', {
            params : {
                _limit: limitResults
            }
        }).catch(function (error) {
            console.log(error);
        })

        return response.data
    }
}

/*
    Local Data for @DEMO purposes
*/
const localData = {
    navigation: [
        {
            "target": "#slider",
            "name": "Slider"
        },
        {
            "target": "#news",
            "name": "News"
        },
        {
            "target": "#timeline",
            "name": "Percorso"
        },
        {
            "target": "#tabs",
            "name": "Tab"
        }
    ],
    socials: [
        {
            "id": 0,
            "name": "facebook",
            "url": "#"
        },
        {
            "id": 1,
            "name": "twitter",
            "url": "#"
        },
        {
            "id": 2,
            "name": "instagram",
            "url": "#"
        },
        {
            "id": 3,
            "name": "linkedin",
            "url": "#"
        },
        {
            "id": 4,
            "name": "youtube",
            "url": "#"
        }
    ],
    legals: [
        {
            "id": 0,
            "name": "Term & Conditions",
            "url": "#"
        },
        {
            "id": 1,
            "name": "Privacy Policy",
            "url": "#"
        },
        {
            "id": 2,
            "name": "Cookies Policy",
            "url": "#"
        },
        {
            "id": 3,
            "name": "Copyrights Notification",
            "url": "#"
        }
    ],
    tabs: [
        {
            "title": "Tab Rosa",
            "media": "sveglia.png",
            "text": "Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
            "cta": "Call to Action"
        },
        {
            "title": "Tab Gialla",
            "media": "target.png",
            "text": "Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
            "cta": "Call to Action"
        },
        {
            "title": "Tab Turchese",
            "media": "razzo.png",
            "text": "Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
            "cta": "Call to Action"
        },
        {
            "title": "Tab Rosa",
            "media": "sveglia.png",
            "text": "Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
            "cta": "Call to Action"
        },
        {
            "title": "Tab Rosa",
            "media": "sveglia.png",
            "text": "Erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci  magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.",
            "cta": "Call to Action"
        }
    ],
    slides: [
        {
            "id": 0,
            "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "desc": "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
            "media": "slider-1.png",
            "cta": {
                "text": "call to action",
                "url": "#"
            }
        },
        {
            "id": 1,
            "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "desc": "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
            "media": "slider-2.jpg",
            "cta": {
                "text": "call to action",
                "url": "#"
            }
        },
        {
            "id": 2,
            "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "desc": "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
            "media": "slider-3.jpg",
            "cta": {
                "text": "call to action",
                "url": "#"
            }
        },
        {
            "id": 3,
            "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
            "desc": "sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.",
            "media": "slider-4.jpg",
            "cta": {
                "text": "call to action",
                "url": "#"
            }
        }
    ],
    news: [
        {
            "id": 0,
            "date": "22.11.2023",
            "title": "Lorem ipsum dolor sit amet, consectetuer",
            "banner": "news-1.png",
            "text": "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id": 1,
            "date": "22.11.2023",
            "title": "Lorem ipsum dolor sit amet, consectetuer",
            "banner": "news-2.png",
            "text": "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id": 2,
            "date": "22.11.2023",
            "title": "Lorem ipsum dolor sit amet, consectetuer",
            "banner": "news-3.png",
            "text": "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "id": 3,
            "date": "22.11.2023",
            "title": "Lorem ipsum dolor sit amet, consectetuer",
            "banner": "news-1.png",
            "text": "Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupidi aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
}

export { localData, SNAPI }