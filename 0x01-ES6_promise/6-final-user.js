import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return new Promise
    .resolve()
    .all([
      signUpUser(firstName, lastName), uploadPhoto(fileName),
    ]);
}
console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
