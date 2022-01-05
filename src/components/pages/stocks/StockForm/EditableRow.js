import React from 'react'

export const EditableRow=({item,handleChange,handleEditSave,handleCancel})=> {
    return (
            <tr>
                <td>
                  SN
                </td>
                <td>
                    {item.itemName}
                </td>
                <td>
                    <input 
                    type='text'
                    name='quantity'
                    onChange={(e)=>handleChange(e)}
                    value={item.quantity}>
                    </input>
                </td>
                
                <td>
                    <input 
                    type='text'
                    name='price'
                    onChange={(e)=>handleChange(e)}
                    value={item.price}>
                    </input>
                </td>
                <td>
                    <button className='btn btn-success' style={{'width':'46%'}} onClick={(e)=>handleEditSave(e,item.id)}>Save</button>
                    <button className='btn btn-danger'  style={{'width':'54%'}} onClick={handleCancel} >Cancel</button>
                </td>
            </tr>
    )
}
