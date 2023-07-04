// eslint-disable-next-line consistent-return
export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((student) => student.id);
}
