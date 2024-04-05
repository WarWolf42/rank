function queryStudent() {
    var clazz = document.getElementById('classInput').value;
    var number = document.getElementById('numberInput').value;
    var resultDiv = document.getElementById('result');
    
    resultDiv.innerHTML = "查詢結果: 班級 " + clazz + ", 座號 " + number;
}
