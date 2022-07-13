export const loadState = (keyName: string = 'zippia_global_state') => {
  try {
    const state = localStorage.getItem(keyName);
    if (state === null) return undefined;
    return JSON.parse(state);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any, keyName: string = 'zippia_global_state') => {
  try {
    const stateJson = JSON.stringify(state);
    localStorage.setItem(keyName, stateJson);
  } catch (err) {
    //
  }
};

export const deleteState = (keyName: string = 'zippia_global_state') => {
  try {
    localStorage.removeItem(keyName);
  } catch (err) {
    console.log('Ocorreu um erro ao limpar o estado');
    console.error(err);
  }
};
