console.log("Log In Page");

//Remove Signed In User When User Uses Back Button
localStorage.removeItem("currentUser");

//Control Variables
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
signInSubmitBtn.addEventListener('click', (e) => {
    let users = localStorage.getItem("users");

    if (users == null) {
        console.log("No Registered Users Found");       
        alert("Username or Password Incorrect.  Please Try Again.");
    }
    else if (users !== null) {
        console.log("Registered Users Found");

        e.preventDefault();
        signIn(users);        
    }
    else {
        console.log("Something Went Wrong While Attempting To Retrieve Registered Users");
    }
})

function signIn(users) {
    console.log("Attempting To Sign In User");

    let signInUserName = userNameInput.value;
    let signInUserPassword = userPasswordInput.value;

    let signInObj = { userName : signInUserName, userPassword : signInUserPassword };
    let signInObjString = JSON.stringify(signInObj);
  
    let usersArray = JSON.parse(users);
    let usersLength = usersArray.length;

    let signInArray = [];
    let registeredObjString;
    
    //Cycle Through Registered Users For A Matching Entry
    for (i = 0; i < usersLength; i++) {
        let registeredUserName = usersArray[i].userName;
        let registeredUserPassword = usersArray[i].userPassword;

        let registeredObj = { userName : registeredUserName, userPassword : registeredUserPassword };
        registeredObjString = JSON.stringify(registeredObj);        

        if (signInObjString == registeredObjString) {
            console.log("Matching Entry Found");
            signInArray.push(true);
        }
        else {
            signInArray.push(false);
            console.log("Not A Matching Entry");
        }
    }

    //Check If There Was A Matching Entry
    if (signInArray.includes(true)) {
        let successObj = JSON.parse(registeredObjString);
        signInSuccess(successObj);
    }
    else {
        alert("Username or Password Incorrect.  Please Try Again.");
    }
}

function signInSuccess(user) {
    let signedInUser = user.userName;
    localStorage.setItem("currentUser", signedInUser);
    document.location.href= "../html/homePage.html";
}

//Register User
registerUserSubmitBtn.addEventListener('click', (e) => {
    console.log("Attempting to Register a New User");

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

        if (users == null) {
            console.log("No Registered Users Found");

            localStorage.setItem("users", jsonData);
            alert("New User Successfully Registered.  Please Attempt to Sign In.");

            e.preventDefault();
            hideRegisterBtn();
        }
        else if (users !== null) {
            console.log("Registered Users Found");

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

function registerUser(users, data) {
    console.log("Register User Function")
    let usersArray = JSON.parse(users);
    let usersLength = usersArray.length;
    
    for (i = 0; i < usersLength; i++) {
        if (usersArray[i].userName == data[0].userName) {
            alert("Username Already Exists.  Please Choose a Different Username.");
        }
        else {
            let newUsersArray = usersArray.concat(data);
            let newUsersData = JSON.stringify(newUsersArray);
            localStorage.setItem("users", newUsersData);

            alert("New User Successfully Registered.  Please Attempt to Sign In.");
            hideRegisterBtn();
        }
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

//Return To Sign In
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

//Change Display Property
function changeDisplay(tab, display) {
    let i;
    let tabLength = tab.length;

    for(i = 0; i < tabLength; i++) {
        tab[i].style["display"] = display;
    }
}
