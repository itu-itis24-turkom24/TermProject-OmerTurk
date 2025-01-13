const Submitbutton = document.getElementById('SubmitButton');
const ResetButton = document.getElementById('ResetButton');
const input = document.getElementById('predict-id');
const score = document.getElementById('Score');
const image1 = document.getElementById('Image1');
const image2 = document.getElementById('Image2');
const image3 = document.getElementById('Image3');
const image4 = document.getElementById('Image4');
const image5 = document.getElementById('Image5');
const image6 = document.getElementById('Image6');
const image7 = document.getElementById('Image7');
const image8 = document.getElementById('Image8');
let can=3;
let Nvar=true;
let Yvar=true;
let Mvar=true;
let Pvar=true;
let Hvar=true;

function AddHearts(can){
    return can*20
}

Submitbutton.addEventListener("click", function() {
    inputValue = input.value.trim();
    let currentValue = parseInt(score.textContent, 10);

    if(inputValue=="N" || inputValue=="n" && Nvar==true){
        image1.src="N.svg";
        currentValue += 20;
        Nvar=false;
        score.textContent = currentValue;
    }
    else if(inputValue=="Y" || inputValue=="y" && Yvar==true){
        image2.src="Y.svg";
        currentValue += 20;
        Yvar=false;
        score.textContent = currentValue;
    }
    else if(inputValue=="M" || inputValue=="m" && Mvar==true){
        image3.src="M.svg";
        currentValue += 20;
        Mvar=false;
        score.textContent = currentValue;
    }
    else if(inputValue=="P" || inputValue=="p" && Pvar==true){
        image4.src="P.svg";
        currentValue += 20;
        Pvar=false;
        score.textContent = currentValue;
    }
    else if(inputValue=="H" || inputValue=="h" && Hvar==true){
        image5.src="H.svg";
        currentValue += 20;
        Hvar=false;
        score.textContent = currentValue;
    }
    else if(input.value.length>1)
    {
        inputValue=inputValue.toLowerCase();
        if(inputValue=="nymph"){
            image1.src="N.svg";
            image2.src="Y.svg";
            image3.src="M.svg";
            image4.src="P.svg";
            image5.src="H.svg";
            currentValue = 100;
            score.textContent = currentValue;
        }
        else{
            can=0;
        }
    }
    else{
        if(can==3){
            image8.src="brokenheart.svg"
        }
        else if(can==2){
            image7.src="brokenheart.svg"
        }
        else{
            image6.src="brokenheart.svg"
        }
        can-=1;
    }
    if(currentValue==100){
        score.textContent = currentValue+AddHearts(can);
        alert("You won the game!");
        input.disabled = true;
        Submitbutton.disabled = true;
    }
    if(can==0){
        image8.src="brokenheart.svg"
        image7.src="brokenheart.svg"
        image6.src="brokenheart.svg"
        alert("You have 0 lives, you lost the game!");
        input.disabled = true;
        Submitbutton.disabled = true;
    }
});

ResetButton.addEventListener("click", function() {
    score.textContent = 0;
    image1.src="Unknown.svg"
    image2.src="Unknown.svg"
    image3.src="Unknown.svg"
    image4.src="Unknown.svg"
    image5.src="Unknown.svg"
    image6.src="heart.svg"
    image7.src="heart.svg"
    image8.src="heart.svg"
    can=3;
    input.value="";
    input.disabled = false;
    Submitbutton.disabled = false;
    Nvar=true;
    Yvar=true;
    Mvar=true;
    Pvar=true;
    Hvar=true;
});