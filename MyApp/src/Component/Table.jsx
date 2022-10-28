import React from "react";
import "../App.css"

function Table({students ,colNames}){
    return(
        <div className="tabledata">
            <table className="table" >
                <thead>
                    <tr>
                        {
                            colNames.map((headerItems)=>(
                                <th>
                                    {headerItems}
                                    
                                </th>   
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {Object.values(students).map((obj) =>(
                        <tr >
                            {Object.values(obj).map((value)=>(
                                <td >{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;