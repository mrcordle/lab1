function startGame(){
  var quest = prompt("Do you want to play?")
  if(quest.toLowerCase() === "yes") {
      var name = prompt("What is your name?");
      startCombat(name);

  }
}
startGame();

function getDamage(num){
  num = Math.floor(Math.random() * 5) + 1;
  return num;
  }

function startCombat(userName){
  var userHealth = "40";
  var grantHealth = "10";
  var wins = 0;



  while(wins < 3 && userHealth > 0){
    cont = prompt("Would you like to attack or quit")
    var hpUser = getDamage();
    var hp = getDamage();
     userHealth = userHealth - hpUser;
     grantHealth = grantHealth - hp;
    console.log("Grant hit " + userName + " with " + hpUser + " hp!");
    console.log(userName + " has " + userHealth +" health left.");
    console.log("You hit Grant with " + hp + " hp!");
    console.log("Grant has "+ grantHealth+ " health left.");
    if(grantHealth <= 0){
        wins = wins + 1;
        grantHealth = 10;
  }
  
    if(userHealth <= 0){
      console.log("You have been defeated");
    }
      if(wins >= 3){
      console.log("You have defeated Grant!");
      }if (cont.toLowerCase() === "quit"){
        console.log("You have quit the game")
        break;
      }
  }
  }