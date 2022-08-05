
//Check Sign In Validity
let signedInUser = localStorage.getItem("currentUser");

if (signedInUser === null) {
    alert("User Not Signed In");
    document.location.href = "../html/logInPage.html"
}
else {
    console.log("User " + signedInUser + " Is Signed In");
}

//Random Movies Information
let currentUser = localStorage.getItem("currentUser");
let moviesInfo = JSON.parse(localStorage.getItem("watchlist" + currentUser));
let moviesInstanceInfo;

//On Home Page Load
let pageStartup = new Vue ({
    el : "#pageHeader",
    data : {
        logo : "../images/netflixLogo.png",
        currentUser : localStorage.getItem("currentUser")
    },
    methods : {
        userLogOut : function() {
            localStorage.removeItem("currentUser");
            console.log("User Logged Out");
            document.location.href = "../html/logInPage.html";
        },
        moveToHomePage : function() {
            document.location.href = "../html/homePage.html";
        }
    }
})

//Movie Class
class Movies {
    constructor(id, name, genre, comingSoon, availDate, thumbnail, preview) {
        this._id = id;
        this._name = name;
        this._genre = genre;
        this._comingSoon = comingSoon;
        this._availDate = availDate;
        this._thumbnail = thumbnail;
        this._preview = preview;
    }

    get id() {
        return this._id;
    }
    set id(text) {
        if (isNaN(text)) {
            console.log("You Must Assign a Value To The ID");
        } 
        else {
            this._id = text;
        }
    }

    get name() {
        return this._name;
    }
    set name(text) {
        if (typeof text == "string") {
            this._name = text;
        } 
        else {
            console.log("You Must Assign a Value To The Name");
        }
    }

    get genre() {
        return this._genre;
    }
    set genre(text) {
        if (typeof text == "string") {
            this._genre = text;
        } 
        else {
            console.log("You Must Assign a Value To The Genre");
        }
    }

    get comingSoon() {
        return this._comingSoon;
    }
    set comingSoon(text) {
        if (typeof text == "boolean") {
            this._comingSoon = text;
        } 
        else {
            console.log("You Must Assign a Value To Coming Soon");
        }
    }

    get availDate() {
        return this._availDate;
    }
    set availDate(text) {
        if (typeof text == "string") {
            this._availDate = text;
        } 
        else {
            console.log("You Must Assign a Value To The Available Date");
        }
    }

    get thumbnail() {
        return this._thumbnail;
    }
    set thumbnail(text) {
        if (typeof text == "string") {
            this._thumbnail = text;
        } 
        else {
            console.log("You Must Assign a Value To The Thumbnail");
        }
    }

    get preview() {
        return this._preview;
    }
    set preview(text) {
        if (typeof text == "string") {
            this._preview = text;
        } 
        else {
            console.log("You Must Assign a Value To The Preview");
        }
    }

    //Create Movie Class Array
    createMovie(data) {
        let moviesArray = [];
        moviesArray.push(data);
        console.log(moviesArray)
        return moviesArray;
    }
}

//Create Movie Instances
let movies = new Vue ({
    el : "#moviesGrid",
    elBtn : "button[class^='movieArea'",
    search : document.getElementById("searchInput").value,
    data : {
        moviesData : moviesInfo,
        moviesList : [],
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
            let movieGridData = new Movies();

            for (i = 0; i < this.moviesData.length; i++) {
                movieGridData.id = i;
                movieGridData.name = this.moviesData[i].name;
                movieGridData.genre = this.moviesData[i].genre;
                movieGridData.comingSoon = this.computeComingSoon(i);
                movieGridData.availDate = this.moviesData[i].availDate;
                movieGridData.thumbnail = this.moviesData[i].thumbnail;
                movieGridData.preview = this.moviesData[i].preview;

                let movieObj = { name : movieGridData.name, genre : movieGridData.genre, comingSoon : movieGridData.comingSoon, availDate : movieGridData.availDate, thumbnail : movieGridData.thumbnail, preview : movieGridData.preview};
                this.moviesInstance = movieGridData.createMovie(movieObj);
                this.moviesList.push(movieObj);                
            }
        },
        computeComingSoon : function(index) {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;

            if (today > this.moviesData[index].availDate) {
                return true;
            } 
            else {
                return false;
            }
        },
        createMoviesGrid : function() {
            //Create Movies Grid
            for (i = 0; i < this.moviesList.length; i++) {
                const newGrid = document.createElement('div');
                newGrid.id = i;
                newGrid.className = "movieArea";
                newGrid.role = "movieArea";

                console.log(this.moviesList[i])

                let movieName = [];
                let movieImg = [];
                let comingSoon = [];
                let moviePreview = [];

                movieName.push(this.moviesList[i].name);                    
                movieImg.push(this.moviesList[i].thumbnail);                    
                comingSoon.push(this.moviesList[i].comingSoon);                    
                moviePreview.push(this.moviesList[i].preview);
             
                //Create Elements and Populate them with the Movie's Information
                for (x = 0; x < movieImg.length; x++) {
                    const newName = document.createElement('h6');
                    newName.className = "movieTitle";
                    newName.innerHTML = movieName[x];
                    const newDiv = document.createElement('div');
                    newDiv.className = "movieImg";
                    const newImg = document.createElement('img');
                    newImg.className = "movieThumbnail";
                    newImg.src = movieImg[x];

                    newGrid.append(newName);
                    newDiv.append(newImg);
                    newGrid.append(newDiv);

                    const addButton = document.createElement('button');
                    addButton.id = "btnRemoveFromWatchlist";
                    addButton.className = "btnRemoveFromWatchlist";
                    addButton.innerHTML = "&#10134 Remove From Watchlist";
                    
                    newDiv.append(addButton);
                    newGrid.append(addButton);
                }              

                document.getElementById("moviesGrid").append(newGrid);               
            }      
        },
        removeMovieFromWatchlist : function(e) {
            let selectedMovieId = e.path[1].id;
            let currentUser = localStorage.getItem("currentUser");
            let selectedMovie = this.moviesData[selectedMovieId];

            document.getElementById(selectedMovieId).remove();            
            this.moviesData.splice(selectedMovieId, 1);
            this.moviesList.splice(selectedMovieId, 1);
            localStorage.setItem("watchlist" + currentUser, JSON.stringify(this.moviesData));

            alert(selectedMovie.name + " Has Been Successfully Removed from Your Watchlist");

            this.watchlistMovieCount();
            
            document.getElementById("moviesGrid").innerHTML = "";
            this.createMoviesGrid();
            //location.reload();
        },
        watchlistMovieCount : function() {
            if (this.moviesData.length === 0) {
                alert("You Have No More Movies on Your Watchlist.  Returning to Home Page.");
                document.location.href = "../html/homePage.html";
            }
        },
        searchWatchlist : function() {
            document.getElementById("searchInput").addEventListener('keyup', (e) => {               
                this.search = document.getElementById("searchInput").value;

                for (i = 0; i < this.moviesData.length; i++) {
                    if (document.getElementById(i)) {                                
                        document.getElementById(i).remove();
                    }
                    else {
                        //The Element Has Already Been Removed
                    } 
                }

                this.createMoviesGrid();

                for (i = 0; i < this.moviesData.length; i++) {
                    let movieNameLowerCase = this.moviesData[i].name.toLowerCase();
                    let searchLowerCase = this.search.toLowerCase();            
                    
                    if (!movieNameLowerCase.includes(searchLowerCase)) {                            
                        if (document.getElementById(i)) {                                
                            document.getElementById(i).remove();
                        }
                        else {
                            //The Element Has Already Been Removed
                        }                            
                    }
                    else {
                        //Possible Match
                    }
                }
            })
        }
    },
    created : function() {
        this.createMovies();
        this.createMoviesGrid();
        this.searchWatchlist();
    },
    mounted() {
        window.addEventListener('click', (e) => {
            if (e.path[0].id === "btnRemoveFromWatchlist") {
                this.removeMovieFromWatchlist(e);
            }
        }),
        //Add mouseover(hover) Event to Display "Add to Wishlist" Button
        window.addEventListener('mouseover', (e) => {
            if (e.path[2].className === "movieArea" || e.path[0].id === "btnRemoveFromWatchlist") {           
                if (e.path[2].childNodes[2]) {
                    e.path[2].childNodes[2].style.display = "inline-block";
                }                
            }
            else {
                document.querySelectorAll(".btnRemoveFromWatchlist").forEach((element) => {
                    element.style.display = "none";
                })
            }
        })
    }
})