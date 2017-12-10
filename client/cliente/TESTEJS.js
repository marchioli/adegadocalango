$("#txtAcrescimo").val(0);

$("#aumentaAcrescimo").click(function () {
    var input = $("#txtAcrescimo")[0];
    input.value = parseInt(input.value, 10) + 1;
});

$("#diminuiAcrescimo").click(function () {
    var input = $("#txtAcrescimo")[0];
    var decrescimo = parseInt(input.value, 10) - 1;
    input.value = decrescimo < 1 ? 0 : decrescimo;
});