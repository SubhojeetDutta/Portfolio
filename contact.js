function emailSend(){
    var name=document.getElementById('name').value;
    var gmail=document.getElementById('gmail').value;
    var phone=document.getElementById('number').value;
    var messagebody="Name " + name +
    "<br/> phone " + number +
    "<br/> gmail " +gmail;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "duttasubhojeet15420@gmail.com",
        Password : "03AACF0619100C4A1645F667922932A4B64D",
        To : 'subhojeet.dutta.21@aot.edu.in',
        From : "duttasubhojeet15420@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}