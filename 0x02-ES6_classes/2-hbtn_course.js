export default class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name !== 'string'
      && typeof length !== 'number'
      && !Array.isArray(students)
    ) {
      throw new Error('Error! Invalid input type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  // Setters
  set name(name) {
    if (typeof name !== 'string') {
      throw new Error('Error! Invalid input type');
    }
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new Error('Error! Invalid input type');
    }
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw new Error('Error! Invalid input type');
    }
    this._students = students;
  }
}
