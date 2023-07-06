import { Subjects } from './Subjects';

export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cpp = new Subjects.Cpp();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Charly',
  lastName: 'Doe',
  experienceTeachingC: 20,
};

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
