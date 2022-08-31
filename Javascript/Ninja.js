class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name: ${this.name} \n Strength: ${this.strength} \n Speed: ${this.speed} \n Health: ${this.health} `);
    }
    drinkSake(){
        this.health = this.health + 10;
    }
}



class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wishdom = 10;
    }
    speakWishdom(){
        console.log("What one programer can do in one month, two programers can do in two months.");
    }
}
const superSensei = new Sensei("Master Splinter");

superSensei.speakWishdom();
superSensei.showStats();
