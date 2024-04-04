// function func_one(param1,...param2){
//     console.log(param1,param2);
// }
// func_one();                             //undefined []
// func_one("Hello","Welcome");            //Hello [ 'Welcome' ]
// func_one(100,200,300);                  //100 [ 200, 300 ]
// func_one(undefined,undefined);          //undefined [ undefined ]
// func_one(null,null);                    //null [ null ]







//function func_one(...param1,...param2){}
//Note : we can pass only one spread operator per function

//function func_one(...rest,normal1,normal2){}
//Note: spread operator always last in occurances


//Default Parameters in Functions
//ES6

// function func_one(param1="ReactJS",param2="NodeJS",param3="MongoDB"){
//     console.log(param1,param2,param3);
// }

// let func_one = function(param1="ReactJS",param2="NodeJS",param3="MongoDB"){
//     console.log(param1,param2,param3);
// }

// let func_one = (param1="ReactJS",param2="NodeJS",param3="MongoDB")=>{
//     console.log(param1,param2,param3);
// }


// func_one();                                     //ReactJS NodeJS MongoDB
// func_one("Angular15","NodeJS","CasandraDB");    //Angular15 NodeJS CasandraDB
// func_one(undefined,undefined,undefined);        //ReactJS NodeJS MongoDB
// func_one(null,null,null);                       //null null null

// function func_one(param1,param2="Hello",...param3){
//     console.log(param1,param2,param3);
// }

// let func_one = function(param1,param2="Hello",...param3){
//     console.log(param1,param2,param3);
// }

let func_one = (param1,param2="Hello",...param3)=>{
    console.log(param1,param2,param3);
}


func_one();                                 //undefined Hello []
func_one("Welcome",undefined,"Hello");      //Welcome Hello [ 'Hello' ]
func_one(undefined,undefined,undefined);    //undefined Hello [ undefined ]
func_one(null,null,null);                   //null null [ null ]













