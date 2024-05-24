import React from 'react'
import TableItem from '../TableItem/TableItem'

const Table = ({ infos }) => {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        infos.map((info, index) => {
                            return(
                                <TableItem key={index} info={info}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table