
$(document).ready(function(){

    let player1;
    let player2;
    let count = 1;
    let xoBord = [
        //0, 1, 2
        //3, 4, 5
        //6, 7, 8
        "0", "1","2",
        "3", "4","5",
        "6", "7","8"
    ]

    swal("do you want to play with X or O ", {
        content: "input",
    })
        .then((value) => {

            player1 = value
            if (player1 === "X") {
                player2 = "O"
            } else {
                player2 = "X"
            }

        });


    const startGame = function (event) {

        const position = $(event.target).attr('id')
        if (count % 2 == 0) {
            $(event.target).html('<h1>' + player2 + '<h1>');
            xoBord[position] = player2
            $(".trak").text(player1 + ' turn');
            // $('audio#Click')[0].play();
        } else {
            $(event.target).html('<h1>' + player1 + '<h1>');
            xoBord[position] = player1
            $(".trak").text(player2 + ' turn');
            // $('audio#Click')[0].play();

        $(event.target).off('click');
        checkWinner();
        count++;
   
    }
}

    const checkWinner = function () {

    if (xoBord !=""){
        $(event.target).off('click');
        if (xoBord[0] === xoBord[1] && xoBord[0] === xoBord[2]  ){
            blockBoard();
            setTimeout(function(){
                // swal(xoBord[1] + " win");
                swal(xoBord[1], "Win!", "success");
                winAud();
                
            },200); 
        }//r 2
    

            else if (xoBord[3] === xoBord[4] && xoBord[3] === xoBord[5] )
        {
            blockBoard();
            setTimeout(function(){
            //   alert(xoBord[4] + " win");
                swal(xoBord[4], "Win!", "success");
                winAud();
            },200); 
        
        } // 3
        else if (xoBord[6] === xoBord[7] && xoBord[6] === xoBord[8] )
        {
            blockBoard();
            setTimeout(function(){
            //    alert(xoBord[7] + " win");
                swal(xoBord[7], "Win!", "success");
                winAud();
            },200); 
        
        } //c 1
        else if (xoBord[0] === xoBord[3] && xoBord[0] === xoBord[6] ) 
        {
            blockBoard();
        setTimeout(function(){
            //    alert(xoBord[3] + " win");  
            swal(xoBord[3], "Win!", "success");
            winAud();
            },200); 
    
        }//c2
        else if (xoBord[1] === xoBord[4] && xoBord[1] === xoBord[7] )
        {
            blockBoard();
        setTimeout(function(){
            //    alert(xoBord[4] + " win"); 
            swal(xoBord[4], "Win!", "success");  
            winAud();
            },200); 
        
            }//c3
        else if (xoBord[2] === xoBord[5] && xoBord[2] === xoBord[8] ) 
        {
            blockBoard();
        setTimeout(function(){
            //    alert(xoBord[5] + " win");   
            swal(xoBord[5], "Win!", "success");
            winAud();
            },200); 
        
            }
            //d 1
        else if (xoBord[0] === xoBord[4] && xoBord[4] === xoBord[8])
        {
        blockBoard();
        setTimeout(function(){
            //    alert(xoBord[4] + " win"); 
                swal(xoBord[4], "Win!", "success");
            winAud();
            },200); 
            
            }//d 2

        else if (xoBord[2] === xoBord[4] && xoBord[2] === xoBord[6] ) {
            blockBoard();
        setTimeout(function(){
            //    alert(xoBord[4] + " win");  
            swal(xoBord[4], "Win!", "success");
            winAud();
            },200); 
        
            }
            else if (count==9){
            blockBoard();
                count=1;
            setTimeout(function () {
                swal("tie", "game over")
            
            },200); 
    
        }

        }
    
        }
        // reset game button 

    const blockBoard = function(){
        
        $('section #r .box').off('click');
    }
    function winAud(){
        $('audio#win')[0].play();
    }
    $('section #r .box').on('click', startGame)
    
    // restart game function
    $('#again').on('click', function () {

        //count start from 1 
        count = 1;
        xoBord = [
            "0", "1", "2",
            "3", "4", "5",
            "6", "7", "8"
        ];
        // // make all div empty 
        $("section #r .box").empty();
        $('section #r .box').on('click', startGame)
    })
    
    // $('#new').on('click', function () { 
    //        location.href = "";
    // })
    })