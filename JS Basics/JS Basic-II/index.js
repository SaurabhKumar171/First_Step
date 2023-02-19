console.log('JS Basic -II');

//object creation
var rec={
    //properties
    length:1,
    breadth:2,

    //methods
    draw: function(){
        console.log('drawing rectangle');
    }
    ,
    draw2() {
        console.log('drawing square');
    }
    ,
    name:"saurabh"
};


//create multiple functions
     //(1). factory func.

          function createRect(l,b){
                    
            return rec={
                   length:l,
                   breadth:b,
               
                   draw: function(){
                       console.log(this.length+this.breadth);
                   }
                 
               };
    //    return rec; 
          }
          let r= createRect(3,9);
          var b=createRect(30,19);



    //(2). constructor function

       function rectangle(l,b){
          this.length=l;
          this.breadth=b;
          this.draw=function(){
            console.log(this.length);
          }
       }

       let ob =new rectangle(77,90);

       

//Dynamic nature of objects

function dyna(l,b){
                    
    return rec={
           length:l,
           breadth:b,
       
           draw: function(){
               console.log(this.length+this.breadth);
           }
         
       };
//    return rec; 
  }
  let d= dyna(3,9);
  d.color='red';
//   d.view():{
//     console.log('dynamic');
// }

//  delete d.color;







//CONSTRUCTOR PROPERTY
  
  let Rectangle1 = new Function(
      'l','b',
     ` this.length=l;
     this.breadth=b;
     this.draw=function(){
     console.log(this.length);
     }`
  );
  
  let va=new Rectangle1(5,7);
  console.log(va);



    


//TYPES IN JS
  // 1. Primitive Types
    
    let a=10;
    let b=a;

    a++;

    console.log(b,a);

  // 2. Reference types
   
    let arr ={value:105 };

    let brr=arr;

    arr.value++;
    console.log(arr.value,brr.value)



//ITERATION THROUGH LOOPS

   //For in loop

   var oj={
    length:20,
    breadth:40
   };

   for(let key in oj){
    console.log(key+":"+oj[key]);
   }


