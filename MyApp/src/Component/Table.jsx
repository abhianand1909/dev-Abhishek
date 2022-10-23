import React from "react";
import "../App.css"

function Table({students ,colNames}){
    return(
        <div className="tabledata">
            <table className="table" >
                <thead>
                    <tr>
                        {
                            colNames.map((headerItems, index)=>(
                                <th key={index}>
                                    {headerItems}
                                    
                                </th>
                                
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {Object.values(students).map((obj, index) =>(
                        <tr key={index}>
                            {Object.values(obj).map((value,index2)=>(
                                <td key={index2}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;