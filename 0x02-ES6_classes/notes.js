class Rectangle {
    // clss definition
    // the constructior is a method that runs once on the creation of an object.
    constructor(width = 10, height = 20, color = "blue") {
        // used for setub
        console.log("rectangle object is created")
        this._width = width;
        this._height = height;
        this._color = color;
    }

    getArea () {
        return width * height;
    }

    printRectangle() {
        console.log(`width: ${this._width}, height: ${this._height}, color: ${this._color}`)
    }
}


let myRectangle = new Rectangle();
let myRectangle2 = new Rectangle();
