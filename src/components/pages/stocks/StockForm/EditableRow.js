import React from 'react'

export const EditableRow=({item})=> {
    return (
            <tr>
                <td>
                  SN
                </td>
                <td>
                    <input 
                    type='text'
                    name='itemName'
                    value={item.itemName}>
                    </input>
                </td>
                <td>
                    <input 
                    type='text'
                    name='quantity'
                    value={item.quantity}>
                    </input>
                </td>
                <td>
                    <input 
                    type='text'
                    name='price'
                    value={item.price}>
                    </input>
                </td>
                <td>
                    <button className='btn btn-success' style={{'width':'46%'}}>Save</button>
                    <button className='btn btn-danger'  style={{'width':'54%'}} >Cancel</button>
                </td>
            </tr>
    )
}
