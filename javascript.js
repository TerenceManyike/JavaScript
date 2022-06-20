//Validating user input
function form_validate() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var regemail = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,3})(.[a-z]{2,3})$/;
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    //Namefield validation
    if(name.value == ""){
        name.style.border = "1px solid red";
        return false;
    }
    //Email validation
    else if(!regemail.test(email.value)){
        email.style.border = "1px solid red";
        return false;
      }
    //Subject field validation
    else if(subject.value == ""){
        subject.style.border = "1px solid red";
        return false;
    }
    //Message field validation
    else if(message.value == ""){
        message.style.border = "1px solid red";
        return false;
    }
    else{
        return true;
    }
}
//Countdown Timer
function countdown(){
    var christmass = "23 May 2022";
    var curr_date = new Date();
    var chris_date = new Date(christmass);
    var rem_date = (chris_date - curr_date)/1000;
    //Assigning elements
    var seconds = Math.floor(rem_date%60);
    var minutes = Math.floor(rem_date/60%60);
    var hours =  Math.floor(rem_date/3600%60);
    var days = Math.floor(rem_date/3600/24);
    //Countdown Timer elements
    var d = document.getElementById("days");
    var h = document.getElementById("hours");
    var m = document.getElementById("minutes");
    var s = document.getElementById("seconds");
    d.innerHTML = days;
    h.innerHTML = timeFormat(hours);
    m.innerHTML = timeFormat(minutes);
    s.innerHTML = timeFormat(seconds);

    //console.log(seconds);
}
function timeFormat(time){
    return time < 10 ? (`0${time}`) : time;
}

countdown();
setInterval(() => {
    countdown();
}, 1000);
