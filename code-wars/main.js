// Given an array of integers.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter( p=> p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
} // we put input and input.length because we are taking a look at the both the input and its length now we use the ? to tell if its the left side or the right side of the command than return null
// we start by filtering the length of the positive numbers and put a comma to output the addition of the negative numbers in the array index of 1 we use the reduce method to add all the negative numbers 
// we put a 0 to give us 0 if the addition is 0 and of course we put the : semicolons to include the empty array if output none of the left hand side or  right side commands from the question mark 
..........................................................
//In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.

//For example, if you are given:

//[[15,18], [4,5], [12,60]]
//Their product would be:

//[270, 20, 720]
//While their respective LCM would be:

//[90, 20, 60]
//Thus the result should be:

//(270-90)+(20-20)+(720-60)==840

//solution 
function sumDifferencesBetweenProductsAndLCMs(pairs){
    const gcd = (x,y) => x == 0 ? y : gcd(y % x, x)
    const lcm = (x,y) => x * y == 0 ? 0 : x * y / gcd(x,y)  
      return pairs.map(c => c[0] * c[1] - lcm(c[0],c[1])).reduce((a,c) => a + c, 0);
    
      }

...................................................................................

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them. 

function abbrevName(name){
  
    return name.split(' ').map(x => x[0].toUpperCase()).join('.')
    
    
    }

    // using the method split so we can split each index and be able to select a letter from a word . The map method is than used to select every index at [0] use uppercase for uppercase and at the just join them with . in between 
    // output A.S if we are inputting angel sanchez 