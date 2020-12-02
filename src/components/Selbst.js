import React from 'react';
import {useFormik} from 'formik';

const Selbst = () =>{
    return(
        <form>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name'/>
            </div>
            <div>
                <label htmlFor='email'>email</label>
                <input type='email' id='email' name='email'/>
            </div>
            <div>
                <label htmlFor='company'>company</label>
                <input type='text' id='company' name='company'/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}
export default Selbst;