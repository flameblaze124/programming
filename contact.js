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
    }
}