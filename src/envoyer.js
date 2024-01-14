function clickConfirm() {
  let x;
  if (confirm('MERCI\n\n Votre message a été envoyé !\n\n\n\ Nous essaierons d’y répondre au mieux dans les plus brefs délais À bientot chez Mr.Coffee ') === true) {
    x = [];
  } else {
    x = 'FERMER';
  }
}

$(document).ready(() => {
  $('.image-link').magnificPopup({ type: 'image' });
});
