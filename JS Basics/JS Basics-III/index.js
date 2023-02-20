//Strings
  let name="saurabh Kumar Jha 555";
   

   //Template Literal

   let msg=`hi
            i am ${name}`;



//ARRAYS
  let arr=[1,2,3,4];
 
 
[1, 2, 3, 4]


console.log(arr);
[1, 2, 3, 4]

arr.push(6);
5


console.log(arr);
 [1, 2, 3, 4, 6]

arr.unshift(-1);
6

console.log(arr);
[-1, 1, 2, 3, 4, 6]

arr.splice(2,0,'a','b');
console.log(arr);
[-1, 1, 'a', 'b', 2, 3, 4, 6]



arr.splice(2,4,'a','b');
['a', 'b', 2, 3]


console.log(arr);
[-1, 1, 'a', 'b', 4, 6]

arr.splice(2,4,'s','o');
['a', 'b', 4, 6]

console.log(arr);
[-1, 1, 's', 'o']



//SEARCH IN ARRAY OF OBJECTS
  let courses=[
    {no:1 , naam:'saurabh'},
    {no:2 , name:'kumar'}
  ];
  console.log(courses);


 //1.
  let course =courses.find(function(course){
    return course.naam==='saurabh';
  });

  console.log(course);
 //2.(Shortcut)Arrow notation
//   let course =courses.find(course =>  course.name==='kumar');
 
//      console.log(course);