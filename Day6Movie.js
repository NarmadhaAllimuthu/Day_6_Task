//CLASS -MOVIE

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and
//  sets the respective class properties to these values.
//   b) The constructor for the class Movie will set the class property rating to "PG" as 
//   default when no rating is provided.

class MovieInfo{
  get title1(){
    return this.title;
  }
  get studio1(){
    return this.studio;
  }
  get rating1(){
    return this.rating;
  }
  set title1(title){
    this.title=title;
  }
  set studio1(studio){
    this.studio=studio;
  }
  set rating1(rating){
    this.rating=rating;
  }
    constructor(title,studio,rating){
      this.title=title;
      this.studio=studio;
      this.rating=rating;
      if (rating==null) {
        this.rating="PG";
    console.log("Default value for rating "+this.rating);
      }
    }
  }
  let flim=new MovieInfo("Jailor","Sun Production");
  console.log(flim);
  

// c) Write a method getPG, which takes an array of base type Movie as its argument, 
// and returns a new array of only those movies in the input array with a rating of "PG".
//  You may assume the input array is full of Movie instances. The returned array need not be full.

  class MovieInfo{
    constructor(title,studio,rating){
         this.title=title;
         this.studio=studio;
         this.rating=rating;
          }
        getpg(){
         if(this.rating=="PG"){ 
           res.push(this.title);
       }
       }
   }
   let res=[];
     let flim=new MovieInfo("Jailor","Sun Production","PG");
     flim.getpg();
   console.log(res);
   
    

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
//  the studio “Eon Productions”, and the rating “PG­13”

class MovieInfo{
    constructor(Title,Studio,Rating){
      this.Title=Title;
      this.Studio=Studio;
      this.Rating=Rating;
    }
  }
  let flim=new MovieInfo("Casino Royale","Eon Productions","PG­13");
  console.log(flim.Title);
  console.log(flim.Studio);
  console.log(flim.Rating);