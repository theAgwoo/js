const nums = [32, 29, 30, 37, 34, 33, 31, 5];
nums.sort(function(a, b){return a - b});
console.log(nums);
console.log(nums.length);
if(nums.length % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}
