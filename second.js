function solution(str) {
	const transformation = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	const arr = str.split('');
	let result = 0;
	let fl = 0;
	let i = 0;
	for (i; i < arr.length - 1; i++) {
		if (transformation[arr[i]] < transformation[arr[i + 1]]) {
			result += transformation[arr[i + 1]] - transformation[arr[i]];
			fl = 1;
			i++;
			continue;
		}
		result += transformation[arr[i]];
	}
	if (!fl) result += transformation[arr[arr.length - 1]];
	return result;
}

function list(arr) {
	let result = arr
		.map((item) => item.name)
		.reverse()
		.join(',')
		.replace(/,/, ' & ')
		.split(',')
		.reverse()
		.join(', ');
	return arr.length ? result : '';
}

function conversion(arr) {
	let result = arr.reverse().reduce((result, item, index) => (result += item * Math.pow(2, index)), 0);
	return result;
}
