const form = document.querySelector('form');
const fullName = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const assunto = document.getElementById("assunto");
const menssagem = document.getElementById("menssagem");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> 
    Telefone: ${telefone.value}<br> Menssagem: ${menssagem.value}<br>`

    Email.send({
        SecureToken : "3483c7d2-2d6c-4939-a99d-341204add09b",
        To : 'anderson.dearaujo.sousa@gmail.com',
        From : "anderson.dearaujo.sousa@gmail.com",
        Subject : assunto.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
          Swal.fire({
            title: "Sucesso !",
            text: "A menssagem foi enviada com sucesso",
            icon: "success"
          });
        }
      }
    );
}

function checkEntrada(){
  const items = document.querySelectorAll(".item");


  for(const item of items){
    if(item.value == ""){
      item.classList.add('error');
      item.parentElement.classList.add('error');
    }

    if(items[1].value != ""){
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if(item.value != ""){
        item.classList.remove('error');
        item.parentElement.classList.remove('error'); 
      }
      else{
        item.classList.add('error');
        item.parentElement.classList.add('error');
      }
    });
    
  }
}

function checkEmail(){
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-text.email");

  if(!email.value.match(emailRegex)){
    email.classList.add('error');
    email.parentElement.classList.add('error');

    if(email.value != ""){
      errorTxtEmail.innerHTML = "Digite um email válido";
    }
    else{
      errorTxtEmail.innerHTML = "Email deve ser Preenchido";
    }
  }
  else{
    email.classList.remove('error');
    email.parentElement.classList.remove('error');
  }
}

form.addEventListener("submit", (e) => { 
  e.preventDefault();
  checkEntrada();

  if(!fullName.classList.contains("error") && !email.classList.contains("error") && 
    !telefone.classList.contains("error") && !assunto.classList.contains("error") && 
    !menssagem.classList.contains("error")){
      console.log("OK");
      sendEmail()

      form.reset();
      return false;
    }

  
});