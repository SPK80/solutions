function bracketsGen(brackets, bracket, n) {
	if (brackets.length >= 2 * n) return;
	bracketsGen()
}


	// 0 ''
	// 1 ()

	// 2 ()()
	//	 (())

	// 3 ()()()
	// 	 (())()
	// 	 ()(())
	// 	 ((()))
