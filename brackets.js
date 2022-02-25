function bracketsGen(cur, open, closed, n) {

	if (cur.length === 2 * n) {
		console.log(cur);
		return
	}

	if (open < n)
		bracketsGen(cur + '(', open + 1, closed, n);

	if (closed < open)
		bracketsGen(cur + ')', open, closed + 1, n);

}

for (let i = 0;i < 6;i++) {
	console.log('n=', i);
	bracketsGen('', 0, 0, i);

}
	// 0 ''
	// 1 ()

	// 2 ()()
	//	 (())

	// 3 ()()()
	// 	 (())()
	// 	 ()(())
	// 	 ((()))
