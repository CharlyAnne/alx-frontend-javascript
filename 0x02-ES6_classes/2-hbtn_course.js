export default class HolbertonCourse {
  constructor(name, length, students) {
    if (
      typeof name != 'string' &&
      typeof length != 'number' &&
      !Array.isArray(students)
    ) {
      throw new Error('Error! Invalid input type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
  //Getters
  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }

  //Setters
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Error! Invalid input type');
    }
    this._name = value;
  }
  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Error! Invalid input type');
    }
    this._length = value;
  }
  set students(value) {
    if (!Array.isArray(value)) {
      throw new Error('Error! Invalid input type');
    }
    this._students = value;
  }
}
