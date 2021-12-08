// Activity to create the Room Constructor
var Room = function (number, price,capacity){
    this.capacity = capacity;
    this.price = price;
    this.number = number;
    this.boocked = false;
}

// Adding info method to check the room info
Room.prototype.info = function (){
    let infoToDisplay = 'Room number ' + this.number + ' is ' +
        (this.boocked ? 'booked':'vacant') + ' and this room cost is $'+
        this.price + ' and can host upto ' + this.capacity +
        (this.capacity >1 ? ' Guests':' Guest');
    
        console.log(infoToDisplay);
        document.getElementById("text").value = infoToDisplay;
}

// Adding info method to Book the room
Room.prototype.book = function(){
    this.boocked = true;
    console.log('Room number '+this.number +' is booked');
    document.getElementById("text").value = 'Room number '+this.number +' is booked';
}

// Adding  method to Checkout the room
Room.prototype.checkout = function(){
    this.boocked = false;
    console.log('Room number '+this.number +' is checked out');
}

// Adding method to update the room price
Room.prototype.priceChange = function(val){
    let oldprice = this.price;
    this.price = val;
    console.log('Now price has been updated from $'+oldprice +' to $'+ this.price);
}


let room1 = new Room(1,456,9);
room1.info();
room1.book();
room1.checkout();
room1.priceChange(60);

let room2 = new Room(2,22,9);
