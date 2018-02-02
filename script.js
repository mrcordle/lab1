

function startGame(){
  var quest = prompt("Do you want to play?")
  if(quest.toLowerCase() === "yes") {
      var name = prompt("What is your name?");
      startCombat(name);

  }
}
function getDamage(){
  return Math.floor(Math.random() * 5) + 1;
  
  }

function startCombat(userName){
  var userHealth = "40";
  var grantHealth = "10";
  var wins = 0;



  while(wins < 3 && userHealth > 0){
     var cont = prompt("Would you like to attack or quit")
     if(cont.toLowerCase() === "quit"){
       console.log("You have quit the game.")
       return;
     }
     if(cont.toLowerCase() === "attack"){
     userHealth -= getDamage();
     grantHealth -= getDamage();

    console.log(userName + " has " + userHealth +" health left.");
    console.log("Grant has "+ grantHealth+ " health left.");
     }else{
      console.log("You must choose attack or quit");
      continue;
}
      if(grantHealth <= 0){
      wins = wins + 1;
      grantHealth = 10;
      console.log("You received a win.")
  }
    if(userHealth <= 0){
      console.log("You have been defeated");
    }
      if(wins >= 3){
      console.log("You have defeated Grant!");
      }
}
}