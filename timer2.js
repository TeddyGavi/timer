const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const loop = (input) => {
  rl.write(`Setting timer for ${input} seconds...\n`)
  setTimeout(() => {
    process.stdout.write('\x07')
  }, input * 1000)
}

const loopQ = () => {
  rl.question("Please enter a number from 1-9 to set a beep delay or press b to immediately beep! Press ctrl + c to exit \n", (input) => {
    if (input === 'b') {
      process.stdout.write('\x07')
    } else {
      loop(input);
    }
    setTimeout(loopQ, input * 1050)
  })
}


rl.on("close", () => {
  process.stdout.write(`\nThanks for using me, ciao! \n`)
})

loopQ();

/*

testing different inputs/outputs

if (key === '\u0003') {
  process.exit();
}  
cd ig
} else if (input === '\U+0042') {
      process.stdout.write('\x07')
    } else if (input === '\u0003'){
      r1.close()
    }



*/