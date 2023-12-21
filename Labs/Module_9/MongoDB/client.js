const axios = require("axios");

// Data you want to send in the POST request
const postData = {
  firstName: "Asuka",
  lastName: "Matoba",
  emailId: "Asuka.Matoba@outlook.com",
  password: "123456",
};

// axios
//   .post("http://localhost:8080/api/users/create", postData)
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

axios
  .delete("http://localhost:8080/api/users/65818d59c8a417405991f165")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

console.log(111);

console.log(211);
