# Commands

query{
  getAllUsers{
    id
    name
    username
  }
}

query{
  getUserById(id:16){
    id
    name
    username
  }
}

mutation{
    createUser(name:"Test",username:"Nmush",password:"11sdfsdf1") {
        name
        username
        password
    }
}

mutation {
  deleteUser(id:23){
    id
  }
}

mutation {
  updatePassword(username:"qwqwqw",oldPassword:"1111",newPassword:"111111"){
    name
  }
}