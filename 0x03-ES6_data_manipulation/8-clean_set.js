export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string')
    // eslint-disable-next-line nonblock-statement-body-position, curly
    return '';

  let arr = '';

  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      arr += `${element.slice(startString.length)}-`;
    }
  });

  return arr.slice(0, arr.length - 1);
}
