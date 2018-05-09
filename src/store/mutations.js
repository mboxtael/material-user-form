export const updateUser = (state, payload) => {
  state[payload.path] = payload.value;
};

export const addIdentification = state => {
  state.identifications.push({ type: 'national-id', number: '' });
};

export const updateIdentification = (state, payload) => {
  state.identifications[payload.index][payload.path] = payload.value;
};

export const addPhone = state => {
  state.phones.push({ type: 'personal', countryCode: '+58', phoneNumber: '' });
};

export const updatePhone = (state, payload) => {
  state.phones[payload.index][payload.path] = payload.value;
};
