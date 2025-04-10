function carregarJson(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("json").innerHTML = this.responseText;
      }
      xhttp.open("GET", "ajax_info.txt");
      xhttp.send();

}