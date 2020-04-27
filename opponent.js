class Opponent{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height)
        this.width=width
        this.height=height
        this.box=loadImage("sling/Arham.jpg")
        World.add(world,this.body)
    }
    display(){
        
        if(this.body.speed<7){
            var pos=this.body.position
            rectMode(CENTER)
            fill("blue")
            image(this.box,pos.x,pos.y,this.width,this.height)
        }else{
            World.remove(world,this.body)
        }
        
    }
}