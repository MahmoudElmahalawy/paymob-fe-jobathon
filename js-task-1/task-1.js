// JavaScript Task

// You are given a device with a touch screen of 1080 pixels in height and 1920 pixels in width. The pixels are numbered from 0.

// There are N icons on the screen and they are numbered from 0 to N−1.
// The positions of the icons are described by arrays A and B.Specifically,
// for every icon number J, (A[J], B[J]) is the icon's position on the screen (using x and y coordinates consecutively).

// To select an icon, you have to tap the screen within a circular area of radius 20 pixels, centered on the icon's position. You can assume that there is always at most one icon within range of the tap.

// For example, if an icon's position is (500, 500), then you can select it by tapping the screen at position (505, 510) or (520, 500), but not at (520, 480).

function solution(A, B, X, Y) {
	for (let i = 0; i < A.length; i++) {
		if (Math.sqrt((X - A[i]) * (X - A[i]) + (Y - B[i]) * (Y - B[i])) <= 20) {
			return i;
		}
	}

	return -1;
}

console.log(solution([100, 200, 100], [50, 100, 100], 100, 100));
console.log(solution([100, 200, 100], [50, 100, 100], 100, 70));
console.log(solution([100, 200, 100], [50, 100, 100], 200, 60));
