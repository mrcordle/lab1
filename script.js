class User{
  constructor(){
    this.userHealth = 40;
    this.healsRemaining = 2;
    this.wins = 0;
  }
  getDamage(){
    return Math.floor(Math.random() * 5) + 1;
  
  }
  heal(){
    return Math.floor(Math.random() * 10) + 1;
  }
}

class Grant extends User{
  constructor(){
    super();
    this.boss = "Grant";
    this.grantHealth = 10;
  }
  generateAttackDamage(){
  return Math.floor(Math.random() * 2) + 1;
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


  while(usr.wins < 5 && usr.userHealth > 0){
     var cont = prompt("Would you like to attack, heal or quit")
     if(cont.toLowerCase() === "quit"){
       console.log("You have quit the game.")
       return;
     }
      if (cont.toLowerCase() === "heal" && usr.healsRemaining > 0){
      usr.userHealth += usr.heal();
      usr.healsRemaining --;
      console.log(userName + " has been healed");
     }
     if (cont.toLowerCase() === "heal" && usr.healsRemaining <= 0){
      console.log(userName + " has no more heals remaining."); 
     }
     if(cont.toLowerCase() === "attack"){
     usr.userHealth -= usr.getDamage();
     boss.grantHealth -= boss.generateAttackDamage();

    console.log(userName + " has " + usr.userHealth +" health left.");
    console.log("Grant has "+ boss.grantHealth+ " health left.");
     }else{
      console.log("You must choose attack or quit");
      continue;
}
      if(boss.grantHealth <= 0){
      usr.wins = usr.wins + 1;
      boss.grantHealth = 10;
      console.log("You received a win.")
  }
    if(usr.userHealth <= 0){
      console.log("You have been defeated");
    }
      if(usr.wins >= 5){
      console.log("You have defeated Grant!");
      }
}
}