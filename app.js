//username
let username = document.querySelector("#username")

//email
let emailid = document.querySelector("#email")

//password
let password = document.querySelector("#password")
let repassword = document.querySelector("#repassword")

//button
let check = document.querySelector("#submit")
let cancel = document.querySelector("#cancel")

//paragraph
let p = document.querySelector("#usererror")
let e = document.querySelector("#emailerror")
let pa = document.querySelector("#passworderror")
let repa = document.querySelector("#repassworderror")

let form = document.getElementById("form")

form.addEventListener('submit' ,e =>{
    e.preventDefault()
    submit()
})

//submit function
function submit() {
   
    // username validation

    if (username.value === '') {

        if (username.classList.contains("addsu")) {
            username.classList.replace("addsu", "adder")
            p.classList.replace("psu", "per")
            document.getElementById("usererror").textContent = "Username cant be blank"
        }
        else {
            username.classList.add("adder")
            document.getElementById("usererror").textContent = "Username cant be blank"
        }
    }
    else {
        document.getElementById("usererror").textContent = "UserName correct"
        p.classList.add("psu")
        username.classList.add("addsu")
    }

    //Email validation

    let validmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (emailid.value.match(validmail)) {

        if (emailid.classList.contains("adder")) {
            emailid.classList.replace("adder", "addsu")
            document.getElementById("emailerror").textContent = "Email Verification completed"
            e.classList.replace("per", "psu")
        }
        else {
            emailid.classList.add("addsu")
            e.classList.replace("per", "psu")
        }
    }

    else if (emailid.value === '') {

        if (emailid.classList.contains("addsu")) {
            emailid.classList.replace("addsu", "adder")
            document.getElementById("emailerror").textContent = "Email cant be blank"
            e.classList.replace("psu", "per")
        }
        else {
            emailid.classList.add("adder")
            document.getElementById("emailerror").textContent = "Email cant be blank"
            e.classList.add("per")
        }

    }

    else if (emailid.value != validmail) {

        if (emailid.classList.contains("addsu")) {
            emailid.classList.replace("addsu", "adder")
            document.getElementById("emailerror").textContent = "Email format incorrect"
            e.classList.replace("psu", "per")
        }
        else {
            emailid.classList.add("adder")
            document.getElementById("emailerror").textContent = "Email format incorrect"
            e.classList.add("per")
        }
    }

    //Password validation

    if (password.value === '') {
        if (password.classList.contains("addsu")) {
            password.classList.replace("addsu", "adder")
            document.getElementById("passworderror").textContent = "Password field cant be blank"
            pa.classList.replace("psu", "per")
        }
        else {
            password.classList.add("adder")
            document.getElementById("passworderror").textContent = "Password field cant be blank"
            pa.classList.add("per")
        }
    }
    else if (password.value.length < 8) {

        if (password.classList.contains("addsu")) {
            password.classList.replace("addsu", "adder")
            document.getElementById("passworderror").textContent = "Password Length minimum should be 8"
            pa.classList.replace("psu", "per")
        }
        else {
            password.classList.add("adder")
            document.getElementById("passworderror").textContent = "Password Length minimum should be 8"
            pa.classList.add("per")
        }
    }
    else {
        if (password.classList.contains("adder")) {
            password.classList.replace("adder", "addsu")
            document.getElementById("passworderror").textContent = "Password verification completed"
            pa.classList.replace("per", "psu")
        }
        else {
            password.classList.add("addsu")
            document.getElementById("passworderror").textContent = "Password verification completed"
            pa.classList.add("psu")
        }

    }

    // Re-enter Password validation

    if (repassword.value === '') {

        if (repassword.classList.contains("addsu")) {
            repassword.classList.replace("addsu", "adder")
            document.getElementById("repassworderror").textContent = "Re-enter password cant blank"
            repa.classList.replace("psu", "per")
        }
        else {
            repassword.classList.add("adder")
            document.getElementById("repassworderror").textContent = "Re-enter password cant blank"
            repa.classList.add("per")
        }

    }
    else if (repassword.value.length < 8) {

        if (repassword.classList.contains("addsu")) {
            repassword.classList.replace("addsu", "adder")
            document.getElementById("repassworderror").textContent = "Password Length minimum should be 8"
            repa.classList.replace("psu", "per")
        }
        else {
            repassword.classList.add("adder")
            document.getElementById("repassworderror").textContent = "Password Length minimum should be 8"
            repa.classList.add("per")
        }
    }
    else if (password.value === repassword.value) {

        if (repassword.classList.contains("adder")) {
            repassword.classList.replace("adder", "addsu")
            document.getElementById("repassworderror").textContent = "Password Matching"
            repa.classList.replace("per", "psu")
        }
        else {
            repassword.classList.add("addsu")
            document.getElementById("repassworderror").textContent = "Password Matching"
            repa.classList.add("psu")
        }

    }
    else if (password.value != repassword.value) {

        if (repassword.classList.contains("addsu")) {
            repassword.classList.replace("addsu", "adder")
            document.getElementById("repassworderror").textContent = "Password Mismatch with Entered Password"
            repa.classList.replace("psu", "per")
        }
        else {
            repassword.classList.add("adder")
            document.getElementById("repassworderror").textContent = "Password Mismatch with Entered Password"
            repa.classList.add("per")
        }
    }
}





