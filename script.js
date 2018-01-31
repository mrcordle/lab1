var quest = prompt("Do you want to play?")

if(quest === "yes") {
    var name = prompt("What is your name?");
}
var userHealth = "40";
var grantHealth = "10";
var wins = 0;

while(wins < 3 && userHealth >=0){
 
  var hp = Math.floor(Math.random() * 3);
  var hpUser = Math.floor(Math.random() * 3);
  var userHealth = userHealth - hpUser;
  var grantHealth = grantHealth - hp;
  console.log(name,"has", userHealth, "health left.");
  console.log("You hit Grant with", hp, "hp!");
  console.log("Grant has", grantHealth, "health left.");
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
