function contactValidation() {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const nameError = document.getElementById("nameError");
    const numberError = document.getElementById("numberError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const nameExp = /^[a-zA-Z]+$/;
    const numberExp = /^[0-9]{10}$/
    const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const messageExp = /^.{100,}$/
    let nameStatus = false;
    let numberStatus = false;
    let emailStatus = false;
    let messageStatus = false;

    if(name === ""){
        nameError.textContent = "Name is Mandatory";
    }
    else{
        if(name.match(nameExp)){
            nameError.textContent = "";
            nameStatus = true;
        }
        else{
            nameError.textContent = "Name is InValid";
        }
    }

    if(number === ""){
        numberError.textContent = "Number is Mandatory";
    }
    else{
        if(number.match(numberExp)){
            numberError.textContent = "";
            numberStatus = true;
        }
        else{
            numberError.textContent = "NUmber is Invalid";
        }
    }

    if(email === ""){
        emailError.textContent = "Email is Mandatory";
    }
    else{
        if(email.match(emailExp)){
            emailError.textContent = "";
            emailStatus = true;
        }
        else{
            emailError.textContent = "Email is Invalid";
        }
    }

    if(message === ""){
        messageError.textContent = "Message is Mandatory";
    }
    else{
        if(message.match(messageExp)){
            messageError.textContent = "";
            messageStatus = true;
        }
    }

    if(nameStatus && numberStatus && emailStatus && messageStatus){
        return true;
    }
    else{
        return false;
    }
}

function employeeValidation(){
    const userid = document.getElementById("userid").value;
    const password = document.getElementById("password").value;
    const useridError = document.getElementById("useridError");
    const passwordError = document.getElementById("passwordError");
    const useridExp = /^[0-9]{6}$/;
    const passwordExp = /^[a-zA-Z0-9]{6,}$/;
    let useridStatus = false;
    let passwordStatus = false;

    if(userid === ""){
        useridError.textContent = "User ID is Mandatory";
    }
    else{
        if(userid.match(useridExp)){
            useridError.textContent = "";
            useridStatus = true;
        }
        else{
            useridError.textContent = "User ID is Invalid";
        }
    }

    if(password === ""){
        passwordError.textContent = "Password is Mandatory";
    }
    else{
        if(password.match(passwordExp)){
            passwordError.textContent = "";
            passwordStatus = true;
        }
        else{
            passwordError.textContent = "Password is Invalid";
        }
    }

    if (useridStatus && passwordStatus){
        return true;
    }
    else{
        return false;
    }
}

function vendorValidation(){
    const vendoruserid = document.getElementById("vendoruserid").value;
    const vendorpassword = document.getElementById("vendorpassword").value;
    const vendoridError = document.getElementById("vendoridError");
    const vendorpasswordError = document.getElementById("vendorpasswordError");
    const vendoruseridExp = /^[0-9]{6}$/;
    const vendorpasswordExp = /^[a-zA-Z0-9]{6,}$/;
    let vendoruseridStatus = false;
    let vendorpasswordStatus = false;

    if(vendoruserid === ""){
        vendoridError.textContent = 'User ID is Mandatory';
    }
    else{
        if(vendoruserid.match(vendoruseridExp)){
            vendoridError.textContent = "";
            vendoruseridStatus = true;
        }
        else{
            vendoridError.textContent = 'User ID is Invalid';
        }    
    }


    if(vendorpassword === ""){
        vendorpasswordError.textContent = 'Password is Mandatory';
    }
    else{
        if(vendorpassword.match(vendorpasswordExp)){
            vendorpasswordError.textContent = "";
            vendorpasswordStatus = true;
        }
        else{
            vendorpasswordError.textContent = 'Password is Invalid';
        }
    }

    if(vendoruseridStatus && vendorpasswordStatus){
        return true;
    }
    else{
        return false;
    }
}

function dealerValidation(){
    const dealeruserid = document.getElementById("dealeruserid").value;
    const dealeridError = document.getElementById("dealeridError");
    const dealerExp = /^[0-9]{6}$/;
    let dealerStatus = false;

    if(dealeruserid === ""){
        dealeridError.textContent = "User ID is Mandatory";
    }
    else{
        if(dealeruserid.match(dealerExp)){
            dealeridError.textContent = "";
            dealerStatus = true;
        }
        else{
            dealeridError.textContent = "User ID is InValid";
        }
    }
    if(dealerStatus){
        return true;
    }
    else{
        return false;
    }
}