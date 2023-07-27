const hexValues: string[] = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const btn = document.getElementById("btn")!;
const color = document.querySelector(".color")!;

/* btn.addEventListener("click", () => {
     let hexColor:string="#";

     for(let i = 0; i < 6; i++) {

        hexColor += hexValues[getRandomNumber()]
     }

     color.textContent = hexColor
     document.body.style.backgroundColor = hexColor;
});

 */

btn.addEventListener("click", () => {

    generateColor((x)=>{
        color.textContent = x;
        document.body.style.backgroundColor = x;
         
      });
    })
 

function generateColor(update: (color: string) => void) {
  let hexColor: string = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hexValues[getRandomNumber()];
  }
  update(hexColor);
}

function getRandomNumber() {
  return Math.floor(Math.random() * hexValues.length);
}
