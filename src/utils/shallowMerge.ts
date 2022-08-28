const shallowMerge = (...args: (object | undefined)[]) => Object.assign({}, ...args);

export default shallowMerge;
