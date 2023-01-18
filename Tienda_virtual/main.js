$(document).ready(function() {
    $('.p1').click(function() {
        var name = $('.p1').text();
        console.log(name);
        var parametros = {
            "nombre": name,
        };
        $.ajax({
            data: parametros,
            type: 'POST',
            url: 'productos.php',
            success: function(data) {
                $('.c1').empty();
                $('.c1').append(data);
            }
        });
    });
    $('.p2').click(function() {
        var name = $('.p2').text();
        console.log(name);
        var parametros = {
            "nombre": name
        };
        $.ajax({
            data: parametros,
            type: 'POST',
            url: 'productos.php',
            success: function(data) {
                $('.c1').empty();
                $('.c1').append(data);
            }
        });
    });
    $('.p3').click(function() {
        var name = $('.p3').text();
        console.log(name);
        var parametros = {
            "nombre": name
        };
        $.ajax({
            data: parametros,
            type: 'POST',
            url: 'productos.php',
            success: function(data) {
                $('.c1').empty();
                $('.c1').append(data);
            }
        });
    });
});