class BaseClass {
    constructor(x, y, width, height, angle) {
        var options = {
            restititution: 0.8, friction: 1, density: 1
        }


        this.body = Matter.Bodies.rectangle(x, y, width, height,options)
        World.add(world, this.body)
        this.width = width
        this.height = height
        this.image = loadImage("./sprites/wood1.png")
    }
    display() {
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height)
        pop()
    }
}