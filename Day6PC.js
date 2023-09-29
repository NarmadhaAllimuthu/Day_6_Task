//3.Write a “person” class to hold all the details.

class Persondetails{
    constructor(name,job,mailid,qualification){
      this.name=name;
      this.job=job;
      this.mailid=mailid;
      this.qualification=qualification;
      
    }
  }
  let arr=[];
  let list= new Persondetails("John","Own Bussiness","johnirfa@gmail.com","MCA");
  arr.push(list);
  console.log("Person detail is "+arr);
  console.log(list.name);
  console.log(list.job);
  console.log(list.mailid);
  console.log(list.qualification);

  //4.write a class to calculate the uber price.
  class uber{
    constructor(basic,costperkm,distance){
     this.basic=basic;
       this.costperkm=costperkm;
       this.distance=distance;
    }
    get cost(){
      if(this.distance>2){  //considered as 2km minimum prices is 50
        var total=this.basic+this.costperkm*this.distance;
      return total;
    
      }else {
        var total=this.basic;
        return total;
      }
       }
  }
  let details=new uber(50,30,10);
  console.log(details.cost);
      