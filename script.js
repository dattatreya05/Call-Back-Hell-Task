// It is with the some variable we are targetting the html element
let display = document.querySelector("h1");

// we are creating the setTimeout function for 10 times after the time is over it will shows the "happy independence day" in the screen
// at the same time we are calling the confetti.js file with some background changes and we are calling with setInterval function after 2000mili seconds
setTimeout(() => {
    display.innerText = 10;
    setTimeout(() => {
      display.innerText = 9;
      setTimeout(() => {
        display.innerText = 8;
        setTimeout(() => {
          display.innerText = 7;
          setTimeout(() => {
            display.innerText = 6;
            setTimeout(() => {
              display.innerText = 5;
              setTimeout(() => {
                display.innerText = 4;
                setTimeout(() => {
                  display.innerText = 3;
                  setTimeout(() => {
                    display.innerText = 2;
                    setTimeout(() => {
                      display.innerText = 1;
                      setTimeout(() => {
                        confetti.start();
                        setInterval(() => confetti.stop(), 2000);
                        display.innerText = "Happy Independence Day";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
