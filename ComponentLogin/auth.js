throwErr = (elemId,errMessage,flag)=>{
  if(flag==true)
  {

      document.getElementById(elemId).innerHTML=errMessage;
      document.getElementById(elemId).display="block";
  }
  else
{    document.getElementById(elemId).innerHTML=errMessage;
  document.getElementById(elemId).style.display="none";}
}
redBox = (id,flag) =>{
if(flag==true)
  document.getElementById(id).style.border='1px solid red';
  else
  document.getElementById(id).style.border='1px solid #ccc';
  
}
try{
  validateForm=()=>{
      let pass = document.validate.pass.value;
      let mail =document.validate.mail.value;


      let passErr = mailErr =true;
      //name validation
      if(pass == ""){
          throwErr("nameErr","Please Enter your name",passErr);
          redBox("nameBox",passErr);
      }
      else{
          let check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
          if(check.test(pass) === true){
              passErr = false;
              redBox("nameBox",passErr);
              throwErr("nameErr","Please Enter your name",passErr);
          }
          else{
              throwErr("nameErr", "Invalid Name",passErr);
              redBox("nameBox",passErr);
          }
      }
      //mail validation
      if(mail == ""){
          throwErr("mailErr","Please Enter the Mail",mailErr);
          redBox("mailBox",mailErr);
      }
      else{
          let check = /^\S+@\S+\.\S+$/;
          if(check.test(mail)=== true)
          {
              mailErr = false;
              redBox("mailBox",mailErr);
              throwErr("mailErr","",nameErr);
          }
          else{
              throwErr("mailErr","Invalid Mail Address",mailErr);
              redBox("mailBox",mailErr);
          }
      }
      
      if(passErr||mailErr == true)
      {
          return false;
      }
      else{
        document.getElementById('email').innerHTML=mail;                         
        document.getElementById('name').innerHTML=pass;
      }
  
  }

}
catch(e){
alert(e.message);
}