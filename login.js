// add clickable function by addEventListener
document.getElementById('submit-btn').addEventListener('click', function (){

    //get email
  const userEmail = document.getElementById('user-email').value;
  // console.log(userEmail);
  
    //get passWord
  const userPass = document.getElementById('user-pass').value;
  
  // console.log(userPass);
  
  // set email password and check
  if ( (userEmail == 'hasina@gmail.com') && (userPass == 'hasina') ){
  
    window.location.href = 'bank.html';
  
  } else {
  
    alert('Invalid User!');
  }
  
  });