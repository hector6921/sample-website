        const imgBank = ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Forest_Hills_%28March_2018%29.jpg/1024px-Forest_Hills_%28March_2018%29.jpg",
        "https://marthascountrybakery.com/wp-content/gallery/foresthills/FH2_Decor_135.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Forest_Hills_USPS_11375_jeh.jpg/1280px-Forest_Hills_USPS_11375_jeh.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Station_Square-1.jpg/1920px-Station_Square-1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Forest_Hills_Gardens%2C_Queens%2C_NY.jpg/1280px-Forest_Hills_Gardens%2C_Queens%2C_NY.jpg",
        "https://www.hotelspeak.com/wp-content/uploads/2017/05/Austin_6th_Street.jpg"

    ]
    var curpage = "";
    const pages = {
        1:"index.html",2:"history.html",3:"restaurants.html",
        4:"transportation.html",5:"shopping.html",6:"dailylife.html",
        7:"parks.html",8:"schools.html",9:"entertainment.html",
        10:"contact.html"
    }
    
    const coordinatesBank = {
        "history.html":[40.723090, -73.845736,14],
        "restaurants.html":[40.720271, -73.844992,16],
        "transportation.html":[40.723090, -73.845736,14],
        "shopping.html":[40.723090, -73.845736,13],
        "dailylife.html":[40.727146, -73.855399,13],
        "parks.html":[40.723090, -73.845736,12],
        "schools.html":[40.723090, -73.845736,13],
        "entertainment.html":[40.720271, -73.844992,14]

    }
   
    var count = 0;
        function changeimg(){
            document.getElementById('panel').src = imgBank[count];
            if(count === imgBank.length-1){
                count = 0;
            }else{count++;}
        }
       function changeFunc(x){
        console.log(x);
        curpage = pages[x];
            window.location.assign(curpage);
            localStorage.setItem('page', curpage);
       }
       function curPage(x){
           console.log(x);
           curpage = pages[x];
       }
        function myMap() {
            page = localStorage.getItem('page');
            var mapcor = coordinatesBank[page];
            var mapProp = {
                center: new google.maps.LatLng(mapcor[0],mapcor[1]),
                zoom: mapcor[2],
                
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            const markers = {
                "restaurants.html":
                [[40.720853, -73.845539,40,40,"1",3,20],
                [40.720773, -73.843285,40,40,"2",3,20],
                [40.719946, -73.845122,40,40,"3",3,20],
                [40.719646, -73.842998,40,40,"4",3,20],
                [40.721093, -73.846554,40,40,"5",3,20]],
                "transportation.html":
                [[40.719755, -73.844706,40,40,"1",3,20],
                [40.721584, -73.844603,40,40,"2",3,20],
                [40.727029, -73.853149,40,40,"3",3,20],
                [40.721275, -73.844096,40,40,"4",3,20],
                [40.718292, -73.837328,40,40,"5",3,20]],
                "shopping.html":
                [[40.708598, -73.868309,40,40,"1",3,20],
                [40.733919, -73.870584,40,40,"2",3,20],
                [40.732854, -73.863595,40,40,"3",3,20],
                [40.735163, -73.874690,40,40,"4",3,20]],
                "dailylife.html":
                [[40.720383, -73.846012,40,40,"1",3,20],
                [40.721233, -73.847041,40,40,"2",3,20],
                [40.732854, -73.863595,40,40,"3",3,20],
                [40.735163, -73.874690,40,40,"4",3,20]],
                "parks.html":
                [[40.703985, -73.847403,40,40,"1",3,20],
                [40.740821, -73.841736,40,40,"2",3,20],
                [40.733492, -73.840175,40,40,"3",3,20],
                [40.700494, -73.856090,40,40,"4",3,20]],
                "schools.html":
                [[40.729656, -73.844981,40,40,"1",3,20],
                [40.722945, -73.837765,40,40,"2",3,20],
                [40.720505, -73.861459,40,40,"3",3,20],
                [40.723200, -73.851808,40,40,"4",3,20]],
                "entertainment.html":
                [[40.720836, -73.843345,40,40,"1",3,20],
                [40.719621, -73.849808,40,40,"2",3,20],
                [40.726157, -73.869866,40,40,"3",3,20],
                [40.720456, -73.845277,40,40,"4",3,20]],
               
            }
            if(markers[page]){   
            var items = [];
            for(var i=0;i<markers[page].length;i++){
            items = markers[page][i];
            var marker = new google.maps.Marker({
                position: {lat:items[0], lng:items[1]},
                map: map,
                icon:{
                    url: "https://img.icons8.com/ios-glyphs/30/000000/map-pin.png",
                    labelOrigin: {x:items[5], y:items[6]},
                    scaledSize: new google.maps.Size(items[2], items[3]),
                },
                label:{
                    text: items[4],
                    color: '#000',
                    fontSize: '20px'
                }
            });  
        }
    }
}
    
   
