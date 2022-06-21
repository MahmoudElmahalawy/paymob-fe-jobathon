// JavaScript Task 2:

// Write a function:

// function solution(N);

// that prints out ASCII-art in the shape of the capital letter L, made up of copies of the capital letter L.
// Parameter N is an integer (between 1 and 100) and represents the expected size of the ASCII-art (the output should comprise N rows,
// the last of which should comprise N letters L).

// For example, here is the output for N = 4:

// L
// L
// L
// LLLL

// The function should not return any value.

// You can print a string to the output (without or with the end-of-line character) as follows:

// console.log('sample string');

// console.log('whole line\n');

function solution(N) {
	let output = "";

	for (let i = 1; i < N; i++) {
		output += "L\n";
	}
	output += "L".repeat(N);

	console.log(output);
}

solution(4);
// solution(8);
