console.log("Log In Page");

//Control Variables
let signInSubmitBtn = document.getElementById("btnSignInSubmit");
let signInSubmitBtnClass = document.getElementsByClassName("btnSignInSubmit");

let registerUserLabel = document.getElementById("lblRegisterUser");
let registerUserLabelClass = document.getElementsByClassName("lblRegisterUser");

let registerUserSubmitBtn = document.getElementById("btnRegisterSubmit");
let registerUserSubmitBtnClass = document.getElementsByClassName("btnRegisterSubmit");

let userNameInput = document.getElementById("userName");
let userPasswordInput = document.getElementById("userPassword");

//On Start Up
window.onload = function() {
    userNameInput.value = '';
    userPasswordInput.value = '';
}

//Sign In
signInSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let users = localStorage.getItem("users");

    if (users == null) {
        console.log("No Registered Users Found");
        alert("Username or Password Incorrect.  Please Try Again.");
    }
    else if (users !== null) {
        console.log("Registered Users Found");

        signIn(users);
    }
    else {
        console.log("Something Went Wrong While Attempting To Retrieve Registered Users");
    }
})

function signIn(data) {
    console.log("Attempting To Sign In User");

    let userName = userNameInput.value;
    let userPassword = userPasswordInput.value;

    let jsonUsers = JSON.parse(data);
    let usersLength = jsonUsers.length;    

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

        if (users == null) {
            console.log("No Registered Users Found");

            let jsonData = JSON.stringify(myJson);

            localStorage.setItem("users", jsonData);
            alert("New User Successfully Registered.  Please Attempt to Sign In.");

            hideRegisterBtn();
        }
        else if (users !== null) {
            console.log("Registered Users Found");
    
        }
        else {
            console.log("Something Went Wrong While Attempting To Retrieve Registered Users");
        }
    }
    else {
        alert("Please Ensure That All Fields Have Been Filled");
    }

})

function registerUser() {
    
}

//Display Register Button
registerUserLabel.addEventListener('click', (e) => {
    console.log("Register New User Label Clicked");

    changeDisplay(signInSubmitBtnClass, 'none');
    changeDisplay(registerUserSubmitBtnClass, 'block');
    changeDisplay(registerUserLabelClass, 'none');
    
    userNameInput.value = '';
    userPasswordInput.value = '';
})

//Hide Register Button
function hideRegisterBtn() {
    console.log("Hiding Register Button");

    changeDisplay(signInSubmitBtnClass, 'block');
    changeDisplay(registerUserSubmitBtnClass, 'none');
    changeDisplay(registerUserLabelClass, 'block');
    
    userNameInput.value = '';
    userPasswordInput.value = '';
}

//Change Display Property
function changeDisplay(tab, display) {
    console.log("Change Display");
    let i;
    let tabLength = tab.length;

    for(i = 0; i < tabLength; i++) {
        tab[i].style["display"] = display;
    }
}
