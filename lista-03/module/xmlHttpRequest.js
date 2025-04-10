function carregarJson() {
  var ajax = new XMLHttpRequest();
  ajax.open("GET", "https://raw.githubusercontent.com/JulianaLobo/Projeto-JS/main/lista-03/dados.json", true);
  
  ajax.onreadystatechange = function() {
      if (ajax.readyState == 4) {
          if (ajax.status == 200) {
              try {
                  var data = JSON.parse(ajax.responseText);
                  console.log("Dados carregados:", data);
              } catch (e) {
                  console.error("Erro ao parsear JSON:", e);
              }
          } else {
              console.error("Erro na requisição:", ajax.status, ajax.statusText);
          }
      }
  };
  
  ajax.onerror = function() {
      console.error("Erro de rede ao tentar fazer a requisição");
  };
  
  ajax.send();
}

export default carregarJson;