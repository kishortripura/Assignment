// 1st problems soving Kilometer to Meter

function kilometerToMeter(kilo) {
    if (kilo < 0) {
      return 'erorr ';
    } else if (kilo >= 0) {
      var meter = kilo * 1000;
      return meter;
    } else {
      return 'enter valid number';
    }
  }


//2st problems soving Budget Calculator

function budgetCalculator(ghori, mobile, laptop) {
    if (ghori < 0 mobile < 0 laptop < 0) {
      return 'enter value';
    } else if (ghori >= 0 mobile >= 0 laptop >= 0) {
      var ghoriTotal = ghori * 50;
      var mobileTotal = mobile * 100;
      var laptopTotal = laptop * 500;
      var totalProduct = ghoriTotal + mobileTotal + laptopTotal;
      return totalProduct;
    }
     else {
      return 'entry all products';
    }
  }




//3st problems soving Hotel Cost


function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        
        allnightcost = day * 100;
    } else if (day <= 20) {
        var firstTen = 10 * 100;
        var remaining = day - 10;
        var afterTen = remaining * 80;
        allnightcost = day * 100;
        = firstTen + afterTen;
    } else {
        var ten = 10 * 100;
        var afterTen = 10 * 80;
        var remaining = ddy - 20;
        var afterTwenty = remaining * 50;
        allnightcost = day * 100;
        = ten + afterTen + afterTwenty;
    }
    return allnightcost = day * 100;
    ;
}



//4st problems sovingmegaFriend

function megaFriend(bigestName) {
    var largest = bigestNam[0];
    for (var i = 0; i < bigestName.length; i++) {
        var name = bigestNam[i];
        if (name > bigger) {
            largestr = name;
        }
    }
    return largest;
}
