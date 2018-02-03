class User{
  constructor(user){
    this.user = user;
    this.userHealth = 40;
    this.healsRemaining = 2;
    this.wins = 0;
  }
  getDamage(){
    return Math.floor(Math.random() * 2) + 1;
  
  }heal(){
    return Math.floor(Math.random() * 10) + 1;
  }
}

class Grant extends User{
  constructor(){
    super();
    this.boss = "Grant";
    this.grantHealth = 10;
  }generateAttackDamage(){
  return Math.floor(Math.random() * 5) + 1;
  }
  
}



function startGame(){
  var quest = prompt("Do you want to play?")
  if(quest.toLowerCase() === "yes") {
      var name = prompt("What is your name?");
      startCombat(name);

  }
}

function startCombat(userName){


var usr = new User();
var boss = new Grant();
var grantDamage = boss.generateAttackDamage();
var damage = usr.getDamage();
var wins = usr.wins;
var userHealth = usr.userHealth;
var grantHealth = boss.grantHealth;
var heal = usr.heal();
var healsRemaining = usr.healsRemaining;


  while(wins < 5 && userHealth > 0){
     var cont = prompt("Would you like to attack, heal or quit")
     if(cont.toLowerCase() === "quit"){
       console.log("You have quit the game.")
       return;
     }
      if (cont.toLowerCase() === "heal" && healsRemaining > 0){
      userHealth += heal;
      healsRemaining --;
      console.log(userHealth);
    
     }
     if(cont.toLowerCase() === "attack"){
     userHealth -= damage;
     grantHealth -= grantDamage;

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
      if(wins >= 5){
      console.log("You have defeated Grant!");
      }
}
}