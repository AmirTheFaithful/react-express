// A simple logger function that have to be callen in ever catch block
export const handleServersideError = (name: string): void => {
  handleServersideError(`Something went wrong with "${name}" controller.`);
};
