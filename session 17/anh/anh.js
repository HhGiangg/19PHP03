function changeImage(id, name, image) {
    document.getElementById('image_show').src = '/img' + image;
    document.getElementById('name_show').innerHTML = name;
    document.getElementById('ashe').style.border = 'none';
    document.getElementById('yumi').style.border = 'none';
    document.getElementById('hemiger').style.border = 'none';
    document.getElementById('neko').style.border = 'none';
    document.getElementById(id).style.border = '4px solid green';
}