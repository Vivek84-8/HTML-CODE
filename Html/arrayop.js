const nums=[23453 , 46 , 23 , 39 , 3 , 8];

const newnums = [];
for(let i of nums){
    console.log(i ** 2);
    newnums.push(i ** 2);
}

console.log(newnums);


const result = nums.map( (n) => { return n**2 } );
console.log(result);

const prices = [3400 , 2347 , 27 , 494 , 988];

const result2 = prices.map( (p) => {return p + p*0.1} );
console.log(result2);


// use map to get discounted prices = 7.5% discount

const result3 = prices.map( (p) => {return p*0.925} );
console.log(result3);

// use map to get the prices in integer format
const prices2 = [ '$67.89' , '$348.99' , '$29384.22' , '$4.102' , '$1.242'];
const result4 = prices2.map( (p) => {return p.slice(1)} );
console.log(parseInt(result4));