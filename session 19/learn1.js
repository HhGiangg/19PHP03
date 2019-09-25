$('.change_content').click(function() {
    $('#demo').html('demo change_content');
});

$('.change_attribute').click(function() {
    $('.demo2').html('src', 'img/4.jpg');
});

$('#register').click(function() {
    var name = $('#name').val();
    alert(name)
});
$('#cong').click(function() {
    var one = $('#one').val();
    var two = $('#two').val();
    var a = parseInt(one);
    var b = parseInt(two);
    $('#result').html('ket qua : ' + ((a + b)));
});
$('#tru').click(function() {
    var one = $('#one').val();
    var two = $('#two').val();
    var a = parseInt(one);
    var b = parseInt(two);
    $('#result').html('ket qua : ' + ((a - b)));
});
$('#nhan').click(function() {
    var one = $('#one').val();
    var two = $('#two').val();
    var a = parseInt(one);
    var b = parseInt(two);
    $('#result').html('ket qua : ' + ((a * b)));
});
$('#chia').click(function() {
    var one = $('#one').val();
    var two = $('#two').val();
    var a = parseInt(one);
    var b = parseInt(two);
    $('#result').html('ket qua : ' + ((a / b)));
});