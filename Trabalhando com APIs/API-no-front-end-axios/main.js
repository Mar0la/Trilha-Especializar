const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
  .then(response => {
    apiResult.textContent = JSON.stringify(response.data)
  })
  .catch(error => console.error(error))
}

function addUsers(newUser) {
  axios.post(url,newUser)
  .then(reponse => {console.log(reponse)})
  .catch(error => console.error(error))
}

const newUser = {
  "name": "Arnaldo",
  "avatar": "https://i.picsum.photos/id/404/200/300.jpg?hmac=1i6ra6DJN9kJ9AQVfSf3VD1w08FkegBgXuz9lNDk1OM",
  "city": "RIo"
}

function getUser(id) {
  axios.get(`http://localhost:5500/api/${id}`)
  .then(reponse => {
    userId.textContent = reponse.data.id
    userName.textContent = reponse.data.name
    userAvatar.src = reponse.data.avatar
    userCity.textContent = reponse.data.city
  })
  .catch(error => console.error(error))
}


function attUser(id, atUser) {
  axios.put(`http://localhost:5500/api/${id}`, atUser)
  .then(response => {
    console.log(response)
  })
  .catch(error => console.error(error))
}

const atUser = {
  name: "marola",
  avatar: "https://avatars.githubusercontent.com/u/79364347?s=40&v=4",
  city: "Magé"
}

function deleteUser(id) {
  axios.delete(`http://localhost:5500/api/${id}`)
  .then(response => console.log(response))
  .catch(error => console.error(error()))
}


getUsers()
getUser(2)
attUser(2, atUser)
deleteUser(3)
// addUsers(newUser)