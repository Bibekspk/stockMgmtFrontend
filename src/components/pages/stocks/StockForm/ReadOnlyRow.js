import React from 'react';

export const ReadOnlyRow = ({ item,index,handleEditRow }) => {
    return (
            <tr key={item.id}>
                <td>{index}</td>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                    <button className='btn btn-success' style={{'width':'40%'}} onClick={(e)=>handleEditRow(e,item.id)}>Edit</button>
                    <button className='btn btn-danger' style={{'width':'40%'}}>Delete</button>
                </td>
                
            </tr>
    )
}
