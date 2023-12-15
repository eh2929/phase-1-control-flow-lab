function scuberGreetingForFeet(feet){
  let greeting 
  if (feet < 400) {
    greeting = "This one is on me!"
  }
  else if (feet < 2000) {
    greeting = "That will be twenty bucks."
  } 
  else if (feet < 2500) {
    greeting = "I will gladly take your thirty bucks."
  }
  else {
    greeting = "No can do."
  }
return greeting

}

function ternaryCheckCity(city){
  let answer = (city == "NYC") ? 'Ok, sounds good.' : 'No go.'
  return answer
}


function switchOnCharmFromTip(text){
    switch (text) {
    case "generous" :
      text = "Thank you so much.";
      break;
    case "not as generous" :
      text = "Thank you.";
      break;
    default:
      text = "Bye."
    
  }
  return text
}