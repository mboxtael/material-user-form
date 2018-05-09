export const isEmail = v =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);

export const isPhoneNumber = v => /^(412|424|414|416|426).\d+$/.test(v);
