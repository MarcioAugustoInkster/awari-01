export default function storageAdd(data) {
  localStorage.setItem('user_creds', JSON.stringify({
    user_name: data.username?.length > 0 ? data.username : data.email,
    logged_as: data.access,
    is_logged: data.logged,
    user_token: data.token
  }));
}

export function storageRead() {
  return JSON.parse(localStorage.getItem('user_creds'));
}

export function storageRemove() {
  localStorage.removeItem('user_creds');
}

export const storageIsValid = () => {
  const items = JSON.parse(localStorage.getItem('user_creds'));
  if (items) {
    return true;
  }
  return false;
};
