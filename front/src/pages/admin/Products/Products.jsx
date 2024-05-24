import React, { useContext } from 'react'
import Table from '../../../components/site/Table/Table'
import MainContext from '../../../context/context'
import './Products.css'
import { Helmet } from 'react-helmet'

const Products = () => {
    const { data, setData } = useContext(MainContext)

    return (
        <div className='prod__div'>
            <Helmet>
                <title>Products</title>
            </Helmet>
            <Table infos={data} />
        </div>
    )
}

export default Products