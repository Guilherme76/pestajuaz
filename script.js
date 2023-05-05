// selecione o botão e o conteúdo escondido
var botaoLeiaMais = document.getElementById('botao-leia-mais');
var conteudoEscondido = document.getElementById('conteudo-escondido');

// esconda o conteúdo inicialmente
conteudoEscondido.style.display = 'none';

// adicione um ouvinte de eventos para o botão
botaoLeiaMais.addEventListener('click', function() {
  // se o conteúdo estiver escondido, mostre-o
  if (conteudoEscondido.style.display === 'none') {
    conteudoEscondido.style.display = 'block';
    botaoLeiaMais.innerHTML = 'Leia menos';
  // caso contrário, esconda-o
  } else {
    conteudoEscondido.style.display = 'none';
    botaoLeiaMais.innerHTML = 'Leia mais';
  }
});


var botaoLeiaMais1 = document.getElementById('botao-leia-mais1');
var conteudoEscondido2 = document.getElementById('conteudo-escondido2');

conteudoEscondido2.style.display = 'none';

// adicione um ouvinte de eventos para o botão
botaoLeiaMais1.addEventListener('click', function() {
  // se o conteúdo estiver escondido, mostre-o
  if (conteudoEscondido2.style.display === 'none') {
    conteudoEscondido2.style.display = 'block';
    botaoLeiaMais1.innerHTML = 'Leia menos';
  // caso contrário, esconda-o
  } else {
    conteudoEscondido2.style.display = 'none';
    botaoLeiaMais1.innerHTML = 'Leia mais';
  }
});

var botaoLeiaMais2 = document.getElementById('botao-leia-mais2');
var conteudoEscondido3 = document.getElementById('conteudo-escondido3');

conteudoEscondido3.style.display = 'none';

// adicione um ouvinte de eventos para o botão
botaoLeiaMais2.addEventListener('click', function() {
  // se o conteúdo estiver escondido, mostre-o
  if (conteudoEscondido3.style.display === 'none') {
    conteudoEscondido3.style.display = 'block';
    botaoLeiaMais2.innerHTML = 'Leia menos';
  // caso contrário, esconda-o
  } else {
    conteudoEscondido3.style.display = 'none';
    botaoLeiaMais2.innerHTML = 'Leia mais';
  }
});

// Selecione o formulário e adicione um evento de envio
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Selecione os campos do formulário
  const nameInput = document.querySelector('#inputName');
  const emailInput = document.querySelector('#inputEmail');
  const phoneInput = document.querySelector('#inputPhone');
  const messageInput = document.querySelector('#inputMessage');

  // Construa a mensagem a ser enviada
  const message = `
    Nome: ${nameInput.value}
    Email: ${emailInput.value}
    Telefone: ${phoneInput.value}
    Mensagem: ${messageInput.value}
  `;

  // Envie a mensagem usando o serviço de e-mail da Google
  const email = 'gilherme.vasconvelos@gmail.com';
  const subject = 'Mensagem do meu site';
  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = url;

  // Exiba uma mensagem de confirmação para o usuário
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = 'Mensagem enviada com sucesso!';
  document.body.appendChild(notification);

  // Remova a mensagem de confirmação após alguns segundos
  setTimeout(function() {
    notification.remove();
  }, 5000);
});
