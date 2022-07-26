
let pageStartup = new Vue ({
    el : "#pageHeader",
    data : {
        logo : "https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png",
        name : localStorage.getItem("currentUser")
    }
})

