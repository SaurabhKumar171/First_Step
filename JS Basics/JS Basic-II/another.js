

//CLONING OBJECTS

 // 1.Through Iterations

    //  let oj={
    //   length:20,
    //   breadth:40,
    //   f:9
    //  };

    // let dmy={};

//     for(let key in oj){
//         dmy[key]=oj[key];
//     }
// console.log(dmy);


  
  //2. Assign
  
     var oj = {
      length:20,
      breadth:40,
      f:9
     };

//      let n={
//         a:7,
//         g:90
//      }

//   var dmy=Object.assign({},oj,n);
//   console.log(dmy);


  //3. Spread
     var dmy={...oj};
     console.log(dmy);

     dmy.f++;
    console.log(dmy);