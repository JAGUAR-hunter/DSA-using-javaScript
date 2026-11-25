import readline from "node:readline";

const arr = [];

//prompting user to enter number
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(
  `Enter a number to find the sum of the odd number?`,
  (user_Input) => {
    const user_input_to_number = Number(user_Input);

    if (user_input_to_number > 100) {
      const maxError = `Maximum value is 100, you have enter ${user_Input}`;
      console.log(maxError);
    } else if (user_input_to_number <= 0) {
      console.log(`${user_Input}. Your value is negative`);
    } else if (Number.isInteger(user_input_to_number)) {
      odd_number_computation(user_input_to_number); //passing the user input to odd_number_computation function
    } else {
      console.log(`${user_Input} is not a number`);
    }
    rl.close();
  },
);

function odd_number_computation(number) {
  /* 
 taking the user number, iterate from 1 to number , push them to arr array
*/
  for (let i = 1; i <= number; i++) {
    arr.push(i);
  }
  const oddArr = []; //defining the array to hold the odd numbers
  for (const odd of arr) {
    //loop through the array , seaching odd numbers

    const oddModule = odd % 2; // compute testing the odd numbers and asign to oddModule

    /* 
    check if the oddmuule is not equal to zero, if it is true , then push the odd to arr[]
    
    */
    if (oddModule != 0) {
      createOddArray(odd);
    }
  }
  function createOddArray(value) {
    oddArr.push(value);
  }

  //console.log(`odd number array [${oddArr}] with length of ${oddArr.length}`)

  let array_sum = 0;
  function Addition_of_odd_array() {
    for (const o of oddArr) {
      array_sum += o; //computing the sum of the odd numbers in the array
    }

    console.log(array_sum);
  }

  Addition_of_odd_array();
}
