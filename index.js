const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector(".gameinfo");
const newgame = document.querySelector(".btn");


let currentplayer;
let gameGrid;

const winingposition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



// function to initionalize the game
function initgame()
{
    currentplayer="X";
    gameinfo.innerText = `Current Player ${currentplayer}`;
    gameGrid=["","","","","","","","",""];
    newgame.classList.remove("active");
    boxes.forEach((box)=>{
        box.innerText="";
        box.style.pointerEvents="all";
        box.classList.remove("win")
    })
}

initgame();




// adding event on each blocks of tic tac toa

boxes.forEach((currentBox, index)=>{
    currentBox.addEventListener('click',()=>{
        handleclick(index);
        
    })
})


function handleclick(index)
{
    if(gameGrid[index]==="")
    {
        boxes[index].innerText = currentplayer;
        gameGrid[index]=currentplayer;
        boxes[index].style.pointerEvents="none";
        swapTurn();
        wincheck();
        
    }
}



function swapTurn()
{
        if(currentplayer==="X")
        {
            currentplayer="O";
        }
        else{
            currentplayer="X";
        }
        // updating gameinfo
        gameinfo.innerText = `Current Player ${currentplayer}`;
}




function wincheck()
{
    let ans="";
    winingposition.forEach((position)=>{
        if((gameGrid[position[0]]!=="" || gameGrid[position[1]]!=="" || gameGrid[position[2]]!=="") 
            && gameGrid[position[0]]===gameGrid[position[1]] && gameGrid[position[1]]===gameGrid[position[2]])
            {
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");

                boxes.forEach((box)=>{
                    box.style.pointerEvents="none";
                })

                newgame.classList.add("active");

                if(gameGrid[position[0]]==="X")
                {
                    ans="X";
                }
                else{
                    ans="O";
                }
                gameinfo.innerText=`winnder is ${ans}`;
            }
            

            if(ans==="")
            {
                gridcheck();
            }
    })
    
}


function gridcheck()
{
 for(i of gameGrid)
 {
    if(i==="")
    return;
 }
 gameinfo.innerText='game tie';
 newgame.classList.add("active");
}




// initial of new game by button
newgame.addEventListener("click",()=>{
    initgame();
})