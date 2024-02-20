import React from "react";

const Info = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'left' }}>
            <table style={{ borderCollapse: 'collapse', width: '30%', textAlign: 'left', padding:'50px' , left:'50%' }}>
                <tbody>
                    <tr>
                        <td style={{verticalAlign: 'top'}}>Name: </td>
                        <td><b>Surya Rishi</b></td>
                    </tr>
                    <tr>
                        <td style={{verticalAlign: 'top' }}>Email ID: </td>
                        <td><b>gsuryarishi@gmail.com</b></td>
                    </tr>
                    <tr>
                        <td style={{verticalAlign: 'top' }}>Phone number: </td>
                        <td><b>9696525234</b></td>
                    </tr>
                    <br />
                </tbody>
            </table>
        </div>
    );
};
export default Info;