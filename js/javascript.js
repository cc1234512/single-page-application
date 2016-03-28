function validateForm(){
    
    var a=document.forms["Form"]["firstname"].value;
    var b=document.forms["Form"]["lastname"].value;
    var c=document.forms["Form"]["email"].value;
    var d=document.forms["Form"]["pw"].value;
    var e=document.forms["Form"]["pw2"].value;
    
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    
    
    if (a==null || a==""){
        document.getElementById("firstname").style.borderColor = "#E34234";
        alert("Firstname cannot be empty!");
        return false;
    }
    
    if (b==null || b==""){
        document.getElementById("lastname").style.borderColor = "#E34234";
        alert("Lastname cannot be empty!");
        return false;
    }
    
    if (c==null || c==""){
        document.getElementById("email").style.borderColor = "#E34234";
        alert("Email cannot be empty!");
        return false;
    }
    
    if (d==null || d==""){
        document.getElementById("pass1").style.borderColor = "#E34234";
        alert("Password cannot be empty!");
        return false;
    }
    
    if (e==null || e==""){
        document.getElementById("pass1").style.borderColor = "#E34234";
        alert("Confirm Password cannot be empty!");
        return false;
    }
      
    if (pass1 != pass2) {
        document.getElementById("pass1").style.borderColor = "#E34234";
        document.getElementById("pass2").style.borderColor = "#E34234";
        alert("Passwords Do not match");
        return false;
    }
  
}