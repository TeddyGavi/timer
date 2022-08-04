// process.stdout.write('\x07') makes a beep
//need to modify here as the arrays elements are strings

let input = process.argv.slice(2).map(x => Number(x));
input = input.filter(x => !Number.isNaN(x) || typeof x !== 'number');
input = input.filter(x => !(x <= 0));

if (input === undefined || input.length === 0) {
  console.log('No Beeps required');
}
for (const item of input) {
 
  setTimeout(() => {
    process.stdout.write('\x07');

  }, item * 1000);
}
