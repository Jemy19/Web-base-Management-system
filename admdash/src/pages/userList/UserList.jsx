import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from '../../dummyData';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns  = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'Full Name', width: 130, renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    }
},
    { field: 'age', headerName: 'Age', type: 'number', width: 100,},
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'address', headerName: 'Home Address', width: 150 },
    { field: 'transaction', headerName: 'Transaction Value', width: 160 },
    { field: 'status', headerName: 'Status', width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  
  


  return (
    <div className="userList">
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={15} rowsPerPageOptions={[15]} checkboxSelection />
    </div>
  )
}
