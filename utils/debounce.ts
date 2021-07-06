const debounce = <T>(callback: (e: T) => void, ms: number): ((...arg: T[]) => void) => {
  let timeout: NodeJS.Timeout | number | null = null;
  return (...arg: T[]) => {
    clearTimeout(timeout as NodeJS.Timeout);
    timeout = setTimeout(callback.bind(null, ...arg), ms);
  };
};

export default debounce;
