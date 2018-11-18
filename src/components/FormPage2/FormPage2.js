import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderError = ({ meta: { touched, error } }) => {
    return touched && error
      ? <span style={{ display: 'inline-block', color: 'red', margin: '10px 0' }}>{error}</span>
      : false;
  };

const validate = vals => {
    
    const errors = {};
    if (!vals.number || vals.number.length < 10) errors.number = 'Required';
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(vals.email)) {
        errors.email = 'Required';
    }
    return errors;
}

class FormPage2 extends Component {
    render() {
        const { handleSubmit, pristine, previousPage, submitting, fields } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <div className="colm">
                    <label>Phone Number</label>
                    <div className="field">
                        <Field
                            name="number"
                            component="input"
                            type="text"
                            placeholder="Phone Number"
                        />
                    </div>
                    <Field name="number" component={renderError} />
                </div>
                <div className="colm">
                    <label>Email</label>
                    <div className="field">
                        <Field
                            name="email"
                            component="input"
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <Field name="email" component={renderError} />
                </div>
                <div>
                    <button
                        type="button"
                        className="previous"
                        onClick={() => previousPage(fields)}
                        style={{marginRight: '5px'}}
                    >
                        Previous
                    </button>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                    </button>
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
    enableReinitialize: true
  })(FormPage2);