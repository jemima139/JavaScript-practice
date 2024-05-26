// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//Create a function DNAtoRNA which takes dna as a parameter.
function DNAtoRNA(dna) {
//split method splits the DNA string into array
    let newArray = dna.split('');
    
    for (let i = 0; i < newArray.length; i++){ 
    //If the character is 'T', replace it with 'U'
     if (newArray[i] === 'T') {
     newArray[i] = 'U'
   }
  }
    
    
//the join method joins the array back into string  
    let result = newArray.join('');
    return result;
    
  }
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    //Checks if the boolean value is true
    if (bool) {
      return 'Yes'; //Return 'Yes' if true
    } else {
      return 'No';
    }
  }

  //Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
  function repeatStr (n, s) {
    //Repeat method repeats the string n times 
    return s.repeat(n);
  }

  //You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//Check if the remaining fuel is enough to reach the nearest pump 
    if (mpg*fuelLeft >= distanceToPump) {
        return true; //Return true if possible
      } else {
        return false;
      }
  };

//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

//Return true if yes, false otherwise :)

function hero(bullets, dragons){
 //Check if the num of bullets is enough to defeat the dragons   
     return bullets >= dragons * 2
    }

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    let result = '';
    for (let i = 0; i < x.length; i++) {
    //If digit is below 5 replace with 0 otherwise replace with 1
      if (x[i] < '5') {
        result += '0';
      } else {
        result += '1';
      }
    }
    return result;
  }

//   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
//// Check if one flower has an even number of petals and the other has an odd number   
    return (flower1 % 2 !== flower2 % 2);
  }