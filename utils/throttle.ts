const throttle = <T>(callback: (e: T) => void, ms: number): (() => void) => {
  let throttled = false;
  return (...arg: T[]) => {
    if (!throttled) {
      throttled = true;
      setTimeout(callback.bind(null, ...arg), ms);
      setTimeout(() => {
        throttled = false;
      }, ms);
    }
  };
};

export default throttle;
