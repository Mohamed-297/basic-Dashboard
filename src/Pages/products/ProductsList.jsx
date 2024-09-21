import "./ProductsList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {productRows} from '../../dummyData'
import { Link } from "react-router-dom";
import { useState } from "react";
import airPods from "../../images/airpods.jpeg"

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const paginationModel = { page: 0, pageSize: 8 };

export default function ProductsList() {
    const [data,setData]=useState(productRows)
    function handleDelete(id){
        setData(data.filter(da=>da.id!==id))
    }
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'product', headerName: 'Product', width: 130, renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img src={airPods} alt="" className="productListImg" />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="Edit-Del">
                        <Link to={"/product/"+params.row.id}>
                        <button className="productListEdit">
                            Edit
                        </button>
                        </Link>
                        <DeleteOutlineIcon onClick={()=>handleDelete(params.row.id)} className="productListDelete"/>
                    </div>
                )
            }
        },
    ];

    return (
        <div className='productsList'>
            <DataGrid
                    rows={data}
                    disableRowSelectionOnClick
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
        </div>
    )
}
