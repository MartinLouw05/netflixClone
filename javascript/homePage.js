
//Check Sign Validity
let signedInUser = localStorage.getItem("currentUser");

console.log(signedInUser)
if (signedInUser === null) {
    alert("User Not Signed In");
    document.location.href = "../html/logInPage.html"
}
else {
    console.log("User " + signedInUser + " Is Signed In");
}

//Random Movies Information
let moviesInfo = JSON.parse(localStorage.getItem("moviesData"));
let moviesBannersInfo = JSON.parse(localStorage.getItem("movieBannersData"));

//On Home Page Load
let pageStartup = new Vue ({
    el : "#pageHeader",
    data : {
        logo : "https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png",
        currentUser : localStorage.getItem("currentUser")
    },
    methods : {
        userLogOut : function() {
            localStorage.removeItem("currentUser");
            console.log("User Logged Out");
            document.location.href = "../html/logInPage.html";
        },
        moveToWatchlist : function() {
            document.location.href = "../html/watchlistPage.html";
        }
    }
})

//Create Banners
let banners = new Vue ({
    el : "",
    data : {
        bannerImage : moviesBannersInfo
    },
    methods : {
        createBanners : function() {
            let length = this.bannerImage.length;
            for (i = 0; i < length; i++) {
                const newLine = document.createElement('div');
                newLine.id = i;
                newLine.className = "carousel-item";

                let bannersArray = [];
                
                bannersArray.push(this.bannerImage[i].bannerImg);

                for (x = 0; x < bannersArray.length; x++) {
                    const newImg = document.createElement('img');
                    newImg.className = "bannerImg";
                    newImg.src = bannersArray[x];

                    newLine.append(newImg);
                }

                document.getElementById("movieBanners").append(newLine);
            }            
        }
    },
    created : function() {
        this.createBanners();
    }
})

//Create Movie Instances
let movies = new Vue ({
    el : "",
    data : {
        id : "",
        name : "",
        genre : "",
        comingSoon : "",
        availDate : "",
        thumbnail : "",
        preview : ""
    },
    methods : {
        createMovies : function() {
            for (i = 0; i < moviesInfo.length; i++) {
                this.id = i;
                this.name = moviesInfo[i].name;
                this.genre = moviesInfo[i].genre;
                this.comingSoon = this.computeComingSoon(i);
                this.availDate = moviesInfo[i].availDate;
                this.thumbnail = "<img src=\"" + moviesInfo[i].thumbnail + "\">";
                this.preview = moviesInfo[i].preview;
            }
        },
        computeComingSoon : function(index) {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;

            if (today > moviesInfo[index].availDate) {
                return true;
            } 
            else {
                return false;
            }
        }
    },
    created : function() {
        this.createMovies();
    }
})

/*
//Prevent User to Return to Home Page Once They Have Signed Out
function preventBack() {
    window.history.forward();
}

setTimeout("preventBack()", 0);
window.onunload = function () { null };
*/