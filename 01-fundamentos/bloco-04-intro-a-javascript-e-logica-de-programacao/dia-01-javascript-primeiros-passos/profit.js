let cost = 10;
let salePrice = 15;
 
if (cost > 0 && salePrice > 0) 
{let totalCost = cost * 1.2;
    let totalProfit = (salePrice - totalCost) * 1000;
    console.log(totalProfit)
} else {
    console.log("Error, the values can't be negative")
}

