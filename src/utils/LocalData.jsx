export default function storageRead() {
  return JSON.parse(localStorage.getItem('usuario'));
}

export function storageAdd(data) {
  localStorage.setItem('usuario', JSON.stringify(data.credential));
}

export function storageRemove() {
  localStorage.removeItem('usuario');
}

export const storageIsValid = () => {
  const localData = localStorage.getItem('usuario');
  if (localData !== null) {
    return Object.keys(JSON.parse(localData)).length > 0;
  }
};
