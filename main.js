
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
            $(event.target).text(player2);
            xoBord[position] = player2
        }else{
            $(event.target).text(player1);
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

    if (xoBord[0] === xoBord[1] && xoBord[0] === xoBord[2]  ){
        setTimeout(function(){
            alert(xoBord[1] + " win");
        },500); 
    }//r 2
    else if (xoBord[3] === xoBord[4] && xoBord[3] === xoBord[5] )
    {
      setTimeout(function(){
          alert(xoBord[4] + " win");
        },500); 
       
     } // 3
    else if (xoBord[6] === xoBord[7] && xoBord[6] === xoBord[8] )
     {
       setTimeout(function(){
           alert(xoBord[7] + " win");
        },500); 
       
    } //c 1
    else if (xoBord[0] === xoBord[3] && xoBord[0] === xoBord[6] ) 
    { 
       setTimeout(function(){
           alert(xoBord[3] + " win");  
        },500); 
   
     }//c2
    else if (xoBord[1] === xoBord[4] && xoBord[1] === xoBord[7] )
     {
       setTimeout(function(){
           alert(xoBord[4] + " win");   
        },500); 
      
        }//c3
    else if (xoBord[2] === xoBord[5] && xoBord[2] === xoBord[8] ) 
    {
       setTimeout(function(){
           alert(xoBord[5] + " win");   
        },500); 
       
        }//d 1
    else if (xoBord[0] === xoBord[4] && xoBord[0] === xoBord[8] )
     {
       setTimeout(function(){
           alert(xoBord[4] + " win"); 
        },500); 
         
        }//d 2
    else if (xoBord[2] === xoBord[4] && xoBord[2] === xoBord[6] ) {
       setTimeout(function(){
           alert(xoBord[4] + " win");  
        },500); 
       
        }
         else if (count==9){
             count=1;
        setTimeout(function () {
            alert("game over")
        }, 500); 
           
    }
     
    }
       
    }
