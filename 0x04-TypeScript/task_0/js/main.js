var student1 = {
    firstName: 'Charly',
    lastName: 'Imoisli',
    age: 25,
    location: 'Canada',
};
var student2 = {
    firstName: 'Dami',
    lastName: 'Johnson',
    age: 27,
    location: 'Norway',
};
var studentsList = [student1, student2];
function renderTable() {
    var table = document.createElement('table');
    studentsList.forEach(function (student) {
        var tableRow = table.insertRow();
        var firstNameHeader = tableRow.insertCell();
        firstNameHeader.innerHTML = student.firstName;
        var locationHeader = tableRow.insertCell();
        locationHeader.innerHTML = student.location;
    });
    document.body.appendChild(table);
}
renderTable();
