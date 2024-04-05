function queryStudent() {
    var clazz = document.getElementById('classSelect').value;
    var number = document.getElementById('numberSelect').value;
    var resultDiv = document.getElementById('result');

    fetch('students.json')
        .then(response => response.json())
        .then(data => {
            const student = data.find(student => student.class === clazz && student.studentNumber === number);
            if (student) {
                resultDiv.innerHTML = `查詢結果: 班級 ${student.class}, 座號 ${student.studentNumber}, 總分 ${student.totalScore}, 校排 ${student.schoolRank}`;
            } else {
                resultDiv.innerHTML = "對不起><沒有找到資料，或許檢查一下你輸入的資料是否正確";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = "查詢時發生錯誤，或許你可以找李得地解決這問題";
        });
}
