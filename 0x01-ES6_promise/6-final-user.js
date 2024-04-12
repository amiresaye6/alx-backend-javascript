import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserP = signUpUser(firstName, lastName);
  const uploadPhotoP = uploadPhoto(fileName);

  return Promise
    .allSettled([signUpUserP, uploadPhotoP])
    .then((values) => {
      const result = [];
      values.forEach((element) => {
        if (element.status === 'fulfilled') {
          result.push({ status: element.status, value: element.value });
        } else {
          result.push({ status: element.status, value: `${element.reason}` });
        }
      });
      return result;
    });
}
console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));
