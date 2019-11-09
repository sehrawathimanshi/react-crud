
import React from 'react';
import { connect } from 'react-redux';
import './user-edit.css';
import validate from '../../../Validators/form-validator';
import TextInput from '../../FormControls/TextInput';
import '../../../App.css';

import TextArea from '../../FormControls/TextInput';
import Email from '../../FormControls/Email';
import Select from '../../FormControls/Select';
import Checkbox from '../../FormControls/Checkbox';
import NumberInput from '../../FormControls/NumberInput';
import { updateUsers, addUser } from '../../../services/Users/action'
class UserEdit extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {},
            formIsValid: false,
            formControls: {

                name: {
                    value: '',
                    placeholder: 'What is your name',
                    valid: 'false',
                    validationRules: {
                        minLength: 4,
                        isRequired: true
                    },
                    touched: 'false'
                },
                address: {
                    value: '',
                    placeholder: 'What is your address',
                    valid: 'false',
                    validationRules: {
                        minLength: 4,
                        isRequired: true
                    },
                    touched: 'false'
                },
                email: {
                    value: '',
                    placeholder: 'What is your email',
                    valid: 'false',
                    validationRules: {
                        isRequired: true,
                        isEmail: true
                    },
                    touched: 'false'
                },
                age: {
                    value: '',
                    placeholder: 'What is your age',
                    valid: 'false',
                    validationRules: {
                        isVaidAge: true
                    },
                    touched: 'false'
                },
                gender: {
                    value: '',
                    placeholder: 'Please Select your gender',
                    valid: 'false',
                    touched: 'false',
                    validationRules: {
                        isRequired: true,
                    },
                    options: [
                        { value: 'male', displayValue: 'Male' },
                        { value: 'female', displayValue: 'Female' },
                        { value: 'others', displayValue: 'Others' }
                    ]
                },
                isActive: {
                    value: false,
                    placeholder: 'Status',
                    valid: 'true',
                    touched: 'true'
                }

            }

        }
    }
    render() {
        return (
            <div className="container">
                <h1>{this.props.match.params.userId ? 'Edit User' : 'Add User'}</h1>
                <p>{this.state.user.name}</p>
                <form>
                    <div>
                        <TextInput name="name"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.name.touched}
                            valid={this.state.formControls.name.valid}
                        />

                        <TextArea name="address"
                            placeholder={this.state.formControls.address.placeholder}
                            value={this.state.formControls.address.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.address.touched}
                            valid={this.state.formControls.address.valid}
                        />
                    </div>

                    <Email name="email"
                        placeholder={this.state.formControls.email.placeholder}
                        value={this.state.formControls.email.value}
                        onChange={this.changeHandler}
                        touched={this.state.formControls.email.touched}
                        valid={this.state.formControls.email.valid}
                    />
                    <Select name="gender"
                        value={this.state.formControls.gender.value}
                        onChange={this.changeHandler}
                        options={this.state.formControls.gender.options}
                        touched={this.state.formControls.gender.touched}
                        valid={this.state.formControls.gender.valid}
                        placeholder={this.state.formControls.gender.placeholder}

                    />
                    <NumberInput
                        name="age"
                        value={this.state.formControls.age.value}
                        onChange={this.changeHandler}
                        options={this.state.formControls.age.options}
                        touched={this.state.formControls.age.touched}
                        valid={this.state.formControls.age.valid}
                        placeholder={this.state.formControls.age.placeholder}
                        
                        ></NumberInput>
                    <Checkbox name="isActive"
                        value={this.state.formControls.isActive.value}
                        onChange={this.changeHandler}
                        touched={this.state.formControls.isActive.touched}
                        valid={this.state.formControls.isActive.valid}
                    />

                    <button className="btn btn-primary" type="button" onClick={this.formSubmitHandler}
                        disabled={!this.state.formIsValid}
                    >
                        Submit
                    </button>
                </form>
            </div >)
    }

    componentWillMount() {
        const user = this.props.users.find(user => user._id === this.props.match.params.userId);

        if (user && Object.keys(user).length) {
            this.setState({
                ...this.state,
                ...user
            });
            const updatedControls = {
                ...this.state.formControls
            };

            Object.keys(updatedControls).forEach((key) => {
                const elem = { ...updatedControls[key] };
                elem.touched = 'true';
                elem.valid = `${validate(user[key], elem.validationRules)}`
                elem.value = user[key];
                updatedControls[key] = elem;
            });
            this.setState({
                ...this.state,
                formControls: updatedControls,
                formIsValid: this.isFormValid(updatedControls)
            });
        }

    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        if (name === 'isActive') {
            updatedFormElement.value = !updatedFormElement.value;
        } else {
            updatedFormElement.value = value;

        }
        updatedFormElement.touched = 'true';
        updatedFormElement.valid = `${validate(value, updatedFormElement.validationRules)}`;

        updatedControls[name] = updatedFormElement;

        this.setState({
            ...this.state,
            formControls: updatedControls,
            formIsValid: this.isFormValid(updatedControls)
        });

       setTimeout(()=>console.log(this.state),200) 

    }

    formSubmitHandler = () => {
        const formData = {};
        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }

        if (this.props.match.params.userId) {
            this.props.updateUserData({ ...formData, _id: this.props.match.params.userId });
        }else{
            this.props.addUserData({...formData, _id: `${this.props.users.length +1}`});
        }

        this.props.history.push(`/user`);


    }

    isFormValid = (updatedControls) => {
        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid === 'true' && formIsValid;
        }
        return formIsValid;
    }

}

const mapStateToProps = state => ({
    users: state.users
});

const mapActionsToProps = {
    updateUserData: updateUsers,
    addUserData: addUser
}
export default connect(mapStateToProps, mapActionsToProps)(UserEdit);


