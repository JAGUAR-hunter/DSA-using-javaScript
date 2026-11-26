import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question(`What's your statement?`, statement => {
   

const word = statement.split(" ");//split the statement into indexes 

console.log(word);
for(let i = 0; i <=word.length; i++){
    const output = `Word ${i} : ${word[i]} `;

    console.log(output);
}

  rl.close();
});

