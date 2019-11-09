import React from 'react';
import UserTable from './User-Table'
import { connect } from 'react-redux';
import { fetchUsers, deleteUsers } from '../../services/Users/action';
import '../../App.css';
class Users extends React.Component {
    constructor(props) {
        super(props);
        this.fetchUsersData();
    }

    fetchUsersData = () => {
        this.props.fetchAllUsers();
    }
    editUser = (user) => {
        this.props.history.push(`user/edit/${user._id}`)
    }

    deleteUser = (user) => {
        this.props.deleteUsers(user)
    }

    addUser(){
        this.props.history.push('/user/add')
    }
    render() {
        return (<div className="container">
            <div className="float-rght"><button type="button" onClick={() => this.addUser()} className='btn btn-primary'>Add User</button></div>
            <UserTable name="Users List" editUser={this.editUser} users={this.props.users} deleteUser={this.deleteUser}></UserTable>
        </div>);
    }
}

const mapStateToProps = state => ({
    users: state.users
});

const mapActionsToProps = {
    fetchAllUsers: fetchUsers,
    deleteUsers: deleteUsers
}

export default connect(mapStateToProps, mapActionsToProps)(Users);

