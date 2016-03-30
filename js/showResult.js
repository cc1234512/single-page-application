function scrollWin() {
    window.scrollTo(0,1200);
}
function showData() {
    var email = document.getElementById("email").value;
    var pw = document.getElementById("pass1").value;
    document.getElementById('showEmail').innerHTML = "Eamil: " + email
    document.getElementById('showPW').innerHTML = "Password: " + pw
    document.getElementById("remindData").removeAttribute("hidden");
}