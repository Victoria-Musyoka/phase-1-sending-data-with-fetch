// Add your code here
function submitData (userName, userEmail) {
    const user ={
        "name": userName,
        "email": userEmail
    }
    const userdata = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(user),
      };

    return fetch("http://localhost:3000/users", userdata)
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        console.log(object);
        document.body.innerHTML = object.id
      })
      .catch(function (error) {
        console.log(error.message);
        document.body.innerHTML = error.message
      })
}