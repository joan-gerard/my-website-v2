export function validateEmail(userEmail, cb) {
  // eslint-disable-next-line
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
    return true;
  }
  // eslint-disable-next-line
  cb(true);
  return false;
}

export function getCurrentDate() {
  return new Date();
}
