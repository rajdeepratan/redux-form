import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderError = ({ meta: { touched, error } }) => {
    return touched && error
      ? <span style={{ display: 'inline-block', color: 'red', margin: '10px 0' }}>{error}</span>
      : false;
  };

const validate = vals => {
    
    const errors = {};
    if (!vals.firstName || (vals.firstName && !vals.firstName.trim())) errors.firstName = 'Required';
    if (!vals.lastName || (vals.lastName && !vals.lastName.trim())) errors.lastName = 'Required';
    
    return errors;
}

class FormPage1 extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="colm">
                        <label>First Name</label>
                        <div className="field">
                            <Field
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <Field name="firstName" component={renderError} />
                    </div>
                    <div className="colm">
                        <label>Last Name</label>
                        <div className="field">
                            <Field
                                name="lastName"
                                component="input"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                        <Field name="lastName" component={renderError} />
                    </div>
                    <div className="colm">
                        <button type="submit">
                            Next
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'detailForm', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
  })(FormPage1);