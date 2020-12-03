import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const validate = Yup.object({
    name:Yup.string().required('Requiered Field'),
    email:Yup.string().email('invalid email format').required('Requiered Field'),
    company:Yup.string().max(15, 'verylong').required('Requiered Field')
})

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
        validationSchema:validate,
        onSubmit,
        initialValues
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label htmlFor='name' >Name</label>
                <input type='text' id='name' name='name' 
                {...formik.getFieldProps('name')}
                 />
                {formik.touched.name && formik.errors.name ? (
                    <div className='error'> {formik.errors.name} </div>) : null}
            </div>
            <div  className='form-control'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' 
                {...formik.getFieldProps('email')}
                 />
                {formik.touched.email && formik.errors.email ? (
                    <div className='error'> {formik.errors.email} </div>) : null}
            </div>
            <div className='form-control'>
                <label htmlFor='company'>Company</label>
                <input type='text' id='company' name='company'
                {...formik.getFieldProps('company')}
                />
                {formik.touched.company && formik.errors.company ? (
                    <div className='error'> {formik.errors.company} </div>) : null}
            </div>
            <div className='form-control'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}
export default Selbst;