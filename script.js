/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function role_selector() {
    i = 0;
    for (i = 0; i < document.forms[0].length - 1; ++i) {
        if (document.forms[0].elements[i].value === "") {
            alert("Missing input: \n Please fill in " + document.forms[0].elements[i].name + " Field.");
            return false;
        }
    }
    if (document.getElementById("roles").value === "seeker") {
        document.forms[0].submit();
        document.location.href = 'HomeSeeker.html';
    } else if (document.getElementById("roles").value === "owner") {
        document.forms[0].submit();
        document.location.href = 'homeowners.html';
    } else {
        alert("Please Choose a Role to Continue.");
        return false;
    }
}

function validate() {
    i = 0;
    for (i = 0; i < document.forms[0].length - 2; ++i) {
        if (document.forms[0].elements[i].value === "") {
            alert("Missing input: \n Please fill in " + document.forms[0].elements[i].name + " Field.");
            return false;
        }
    }

    if (document.forms[0].elements["First Name"].value.match(/^\d/) || document.forms[0].elements["Last Name"].value.match(/^\d/)) {
        alert("Name should not start with a number");
        return false;
    }

    if (document.forms[0].elements["Age"].value < 18) {
        alert("Age Must Be at Least 18 to Continue.");
        return false;
    }

    if (document.forms[0].elements["Number of Tenants"].value < 1) {
        alert("Number of Tenants Must be Positive to Continue.");
        return false;
    }

    if (document.forms[0].elements["Income"].value < 1) {
        alert("Income Must be Positive to Continue.");
        return false;
    }

    if (document.forms[0].elements["Phone Number"].value.length < 10) {
        alert("Invalid input: \n Mobile should contain at Least 10 digits.");
        return false;
    } else {
        phone = document.forms[0].elements["Phone Number"].value;
        if (!phone.match(/\+?\d{10}/)) {
            alert("Invalid input: \n Phone Number should not contain letters.");
            return false;
        }
    }

    if (document.forms[0].elements["Password"].value.length < 8) {
        alert("Invalid input: \n Password should contain at Least 8 digits.");
        return false;
    }
    document.forms[0].submit();
    document.location.href = "login.html";
}

