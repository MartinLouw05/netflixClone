
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
console.log(moviesInfo)
console.log(moviesBannersInfo)

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
        banner : ""
    }
})

//Create Movie Instances
let movies = new Vue ({
    el : "",
    data : {
        id : "",
        name : "",
        genre : "",
        comingSoon : Boolean,
        availDate : Date,
        thumbnail : "",
        preview : ""
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