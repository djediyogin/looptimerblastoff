function blastofftimer(){
    console.log("blastofftimer() started"); 
    //variable to keep time
    var currTime = 50;

    //timer at 50
    setTimeout(function(){
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
    }, 0);

    //timer at 45
    setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
    }, 5000);

     //timer at 40
     setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
    }, 10000);

     //timer at 35
     setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
    }, 15000);

     //timer at 30
     setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
    }, 20000);

     //timer at 25
     setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
    }, 25000);

     //timer at 20
     setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
    }, 30000);

     //timer at 15
     setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
    }, 35000);

     //timer at 10
     setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
    }, 40000);

     //timer at 5
     setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
    }, 45000);

     //BLAST OFF!
     setTimeout(function(){
        currTime = currTime - 5;
        console.log("currTime = " + currTime);
        document.getElementById("blastoffdis").innerHTML = currTime + " BLAST OFF!!";
    }, 50000);
}

function btrBlastoffTimer(){
    console.log("blastofftimer() started"); 
    //variable to keep time
    var currTime = 50;
    //what is a loop doing and how is it set up
    for(var i =0; i < 11; i=i+1){
        //this gets done i number of times
        setTimeout(function(){
            console.log("currTime = " + currTime);
            if(currTime == 0){
                document.getElementById("blastoffdis").innerHTML = currTime + " BLAST OFF!!";
                
            } else if(currTime < 25) {   
                document.getElementById("blastoffdis").innerHTML = currTime + " Warning less than 1/2 way to launch";
            } else {          
                    document.getElementById("blastoffdis").innerHTML = currTime + " sec left";
            }
            currTime = currTime - 5;
        }, 5000 * i);
    }  
}