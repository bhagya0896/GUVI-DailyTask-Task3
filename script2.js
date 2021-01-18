// Example 1

var cat=
    {name:"Fluffy",
    activities:["play","eat cat food"],
    catfriends:[
        {name:"bar",
        activities:["be grumpy","eat bread omlette"],
        weight:8,
        furcolor:"white"},
        {name:"foo",
        activities:["sleep","pre-sleep naps"],
        weight:3}]};

       // 1.Add height and weight to Fluffy.
cat.height=23;
cat.weight=5;
console.log(cat);

// 2.Fluffy name is spelled wrongly. Update it to Fluffyy.
cat.name="Fluffyy";

//3.List all the activities of Fluffyy’s catFriends.

for(var i in cat.catfriends)
{
  console.log(cat.catfriends[i].activities);
}

//4.Print the catFriends names.

for(var i in cat.catfriends)
{
  console.log(cat.catfriends[i].name);
}

//5.Print the total weight of catFriends
var totalweight=0;
for(var i in cat.catfriends)
{
  totalweight += parseInt(cat.catfriends[i].weight);
 }
 console.log(totalweight);

 //6.Print the total activities of all cats.   
 var act1=cat.activities;
 var result = "";
 for(var i in cat.catfriends)
 {
   result= result +","+ cat.catfriends[i].activities;
 }
 console.log(act1 + result);

 //

 //8.Update the fur color of bar
cat.catfriends[1].furcolor="black";
console.log(cat.catfriends[1].furcolor);

// Example 2
var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
}
 //  1. Loop over the accidents array. Change atFaultForAccident from true to false
    for(var i in myCar.accidents)
  {
myCar.accidents[i].atFaultForAccident="false";

}
console.log(myCar);

// 2.Print the dated of my accidents
for(var i in myCar.accidents)
  {
console.log(myCar.accidents[i].date);

}


// Problem 1 : Parsing an JSON object’s Values

var obj = {name : 'RajiniKanth', age : 33, hasPets : false};

   function printAllValues ()
    {
        console.log(Object.values(obj));
    }
    printAllValues(obj);

//Problem 2 :Parsing an JSON object’s Keys
var obj = {name : 'RajiniKanth', age : 33, hasPets : false};

   function printAllKeys ()
    {
        console.log(Object.keys(obj));
    }
    printAllKeys(obj);

    //Problem 3: Parsing an JSON object and convert it to a list

    var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject() {
    console.log(Object.entries(obj))
};
convertListToObject(obj);


// Problem 4: Parsing a list and transform the first and last elements of it

var array = ['GUVI', 'I', 'am', 'Geek'];
let newobject={};
function transformFirstAndLast()
{
   newobject[array[0]]=array[array.length-1];
        return newobject;
}
var result = transformFirstAndLast(array);
console.log(result);


//Problem 5 :Parsing a list of lists and convert into a JSON object


var array = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

function fromListToObject() {
  var object = {}; 
  for (var i = 0; i < array.length; ++i) { 
    var newArray = array[i];
    object[newArray[0]] = newArray[1];
  }
  return object; 
}

var obj = fromListToObject(array);

console.log(obj);





//Problem 7 :Parsing two JSON objects and Compare



function assertObjectsEqual(actual, expected, testName){
  if(JSON.stringify(actual)===JSON.stringify(expected))
  {
    return "passed";
  }
  else
  {
    return 'FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"';
  }

}
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
var output = assertObjectsEqual(actual, expected, 'detects that two objects are equal');
console.log(output);


var expected = {foo: 6, bar: 5};
var actual = {foo: 8, bar: 6}
var output = assertObjectsEqual(actual, expected, 'detects that two objects are equal');
console.log(output);


// problem 8 : Parsing JSON objects and Compare

var securityQuestions = [
  {
  question: 'What was your first pet’s name?',
  expectedAnswer: 'FlufferNutter'
  },
  {
  question: 'What was the model year of your first car?',
  expectedAnswer: '1985'
  },
  {
  question: 'What city were you born in?',
  expectedAnswer: 'NYC'
  }
 ]
  function chksecurityQuestions(securityQuestions,question,expectedAnswer) {
  for( var i in securityQuestions)
  {
      if(securityQuestions[i].question===ques && securityQuestions[i].expectedAnswer === ans)
      {
          return "true"
      }
      else
      {
            return "false"
      }
    }
    
  }

 //Test case1:
 var ques = 'What was your first pet’s name?';
 var ans  =  'FlufferNutter';
 var status = chksecurityQuestions(securityQuestions, ques, ans);
 console.log(status); 

 //Test case2:
 var ques = 'What was your first pet’s name?';
 var ans  =  'DufferNutter';
 var status = chksecurityQuestions(securityQuestions, ques, ans);
 console.log(status); 


//Problem 9:Parsing JSON objects and Compare

var students = [
  {
  name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
  {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
  {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23}, 
    {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
  {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
  {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
  {name: 'Devdas',age: 56} 
  ];
function returnMinors()
{
 students.filter((element)=>{
     if(element.age<20)
     {
      console.log(element);
     }
 })
};
returnMinors(students);

