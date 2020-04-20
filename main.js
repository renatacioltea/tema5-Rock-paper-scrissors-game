function play(){
    var posibilities=["rock", "paper", "scrissors"];

    var computerOption=posibilities[Math.floor(Math.random()*3)];
    console.log("Computer choice:"+ " "+ computerOption);

    var userOption=posibilities[Math.floor(Math.random()*3)];
    console.log("User choice:"+ " "+ userOption);

    if(userOption === computerOption){
    console.log("It`s a tie!");
    }else if(userOption === "rock" && computerOption === "paper"){
    console.log("Computer wins!");
    }else if(userOption === "rock" && computerOption === "scrissors"){
    console.log("User wins!");
    }else if(userOption === "paper" && computerOption === "scrissors"){
    console.log("Computer wins");
    }else if(computerOption === "rock" && userOption === "paper"){
    console.log("User wins!");
    }else if(computerOption === "rock" && userOption === "scrissors"){
    console.log("Computer wins");
    }else if(computerOption === "paper" && userOption === "scrissors"){
    console.log("User wins!");
    }else{
    console.log("Invalid choice, please try again!");
    }
}

play();
























