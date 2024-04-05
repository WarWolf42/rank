function queryStudent() {
    var clazz = document.getElementById('classInput').value;
    var number = document.getElementById('numberInput').value;
    var resultDiv = document.getElementById('result');

    // 读取JSON数据
    fetch('students.json')
        .then(response => response.json())
        .then(data => {
            // 进行查找
            const student = data.find(student => student.class === clazz && student.studentNumber === number);
            if (student) {
                resultDiv.innerHTML = `查詢結果: 班級 ${student.class}, 座號 ${student.studentNumber}, 總分 ${student.totalScore}, 校排 ${student.schoolRank}`;
            } else {
                resultDiv.innerHTML = "沒有找到匹配的學生資料。";
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = "查詢時發生錯誤。";
        });
}

