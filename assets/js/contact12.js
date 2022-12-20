
// form submission

var nameError =document.getElementById('name-error')
var emailError =document.getElementById('email-error')
var subjectError =document.getElementById('subjt-error')
var submitError =document.getElementById('submit-error')

function validateName(){
  var name =document.getElementById('name').value;

  if (name.length==0||name==" "||!isNaN(name[0])){
    nameError.innerHTML="name is required";
    return false;
  }
  if (name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML='enter full name';
    return false;
  }
  nameError.innerHTML = '<b>VALID</b>';
  return true;
}
function validateEmail(){
  var email = document.getElementById('email').value;

  if(email.length==0){
     emailError.innerHTML='Email is required'
     return false;
  }
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-za-z]*[\.][a-z]{2,4}$/)){
  emailError.innerHTML ='Email is Invalid'
  return false;
}
emailError.innerHTML = '<b>Email is VALID</b>'
return true;

}

function validateSubject(){
  var subject = document.getElementById('subject').value;

  if(subject.length==0||subject==" "){
    subjectError.innerHTML = 'SUbject is required'
    return false;
  }
  subjectError.innerHTML='<b>VALID</b>'
  return true;
}

function validateForm(){
  if(!validateName() || !validateEmail() || !validateSubject()){
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please Fix Error';
    setTimeout(function(){submitError.style.display = 'none';},3000);
    return false;

  }
  return true;
}
