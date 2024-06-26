
// console.log(oldemail);
let bttn = document.getElementById("login")

bttn.addEventListener("click",()=>{
    let email = document.getElementById("email").value
let pass = document.getElementById("Password").value

let oldpass = localStorage.getItem("password")
let oldemail = localStorage.getItem("email")
    localStorage.setItem("login",true)


        if(email==oldemail&&pass==oldpass&& email!="" && pass != ""){
                    window.location.href='quiz.html'

        }

else{
    Swal.fire("Enter valid Email or password!");
    }}
)