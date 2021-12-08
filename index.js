
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
}

// Adding info method to Book the room
Room.prototype.book = function(){
    this.boocked = true;
    console.log('Room number '+this.number +' is booked');
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
let room2 = new Room(2,80,3);
let room3 = new Room(3,90,4);
room1.info();
room1.book();
room1.info();
room1.checkout();
room1.info();
room1.priceChange(60);
room1.info();

// create room for a Hotel
let hotel = {
    name: 'Vibhanshu Hotel',
    star : 5,
    rooms:[room1, room2, room3]
}

//Adding info method for the Hotel
hotel.info = function(){
    console.log('\n\nRoom info: ')
    for(let i = 0; i<this.rooms.length; i++){
        this.rooms[i].info();
    }
}
hotel.info();

//Booking room as per the avaliability
hotel.book = function(guests){
    for(let i = 0; i<this.rooms.length; i++){
        let roomfound = false;
        if(!this.rooms[i].boocked && this.rooms[i].capacity>=guests){
             this.rooms[i].book();
             roomfound = true;
             break;
        }
        if(!roomfound){
            console.log(" Sorry no rooms available as per the req");
        }
    }
}

hotel.book(2);
hotel.info();

hotel.checkout = function(rNum){
    for (let i=0; i<this.rooms.length;i++){
        if(this.rooms[i].number===rNum){
            this.rooms[i].checkout();
            break;
        }
    }
}
hotel.checkout(1);
hotel.info();