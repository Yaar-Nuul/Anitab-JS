class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old`
        );
    }
}
const adam = new Person('Adam', 30);
console.log({adam});


// Inheritance
// class Student extends Person{
//     constructor(name, age, school){
//         supper(name, age);
//         this.school = school;

//     }

//     profession(){
//         console.log(`I am a student at ${school}`);
//     }
// }
//  const student =new Student(`Amanda`, 19, `AkiraChix`);
//  console.log({student});
//  profession()
//  greeting()







 class weatherForacast{
    constructor(){
this.weatherData = {};
    }
    addCities = function (cityName,humidity,temp,windspeed) {
let cityData = {"humidity":humidity, "temp":temp,"windspeed":windspeed};
this.weatherData[cityName] = cityData;
    }
}
const city = new weatherForacast()
city.addCities("nairobi",20,25,10.2)
city.addCities("kigali",20,25,10.2)
console.log(city);