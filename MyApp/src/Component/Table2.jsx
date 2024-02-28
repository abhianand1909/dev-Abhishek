import React from 'react'

function Table2({names,clName}) {
  return (
    
    <div className='table2data'>
        <table className='table'>
            <thead>
                <tr>
                    {
                        clName.map((Header) => ( 
                            <th>{Header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    names.map((rowdata)=>(
                        <tr>
                            {
                                <td>
                                    {rowdata}
                                </td>
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    
  )
}

export default Table2