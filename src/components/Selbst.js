import React from 'react';
import { useFormik } from 'formik';

const validate = (values) => {
    let errors = {};
    if (!values.name) errors.name = 'Requiered Field!';
    if (!values.email) { errors.email = 'Requiered Field'; }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email format";
    }
    if (!values.company) errors.company = 'Requiered Field!';
    return errors;
}

const initialValues = {
    name: '',
    email: '',
    company: ''
}

const onSubmit = (values) => {
    console.log('values', values)
}

const Selbst = () => {
    const formik = useFormik({
        validate,
        onSubmit,
        initialValues
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor='name' >Name</label>
                <input type='text' id='name' name='name' 
                // value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                {...formik.getFieldProps('name')}
                 />
                {formik.touched.name && formik.errors.name ? (
                    <div className='error'> {formik.errors.name} </div>) : null}
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' 
                // value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
                {...formik.getFieldProps('email')}
                 />
                {formik.touched.email && formik.errors.email ? (
                    <div className='error'> {formik.errors.email} </div>) : null}
            </div>
            <div>
                <label htmlFor='company'>Company</label>
                <input type='text' id='company' name='company'
                //  value={formik.values.company} onChange={formik.handleChange} onBlur={formik.handleBlur} 
                {...formik.getFieldProps('company')}
                />
                {formik.touched.company && formik.errors.company ? (
                    <div className='error'> {formik.errors.company} </div>) : null}
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}
export default Selbst;