// const fs = require('fs');
// const input = fs.readFileSync(0).toString().split('\r\n');
// const j = input[0];
// const s = input[1];
// const sum = s.split('').reduce((accum, s_item) => {
// 	return accum + j.includes(s_item)
// }, 0);
// fs.writeFileSync(0, sum.toString());

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];
rl.on('line', (line) => {
	lines.push(line);
})
	.on('close', () => {
		const j = lines[0];
		const s = lines[1];
		const sum = [...s].reduce((accum, s_item) => {
			return accum + j.includes(s_item)
		}, 0);

		process.stdout.write(sum.toString());
	});