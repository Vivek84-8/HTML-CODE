// create a array of names and filter all names starting with s.

const names =['sandhaya', 'shruti','sneha', 'virendra', 'vivek', 'Sonu', 'abhishek'];
const filternames = names.filter(n => n.startsWith('s')||n.startsWith('S'));

console.log(filternames);


//create an array of numbers and filter all perfect squares.

const numbers =[2,34,9,45,16,36,43,99,87,25];

const PerfectSquare= numbers.filter(n => {const sqrt =Math.sqrt(n);
return parseInt(sqrt)===sqrt;
});
console.log(PerfectSquare);

