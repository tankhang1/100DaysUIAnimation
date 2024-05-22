export const useId = () => {
  return `${Math.random().toString(36)}${Date.now().toString(36)}`;
};
