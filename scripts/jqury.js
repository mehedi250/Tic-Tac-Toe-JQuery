var p=0;
        
var p1name = "";
var p2name = "";
function addData(btn){
    if($(btn).text()==""){
        if(p==1){
            $(btn).html('X');
            p = 2;
            $(".player").html(''+ p2name + '\'s turn');

        }
        else if(p==2){
            $(btn).html('0');
            p = 1;
            $(".player").html(''+ p1name + '\'s turn');
        }  
    }
    else{
        
    }   
}

function clearAll(){
    $(".c1").html('');
    $(".c2").html('');
    $(".c3").html('');
    $(".c4").html('');
    $(".c5").html('');
    $(".c6").html('');
    $(".c7").html('');
    $(".c8").html('');
    $(".c9").html('');
    $(".player").html('');
    $(".game-over").hide();

}

function result(){
    var c1 = $(".c1").text();
    var c2 = $(".c2").text();
    var c3 = $(".c3").text();
    var c4 = $(".c4").text();
    var c5 = $(".c5").text();
    var c6 = $(".c6").text();
    var c7 = $(".c7").text();
    var c8 = $(".c8").text();
    var c9 = $(".c9").text();

    //player 1
    if(c1 == "X" && c2 == "X" && c3 == "X"){
        $(".player").html('Winner : '+ p1name);
        p=0;
        $(".game-over").show();
    }
    else if(c4 == "X" && c5 == "X" && c6 == "X"){
        $(".player").html('Winner : '+ p1name);
        p=0;
        $(".game-over").show();
    }
    else if(c7 == "X" && c8 == "X" && c9 == "X"){
        $(".player").html('Winner : '+ p1name);
        p=0;
        $(".game-over").show();
    }
    else if(c1 == "X" && c4 == "X" && c7 == "X"){
        $(".player").html('Winner : '+ p1name);
        p=0;
        $(".game-over").show();
    }
    else if(c2 == "X" && c5 == "X" && c8 == "X"){
        $(".player").html('Winner : '+ p1name);
        p=0;
        $(".game-over").show();
    }
    else if(c3 == "X" && c6 == "X" && c9 == "X"){
        $(".player").html('Winner : '+ p1name);
        p=0;
        $(".game-over").show();
    }
    else if(c1 == "X" && c5 == "X" && c9 == "X"){
        $(".player").html('Winner : '+ p1name);
        p=0;
        $(".game-over").show();
    }
    else if(c3 == "X" && c5 == "X" && c7 == "X"){
        $(".player").html('Winner : '+ p1name);
        p=0;
        $(".game-over").show();
    }
     

    //player 2
    if(c1 == "0" && c2 == "0" && c3 == "0"){
        $(".player").html('Winner : '+ p2name);
        p=0;
        $(".game-over").show();
    }
    else if(c4 == "0" && c5 == "0" && c6 == "0"){
        $(".player").html('Winner : '+ p2name);
        p=0;
        $(".game-over").show();
    }
    else if(c7 == "0" && c8 == "0" && c9 == "0"){
        $(".player").html('Winner : '+ p2name);
        p=0;
        $(".game-over").show();
    }
    else if(c1 == "0" && c4 == "0" && c7 == "0"){
        $(".player").html('Winner : '+ p2name);
        p=0;
        $(".game-over").show();
    }
    else if(c2 == "0" && c5 == "0" && c8 == "0"){
        $(".player").html('Winner : '+ p2name);
        p=0;
        $(".game-over").show();
    }
    else if(c3 == "0" && c6 == "0" && c9 == "0"){
        $(".player").html('Winner : '+ p2name);
        p=0;
        $(".game-over").show();
    }
    else if(c1 == "0" && c5 == "0" && c9 == "0"){
        $(".player").html('Winner : '+ p2name);
        p=0;
        $(".game-over").show();
    }
    else if(c3 == "0" && c5 == "0" && c7 == "0"){
        $(".player").html('Winner : '+ p2name);
        p=0;
        $(".game-over").show();
    }
    else if(c1 != "" && c2 != "" && c3 != "" && c4 != "" && c5 != "" && c6 != "" && c7 != "" && c8 != "" && c9 != ""){
        $(".player").html('!!!! Draw !!!!');
        p=0;
        $(".game-over").show();
    }

    
}

$(document).ready(function(){
    $(".players-form").hide();
    $(".players-name").hide();
    $(".new-game").html('Start Game');
    $(".game-over").hide();


  

    $(".submit-name").click(function(){
        $(".players-form").hide();
        p1name = $(".p1").val();
        p2name = $(".p2").val();

        $(".p1-value").html('Player 1 : '+ p1name );
        $(".p2-value").html('Player 2 :' + p2name);

        $(".player").html(p1name);

        $(".players-name").show();


        clearAll();
        $(".player").html(''+ p1name + '\'s turn');
        p=1;

    });

    $(".new-game").click(function(){
        $(".new-game").html('New Game');
        $(".players-form").show();
        $(".players-name").hide();
        clearAll();
    });
    
    $(".c1").click(function(){
        var btn = ".c1";
        addData(btn);
        result();
    });

    $(".c2").click(function(){
        var btn = ".c2";
        addData(btn);
        result();
    });

    $(".c3").click(function(){
        var btn = ".c3";
        addData(btn);
        result();
    });

    $(".c4").click(function(){
        var btn = ".c4";
        addData(btn);
        result();
    });
    $(".c5").click(function(){
        var btn = ".c5";
        addData(btn);
        result();
    });
    $(".c6").click(function(){
        var btn = ".c6";
        addData(btn);
        result();
    });
    $(".c7").click(function(){
        var btn = ".c7";
        addData(btn);
        result();
    });
    $(".c8").click(function(){
        var btn = ".c8";
        addData(btn);
        result();
    })
    $(".c9").click(function(){
        var btn = ".c9";
        addData(btn);
        result();
    })


});