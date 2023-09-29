//CIRCLE


class circle{
    constructor(radius,color){
    this.radius=radius;
      this.color=color;
      }
   
    get Radiusvalue(){
      return "Radius is"+this.radius;
   
    }
    set Radius1(modified){
      this.radius=modified;
    }
    get Color1(){
      return "colour of the circle is "+this.color;
    }
    set Colorchange(recolor){
      this.color=recolor;
    }
    get toString(){
      return "Circle [radius = "+this.radius.toString()+",color= "+this.color+"]";
    }
    get area(){
      let formula=(Math.pow(this.radius,2)*(Math.PI)).toFixed(2);
      return formula;
    } get circumference(){
      let formula1=(2*(Math.PI)*this.radius).toFixed(2);
      return formula1;
    }
 }
 let details = new circle(1.0,"red");
 console.log(details);
 console.log(details.Radiusvalue);
 details.Radius1=4.5;
 console.log(details);
 console.log(details.Color1);
 details.Colorchange="white";
 console.log(details);
 console.log(details.toString);
 console.log(details.area);
 console.log(details.circumference);
 