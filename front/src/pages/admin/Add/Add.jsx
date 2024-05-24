import React, { useContext } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import MainContext from '../../../context/context'
import './Add.css'
import { Helmet } from 'react-helmet'

const Add = () => {
    const { data, setData } = useContext(MainContext)

    return (
        <div className='add__div'>
            <Helmet>
                <title>Add Page</title>
            </Helmet>
            <Formik
                initialValues={{ title: '', image: '', price: '' }}
                validate={values => { }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post('http://localhost:8080/shop', { ...values })
                        .then(res => {
                            setData([...res.data])
                            console.log(res.data);
                        })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder='Title'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <input
                            type="text"
                            name="image"
                            placeholder='Image'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder='Price'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        <button type="submit" onClick={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Add