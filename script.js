//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get width(){
		return this._width;
	}
	set width(value)
	{
		this._width=value;
	}
	get height(){
		return this._height;
	}
	set height(value)
	{
		this._height=value;
	}
	getArea()
	{
		return this.width*this.height;
	}
}

class Square extends Rectangle {
	 constructor(side) {
        super(side, side);
        this.side = side;
    }

    get side() {
        return this.width; // Since width and height are the same in a square
    }

    set side(value) {
        this.width = value;
        this.height = value;
    }
	getPerimeter(){
		return 4*this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
