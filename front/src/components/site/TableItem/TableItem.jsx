import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import axios from 'axios'

const TableItem = ({info}) => {
    const {data, setData} = useContext(MainContext)

    return (
        <>
            <tr>
                <th scope="row">{info._id}</th>
                <td><img width='120px' src={info.image} alt="" /></td>
                <td>{info.title}</td>
                <td>${info.price}</td>
                <td><button className='btn btn-danger' onClick={() => {
                    axios.delete(`http://localhost:8080/shop/${info._id}`)
                    .then(res => {
                        setData([...res.data])
                    })
                }}>Delete</button></td>
            </tr>
        </>
    )
}

export default TableItem