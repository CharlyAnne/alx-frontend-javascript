interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Charly',
  lastName: 'Imoisli',
  age: 25,
  location: 'Canada',
};
const student2: Student = {
  firstName: 'Dami',
  lastName: 'Johnson',
  age: 27,
  location: 'Norway',
};
const studentsList: Student[] = [student1, student2];

function renderTable() {
  const table = document.createElement('table');
  studentsList.forEach((student) => {
    const tableRow = table.insertRow();
    const firstNameHeader = tableRow.insertCell();
    firstNameHeader.innerHTML = student.firstName;
    const locationHeader = tableRow.insertCell();
    locationHeader.innerHTML = student.location;
  });
  document.body.appendChild(table);
}

renderTable();
