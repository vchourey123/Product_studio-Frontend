const login  = document.getElementById("logIn")
const register  = document.getElementById("register") 


function Login(e) {
    
   e.preventDefault()
    console.log("Logged")
}

function Register(e){
    e.preventDefault()
    document.getElementById('id01').style.display='block'
    {
        if (e.target == modal) {
          modal.style.display = "none";
        }
      }
    
    console.log("registered")
}

console.log(register)
console.log(login)
login.addEventListener("click" , Login)
register.addEventListener("click" , Register)