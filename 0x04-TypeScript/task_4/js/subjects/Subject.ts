namespace Subjects {
    export interface Subject {
        teacher: Teacher;

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
  }