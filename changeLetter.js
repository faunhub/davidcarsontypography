function changeLetter(letter){
    console.log(letter)
    if (toggle == true) {
        letter.src = "images/helvetica/" + letter.id + ".png";
    } else {
        letter.src = "images/deconstructed/" + letter.id + ".png";
    }
    toggle = !toggle;
}


/*main */
const changeBtn = document.querySelector('.changeBtn');
const letterCollection = document.querySelectorAll('.letter');
letterCollection.forEach(letter => letter.addEventListener('click', (letter) => changeLetter(letter)));
let toggle = false;
