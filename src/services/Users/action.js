export const FETCH_USERS = 'users:fetchUsers';
export const UPDATE_USERS = 'users:updateUsers';
export const DELETE_USER  = 'users:deleteUser';
export const ADD_USER  = 'users:addUser';
export function fetchUsers(){
    return {
        type: FETCH_USERS
    }
}

export function updateUsers(updatedUser){
    return {
        type: UPDATE_USERS,
        payload: updatedUser
    }
}

export function deleteUsers(user){
    return {
        type: DELETE_USER,
        payload: user
    }
}

export function addUser(user){
    return {
        type: ADD_USER,
        payload: user
    }
}