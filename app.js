console.log("working");
let button= document.getElementById("button");
let input= document.querySelector("input");
let x=1;
let move= document.querySelector("move");
let arr=[];
let person1=[];
let person2=[];

function checkForWin() {
    let cells = Array.from(document.getElementsByTagName('td'));
    let winning = [
        [1, 2, 3], 
        [4, 5, 6], 
        [7, 8, 9], 
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9], 
        [1, 5, 9], 
        [3, 5, 7] 
    ];
    

    return false;
}
function resetGame() {
    Array.from(document.getElementsByTagName('td')).forEach(b => {
        b.innerText = '';
    });
    x = 0;
    arr=[];
}
button.addEventListener('click', function(){   
    let pos="row";
    let newPos= pos+ input.value;
    let b= document.getElementById(newPos);
    if(input.value>9 || input.value<=0){
        alert("Please, Enter a valid position: ");
        input.value="";
    }
    else if(arr.includes(input.value)){
        alert("Please, Enter a valid position: ");
        input.value="";
    }
    else{
        if (x >= 5) {
            if (checkForWin()) {
                alert('Player ' + x%2 + ' wins!');
                resetGame();
                return;
            }
        }

        // Check for a tie
        if (x === 9 && !checkForWin()) {
            alert('It\'s a tie!');
            resetGame();
            return;
        }
        if(x%2==0){
            b.innerText="X";
            x++;
            arr.push(input.value);
            person2.push(input.value);
            
            input.value="";
            
        }
        else{
            b.innerText="O";
            x++;
            person1.push(input.value);
            arr.push(input.value);
            input.value="";
        }
    }
    
   
});
