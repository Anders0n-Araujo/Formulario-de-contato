const form = document.querySelector('form');
const fullName = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const assunto = document.getElementById("assunto");
const menssagem = document.getElementById("menssagem");

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "anderson.dearaujo.sousa@gmail.com",
        Password : "72C6D333E64BF9FE3FB7CB2BAB01A774AED5",
        To : 'anderson.dearaujo.sousa@gmail.com',
        From : "anderson.dearaujo.sousa@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e)=>{
  e.preventDefault();

  sendEmail()
});