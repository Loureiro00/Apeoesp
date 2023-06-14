/*document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
  
    // Obter os valores de usuário e senha
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   function abrirNovaJanelaLogado() {
    window.open("logado.html");
  }
    function fecharJanela(){
        window.close("login.html")
        abrirNovaJanelaLogado()
    }
  
    // Realizar a validação do login (por exemplo, verificar em um servidor)
    if (username === "admin" && password === "senha") {
      // Login bem-sucedido
      window.location.href="logado.html"
      //fecharJanela();
    } else {
      // Login inválido
      alert("Nome de usuário ou senha incorretos");
    }
  });
 */

  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    // Obter os valores dos campos de entrada
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Enviar as credenciais para a autenticação do servidor
    // Aqui você pode usar AJAX ou uma chamada fetch para enviar as credenciais para o servidor e receber uma resposta
    
    // Simulação de autenticação
    if (username === "usuario" && password === "senha") {
      // Credenciais válidas, definir uma flag de autenticação
      localStorage.setItem("autenticado", "true");
      // Redirecionar para a página restrita
      window.location.href = "logado.html";
    } else {
      // Credenciais inválidas, exibir uma mensagem de erro
      alert("Nome de usuário ou senha incorretos");
    }
  });
  