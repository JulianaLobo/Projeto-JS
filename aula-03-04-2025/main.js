import usuarios from './users';
import showUsers from './manageUsers';

window.addEventListener("DOMContentLoaded", () => {
    showUsers(usuarios);
})

const showUsers = (usuarios) => {

}

const showUsersGender = (usuarios, gender) => {
    usuarios
        .filter(user => user.sexo == gender)
        .forEach(user => console.log(user.nome));
}

export default showUsers;