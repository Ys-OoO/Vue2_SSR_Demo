export function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        count: 10,
      });
    }, 1000);
  });
}
