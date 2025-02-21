// Função para mudar a cor de fundo para verde
onEvent("btnVerde", "click", function() {
  setProperty("screen1", "background-color", "green");
});

// Função para voltar à cor original (branco)
onEvent("btnOriginal", "click", function() {
  setProperty("screen1", "background-color", "white");
});

// Função para exibir uma mensagem de boas-vindas
onEvent("btnMensagem", "click", function() {
  setText("labelMensagem", "Olá, seja bem-vindo ");
});
