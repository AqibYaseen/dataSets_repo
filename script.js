let fname = document.getElementById("fname");
let lname =document.getElementById("lname");
let email =document.getElementById("email");


// document.getElementById("form").addEventListener("click",function(){
    // 
//   
// });

document.getElementById("btn").addEventListener('click',function(e){
    e.preventDefault();
    if(fname.value != 0 && lname.value != 0 && email.value != 0){
    document.getElementById("div1").innerText=`${fname.dataset.fname} : ${fname.value}\n ${lname.dataset.lname} : ${lname.value} \n ${email.dataset.email} : ${email.value}`;
    }
    else{
        document.getElementById("error").innerHTML="All Fields are Required!!";
        document.getElementsByTagName("input").style.borderColor="red";
        

    }
});
