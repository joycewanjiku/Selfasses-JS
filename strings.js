

  console.log("Hello world");
  var num= 5 
  // data types
  // /* undefined,null,boolean,string,symbol,number, and object
  var myName="Joyce"
   myName=8

  let ourName ="freecodecamp"
   const pi =3.14
   var a;
   var b=2;

   a=7;
   b=a;
   console.log(a);
  //  Storing Values with Assignment Operator
  a=7;
  b=a;
  console.log(a);
  // Initializing variables w/ Assignment OPerator
  var a=9;
  // initialize these theree variables
  var a =5;
  var b=10;
  var c ="i AM JOY";
  // Dont change code below this line
  a= a+1;
  b=b+5
  c=c+"String!";
  // Declarations
  var stUdLyCapvar;
  var propercamelcase;
  var titleCaseOver;
  // Assignments
  studlyCapvar=10;
  properCamelCase="A String";
  titleCaseOver=9000;
  // Adding Numbers
  var sum = 10 +0;
  console.log(sum);
  // subtracting Numbers
  var diffrence =45-0;
  console.log(diffrence);
  // Multplying Numbers
  var product = 8*0;
  console.log(product);
  // Dividing Numbers
  var quotient =66/2;
  console.log(quotient);
  // INcrementing NUmbers
  var myvar =87;
  // only change code below this line
  myvar++;
  // decrementing Numbers
  numbers=65;
  numbers--;
  // decimal numbers
  var ourdecimal=5.9;
  // only change code below this line
  var myDecimal =0.009;
  // multiyply decimals
   var product =2.0*2.5;
   console.log(product);
  //  divide decimals
 var quotient=4.4/2.0; 
 console.log(quotient);
//  finding a reminder
var reminder;
reminder=11%3;
console.log(reminder);
// compound Assignment with Augmented Addition
var a=3;
var b=17;
var c=12;
// only modify code below this line
a+=12;
b+=+9;
c+=7;
// COMPOND Assignment with Augmented  subtrsction
var a=11;
var b=9;
var c=3;
// only modify code below this line
a-=6;
b-=15;
c-=1;
//copmound Assignment with Augmented Multplication
var a=11;
var b=15;
var c=1.8;
// only modify code below this line
a*=5;
b*=b;
c*=10;
// compound Assignment with Augmented division

//Declare String Variables
var  firstName ="JOYCE";
var lastName="Mumbi";
// ONLY CHANGE CODE BELOW THIS LINE
var myFirstName="JOY";
var myLastName="mom"
console.log(myFirstName);
console.log(myLastName);
//EScaping Literal Quotes in strings

var mystr  = "i am a\"double quoted\" string inside\"double quoted\"";
console.log(mystr);
// Quoting strings with single Quotes
var mystr ='``<a href="http://www.example.com"target="-blank">link</a>``'
 
// concatenatig strings with plus operator
var ourstr="i come first."+"i come second.";
var mystr="This is the start."+"This is the end";
console.log(mystr)
//concatenating strings with plus equals operator
var ourstr="I come first.";
ourstr +="I come second";
console.log(ourstr);
var mystr="This is the first sentence ";
var myst="This is the second setence";
console.log(mystr);
console.log(myst);
// constructing strings with variables
var ouName ="freecodecamp";
var ourstr="Hello,our name is" + ourName + ",how are you?";
console.log(ouName);
console.log(ourstr);

var myName="Joy";
var mystr="my name is" + myName + "and I am well!";
console.log(myName);
console.log(mystr);

//Appending variable to srings
var anAdjectve="Awsome!";
var ourstr="AkiraChix is"
ourstr += anAdjectve
console.log(ourstr)
var someAdjective ="worthwhile";
var mystr="learning to code is";
mystr+=someAdjective;
console.log(mystr);

// find lenght of string

var firstNameLength=0;
var firstName="joyce";
firstNameLength=firstName.length;
console.log(firstNameLength);
var lastNameLength=0;
var lastName="lOVELACE"
lastNameLength=lastNameLength;
console.log(lastNameLength);
// Bracket Notation to find First Character in Strig,
var firstLetterOfFirstName=""
var firstName="joy"
firstLetterOfFirstName=firstName[0];
var firstLetterOfFirstName=""
lastName="love Lace";
firstLetterOfFirstName=lastName[0];
console.log(firstLetterOfFirstName);
// String Immutability
var mystr="joy world"
mystr="HELLO WORLD";
console.log(mystr);
//  Bracket Notation to find nth character in string

var firstName="Adan";
var secondLetterOfFirstName= firstName[1];
var lastName="LOve lace";
var thirdletterofLastName=lastName[2];

console.log(secondLetterOfFirstName);

//Bracket Notation to find last character in string.

var firstName ="Mumbi";
var firstLetterOfFirstName=firstName[firstName.length-1]

var lastName="i love strings";

var lastLetterOfLastName=lastName.length-1;
console.log(lastLetterOfLastName);

var ourArray =["John",32];
var myArray =[["Bulls",23],["white sox",45]]
console.log(myArray)
// Access Array Data with Indexes
var ourArray =[50,60,70];
var ourData = ourArray[0];
var myArray=[50,60,70];
console.log(ourArray);
console.log(myArray);

// marge sort
function divideArr(arr){
  if(arr.length<=1){
    return middle
    let middle=math.floor(arr.length/2)
    let left=arr.slice(0,middle)
    let right=arr.slice(middle)
    return sorted(divideArr(left),(divideArr(right)))
  }
}
function sorted(left,right){
  let emptyArr=[]
  while(left.length && right.length){
    if(left[0]<right[0]){
      emptyArr.push(left.shift())

    }
    else{
      emptyArr.push(right.shift())
    }
  }
  return [...emptyArr,...left,...right]
}
let arr=[3,4,6,7]
console.log(divideArr(arr));

function binary(arr1,target){
  let left=0;
  let right=arr1.length-1
  while(left<=right){
    let middle=Math.floor(left+right/2)
    if(arr[middle]===target){
      return middle
    }
    else if(arr[middle]<target){
      left=middle+1
    }
    right=middle-1
  }
  return arr1
}
let arr1=[1,2,3,4,5]
let target=3
console.log(binary(arr1,target));

const fruits=["banana","Orange","Apple"];
fruits.push ("lemon ");
console.log(fruits);

const fruit=["banana","orange","apple"];
fruit[fruit.length]="lemon";

const points= new Array(40,100,1,5,25,10);
const point=[30,100,1,5,25,10];
console.log(points);

// store multiplle values with arrays

var ourArray =["John",23];
var myArray =["Quincy",1];
console.log(ourArray);
console.log(myArray);
// Nested Arrays
var ourArray=[["the universe",42],["everything",101010]];
var myArray=[["bulls",56],["blue",7654]];
console.log(ourArray);
console.log(myArray);

// Access Array Data with Indexes
var ourArray=[50,60,70];
console.log(ourArray);

var ourData =ourArray[0];
console.log(ourData);

var myArray =[50,60,70];
console.log(myArray);

// MOdify Array Data With INdexes
var ourArray=[18,64,99];

ourArray[1]=45;// ourArray now equals[18,45,99]

var myArray =[18,64,99];
myArray[0]=45
console.log(myArray);

// Access Multi-Dimensional Arrays with INdexes
var myArray =[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],,13,14]];
var myData=myArray[2][1];
console.log(myData);
// Manupilate Arrays with push()

var ourArray=["joyce","k","dog"];
ourArray.push(["happy","joy"]);
var myArray=[["momy",44],["dog",3]];
myArray.push(["cat",8]);
console.log(ourArray);
console.log(myArray);

// Manupulate Arrays with pop()
// remove an item

var ourArray=[1,2,3];
var removedFromOurArray=ourArray.pop();
// removedFromOurArray now equals 3,and ourArray now equals[1,2]
console.log(ourArray);

var myArray=[["john",23],["dog",3]];
var removedFromMyArray =myArray.pop();
console.log(myArray);

// Manipulate Arrays with Shift()
// remove the first
var ourArray=["mumbi","J"["cat"]] ;
var removedFromMyArray=ourArray.shift();

 var myArray=[["joy",54],["dog",3]];
 var removedFromMyArray=myArray.shift;

 console.log(myArray);
//  Manipulate Array with Unshift()
// add an ellement at the beggin

var ourArray=["mumbi","J","cat"]
ourArray.shift();
ourArray.unshift('happy');
console.log(ourArray);

var myArray=[["joy",54],["dog",3]];
myArray.shift(["james",76]);
console.log(myArray);

// Shopping List
///nested array

var myList=[["cereal",3],["milk",2],["banana",3],["juice",2],["eggs",4]]
console.log(myList);



function myLocalScope(){
  var myVar =5
  console.log(myVar);
}
myLocalScope();

// Global Vs.Local Scope in functions

var outerwear="T-Shirt";
function myOutfit(){
   
var outerwear="sweater"
  return outerwear;
}
console.log(myOutfit());

// return

function minusSeven(num){
  return num-7;
}
console.log(minusSeven(10));


// Write a js  fucntions to check whether an "input"is array or not
// test data
// console.log(is_array('w3resource'));
// console.log(is_array([1,2,4,0]));

//
// let str='Hi';
// let greeting='hello';

let name =" Sam"
let message="Hi,I ;M ${ john}.";

console.log(message);
// accesssing characters
// it will print out the first let wich will be "h" ecause "h" is in index0

let str="hello";
console.log(str[0]);

// prints out the last letter wich will be "o" the last element

let st="Hello";
console.log(str[str.length-1]);

// octal numbers

let numone=071;
console.log(numone);

let numtwo =080;
console.log(numtwo);

let  sentence='I love rain'
let len=sentence.length;
console.log(len);

// Array length
//find the length of the city array

let city=["California","paris","Kanairo","Barcelona"];
let lenthere=city.length;
console.log(lenthere);

// finding number of elements in array

var companyList=["Apple","Google","Facebook","Amazon"];
console.log(companyList.length);


var randomList=["javascript",44];
console.log(randomList.length);


var emptyArray=[];
console.log(emptyArray.length);

// using Array length in for loop

var languages=["javascript","python","c++","java","lua"];

// languages.lengh can be used to find out the number of times
// to loop over an array

for(i=0; i<languages.length; i++){
  console.log(languages[i]);

}

// changing length property of Array

var languages =["javascript","python","c++","java","lua"];
// trancate the Array to 3 elemnts
languages.length=3
console.log(languages);

languages.length=6
console.log(languages);


// Array unshift()

let language=["javascript","python","c++",];
// add ("javascript") aty the biginning of the array
language.unshift("javascript");
console.log(language);

// Array pop()
// removes the last element

let names=["joy","mumbui","Wanjiku","sam"];
let removedNames=names.pop();
console.log(names);
console.log(removedNames);

// Array push()
// add elemn in array at the end of array
let city2=["New York","Madrid","kathmandu"];
city.push("London");
console.log(city);

// Array shift
//remove the first element of the array
let language2=["English","Java","Swahili"];
let first=language2.shift();
console.log(first);
console.log(language2);


// S()tring replace
// replace a substring/pattern in a string


const vabs="ball bat";
let result=message.replace('c','b');
console.log(vabs);







