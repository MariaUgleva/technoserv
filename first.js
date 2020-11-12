function pigIt(str) {
    let arr = str.split(' ').map(item => item.slice(1)+item[0]+'ау');
    return arr.join(' ');
}

function summNum(number) {
    let numToArr = number.toString().split('');
    let result = numToArr[0];
    while (numToArr.length !== 1) {
       result = numToArr.reduce((sum, item) => sum + +item, 0);
       numToArr = result.toString().split('');
    }
    return result;
}
function removeSmallest(arr) {
    let min = +arr[0];
    arr.forEach(item => {
        if (+item < min) {
            min = +item
        }
    })
    const newArr = [...arr];
    newArr.splice(arr.findIndex(item => +item === min), 1);
    return newArr;
}