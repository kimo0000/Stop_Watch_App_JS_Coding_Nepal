const timer = document.querySelector('.timer'),
      btns = document.querySelectorAll('.btns button');

let milliSeconds = 0, seconds = 0, minutes = 0, hours = 0;
let counter = null;

btns.forEach(btn => {
    timer.innerText = `00:00:00:00`;
    btn.addEventListener('click', ({target}) => {
    
    document.querySelector('.active').classList.remove('active');
    target.classList.add('active');

        if(target.id === "start") {
                clearInterval(counter);
                counter = setInterval(() => {

                milliSeconds++;
                if(milliSeconds == 60) {
                    milliSeconds = 0;
                    seconds++;
                }
                
                if(seconds == 60) {
                    seconds = 0;
                    minutes++;
                }
                
                if(minutes === 60) {
                    minutes = 0;
                    hours++;
                }
                
                timer.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}:${milliSeconds < 10 ? `0${milliSeconds}` : milliSeconds}`;
            }, 1)
        } 
        
        if(target.id === "stop") {
            clearInterval(counter);
        } 
        
        if (target.id === "reset") {
            clearInterval(counter);
            (milliSeconds = 0), (seconds = 0), (minutes = 0), (hours = 0);
              timer.innerText = `00:00:00:00`;
            }
    })
})