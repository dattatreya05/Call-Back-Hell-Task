let display = document.querySelector("h1");


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