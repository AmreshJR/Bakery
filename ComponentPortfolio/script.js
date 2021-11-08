log = () =>{
    location.href = "./ComponentLogin/index.html";
}
logout = () =>{
    localStorage.setItem("isLogIn",false);
    localStorage.setItem("RememberMe",false);
}
let logStatus = localStorage.getItem("isLogIn");
console.log(logStatus);

if(logStatus == "true")
{
    document.getElementById("logIn").style.display = "none";
    document.getElementById("logOut").style.display="block";
    document.getElementById("mLogin").style.display="none";
    document.getElementById("mLogout").style.display="block";
}
else{
    document.getElementById("logIn").style.display = "block";
    document.getElementById("logOut").style.display="none";
    document.getElementById("mLogin").style.display="block";
    document.getElementById("mLogout").style.display="none";
}