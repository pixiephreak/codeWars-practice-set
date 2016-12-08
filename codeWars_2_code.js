

peopleInLine = [25, 25, 50, 50, 50, 100];

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
    bill = customer[i];
    total += customer[i];
  //keep track of how many of each bill is in the register
    add(bill, register);
    console.log(register);
  //how much is owed back to the customer?
    var ticketPrice = 25;
    var pricePaid = customer[i];
    var changeOwed = pricePaid - ticketPrice
    var changeGiven;
    //if register owes is there even enough money in the register to pay out change?
    if(total >= changeOwed){

       //if true, check if the correct bills are avail.
    }

  }
console.log(register);
}

tickets([peopleInLine]);








