export const updateUser = (state, payload) => {
  state[payload.path] = payload.value;
};