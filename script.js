function queryStudent() {
    var clazz = document.getElementById('classInput').value; // 确保输入的班级格式与JSON文件中的一致
    var number = document.getElementById('numberInput').value; // 确保输入的座号格式与JSON文件中的一致
    var resultDiv = document.getElementById('result');

    // 讀取JSON資料
    fetch('students.json')
        .then(response => response.json())
        .then(data => {
            // 进行查詢，这里假设班级和座号在JSON中也是字符串
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
