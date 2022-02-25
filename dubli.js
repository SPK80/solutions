// const digits = [0, 0, 1, 2, 2, 2];

const input = [0, 2, 2, 2, 8, 8];
const output = [];
let pred;
for (const d of input) {
	if (d !== pred)
		output.push(d);
	pred = d;
}
console.log(output);

const readline = require('readline');

const readlineInterface = readline.createInterface({ input: process.stdin });

let count;
const output = [];
let pred;
readlineInterface.on('line', line => {
	const digit = Number(line);
	if (!count) count = digit
	else {
		if (digit !== pred) output.push(digit);
		pred = digit;
	}
}).on('close', () => {
	output.forEach(digit => {
		process.stdout.write(digit.toString() + '\n')
	});

});

// let b = 0;
// let c = 0;

// for (let i = 0;i < digits.length;i++) {
// 	if (digits[i] === digits[i + 1]) {
// 		if (c === 0) b = i; //condition of begin
// 		c++;
// 	}
// 	else if (c > 0) { //condition of end
// 		digits.splice(b + 1, c);
// 		i = b;
// 		c = 0;
// 	}
// }

// console.log(digits);

///
// const readline = require('readline');

// const readlineInterface = readline.createInterface({ input: process.stdin });
// const digits = [];
// let count;
// readlineInterface.on('line', line => {
// 	if (!count) Number(line)
// 	else digits.push(Number(line));
// }).on('close', () => {

// 	let b = 0;
// 	let c = 0;

// 	for (let i = 0;i < digits.length;i++) {
// 		if (digits[i] === digits[i + 1]) {
// 			if (c === 0) b = i;
// 			c++;
// 		}
// 		else if (c > 0) {
// 			digits.splice(b + 1, c);
// 			i = b;
// 			c = 0;
// 		}
// 	}

// 	digits.forEach(digit => {
// 		process.stdout.write(digit.toString() + '\n')
// 	});

// });