

let btn = document.getElementById("Create")

btn.addEventListener("click",()=>{
    let user = document.getElementById("user").value
let email = document.getElementById("email").value
let pass = document.getElementById("Password").value
console.log(user,email,pass);
if(user !== "" && email !== "" && pass !== ""){

    Swal.fire("Account created");
    window.location.href = 'login.html'

}else{
    Swal.fire("Enter your information!");

}





localStorage.setItem("name",user)
localStorage.setItem("email",email)
localStorage.setItem("password",pass)
})
// console.log("Sasad");
