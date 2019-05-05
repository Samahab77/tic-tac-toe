
let player1='X';
let player2='O';
let count=1;
let =


$('section #r #box').on('click',function(event){
    //

    // if (count <= 9) {

        if(count%2==0){
            $(event.target).text(player2);
        
        }else{
            $(event.target).text(player1);
    }

    $(event.target).off('click');
    // $(event.target).append("<h1>"+player1+"</h1>");
    // $(event.target).append("<h1>" + player2 + "</h1>");
    count++;
  
// }else {

//     alert("game over ");
// }

    //  console.log('x');
})
// function start (){
//     if (platyer1)
// }
 let checkWinner function() {
     if (box1 === box2 && box1 === box3 || box4 === box5 && box4 === box6 ||
         box7 === box8 && box7 === box9 || box1 === box4 && box1 === box7 ||
         box2 === box5 && box2 === box8 || box3 === box6 && box3 === box8 ||
         box1 === box5 && box1 === box9 || box3 === box5 && box3 === box7   ){
         alert(player1 || player2 +"win")
         }else {
         alert("lsr")  
         }
} 
game1= $()