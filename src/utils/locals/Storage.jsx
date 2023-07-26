export function storageAdd(data) {
  localStorage.setItem('user_creds', JSON.stringify(data.credential));
}

export default function storageRead() {
  return JSON.parse(localStorage.getItem('user_creds'));
}

export function storageRemove() {
  localStorage.removeItem('user_creds');
}

export const storageIsValid = () => {
  const localData = localStorage.getItem('user_creds');
  if (localData !== null) {
    return Object.keys(JSON.parse(localData)).length > 0;
  }
};
