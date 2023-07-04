// eslint-disable-next-line consistent-return
export default function getListStudentIds() {
  // eslint-disable-next-line no-undef
  if (!Array.isArray(arr)) {
    return [];
  }
  // eslint-disable-next-line no-undef
  const ids = arr.map((student) => student.id);
  return ids;
}
