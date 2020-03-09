
// TARGET THE SUBMIT BUTTON
const submitBtn = document.querySelector('#submit');

// TARGET INPUT FIELDS FOR TURNING INPUT FIELD BORDER TO RED OR GREEN
const firstNameField = document.querySelector('.firstNameField')
const lastNameField = document.querySelector('.lastNameField')
const emailField = document.querySelector('.emailField')
const passwordField = document.querySelector('.passwordField')
const passwordField2 = document.querySelector('.passwordField2')


// TARGET THE 'SUCCESS!' MESSAGE FOR EACH INPUT FIELD IN ORDER TO HIDE/SHOW MESSAGE THAT'S ALREADY PLACED IN HTML
const successFirst = document.querySelector('.successFirst');
const successLast = document.querySelector('.successLast');
const successEmail = document.querySelector('.successEmail');
const successPassword = document.querySelector('.successPassword');
const successPassword2 = document.querySelector('.successPassword2');



// TARGET THE 'WARNING (!)' ICON  FOR EACH INPUT FIELD IN ORDER TO HIDE/SHOW ICON
const iconFirst = document.querySelector('.iconFirst');
const iconLast = document.querySelector('.iconLast');
const iconEmail = document.querySelector('.iconEmail');
const iconPassword = document.querySelector('.iconPassword');
const iconPassword2 = document.querySelector('.iconPassword2');



// TARGET RED ERROR MESSAGE FOR EACH INPUT FIELD IN ORDER TO HIDE/SHOW MESSAGE THAT'S ALREADY IN HTML
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordInput2 = document.querySelector('#password2');




// THIS ONE FUNCTION TRIMS OFF UNNECESSARY SPACES FROM INPUT FIELD VALUES AND CHECKS EACH INPUT VALUE TO DETERMINE WHAT HTML ERROR AND SUCCESS TEXT TO SHOW/HIDE, AS WELL AS WHETHER TO SHOW/HIDE THE RED ERROR/WARNING ICON(!).


function checkInputs(){

const firstNameValue = firstNameInput.value.trim();
const lastNameValue = lastNameInput.value.trim();
const emailInputValue = emailInput.value.trim();
const passwordValue = passwordInput.value.trim();

const passwordValue2 = passwordInput2.value.trim();




// FIRST NAME FIELD CHECK
if(firstNameValue === ''){
firstNameField.classList.add('fieldBorderRed');
firstNameInput.nextElementSibling.classList.remove('error-hide');
firstNameInput.nextElementSibling.classList.add('errormessage-styling');
iconFirst.classList.remove('erroricon-hide');
successFirst.classList.add('error-hide'); // RETURN TO SUCCESSFIRST

} else {
    firstNameField.classList.remove('fieldBorderRed');
    firstNameField.classList.add('fieldBorderGreen');
    firstNameInput.nextElementSibling.classList.add('error-hide');
successFirst.classList.remove('error-hide'); // RETURN TO SUCCESSFIRST
iconFirst.classList.add('erroricon-hide'); 

};





// LAST NAME FIELD CHECK
if(lastNameValue === ''){
    lastNameField.classList.add('fieldBorderRed');
    lastNameInput.nextElementSibling.classList.remove('error-hide');
    lastNameInput.nextElementSibling.classList.add('errormessage-styling');
    successLast.classList.add('error-hide');
    iconLast.classList.remove('erroricon-hide');

    } else {
        lastNameField.classList.remove('fieldBorderRed');
        lastNameField.classList.add('fieldBorderGreen');
        lastNameInput.nextElementSibling.classList.add('error-hide');
    successLast.classList.remove('error-hide');
    iconLast.classList.add('erroricon-hide');
    };
    






    // EMAIL FIELD VALIDATION CHECK, WHICH CALLS ANOTHER FUNCTION BELOW TO ACTUALLY DO THE VALIDATION...
    if (validateEmail(emailInputValue)) {
        emailField.classList.remove('fieldBorderRed');
        emailField.classList.add('fieldBorderGreen');
        emailInput.nextElementSibling.classList.add('error-hide');
    successEmail.classList.remove('error-hide');
    iconEmail.classList.add('erroricon-hide');

} else {
    emailField.classList.add('fieldBorderRed');
    emailInput.nextElementSibling.classList.remove('error-hide');
    emailInput.nextElementSibling.classList.add('errormessage-styling');
    successEmail.classList.add('error-hide');
    iconEmail.classList.remove('erroricon-hide');
}



// PASSWORD FIELD CHECK
if (passwordValue === ""){
    passwordField.classList.add('fieldBorderRed');
    passwordInput.nextElementSibling.classList.remove('error-hide');
    passwordInput.nextElementSibling.classList.add('errormessage-styling');
    successPassword.classList.add('error-hide');
    iconPassword.classList.remove('erroricon-hide');

    } else {
        passwordField.classList.remove('fieldBorderRed');
        passwordField.classList.add('fieldBorderGreen');
        passwordInput.nextElementSibling.classList.add('error-hide');
    successPassword.classList.remove('error-hide');
    iconPassword.classList.add('erroricon-hide');

    };




    // RE-ENTER PASSWORD  FIELD CHECK, SIMPLY CHECKS TO MAKE SURE IT'S SAME AS FIRST PASSWORD FIELD...
    if (passwordValue2 === ""){
        passwordField2.classList.add('fieldBorderRed');
        passwordInput2.nextElementSibling.classList.remove('error-hide');
        passwordInput2.nextElementSibling.classList.add('errormessage-styling');
        successPassword2.classList.add('error-hide');
        iconPassword2.classList.remove('erroricon-hide');
    
        } else if (passwordValue2 != passwordValue){
            passwordField2.classList.add('fieldBorderRed');
            passwordInput2.nextElementSibling.classList.remove('error-hide');
            passwordInput2.nextElementSibling.classList.add('errormessage-styling');
            successPassword2.classList.add('error-hide');
            iconPassword2.classList.remove('erroricon-hide');
        }
        
        else {
            passwordField2.classList.remove('fieldBorderRed');
            passwordField2.classList.add('fieldBorderGreen');
            passwordInput2.nextElementSibling.classList.add('error-hide');
        successPassword2.classList.remove('error-hide');
        iconPassword2.classList.add('erroricon-hide');
    
        };

  }
  



// This function carries the expression to validate email.
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };






submitBtn.addEventListener('click', checkInputs);

