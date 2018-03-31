$(document).ready(function(){


  $('#calculate').click(function(){

    if ($('#form3').val() != "") {
      let valor = $('#form3').val();
      $('#credits, #fijo, #percent, #balance, #total, #percentage, #noValid, #incomplete').empty();
      $('#form3').val("");
      let percentOne = parseInt(valor*0.05);
      let percentTwo = parseInt(valor*0.1);
      let percentThree = parseInt(valor*0.15);
      $('#total').append(valor);
      //condiciones para valores de los créditos
      if ($('#200Credits').prop('checked')) {
        $('#credits').append('200');
        var cuotaFija = 105000;
        $('#fijo').append('$' + cuotaFija);
      } if ($('#100Credits').prop('checked')) {
        $('#credits').append('100');
        var cuotaFija = 84170;
        $('#fijo').append('$' + cuotaFija);
      } if ($('#0Credits').prop('checked')) {
        $('#credits').append('0')
        var cuotaFija = 63340;
        $('#fijo').append('$' + cuotaFija);
      }
      //condiciones para rango de renta
      if (valor < 450000 ) {
        $('#credits').empty();
        $('#fijo').empty();
        $('#total').empty();
        $("#balance").empty();
        $('#percentage').empty();
        $('#percent').empty();
        $('.modal-body').append(`<div class="text-center noValid" id="noValid"><span class="badge red">Sueldo NO válido según tabla empleabilidad</span><br><span class="badge red"> < a $450.000 </span></div>`)
      }
      if (valor >= 450000 && valor <= 530000 ) {
        $("#balance").append('$' + (valor-cuotaFija));
        $('#percentage').append('0%');
        $('#percent').append('Tramo sin % de Dcto')
      } if ( valor >= 530001 && valor <= 710000) {
        $("#balance").append('$' + (valor-(cuotaFija+percentOne)));
        $('#percent').append('$' + percentOne);
        $('#percentage').append('5%');
      } if ( valor >= 710001 && valor <= 1080000 ) {
        $("#balance").append('$' + (valor-(cuotaFija+percentTwo)));
        $('#percentage').append('10%');
        $('#percent').append('$' + percentTwo)
      }
      if ( valor > 1080000 ) {
        $("#balance").append('$' + (valor - (cuotaFija + percentThree)));
        $('#percentage').append('15%');
        $('#percent').append('$' + percentThree)
      }
    }
    else {
      $('.incomplete').empty();
      $('.noValid').empty();
      $('#credits').empty();
      $('#fijo').empty();
      $('#total').empty();
      $("#balance").empty();
      $('#percentage').empty();
      $('#percent').empty();  
    $('.modal-body').append(`<div class="text-center incomplete" id="incomplete"><span class="badge red">Favor complete todos los campos</span></div>`)
    }
  })

});