let userData = {
    Id: "Amresh",
    Pass: "amreshjr"
};
errMessage = (errMsg, ErrId, flag) => {
    if (flag == true) {
        document.getElementById(ErrId).style.display = "block";
        document.getElementById(ErrId).innerHTML = errMsg;
    }
    else {
        document.getElementById(ErrId).style.display = "none";
        document.getElementById(ErrId).innerHTML = errMsg;
    }
}
validate = (e) => {

    e.preventDefault();
    const userId = document.log_inForm.Name.value;
    const userPass = document.log_inForm.Pass.value;
    const remember = document.getElementById("exampleCheck1");
    console.log(remember.checked);
    let idErr = passErr = true;
    if (userId == userData.Id && userPass == userData.Pass) {
        idErr = passErr = false;
        errMessage("", "emailHelp", idErr);
        errMessage("", "passwordHelp", passErr);
        localStorage.setItem("isLogIn", true);
        if (remember == true)
            localStorage.setItem("RememberMe", remember);
        else
            localStorage.setItem("RememberMe", remember);
        location.href = "../ComponentProduct/index.html";

    }
    else if (userId == "" && userPass == "") {

        errMessage("Enter the userId", "emailHelp", idErr);
        errMessage("Enter the Password", "passwordHelp", passErr);
    }
    else if (userId != userData.Id && userPass != userData.Pass) {
        errMessage("Enter valid userId", "emailHelp", idErr);
        errMessage("Enter valid Password", "passwordHelp", passErr)
    }
    else if (userId == userData.Id && userPass != userData.Pass) {
        idErr = false;
        errMessage("", "emailHelp", idErr);
        errMessage("Invalid Password", "passwordHelp", passErr);
    }


    return false;
}
