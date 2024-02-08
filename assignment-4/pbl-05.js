function monthlySavings(arr , livingCost) {

    if (!Array.isArray(arr) || typeof livingCost !== 'number' || isNaN(livingCost)) {
        return "invalid input";
    } 
    
     let totalIncome = 0;
    for (let array of arr) {
        if (array >= 3000) {
            totalIncome -= array * 0.2;
        }
        totalIncome += array;

    } 
      let totalSavings = totalIncome - livingCost;

    if (totalSavings < 0) {
        return "earn more";
    } 
    return totalSavings;

    }


    let arr = [ 1000 , 2000 , 3000 ] ;
    let livingCost = 5400  ;
    console.log(monthlySavings(arr, livingCost));
    console.log(monthlySavings("not an array", "not a number")); 
