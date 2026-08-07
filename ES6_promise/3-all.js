import { uploadPhotos, createUser } from './utils'

export default function handleProfileSignup() {
  return Promise.all(uploadPhotos(), createUser())
    .then((data) => {
      console.log(data[1].firstName, data[1].lastName);
    })
}
