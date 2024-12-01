function emailsend(){
    var userName=document.getElementById('name').value;
    var phone=document.getElementById('phone').value;
    var email=document.getElementById('email').value;

    var messageBody = "name" + unserName
    "<br/> phone" + phone +
    "<br/> email" + email;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "seemab857@gmail.com",
        Password : "C81FF96D93F3A628CF012356BEF249113CE7",
        To : 'njelezeckfred@icloud.com',
        From : "fnjelezeck@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => alert(message)
    );
}