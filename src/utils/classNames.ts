export const classNames = (...classes: (string | boolean)[]): string => classes.filter(Boolean).join(' ');
