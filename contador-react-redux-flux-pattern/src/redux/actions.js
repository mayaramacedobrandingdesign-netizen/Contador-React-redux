// Aqui criamos as actions.
// Action é um objeto que descreve o que aconteceu na aplicação.

export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};