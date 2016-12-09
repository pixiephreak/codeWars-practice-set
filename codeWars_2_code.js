

peopleInLine = [25,50,25,50,100];

var add = function(iterator, object){
   if(isNaN(object[iterator])){
  object[iterator] = 1;
  }else if(!isNaN(object[iterator])){
  object[iterator] += 1;
  }
};


function tickets(peopleInLine){
//create a cashRegister, access array of customers, and keep track of total amount
  var register = {};
  var customer = peopleInLine[0];
  var total = 0;
  for(var i=0; i< customer.length; i++){
  //which bill did the customer pay with?
    var bill = customer[i];
    total += customer[i];
  //keep track of how many of each bill is in the register
    add(bill, register);
    var denominations = Object.keys(register);
    denominations.sort(function(a, b) {
    return a + b;
    });

  //how much is owed back to the customer?
    var ticketPrice = 25;
    var pricePaid = customer[i];
    var changeOwed = pricePaid - ticketPrice
    var changeGiven;
    //does register owe change?
    if(changeOwed === 0){
      continue;
          //if register owes is there even enough money in the register to pay out change?
    }else if(total >= changeOwed){
      //are there enough bills of each denomination to make change? How could we check the LARGEST denomination first?
      for (let i = 0; i< denominations.length; i++){
        if(changeOwed%denominations[i] ===0){
          billQuantity = register[denominations[i]];
          if(changeOwed <= (denominations[i]*billQuantity)){
            //take the change out of the register
                billQuantity = billQuantity - (changeOwed/denominations[i]);
                console.log(`you now have ${billQuantity} ${denominations[i]} bc I took out ${(changeOwed/denominations[i])} to make ${changeOwed}`)
                //checkfor the next guest's change
                continue;
          }else{
            if(changeOwed%denominations[i] ===0){
              if(changeOwed >= (denominations[i]*billQuantity)){

                  }else{
                  changeOwed = (changeOwed - (denominations[i]*billQuantity));
                  console.log(changeOwed);
                }
            }
          }
        }
      }
    }

  }
console.log(denominations);
return 'YES';
}

tickets([peopleInLine]);



// console.log(changeOwed,changeOwed%denominations[i] ===0);






