export const buildPerson = (name: string, surname: string): any => {
  
  if (!name || !surname) {
    throw new Error("Name and surname should not be empty.")
  }
  
  // throw new Error('Oh noł!');
  
    return {
      name,
      surname,
    };
}
