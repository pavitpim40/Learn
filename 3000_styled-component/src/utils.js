export const colors = {
  primary: '#654cff',
};

export const setupBorder = ({ width = 10, type = 'solid', color = 'red' }) => {
  return `${width}px ${type} ${color}`;
};
