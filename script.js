const menuBtn=document.querySelector('.menuBtn')
const toggleBtn=document.querySelector(".toggle_btn")
const dropdownMenu=document.querySelector(".dropdown_menu")

menuBtn.addEventListener("click",()=>{
    dropdownMenu.style.display="block"
    menuBtn.classList.toggle("open")
    dropdownMenu.classList.toggle("open")
   
})
function clicked(){
    dropdownMenu.style.display="none"
    menuBtn.classList.toggle("open")
    dropdownMenu.classList.toggle("open")
}
// scroll btn
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
var uflag=0,pflag=0,eflag=0,mflag=0;
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// form authentication 
uname.addEventListener('input', function (evt) {
    validatename()
});

function validatename(){
    uflag=0
    unameCheck.style.display="none"
    if(!uname.value ){
        unameCheck.style.display="block"
        unameCheck.innerHTML="Please enter a valid name!"
    } 
    else{
        if(uname.value.length<4){
            unameCheck.style.display="block"
             unameCheck.innerHTML="Minimum length of the name must be greater than 3 !"
        }
        else{
            uflag=1
        }
    }  
}
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  function containsOnlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }
  
function validateEmailid(){
    eflag=0
    emailCheck.style.display="none"


    if(!validateEmail(emailid.value)) {

        emailCheck.innerHTML="please enter valid email"
        emailCheck.style.display="block"

      }
      else{
        eflag=1
      }
}

function validatePhone(){
    pflag=0
    phoneCheck.style.display="none"
    if(!phone.value){
        
        phoneCheck.innerHTML="please enter valid Phone number"
        phoneCheck.style.display="block"

    }
    else{
       
        if(phone.value.length!=10 || !containsOnlyNumbers(phone.value)){
            phoneCheck.style.display="block"
            phoneCheck.innerHTML="please enter valid Phone number(must be 10 digits)"
        }
        else{
            pflag=1
        }
    }
}

function validateMsg(){
    mflag=0
    msgCheck.style.display="none"
    if(!content.value){
        msgCheck.style.display="block"
        msgCheck.innerHTML="Please enter a Message"
       
    }
    else{
        mflag=1
    }
   
}
emailid.addEventListener('input', function (evt) {
    validateEmailid()
});

phone.addEventListener('input', function (evt) {
    validatePhone()
});

content.addEventListener('input', function (evt) {
    validateMsg()
});

function auth(){
    validateEmailid()
    validatePhone()
    validatename()
    validateMsg()
 if(uflag==1 && eflag==1 && pflag==1 && mflag==1 && mflag==1){

    displayAlert()
    phone.value=""
    uname.value=""
    emailid.value=""
    content.value=""
 }
}


// loading

const fade=()=>{
    const wrapper= document.querySelector('.wrapper');
    wrapper.classList.add('fade');
}
window.addEventListener('load',fade)


ScrollReveal({
    // reset:true,
    distance:'60px',
    duration: 2500,
    delay:200

});
// scrollReveal().reveal('.welcomeTxt',{delay:5000})
// ScrollReveal().reveal('.transitionContent1', { delay: 50,origin:'left' });
// ScrollReveal().reveal('.transitionContent2', { delay: 70,origin:'left' });


ScrollReveal().reveal('.card', { delay: 50,origin:'left' });
ScrollReveal().reveal('.serviceBox', { delay: 40,origin:'left' });
ScrollReveal().reveal('.transitionPercentage1', { delay: 50,origin:'left' });
ScrollReveal().reveal('.transitionPercentage2', { delay: 55,origin:'left' });
ScrollReveal().reveal('.mainCaption', { delay: 50,origin:'bottom' });
ScrollReveal().reveal('.title', { delay: 50,origin:'bottom' });

// alert box begins
function displayAlert(){
    alertBox.style.display="flex"
    setTimeout( ()=> {
        alertBox.style.display="none"
    },3000)
}
function alertClose(){
    alertBox.style.display="none"
}
// alert box ends