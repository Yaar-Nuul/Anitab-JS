const personAge = (age)=>{
    if(age>=18){
        return "You're an adult"
    } 
    else if (age> 13 && age <18){
        return "You're a teenager"
    }
    else{
        return "You're a child"
    }
}
console.log(personAge(23));



const greeting = (dayOfTheWeek) =>{
    switch (dayOfTheWeek) {
      case "Thursday":
          console.log("Hello Thursday");
        break;

        case "Friday":
            console.log("Hello Friday");
            break;
        case "Sunday":
            console.log("Hello Sunday");
            break;

        case "Monday":
            console.log("Hello Monday");
        
        case "Tuesday":
            console.log("Hello Tuesday");
            break;

        case "Wednesday":
            console.log("Hello Wednesday");
            break;

            default:
                console.log("Invalid day of the week");
        
    
}
}
greeting("Monday")