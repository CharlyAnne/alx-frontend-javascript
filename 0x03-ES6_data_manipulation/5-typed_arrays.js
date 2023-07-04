/* eslint-disable nonblock-statement-body-position */
/* eslint-disable curly */
/* eslint-disable operator-linebreak */
export default function createInt8TypedArray(length, position, value) {
  if (
    typeof length === 'number' &&
    typeof position === 'number' &&
    typeof value === 'number'
  )
    if (position >= length) {
      // throw err is position is out of range
      throw new Error('Position outside range');
    }
  // create new ArrayBuffer with specified length && new DataView will be generated from it.
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  // set Int8 value at specified positionin the DataView to the given value
  view.setInt8(position, value);

  return view; // DataView returned as result.
}
