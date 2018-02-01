function startGame(){
  var quest = prompt("Do you want to play?")
  if(quest.toLowerCase() === "yes") {
      name = prompt("What is your name?");
      startCombat(name);

  }
  
  }
  
  startGame();
  function startCombat(userName){
  var userHealth = "40";
  var grantHealth = "10";
  var wins = 0;
  function getDamage(num){   
       num = Math.floor(Math.random() * 5) + 1;
       return num;
  }
  while(wins < 3 && userHealth > 0){
   
  var hpUser = getDamage();
  var hp = getDamage();
    var userHealth = userHealth - hpUser;
    var grantHealth = grantHealth - hp;
    console.log(userName + " has " + userHealth +" health left.");
    console.log("You hit Grant with " + hp + " hp!");
    console.log("Grant has "+ grantHealth+ " health left.");
    if(grantHealth <= 0){
       var wins = wins + 1;
       var grantHealth = 10;
  }
  
    if(userHealth <= 0){
      console.log("You have been defeated")
    }
      if(wins >= 3){
      console.log("You have defeated Grant!")
     
      }
    
  }
  }