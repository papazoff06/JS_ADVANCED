function rectangle(width, height, color){
    let[first, ...rest] = color;
    let upper = first.toUpperCase() + rest.join('');
    return {
        width: width,
        height: height,
        color: upper,
        calcArea: function(){
            return this.width * this.height;
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
