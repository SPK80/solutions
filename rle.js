function rle(str) {
	function pack(char, count) {
		return count < 2 ? char : char + count.toString()
	}

	if (!str) return str;

	let lastChar = str[0];
	let lastCount = 1;
	const result = [];
	for (let i = 1;i < str.length;i++) {
		if (str[i] !== lastChar) {
			result.push(pack(lastChar, lastCount));
			lastChar = str[i];
			lastCount = 0;
		}
		lastCount++;
	}
	result.push(pack(lastChar, lastCount));
	return result.join('');
}

const tests = [
	'',
	'abbbc',
	undefined
]
tests.forEach(test => {
	console.log(rle(test));
});