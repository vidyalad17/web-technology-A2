function validation()
{
  var valid1=true;
  var username=document.getElementById("n1").value;
  var useremail=document.getElementById("n2").value;
  var userphone=document.getElementById("n3").value;
  var userapart=document.getElementById("n4").value;

 if(username.length<3 || username.length>30)
  {
  alert("enter valid name");
  valid1= false;
  }

  else if(useremail.indexOf("@") == -1 || useremail.length<10)
  {
    alert("Enter valid email");
    valid1= false;
  }

  else if(isNaN(userphone) || userphone.length!=2)
  {
    alert("enter valid phone number");
    valid1= false;
  }
  else if(userapart=="---Choose Option")
  {
    alert("Select required apartment type");
    valid1= false;
  }
  return valid1;
};


function displayDetails()
{

  var table=document.getElementById("displaytable");
  if(validation()){

    alert("Form submitted successfully");
    var newrow=table.insertRow(table.length),


   cell1=newrow.insertCell(0);
   cell2=newrow.insertCell(1);
   cell3=newrow.insertCell(2);
   cell4=newrow.insertCell(3);

  var name1=document.getElementById("n1").value;
  var email1=document.getElementById("n2").value;
  var phone1=document.getElementById("n3").value;
  var apart1=document.getElementById("n4").value;

  cell1.innerHTML = name1;
  cell2.innerHTML = email1;
  cell3.innerHTML = phone1;
  cell4.innerHTML = apart1;

  document.getElementById("myform").reset();
      selectedRowToInput();                                       
      document.getElementById("myform").reset();
  }
};
