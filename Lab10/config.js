

var config = {
    style: 'mapbox://styles/lcomrie95/cla4gducn000214pepewmw54n',
    accessToken: 'pk.eyJ1IjoibGNvbXJpZTk1IiwiYSI6ImNsOTI0ZXhpNTB0ZDkzdWwxbmhlc2Q2bWcifQ.WkNPOLqEriQvphrGmRjEGA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'The Title Text of this Story',
    subtitle: 'Floods threaten the Red Hook neighbourhood of Broolyn, New York',
    byline: 'Lancelot Comrie ',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: 'images/source.png',
            description: 'In 2012, Hurricane Sandy was devestating to the city of New York. Many communities were hit, particularly low income communities in flood risk areas. With the ever growing threat and reality of rising sea levels, how will New York respond to this crisis?',
            location: {
               center: [-73.98956, 40.73936],
zoom: 11.00,
pitch: 45.00,
bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'futurefloodplains-2050-100yr-6nepei',
                 opacity: 1,
                duration: 5000
                }
            ],
            onChapterExit: [
             {
             layer: 'futurefloodplains-2050-100yr-6nepei',
             opacity: 0
            }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook ',
            image: 'images/houses.jpg',
            description: 'In the Brooklyn neighbourhood of Red Hook, we can see flooding will destroy many sections of the community and will displace thousands of low income people',
            location: {
                center: [-74.00640, 40.67564],
zoom: 15.87,
pitch: 45.00,
bearing: -40.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
            { layer: 'iamwfx.ab4g098q',
opacity: 1,
duration: 5000
              }  

            ],
            onChapterExit: [ { layer: 'iamwfx.ab4g098q',
            opacity: 0.5, 
        }]

        },

    ]
};

