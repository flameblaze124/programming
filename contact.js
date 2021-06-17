function validateForm() {
    var name = document.forms["contact-form"]["name"].value;
    if (name == "") {
        alert("Name need be filled out");
        return false;
    }

    var phone = document.forms["contact-form"]["phone"].value;
    if (phone == "") {
        alert("Phone need be filled out");
        return false;

    }
    var email = document.forms["contact-form"]["email"].value;
    if (email == "") {
        alert("Email need be filled out");
        return false;
    } else {
        return validateEmail(email);
    }

    if (form_checked == true) {
        alert("thank you visting hope you a nice day")
    }
}

function validateEmail(value) {
    if (/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
        return true;
    } else {
        alert('You have entered an invalid email address.')
        return false;
    }
}