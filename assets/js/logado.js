window.addEventListener("DOMContentLoaded", function() {
    // Verificar se o usuário está autenticado
    var autenticado = localStorage.getItem("autenticado");
    
    if (autenticado !== "true") {
      // Usuário não autenticado, redirecionar para a página de login
      window.location.href = "login.html";
    }
  });
  document.getElementById("logoutButton").addEventListener("click", function() {
    // Limpar as informações de autenticação
    localStorage.removeItem("autenticado");
    
    // Redirecionar para a página de login
    window.location.href = "login.html";
  });
  