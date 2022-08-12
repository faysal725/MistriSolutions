new Vue({
    el:'#vue-app',
    data:{
        name:"",
        email:"",
        password:""
    },
    methods:{
        
        toggleLogIn: function() {
            this.email="";
            this.password="";
            let login = document.querySelector(".login-form")
            let signIn = document.querySelector("#sign-in")
            login.children[2].value="";
            login.children[3].value="";
            login.style.transform= "translateX(100%) translateY(-110%)";
            signIn.style.transform= "translateX(0) translateY(-95%)";
          },

          toggleSignIn: function() {
  
            this.email="";
            this.password="";
            this.name="";
            let login = document.querySelector(".login-form")
            let signIn = document.querySelector("#sign-in")
          
            signIn.children[2].value="";
            signIn.children[3].value="";
            signIn.children[4].value="";
          
            login.style.transform= "translateX(0) translateY(0%)";
            signIn.style.transform= "translateX(-100%) translateY(0)";

          },
          collectLoginData: function() {
            console.log(this.password, this.email)
          },
          collectSignInData: function() {
            console.log(this.password, this.email, this.name)
          },
          loginEyeToggle: function(){
            let x = document.querySelector(".hidden");
            let y = document.querySelector(".togglePass").firstElementChild
        
            if (x.type === "password") {
              x.type = "text";
              y.className = "fa-solid fa-eye-slash";
            } else {
              x.type = "password";
              y.className = "fa-solid fa-eye";
        
            }
          },
          signEyeToggle: function() {
            let x = document.querySelector(".hidden2");
            let y = document.querySelector("#toggleEye2").firstElementChild
        
            if (x.type === "password") {
              x.type = "text";
              y.className = "fa-solid fa-eye-slash";
            } else {
              x.type = "password";
              y.className = "fa-solid fa-eye";
        
            }
          }



    },
    computed:{

    }
})