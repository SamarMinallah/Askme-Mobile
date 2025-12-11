
  function contact(){
    let name ,mail, num,massage;
    
    name=document.getElementById('name').value;
    mail=document.getElementById('mail').value;
    num=document.getElementById('num').value;
    massage=document.getElementById('massage').value;

    if(name==""){
        document.getElementById('nameerror').innerText="This feild is required !"
    }
    else{
        localStorage.setItem('name',name)
    }
       if(num==""){
        document.getElementById('numerror').innerText="This feild is required !"
    }
    else{
        localStorage.setItem('num',num)
    }
  
    if(mail==""){
        document.getElementById('mailerror').innerText="This feild is required !"
    }
      else{
        localStorage.setItem('mail',mail)
    }
     if(massage==""){
        document.getElementById('massageerror').innerText="This feild is required !"
    }
    else{
        localStorage.setItem('massage',massage)
    }

if(localStorage.getItem('name') && localStorage.getItem('mail') && localStorage.getItem('num') && localStorage.getItem('massage')){
   Swal.fire({
  title: "Thanks for Contact us!",
  text: "Your Form is Subbmitted!",
  icon: "success"
});
}
    
    

    }