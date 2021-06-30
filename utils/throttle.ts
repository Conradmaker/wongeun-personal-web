const throttle = (callback: () => void, ms: number): (() => void) => {
  let throttled = false;
  return () => {
    if (!throttled) {
      throttled = true;
      setTimeout(() => {
        callback();
        throttled = false;
      }, ms);
    }
  };
};

export default throttle;
