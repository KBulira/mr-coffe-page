
function clickConfirm() {
  var x;
  if (confirm("MERCI\n Votre message a été envoyé !\n Nous essaierons d’y répondre au mieux dans les plus brefs délais À bientot chez Mr.Coffee ") === true) {
      x = [];
  } else {
      x = "FERMER";
  }
  document.getElementById("click").innerHTML = x;
}
