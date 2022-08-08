//Create Default Sign In Information for an Admin
let logInInformation = localStorage.getItem("users");

if (!logInInformation) {
    //Admin Sign In Information
    let admin = { userName: "Admin" , userPassword : "Password" };
    let adminArray = [];
    adminArray.push(admin);
    let adminString = JSON.stringify(adminArray);
    let adminJson = JSON.parse(adminString);
    localStorage.setItem("users", JSON.stringify(adminJson));
}
else {
    //Sign In Information for Users Already Exist
}

//Remove Signed In User when the User Uses the Back Button
localStorage.removeItem("currentUser");

//Variables
let signInSubmitBtn = document.getElementById("btnSignInSubmit");
let signInSubmitBtnClass = document.getElementsByClassName("btnSignInSubmit");

let registerUserLabel = document.getElementById("lblRegisterUser");
let registerUserLabelClass = document.getElementsByClassName("lblRegisterUser");

let signInLabel = document.getElementById("lblSignIn");
let signInLabelClass = document.getElementsByClassName("lblSignIn");

let registerUserSubmitBtn = document.getElementById("btnRegisterSubmit");
let registerUserSubmitBtnClass = document.getElementsByClassName("btnRegisterSubmit");

let userNameInput = document.getElementById("userName");
let userPasswordInput = document.getElementById("userPassword");

let formHeader = document.getElementById("formHeader");

//On Start Up
window.onload = function() {
    userNameInput.value = '';
    userPasswordInput.value = '';
}

//Sign In
//Event Listener for when a User Clicks the Submit Button to Sign In
signInSubmitBtn.addEventListener('click', (e) => {
    let users = localStorage.getItem("users");

    if (users == null) {
        //No Registered Users Found  
        alert("Username or Password Incorrect.  Please Try Again.");
    }
    else if (users !== null) {
        //Registered Users Found
        e.preventDefault();
        signIn(users);        
    }
    else {
        //Something went Wrong while Attempting to Retrieve Registered Users
    }
})

function signIn(users) {
    let signInUserName = userNameInput.value;
    let signInUserPassword = userPasswordInput.value;

    let signInObj = { userName : signInUserName, userPassword : signInUserPassword };
    let signInObjString = JSON.stringify(signInObj);
  
    let usersArray = JSON.parse(users);
    let usersLength = usersArray.length;

    let signInArray = [];
    let registeredObjString;
    let successObj;
    
    //Cycle Through Registered Users for a Matching Entry
    for (i = 0; i < usersLength; i++) {
        let registeredUserName = usersArray[i].userName;
        let registeredUserPassword = usersArray[i].userPassword;

        let registeredObj = { userName : registeredUserName, userPassword : registeredUserPassword };
        registeredObjString = JSON.stringify(registeredObj);        

        if (signInObjString == registeredObjString) {
            //Matching Entry Found
            successObj = JSON.parse(registeredObjString);
            signInArray.push(true);
        }
        else {
            //Not A Matching Entry
            signInArray.push(false);            
        }
    }

    //Check if There was a Matching Entry
    if (signInArray.includes(true)) { 
        //Matching User Found
        //Sign the User In       
        signInSuccess(successObj);
    }
    else {
        //No Matching User Found
        alert("Username or Password Incorrect.  Please Try Again.");
    }
}

//Sign In was Successful
function signInSuccess(user) {
    let signedInUser = user.userName;
    localStorage.setItem("currentUser", signedInUser);
    document.location.href= "../html/homePage.html";
}

//Register User
registerUserSubmitBtn.addEventListener('click', (e) => {
    //Attempting to Register a New User
    let users = localStorage.getItem("users");

    let newUserName = userNameInput.value;
    let newUserPassword = userPasswordInput.value;

    if (newUserName !== '' && newUserPassword !== '') {
        let newUserObj = { userName: newUserName , userPassword : newUserPassword };

        let newUserArray = [];
        newUserArray.push(newUserObj);

        let jsonArray = JSON.stringify(newUserArray);
        let myJson = JSON.parse(jsonArray);
        let jsonData = JSON.stringify(myJson);

        //Check if Sign In Information for other Users Already Exist
        if (users == null) {
            //No Registered Users Found
            localStorage.setItem("users", jsonData);
            alert("New User Successfully Registered.  Please Attempt to Sign In.");

            e.preventDefault();
            hideRegisterBtn();
        }
        else if (users !== null) {
            //Registered Users Found
            e.preventDefault();
            registerUser(users, myJson);    
        }
        else {
            console.log("Something Went Wrong While Attempting To Retrieve Registered Users");
        }
    }
    else {        
        alert("Please Ensure That All Fields Have Been Filled");        
    }
})

//Register User
function registerUser(users, data) {
    let usersArray = JSON.parse(users);
    let usersLength = usersArray.length;
    let duplicateArray = [];
    
    //Check if Username Already Exists
    for (i = 0; i < usersLength; i++) {
        if (usersArray[i].userName == data[0].userName) {
            //Matching Username Found
            duplicateArray.push(true);            
        }
        else {
            //Usernames Do Not Match
            duplicateArray.push(false);
        }
    }

    //Username Final Validation
    if (duplicateArray.includes(true)) {
        //Duplicate Username was Found
        alert("Username Already Exists.  Please Choose a Different Username.");
    }
    else {
        //No Duplicate Username Found
        //Register New User's Information
        let newUsersArray = usersArray.concat(data);
        let newUsersData = JSON.stringify(newUsersArray);
        localStorage.setItem("users", newUsersData);

        alert("New User Successfully Registered.  Please Attempt to Sign In.");
        hideRegisterBtn();
    }    
}

//Display Register Button
registerUserLabel.addEventListener('click', (e) => {
    changeDisplay(signInSubmitBtnClass, 'none');
    changeDisplay(registerUserSubmitBtnClass, 'block');
    changeDisplay(registerUserLabelClass, 'none');
    changeDisplay(signInLabelClass, 'block');

    formHeader.innerHTML = "Register";
    
    userNameInput.value = '';
    userPasswordInput.value = '';
})

//Return to Sign In Form
signInLabel.addEventListener('click', (e) => {
    hideRegisterBtn();
})

//Hide Register Button
function hideRegisterBtn() {
    changeDisplay(signInSubmitBtnClass, 'block');
    changeDisplay(registerUserSubmitBtnClass, 'none');
    changeDisplay(registerUserLabelClass, 'block');
    changeDisplay(signInLabelClass, 'none');

    formHeader.innerHTML = "Sign In";
    
    userNameInput.value = '';
    userPasswordInput.value = '';
}

//Change Label Display
function changeDisplay(tab, display) {
    let i;
    let tabLength = tab.length;

    for(i = 0; i < tabLength; i++) {
        tab[i].style["display"] = display;
    }
}
