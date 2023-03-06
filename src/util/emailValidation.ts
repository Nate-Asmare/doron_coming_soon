//source: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const emailValidation = (email: string) => {
  const result = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (result) {
    return true;
  }
  return false;
};

export default emailValidation;
