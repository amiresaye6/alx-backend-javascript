class Rectangle {
    // clss definition
    // the constructior is a method that runs once on the creation of an object.
    constructor(width = 10, height = 20, color = "blue") {
        // used for setub
        console.log("rectangle object is created")
        this._width = width;
        this._height = height;
        this._color = color;
        this._numberOfRequestsForArea = 0
    }

    getArea () {
        return width * height;
    }

    printRectangle() {
        console.log(`width: ${this._width}, height: ${this._height}, color: ${this._color}`)
    }

    // geters and setters worl like a proberity
    get width() {
        this._numberOfRequestsForArea += 1;
        return this._width;
    }

    set width(newWidth) {
        this._width = newWidth;
    }

    //static methos doesnt need an object to use it
    static getAnyThing() {
        console.log("static method that does nothing useful")
    }
}


let myRectangle = new Rectangle();
let myRectangle2 = new Rectangle();
myRectangle.width = 1555;

console.log(myRectangle.width);

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    sayHi() {
        console.log("person sayes hi")
    }
}

class Programmer extends Person {
    constructor(name, age, coding) {
        super(name, age);
        this._coding = coding;
    }
    //polymorphism
    sayHi() {
        super.sayHi(); // you can call the parent method like this in the function
        console.log("programmer sayes hi")
    }


}


// priveate variables can be done by adding #
class priveateClass {
    #name = "";
    #age = 20
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    #PrivateMethod(input) {
        console.log(input);
    }
}
