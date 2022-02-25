digits = [1, 0];
let sum = 0;
let max = 0;
for (let d of digits) {
	if (d === 1) sum++
	else {
		if (sum > max) max = sum;
		sum = 0;
	}
}
if (sum > max) max = sum;
process.stdout.write(max.toString());
// console.log(max);