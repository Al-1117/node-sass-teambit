$(document).ready(function(){

  // Evento cliccando sul bottone del menu
  $(document).on('click', '.menu_icon',
    function(){
      // Mostro il menu e cambio l'icona
      $('.burger_dropdown').removeClass('hidden');
      $('.burger_dropdown').addClass('active');
      $(this).addClass('hidden');

      $('.close_icon').removeClass('hidden');
      $('.close_icon').addClass('active');
    }

  )
    // Evento cliccando sul bottone di chiusura
  $(document).on('click', '.close_icon',
    function(){
      // Chiudo l'hambirger menu e cambio l'icona
      $('.burger_dropdown').removeClass('active');
      $('.burger_dropdown').addClass('hidden');
      $(this).addClass('hidden');
      $('.menu_icon').removeClass('hidden');
      $('.menu_icon').addClass('active');
    }

  )


















});
