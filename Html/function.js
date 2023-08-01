function addNums(a,b){
   var c=a+b;
    console.log(c);

};
addNums(2345,2865);
//console.log(c);


const getPercentage = function(m1, m2, m3, m4, m5){
    console.log(m1, m2, m3, m4, m5);
    let percent = (m1+m3+m2+m4+m5)/5;
    console.log(percent);

    return percent;
}

      const res = getPercentage(50,80,90,70,40);
      console.log(res);  


      const getFactorial = (n) => {
        let f=1;
        for(let i=2; i<=n; i++){
            f=f*i;
        }
        return f;
      };

      

      const ans = getFactorial(5);
      console.log(ans);