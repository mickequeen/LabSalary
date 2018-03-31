$(document).ready(function(){


  $('#calculate').click(function(){
    let valor = $('#form3').val();
    $('#credits, #fijo').empty();
    $('#form3').val("");
    let percentOne = valor*0.05;
    let percentTwo = valor*0.1;
    let percentThree = valor*0.15;
    //condiciones para valores de los créditos
    if ($('#200Credits').prop('checked')) {
      $('#credits').append('200');
      var cuotaFija = 105000;
      $('#fijo').append('$' + cuotaFija);
    } if ($('#100Credits').prop('checked')) {
      $('#credits').append('100')
      var cuotaFija = 84170;
      $('#fijo').append('$' + cuotaFija);
    } if ($('#0Credits').prop('checked')) {
      $('#credits').append('0')
      var cuotaFija = 63340;
      $('#fijo').append('$' + cuotaFija);
    }
    //condiciones para rango de renta
    if (valor >= 450000 && valor <= 530000 ) {
      alert(valor-cuotaFija);
    } if ( valor >= 530001 && valor <= 710000) {
      alert(valor-(cuotaFija+percentOne));
    } if ( valor >= 710001 && valor <= 1080000 ) {
      alert(valor-(cuotaFija+percentTwo));
    }
    if ( valor > 1080000 ) {
      alert( valor - (cuotaFija + percentThree))
    }
  })

});