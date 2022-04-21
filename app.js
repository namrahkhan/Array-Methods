const subjects = ["Physics", "English", "Maths", "Biology", "Chemistry", "Computer", "Statistics"];
const numbers = [34,32,87,12,90,5,9];

//As we know we have to first make our array or objects so we can operate our array methods on it.

//////////////////

// console.log(info);

// This we can use if we want to show our all the entries of array in the console.

//////////////////



                                                    // indexOf() #1

const indexSubjects= subjects.indexOf("Maths");
console.log(indexSubjects);

//this array method will be used to find out the index of particular number,string or character, number will be written as it is without any quotation marks, character will be written in between these '' and string will be written in between "". as i entered "Maths"  which is a string, the console shows up 2 because the index of "Maths" is 2.

//////////////////

                                                    // pop()  #2

//   console.log(subjects.length);
//   const lengthOfSubjects = subjects[subjects.length - 1];
//   console.log(lengthOfSubjects);
//   console.log(subjects.length);

//this is a method of pop(). Threw this we can identify what is the last string we added throw -1 as this shows the last object.

const popped= subjects.pop();
console.log(popped);
console.log(subjects.length);

// Another method of pop(). So before doing pop method the number of array were 7 and after popping method the number of array is 6. Pop method removed or extracted the last one entry from the array and shows it separately.

///////////////

console.log(subjects);
//this shows the entries of 6 objects, before statistics.

///////////////

                                                    //push()  #3

//Now i am gonna add discrete at the place of statistics with push() array method.
 const Pusheditem = subjects[subjects.push("Discrete")];
 console.log(Pusheditem);
 console.log(subjects);
 //So push is used to insert the value at last of the array.

 //////////////


                                                    // Shift()  #4

const Shifteditems = subjects.shift();
console.log(Shifteditems);
console.log(subjects);

// It is just opposite of pop() method but it removes the value at the starting of the array.

///////////////

                                                    //Unshift()  #5
                    
const UnShifteditems = subjects[subjects.unshift("Information security")];
console.log(UnShifteditems);
console.log(subjects);

//  It is just opposite of push() method but it inserts the value at the starting of the array.

///////////////
                                                    //splice()  #6
                                                    
subjects.splice(2,4,"Free lecture");
console.log(subjects);
                                                    
//it directly dependent of two arguments one for index and other one from index to next further values. It means the index of 2 is also included and then next 3 entries will be replaced from free lecture. So the index of 2 and further 3 values are qual to 4 as written in next argument will be replaced with Free lecture.

//////////////

                                                    // sort()  #7

//  numbers.sort();
// console.log(numbers);

//This will sort the numbers by checking first alphabet if string or word and first digits if numbers. It will giv the result as [ 12, 32, 34, 5, 87,  9, 90 ] which is not correct in some sense.
                                                    

const Ascfunc = (a, b) => {
    return a - b;
};

const Decfunc = (a, b) => {
    return b - a;
};

numbers.sort(Decfunc);
console.log(numbers);

//Ascending orders. To achieve the desired effect we will go with the compare sorting or bubble sorting which check 2 enteries. If the value of 34 -32 =2 which is positive then they both will exchange there places and if the value will be negative so they will not exchange there places. and then the answer of first 2 numbers is 2 then they both will exchange place. and so on with 
   // if a - b = -val | will not exchange place
   // if a - b = val | exchange place
   // if a - b = 0 | skip both items


// As it is with descending orders but oppositely.
 // if b - a = -val | will not exchange place
   // if b - a = val | exchange place
   // if b - a = 0 | skip both items


///////////////

                                                    // join()   #8

const Joineditems = numbers.join("|");
const Joineditem= subjects.join("|");
console.log(Joineditems, Joineditem);

//Join() method will be use to join two different arrays with the help of "|".

///////////////

                                                    // concat()  #9


const somemoresubjects= ["Programming", "OR", "Data structures"];
const totalSubjects = subjects.concat(somemoresubjects);
console.log(totalSubjects);
console.log(subjects);

//This is used to add some more arrays and then join them or combine them with the help of concatination as concat().










                                                    
// console.log(subjects.slice(2, 4))
// console.log(subjects)
