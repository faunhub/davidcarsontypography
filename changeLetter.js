function changeLetter(){
    this.src = "images/deconstructed/" + this.id + ".png";
}  

function changeLetterback(){
    this.src = "images/helvetica/" + this.id + ".png";
    toggle = false;
}

function changeAll(){
    if (toggle == false){
        for (let j=0; j< letterCollection.length; j++){
            let current = letterCollection[j];
            current.src = "images/deconstructed/" + current.id + ".png";
        }
    } else {
        for (let l=0; l< letterCollection.length; l++){
            let current = letterCollection[l];
            current.src = "images/helvetica/" + current.id + ".png";
        }
    }
    toggle =!toggle;
}


/*main */
const changeBtn = document.querySelector('.btn');
const letterCollection = document.querySelectorAll('.letter');

for (let i=0; i < letterCollection.length; i++){
    letterCollection[i].addEventListener('mouseover', changeLetter);
    letterCollection[i].addEventListener('mouseout' , changeLetterback);
}

changeBtn.addEventListener('click', changeAll);
let toggle = false;

document.onreadystatechange = function() {
    if (document.readyState !== "complete"){
        document.querySelector('.loading').style.visibility = "visible";
    } else {
        document.querySelector('.loading').style.visibility = "hidden";
    }
}