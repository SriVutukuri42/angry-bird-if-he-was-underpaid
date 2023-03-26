class Pig{
    constructor(x,y){
        this.body = Matter.Bodies.rectangle(x, y, width, height)
        World.add(world, this.body)
        this.width = 50
        this.height = 50
        this.image = loadImage("./sprites/enemy.png")

    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height) 
    }
}