function add(n) {
    actual = document.getElementById('pantalla').value
    nuevo = actual + n
    document.getElementById('pantalla').value = nuevo;
}

function suma(){
  op = '+'
  v_anterior = document.getElementById('pantalla').value;
  document.getElementById('pantalla').value = '';
}
function resta(){
    op = '-'
    v_anterior = document.getElementById('pantalla').value;
    document.getElementById('pantalla').value = '';
  }
function multi(){
    op = '*'
    v_anterior = document.getElementById('pantalla').value;
    document.getElementById('pantalla').value = '';
}
function divi(){
    op = '/'
    v_anterior = document.getElementById('pantalla').value;
    document.getElementById('pantalla').value = '';
}
function c(){
    op = 'c'
    document.getElementById('pantalla').value = '';
}


function result(){
if (op === "+"){
    document.getElementById('pantalla').value = parseInt(document.getElementById('pantalla').value) + parseInt(v_anterior);
}

else if (op === "*"){
    document.getElementById('pantalla').value = parseInt(document.getElementById('pantalla').value) * parseInt(v_anterior);
}

else if (op === "-"){
    document.getElementById('pantalla').value = parseInt(v_anterior) - parseInt(document.getElementById('pantalla').value);
}

else if (op === "/"){
    document.getElementById('pantalla').value = parseInt(v_anterior) / parseInt(document.getElementById('pantalla').value);
}

else {
    document.getElementById('pantalla').value = '';
}
}


var n = '';
var v_anterior = undefined;