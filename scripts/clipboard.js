const email = "adao.nrc@edu.unifil.br"

function OnClick() {
  navigator.clipboard.writeText(email);
  
  var tooltip = document.getElementById("Clipboard");
  tooltip.innerHTML = "Copiado";
}

function OnExitContainer() {
  var tooltip = document.getElementById("Clipboard");
  setTimeout(()=>{
    tooltip.innerHTML = "Copiar?";
  }, 500)
}