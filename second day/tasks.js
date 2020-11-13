function findException(arr) {
	let typeToFind = Math.abs(arr[0] % 2) + Math.abs(arr[1] % 2) + Math.abs(arr[3] % 2) < 2 ? 1 : 0;
	return arr.find((item) => item % 2 === typeToFind);
}
function findSame(str) {
	const arr = str.toLowerCase().split('').sort();
	let counter = 0;
	let actualValue;
	arr.forEach((item, index, arr) => {
		if (item === arr[index + 1] && item !== actualValue) {
			actualValue = item;
			counter++;
		}
	});
	return counter;
}
function songDecoder(str) {
	return str.split('WUB').join(' ').replace(/\s+/g, ' ').trim();
}
function cakes(recipe, available) {
	let quantity = Infinity;
	for (let key in recipe) {
		if (available[key]) {
			quantity =
				Math.floor(available[key] / recipe[key]) < quantity
					? Math.floor(available[key] / recipe[key])
					: quantity;
		} else return 0;
	}
	return quantity;
}
function tickets(arr) {
	const cashbox = {
		25: 0,
		50: 0,
		100: 0,
	};
	let answer = 'YES';
	arr.forEach((item) => {
		switch (item) {
			case 25:
				cashbox[item] += 1;
				break;
			case 50:
				cashbox[item] += 1;
				if (cashbox[25]) cashbox[25] -= 1;
				else answer = 'NO';
				break;
			case 100:
				cashbox[item] += 1;
				if (cashbox[50] && cashbox[25]) {
					cashbox[50] -= 1;
					cashbox[25] -= 1;
				} else if (cashbox[25] >= 3) {
					cashbox[25] -= 3;
				} else answer = 'NO';
		}
	});
	return answer;
}
function sortArray(arr) {
	let numbers = [];
	let positions = [];
	arr.forEach((item, index) => {
		if (item % 2 === 1) {
			numbers.push(item);
			positions.push(index);
		}
	});
	numbers.sort((a, b) => a - b);
	positions.forEach((item, index) => (arr[item] = numbers[index]));
	return arr;
}
function alphabetPosition(str) {
	let result = [];
	str.toLowerCase()
		.split('')
		.map((item) => {
			if (item.charCodeAt(0) > 96 && item.charCodeAt(0) < 123) {
				result.push(item.charCodeAt(0) - 96);
			}
		});
	return result.join(' ');
}
function toWeirdCase(str) {
	return str
		.split(' ')
		.map((item) => {
			let newElem = [];
			item.split('').map((elem, index) => {
				if (index % 2 === 0) {
					newElem.push(elem.toUpperCase());
				} else newElem.push(elem.toLowerCase());
			});
			return newElem.join('');
		})
		.join(' ');
}
