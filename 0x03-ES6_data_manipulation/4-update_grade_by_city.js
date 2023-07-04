export default function updateStudentGradeByCity(arr, newGrades, city) {
  // filter specified location, if location matches, look for new grade in the 'newGrade' array
  return arr
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find(
        (grade) => grade.studentId === student.id
      );
      return { ...student, grade: newGrade ? newGrade.grade : 'N/A' };
    });
}
