//Create constructor for staffMember class
function staffMember(name, discountPercent) {
  this.name = name;
  this.discountPercent = discountPercent;
}

var sally = new staffMember("Sally", 5);
var bob = new staffMember("Bob", 10);

//Create new staff member
var sarah = new staffMember("Sarah", 20);

//cashRegister object
var cashRegister = {
  total:0,
  lastTransactionAmount: 0,
  add: function(itemCost || 0){
    this.total += itemCost;
    this.lastTransactionAmount = itemCost;
  },

  scan: function(item, quantity) {
    switch(item) {
      case "eggs":
        this.add(0.98 * quantity);
      break;

      case "milk":
        this.add(1.23 * quantity);
      break;

      //Additional 2 items
      case "magazine":
        this.add(4.99 * quantity);
      break;

      case "chocolate":
        this.add(0.45 * quantity);
      break;
    }
    return true;
  },
  //Add voidLastTransaction method
  voidLastTransaction: function(){
    this.total -= this.lastTransactionAmount;
    this.lastTransactionAmount = 0;
  },
  //apply staff discount method
  applyStaffDiscount: function(employee){
    this.total -= this.total * (employee.discountPercent / 100);
  }
};

//Scan eggs and magazines
cashRegister.scan("eggs", 1);
//cashRegister.scan("eggs");
cashRegister.scan("milk", 1);
cashRegister.scan("magazine", 1);
//cashRegister.scan("magazine");
//cashRegister.scan("magazine");
cashRegister.scan("chocolate", 4);

//Apply staff discount to object
cashRegister.applyStaffDiscount(sarah);

/* Void last transaction and add 3 instead
cashRegister.voidLastTransaction();
cashRegister.scan('chocolate', 3); */

/* Call add method for items
cashRegister.add(0.98);
cashRegister.add(1.23);
cashRegister.add(4.99);
cashRegister.add(0.45); */

//show total bill
console.log('Your bill is ' + cashRegister.total);

/*Change total property
cashRegister.total = 2.99; */
