import "./UserList.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import avatar from '../../images/image-avatar.png'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from '../../dummyData'
import { Link } from "react-router-dom";
import { useState } from "react";
const paginationModel = { page: 0, pageSize: 8 };


export default function UserList() {


    const [data,setData]=useState(userRows)
    function handleDelete(id){
        setData(data.filter(da=>da.id!==id))
    }
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'Username', width: 130, renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img src={avatar} alt="" className="userListImg" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
        },
        {
            field: 'transaction',
            headerName: 'Transactions',
            width: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="Edit-Del">
                        <Link to={"/user/"+params.row.id}>
                        <button className="userListEdit">
                            Edit
                        </button>
                        </Link>
                        <DeleteOutlineIcon onClick={()=>handleDelete(params.row.id)} className="userListDelete"/>
                    </div>
                )
            }
        },
    ];

    
    return (
        <div className='userList'>
            <Paper sx={{ height: "fitContent", width: '100%' }}>
                <DataGrid
                    rows={data}
                    disableRowSelectionOnClick
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </div>
    )
}
