export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') throw TypeError('Name must be a string');
    if (!Number.isInteger(length)) throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array of strings');

    this._name = name; // eslint-disable-line no-underscore-dangle
    this._length = length;// eslint-disable-line no-underscore-dangle
    this._students = students;// eslint-disable-line no-underscore-dangle
  }

  get name() {
    return (this._name);// eslint-disable-line no-underscore-dangle
  }

  set name(newName) {
    if (typeof (newName) !== 'string') throw new TypeError('name must be a string');
    this._name = newName;// eslint-disable-line no-underscore-dangle
  }

  get length() {
    return (this._length);// eslint-disable-line no-underscore-dangle
  }

  set length(newLength) {
    if (Number.isInteger(newLength)) throw new TypeError('length must be a intger');
    this._length = newLength;// eslint-disable-line no-underscore-dangle
  }

  get students() {
    return (this._students);// eslint-disable-line no-underscore-dangle
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) throw new TypeError('students must be an array');
    this._students = newStudents;// eslint-disable-line no-underscore-dangle
  }
}
