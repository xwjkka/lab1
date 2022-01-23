let arr = [2, -1, 0, -5, -4];
let max = 0;

for (let i = 0; i < 5; i++) {
    if (arr[i] > max) {
        max = arr[i]
    };
};
console.log(max);