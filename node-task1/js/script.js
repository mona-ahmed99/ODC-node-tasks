let userName = document.getElementById('userName');
let userAge = document.getElementById('userAge');
let userPhone = document.getElementById('userPhone');
let userActive = document.getElementById('userActive');
let userInActive = document.getElementById('userInActive');
let addBtn = document.getElementById('addBtn');
let saveBtn = document.querySelector('.saveBtn')
let usersContainer;


///////////////// Check Local Storage has data////////////////
if (localStorage.getItem("users") == null) {
    usersContainer = [];
}
else {
    usersContainer = JSON.parse(localStorage.getItem("users"));
    displayUsers();
}



// /////////////////Add Users/////////////////////////////////
function addUsers() {
    if (userActive.checked) {
        userStatus = userActive.value
    }
    else if (userInActive.checked) {
        userStatus = userInActive.value
    }
    else {
        userStatus = '';
    }
    let user = {
        id: new Date(),
        name: userName.value,
        age: userAge.value,
        phone: userPhone.value,
        status: userStatus
    }

    usersContainer.push(user);
    localStorage.setItem('users', JSON.stringify(usersContainer));
    displayUsers();

}
addBtn.addEventListener('click', addUsers);
//////////////////////////////////////////////////////////////


// //////////////////////Show Users////////////////////////////
function displayUsers() {
    let container = ``;
    for (let i = 0; i < usersContainer.length; i++) {
        container += `<tr>
        <td>${i + 1}</td>
        <td>${usersContainer[i].name}</td>
        <td>${usersContainer[i].age}</td>
        <td>${usersContainer[i].phone}</td>
        <td>${usersContainer[i].status}</td>
        <td><button class="btn btn-info" data-toggle="modal" data-target="#updateStatus" onclick="updateStatus(${i})">Update Status</button></td>
        <td><button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button></td>
    </tr>`
    }

    document.querySelector('tbody').innerHTML = container;
}
// ///////////////////////////////////////////////////////////

// /////////////////////////////Delete User///////////////////

function deleteUser(index) {
    usersContainer.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(usersContainer));
    displayUsers();
}
// ///////////////////////////////////////////////////////////

// ////////////////////update status/////////////////////////

function updateStatus(index) {
    if (usersContainer[index].status == "active") {
        document.getElementById('userModelActive').checked = true
    }
    else {
        document.getElementById('userModelInActive').checked = true

    }

    indexUpdate = index;
}

function saveChanges() {
    if (userModelActive.checked) {
        userUpdatedStatus = userModelActive.value
    }
    else {
        userUpdatedStatus = userModelInActive.value
    }
    usersContainer[indexUpdate].status = userUpdatedStatus;
    localStorage.setItem('users', JSON.stringify(usersContainer));
    displayUsers();
}

saveBtn.addEventListener('click', saveChanges);
// ///////////////////////////////////////////////////////