export function curry(func) {
  return (function handleCurry(func, ...args) {
    if (func.length === 0)
      throw new Error('Cannot curry function with no or variable arguments.');

    if (args.length >= func.length) return func(...args);

    return function (...moreArgs) {
      return handleCurry(func, ...args, ...moreArgs);
    };
  })(func);
}
