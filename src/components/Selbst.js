import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const validate = Yup.object({
    name:Yup.string().required('Requiered Field'),
    email:Yup.string().email('invalid email format').required('Requiered Field'),
    company:Yup.string().max(15, 'verylong').required('Requiered Field')
})

const initialValues = {
    name: 'What is your name?',
    email: '',
    company: ''
}

const onSubmit = (values) => {
    console.log('values', values)
}

const Selbst = () => {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validate}
        >
        <Form >
            <div className='form-control'>
                <label htmlFor='name' >Name</label>
                <Field type='text' id='name' name='name'/>
                <ErrorMessage name='name' component='div'/>
            </div>
            <div  className='form-control'>
                <label htmlFor='email'>Email</label>
                <Field type='email' id='email' name='email' 
                 />
                  <ErrorMessage name='email' component='div'/>
            </div>
            <div className='form-control'>
                <label htmlFor='company'>Company</label>
                <Field type='text' id='company' name='company'
                />
                 <ErrorMessage name='company' component='div'/>

             
            </div>
            <div className='form-control'>
                <button type='submit'>Submit</button>
            </div>
        </Form>
        </Formik>
    )
}
export default Selbst;