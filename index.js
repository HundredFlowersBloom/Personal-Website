const flower1 =
`





__________
\\________/
 |      |
 |______|`

const flower2 =
`



     __
    /_/
____|_____
\\________/
 |      |
 |______|`

const flower3 =
`


 __   
 \\_\\  __
    |/_/
____|_____
\\________/
 |      |
 |______|`

const flower4 =
`    _
  _(_)_
 (__@__)
   (_)
 __ | 
 \\_\\| __
    |/_/
____|_____
\\________/
 |      |
 |______|`


const flowers = [flower1, flower2, flower3, flower4];
let i = 0;

document.addEventListener("DOMContentLoaded", (_) => {
    const htmldoc = document.documentElement;
    const timebtn = document.getElementById("timebtn");
    const flower = document.getElementById("flowertext");
    flower.textContent = flowers[i];

    function setDay() {
        htmldoc.style.backgroundColor = "#121212";
        htmldoc.style.color = "#FFFFFF";
        timebtn.innerText = "🌙"
        localStorage.setItem("mode", "dark");
    }

    function setNight() {
        htmldoc.style.backgroundColor = "#FCF5E5";
        htmldoc.style.color = "#000000";
        timebtn.innerText = "☀️"
        localStorage.setItem("mode", "light");
    }

    function setMode() {
        isNight ? setNight() : setDay();
    }

    let isNight = localStorage.getItem("mode");
    if (isNight == null) isNight = false; else setMode(); 

    timebtn.addEventListener("click", (_) => {
        isNight = !isNight;
        setMode();
        
        if (i < 3) {
            i++;
            flower.textContent = flowers[i];
        } 
    });

    const emailbtn = document.getElementById("emailtext");
});
