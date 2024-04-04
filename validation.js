function register(){
    
    let fname=document.forms["regForm"]["fname"].value;
    let arr1=[];
    if(/^$/.test(fname)){
        arr1.push("first name can't left blank");
    }else if(!/^[A-Za-z0-9$_]{4,8}$/.test(fname)){
        arr1.push("must follow validation rules");
    }
    document.getElementById("fname_errors").innerHTML=arr1.join(",");

    let lname=document.forms["regForm"]["lname"].value;
    let arr2=[];
    if(/^$/.test(lname)){
        arr2.push("Last name can't left blank");
    }else if(!/^[A-Za-z0-9$_]{4,8}$/.test(lname)){
        arr2.push("must follow validation rules");
    }
    document.getElementById("lname_errors").innerHTML=arr2.join(",");


    let upwd=document.forms["regForm"]["upwd"].value;
    let arr3=[];
    if(/^$/.test(upwd)){
        arr3.push("Password can't left blank");
    }else if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{4,8}/.test(upwd)){
        arr3.push("must follow validation rules");
    }
    document.getElementById("upwd_errors").innerHTML=arr3.join(",");


    let gender=document.forms["regForm"]["gender"].value;
    if(gender==""){
        document.getElementById("gender_errors").innerHTML="select gender";
    }else{
        document.getElementById("gender_errors").innerHTML="";
    }




    return false;
}