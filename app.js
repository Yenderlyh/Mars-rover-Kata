 
  var rover = {
    direction: "N",
    positionX: 0,
    positionY: 0,
    travellog: [],
  
    };
  
  function turnLeft(rover){
    switch(rover.direction){
  
    case 'N': {rover.direction='W'} console.log('Rover is facing west now'); break;
    case 'W': {rover.direction='S'} console.log('Rover is facing South now'); break;
    case 'S': {rover.direction='E'} console.log('Rover is facing east now'); break;
    case 'E': {rover.direction='N'} console.log('Rover is facing north'); break;
  }
    console.log("turnLeft was called!");}
    
    
  function turnRight(rover){
    switch(rover.direction){
  
    case 'N': {rover.direction='E'} console.log('Rover is facing east now'); break;
    case 'E': {rover.direction='S'} console.log('Rover is facing South now'); break;
    case 'S': {rover.direction='E'} console.log('Rover is facing West now'); break;
    case 'W': {rover.direction='N'} console.log('Rover is facing north now'); break;
  }
    console.log("turnRight was called!");}
  
  function moveForward(rover){
     rover.travellog.push(` (${rover.positionX}, ${rover.positionY})`);
     switch(rover.direction){
         
         
      case 'N': 
          if(rover.positionX  <= 0){
            console.log("You can't go that way");
          } 
         else{
            rover.positionY-=1};
          
         break;
      
      case 'E':
         if(rover.positionX >= 10){
            console.log("Rover reached limit grid");
          }else{   
            rover.positionX+=1} 
          break;
      
      case 'S':
         if( rover.positionY >= 10){
            console.log("Rover reached limit grid");
         }else {
            rover.positionY+=1;
         }
        break;
        
      case 'W':
         if(rover.positionX <= 0){
            console.log("Rover reached limit grid");
         }else {
              rover.positionX-=1;
         }
        break;
     }
     
     console.log("moveForward was called");
     console.log("Rover is here: " + [rover.positionX, rover.positionY]);
     console.log(`Rover used to be here: ${rover.travellog}.`);
  
    }
  
  function commands(commandInput) {
    let commandTransfer = commandInput.split("");
      for(let i = 0; i<commandTransfer.length; i++) {
        switch(commandTransfer[i]) {
          case "f":
            moveForward(rover);
            break;
          case "r": 
            turnRight(rover);
            break;
          case "l":
            turnLeft(rover);
            break;
             case "b":
            moveBackward(rover);
            break;
          default:
            return "invalid:Try with 'l' for a left turn 'r' for a right turn 'f' to go forward"
        }
  
      }
  
  }
  
  function moveBackward(rover){
     rover.travellog.push(` (${rover.positionX}, ${rover.positionY})`);
    switch (rover.direction){
      case "N":
        if( rover.positionY >= 10 ){
            console.log("You can't go that way");
          } 
         else{
            rover.positionY +=1}
          
        break;
      case "W":
         if(rover.positionX >= 10){
            console.log("You can't go that way");
         }else {
              rover.positionX +=1 } 
        break;
       
      case "S":
       if(rover.positionY <= 0 ){
            console.log("You can't go that way");
         }else {
            rover.positionY-=1} 
        break;
      case "E":
        if(rover.x <= 0) {
            console.log("You can't go that way");
          }else{   
            rover.x -=1}
    }
      console.log("moveBackward was called");
     console.log("Rover is here: " + [rover.positionX, rover.positionY]);
     console.log(`Rover used to be here: ${rover.travellog}.`);
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  