for (var i = 1; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        if ((i + j) % 2 == 0) {
            document.write("<div class='box_black'></div>");
        } else {
            document.write("<div class='box_white'></div>");
        }
    }
    document.write("<br>");
}

var a = prompt("Nhap so dau tien", "");
var b = prompt("Nhap so thu 2", "");
var c = prompt("Nhap so thu 3", "");
document.write(a);
document.write("<br>");
document.write(b);
document.write("<br>");
document.write(c);
document.write("<br>");

function maxNumber(so1, so2, so3) {
    var max = so1;
    if (max < so2) max = so2;
    if (max < so3) max = so3;
    return max;
}
document.write("<br>");
document.write('so lon nhat trong 3 so:' + ', ' + a + ', ' + b + ', ' + c);
document.write("la so" + maxNumber(a, b, c));