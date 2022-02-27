import React from 'react';

export const ReadOnlyRow = ({ item,index,handleEditRow,handleDelete }) => {
    return (
            <tr key={index}>
                <td>{index}</td>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>{item.totalStock}</td>
                <td>{item.price}</td>
                <td>
                    <button className='btn btn-success' style={{'width':'44%'}} onClick={(e)=>handleEditRow(e,item.id)}>Edit</button>
                    <button className='btn btn-danger' style={{'width':'56%'}} onClick={(e)=>handleDelete(e,item.id)}>Delete</button>
                </td>
                
            </tr>
    )
}
