class Blueprint{
    bathroom = 1;
    bedRoom = 2;
    hall = 1;
    kitchen = 1;

    // function called constructor
    constructor(noOfBedRooms,noOfKitchen,noOfHall){
        this.bedRoom = noOfBedRooms;
        this.kitchen = noOfKitchen;
        this.hall=noOfHall;
    }
}

let house1 = new Blueprint(4,1,1);
let house2 = new Blueprint(3,1,2);
let house3 = new Blueprint(2,3,1);


console.log(house1)
console.log(house2)
console.log(house3)

