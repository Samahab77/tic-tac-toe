
let player1='X';
let player2='O';
let count=1;
let xoBord=[
    //0, 1, 2
    //3, 4, 5
    //6, 7, 8
    "0","1","2",
    "3","4","5",
    "6","7","8"
]



//onclick
$('section #r .box').on('click',function(event){

    // if (count <= 9) {

    const position = $(event.target).attr('id')
        if(count%2==0){
            $(event.target).html('<h1>'+player2+'<h1>');
            xoBord[position] = player2
        }else{
            $(event.target).html('<h1>' + player1 + '<h1>');
            xoBord[position] = player1
            
    }
    $(event.target).off('click');
    
    
   
        checkWinner();
    count++;
// }else{
//     alert("game over ")
// }
    
})


const checkWinner = function () {

    // $(event.target).off('click');
    
    // if (xoBord[0] === xoBord[1] && xoBord[0] === xoBord[2] || xoBord[3] === xoBord[4] && xoBord[3] === xoBord[5] ||
    //     xoBord[6] === xoBord[7] && xoBord[6] === xoBord[8] || xoBord[0] === xoBord[3] && xoBord[0] === xoBord[6] ||
    //     xoBord[1] === xoBord[4] && xoBord[1] === xoBord[7] || xoBord[2] === xoBord[5] && xoBord[2] === xoBord[8] ||
    //     xoBord[0] === xoBord[4] && xoBord[0] === xoBord[8] || xoBord[2] === xoBord[4] && xoBord[2] === xoBord[6]) 
    //     {
    //         alert( "win")
    //     }
    // }

// game1 = $(event.target).text(player2);
//1

if (xoBord !=""){
    $(event.target).off('click');
    if (xoBord[0] === xoBord[1] && xoBord[0] === xoBord[2]  ){
         blockBoard();
        setTimeout(function(){
            alert(xoBord[1] + " win");
        },300); 
    }//r 2
   

        else if (xoBord[3] === xoBord[4] && xoBord[3] === xoBord[5] )
    {
        blockBoard();
        setTimeout(function(){
          alert(xoBord[4] + " win");
        },300); 
       
     } // 3
    else if (xoBord[6] === xoBord[7] && xoBord[6] === xoBord[8] )
    {
        blockBoard();
        setTimeout(function(){
           alert(xoBord[7] + " win");
        },300); 
       
    } //c 1
    else if (xoBord[0] === xoBord[3] && xoBord[0] === xoBord[6] ) 
    {
        blockBoard();
       setTimeout(function(){
           alert(xoBord[3] + " win");  
        },300); 
   
     }//c2
    else if (xoBord[1] === xoBord[4] && xoBord[1] === xoBord[7] )
    {
        blockBoard();
       setTimeout(function(){
           alert(xoBord[4] + " win");   
        },300); 
      
        }//c3
    else if (xoBord[2] === xoBord[5] && xoBord[2] === xoBord[8] ) 
    {
        blockBoard();
       setTimeout(function(){
           alert(xoBord[5] + " win");   
        },300); 
       
        }//d 1
    else if (xoBord[0] === xoBord[4] && xoBord[0] === xoBord[8])
    {
       blockBoard();
       setTimeout(function(){
           alert(xoBord[4] + " win"); 
        },300); 
         
        }//d 2
    else if (xoBord[2] === xoBord[4] && xoBord[2] === xoBord[6] ) {
        blockBoard();
       setTimeout(function(){
           alert(xoBord[4] + " win");  
        },300); 
       
        }
         else if (count==9){
        blockBoard();
             count=1;
        setTimeout(function () {
            alert("tie")
            alert("game over")
        }, 300); 
  
    }

    }
   
    }
$('button').on('click',function(){
    location.href = "";


})
const blockBoard = function(){
    $('section #r .box').off('click');
}