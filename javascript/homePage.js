
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
let moviesInfo = JSON.parse(localStorage.getItem("moviesData"));
let moviesBannersInfo = JSON.parse(localStorage.getItem("movieBannersData"));
let currentUser = localStorage.getItem("currentUser");
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
        moveToWatchlist : function() {
            let userWatchlist = localStorage.getItem("watchlist" + this.currentUser);
            userWatchlist = JSON.parse(userWatchlist);

            if (!userWatchlist || userWatchlist.length === 0) {
                alert("No Movies Have Been Added to Your Watchlist.  Please Add Some Movies and Try Again.")
            }
            else {
                document.location.href = "../html/watchlistPage.html";
            }            
        }
    }
})

//Create Elements that will fill the Carousel with Movie's Thumbnails
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

        return moviesArray;
    }
}

//Create Movie Grid and its Functionality
let movies = new Vue ({
    el : "#moviesGrid",
    elBtn : "button[class^='movieArea'",
    data : {
        moviesData : JSON.parse(localStorage.getItem("moviesData")),
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
        //Populate the Different Variables with Movies
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
        //Determine Whether or Not a Movie has been Released
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
        //Populate the Grid with Movies
        createMoviesGrid : function() {
            let length = this.moviesList.length;

            for (i = 0; i < length; i++) {
                const newGrid = document.createElement('div');
                newGrid.id = i;
                newGrid.className = "movieArea";
                newGrid.role = "movieArea";

                let movieName = [];
                movieName.push(this.moviesList[i].name);
                let movieImg = [];
                movieImg.push(this.moviesList[i].thumbnail);
                let comingSoon = [];
                comingSoon.push(this.moviesList[i].comingSoon);
                let moviePreview = [];
                moviePreview.push(this.moviesList[i].preview);

                for (x = 0; x < movieImg.length; x++) {
                    const newName = document.createElement('h6');
                    newName.className = "movieTitle";
                    newName.innerHTML = movieName[x];
                    const newDiv = document.createElement('div');
                    newDiv.className = "movieImg";
                    const newImg = document.createElement('img');
                    newImg.className = "movieThumbnail";
                    newImg.src = movieImg[x];

                    //Create Tooltip
                    const newTooltipDiv = document.createElement('div');
                    newTooltipDiv.className = "tooltip";
                    newTooltipDiv.id = "tooltip" + i;
                    const newTooltipTitle = document.createElement('div');
                    newTooltipTitle.innerHTML = movieName[x];
                    const newTooltipPreview = document.createElement('iframe');
                    newTooltipPreview.src = moviePreview[x];
                    const newTooltipBtn = document.createElement('button');
                    newTooltipBtn.id = "btnAddToWatchlist";
                    newTooltipBtn.className = "btnAddToWatchlist";
                    newTooltipBtn.innerHTML = "&#10133 Add to Watchlist";

                    newTooltipDiv.append(newTooltipTitle);
                    newTooltipDiv.append(newTooltipPreview);
                    newTooltipDiv.append(newTooltipBtn);

                    /*
                    <div id="tooltip" role="tooltip">
                        <div>Popcorn</div>
                        <iframe
                          src="https://www.youtube.com/embed/6pgeAFaLRL8&ab"
                          title="Tielle - BLESSLESS | Official Music Video"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <br /><button>Add to Watchlist</button>
                      </div>
                    */

                    /*const newIFrame = document.createElement('iframe');
                    //newIFrame.src = moviePreview[x];
                    newIFrame.className = "moviePreview";
                    newIFrame.style.display = "none";*/

                    newGrid.append(newName);
                    newDiv.append(newImg);
                    //newDiv.append(newIFrame);
                    //newGrid.append(newTooltipDiv);
                    newGrid.append(newDiv);

                    if (comingSoon[x] === true) {
                        const addButton = document.createElement('button');
                        addButton.id = "btnAddToWatchlist";
                        addButton.className = "btnAddToWatchlist";  
                        //addButton.style.display = "none";                      
                        addButton.innerHTML = "&#10133 Add to Watchlist";
                        
                        newDiv.append(addButton);
                        newGrid.append(addButton);
                    }
                    else {
                        const newLabel = document.createElement('label');
                        newLabel.className = "lblComingSoon";
                        newLabel.style.display = "none";
                        newLabel.innerHTML = "Coming Soon!";
                        
                        newGrid.append(newLabel);
                    }
                }              

                document.getElementById("moviesGrid").append(newGrid);               
            }      
        },
        //Display Movie Trailer
        //Function Does Not Work and is Not Utilized Anywhere
        displayMovieTrailer : function(id, btn) {            
            const movieArea = document.getElementsByClassName("movieArea"); 
            const tooltip = document.getElementsByClassName("tooltip");           
            
            document.getElementById("tooltip1").style.display = "block";
            Popper.createPopper(movieArea, tooltip, {
                placement: "bottom",
                modifiers: [
                {
                    name: "offset",
                    options: {
                    offset: [0, 5]
                    }
                }
                ]
            });

            /*
            let thumbnail = document.getElementById("moviesGrid").getElementsByClassName("movieArea")[id].getElementsByClassName("movieThumbnail");
            thumbnail[0].style.display = "none";
            sessionStorage.setItem("thumbnail", id);

            let iFrame = document.getElementById("moviesGrid").getElementsByClassName("movieArea")[id].getElementsByClassName("moviePreview");
            iFrame[0].style.display = "block";

            let addToWatchlistBtn = btn;
            addToWatchlistBtn.style.display = "block";

            window.addEventListener('mouseout', (e) => {
                if (e.path[0].className !== "movieThumbnail") {                   
                    if (thumbnail) {          
                        thumbnail[0].style.display = "block";
                        iFrame[0].style.display = "none";
                        addToWatchlistBtn.style.display = "none";
                    }
                }
            })*/
        },
        //Check if a Movie Does Exist on the User's Watchlist
        addMovieToWatchlistValidation : function(e) {
            let selectedMovieId = e.path[1].id;
            let selectedMovie = this.moviesData[selectedMovieId];

            let currentUser = localStorage.getItem("currentUser");
            let userWatchlist = "watchlist" + currentUser;
            
            let watchlistData = localStorage.getItem(userWatchlist);
            let watchlistArray = [];
            watchlistArray.push(selectedMovie);
            let validationArray = [];
            
            if (!watchlistData) {               
                localStorage.setItem(userWatchlist, JSON.stringify(watchlistArray));
                alert(selectedMovie.name + " Has Been Successfully Added to Your Watchlist");
            } 
            else {
                watchlistData = JSON.parse(watchlistData);              

                for (i = 0; i < watchlistData.length; i++) {
                    if (JSON.stringify(watchlistData[i]) === JSON.stringify(selectedMovie)) {
                        validationArray.push(true);
                    }
                    else {
                        validationArray.push(false);
                    }
                }

                this.addMovieToWatchlist(userWatchlist, validationArray, watchlistData, watchlistArray)
            }              
        },
        //Movie Did Not Exist on the User's Watchlist
        //Continue to Add the Movie to the User's Watchlist
        addMovieToWatchlist : function(user, validation, storedData, selectedData) {            
            if (validation.includes(true)){
                alert(selectedData[0].name + " is Already on Your Watchlist");
            }
            else{
                selectedData = JSON.stringify(selectedData);
                let jsonSelectedData = JSON.parse(selectedData);
    
                storedData = storedData.concat(jsonSelectedData);
                localStorage.setItem(user, JSON.stringify(storedData));
                alert(jsonSelectedData[0].name + " Has Been Successfully Added to Your Watchlist");
            }
        }
    },
    //Run these Functions on Program Startup
    created : function() {
        this.createMovies();
        this.createMoviesGrid();
    },
    //Continuously Run these Functions
    mounted() {
        //Add an Eventlistener for when a User Clicks on the "Add to Wishlist" Button
        window.addEventListener('click', (e) => {
            if (e.path[0].id === "btnAddToWatchlist") {                
                this.addMovieToWatchlistValidation(e)
            }
        }),
        //Add mouseover(hover) Event to Display "Add to Wishlist" Button
        window.addEventListener('mouseover', (e) => {
            if (e.path[2].className === "movieArea" || e.path[0].id === "btnAddToWatchlist") {              
                if (e.path[2].childNodes[2].className === "btnAddToWatchlist") {
                    e.path[2].childNodes[2].style.display = "inline-block";
                }                
            }
            else {
                document.querySelectorAll(".btnAddToWatchlist").forEach((element) => {
                    element.style.display = "none";
                })
            }
        })
    }
})
