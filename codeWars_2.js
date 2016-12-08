see codeWars_2_code.js for actual code


undetermined number of people

each has 100, 50, 25 dollar bill

parapmeter of the funciton takes an array containing integers for the bill each has.

inside the function:

create var (object key:val) to store the quanitiy for each bill (100,50,25);

FOR loop:

update value for storage var using param1,2,etc.

use nested if statment to check if Vasya can give change

	Algorithm:
	var ticketPrice= 25;
	var pricePaid  = param1;
	var changeOwed = pricePaid - ticketPrice
	var changeGiven;yes;
	if y- changeOwed && >=0; return yes

	changOwed should be less than or equal that value of totalr egister
	value of changeOwed % x should = 0
	how much can we take from register?
		// We have enough of one type of bill to make change:
		// 	if x*val-changOwed  > 0 and changeOwed % x = 0 && changeOwed/x > (x*val):

		// 	then divide changeOwed by x (changeOwed/x and store in local var numOfBills). subtract numOfBills from val of xkey. multiply numOfBills*x and store amnt in changeGiven.

		We have one type of bill to make change:
			if x*val > 0 && changeOwed/x % 0:
			while changeOwed >= x*val : (subtract one from xval / add x*val to changeGiven;
				if changeGiven === changeOwed: return "YES")
		We have one type of bill, but not enough to make the change:
			changeOwed = (changeGiven-changeOwed);
			while y*val >= changeOwed : (subract one from yval / add y*val to ChangeGiven;
				if if changeGiven === changeOwed: return "YES")
		We have one type of bill, but not enough to make the change:
			changeOwed = (changeGiven-changeOwed);
			while z*val >= changeOwed : (subract one from xval / add z*val to ChangeGiven;
				if if changeGiven === changeOwed: return "YES")
		else:
			return "NO".






return yes/no

if no; break / return no

if yes; use if statment to check if next person can get change
return yes/no

if no; break / return no

return YES



If array[0] is 25, return yes
else if array[0] is 50 or 100, return no

If array[1] is 25, return yes
If array[1] is 50 and if array[0] is 25, return yes
else if array[1] is 100 or array[1] is 50 and array[0] is not 25, return no

If array[2] is 25 or 50 or 100,
if array[2] is 25, return yes
if array[2] is 50 and array[1] or array[0] is 25, return yes
if array[2] is 100 and array[1] is 25 and array[0] is 50 OR array[0]

var change;
if change - (ticketPrice - amnt paid) > 0 && if change%amnt owed = 0

divide change owed by cash - should be less than 1



cucumber.io

// === JavaScript ==

tickets([25, 25, 50]) // => YES
tickets([25, 100])
        // => NO. Vasya will not have enough money to give change to 100 dollars

// The new "Avengers" movie has just been released! There are a lot of
// people at the cinema box office standing in a huge line. Each of
// them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket
// costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to
// every single person in this line.

// Can Vasya sell a ticket to each person and give the change if he
// initially has no money and sells the tickets strictly in the order
// people follow in the line?

// Return YES, if Vasya can sell a ticket to each person and give the
// change. Otherwise return NO.














