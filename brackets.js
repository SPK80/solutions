function bracketsGen(cur, open, closed, n) {

	if (cur.length === 2 * n) {
		if (open == closed)
			console.log(cur);
		return
	}

	bracketsGen(cur + '(', open + 1, closed, n);

	if (closed < open)
		bracketsGen(cur + ')', open, closed + 1, n);

}

bracketsGen('', 0, 0, 1);

	// 0 ''
	// 1 ()

	// 2 ()()
	//	 (())

	// 3 ()()()
	// 	 (())()
	// 	 ()(())
	// 	 ((()))
