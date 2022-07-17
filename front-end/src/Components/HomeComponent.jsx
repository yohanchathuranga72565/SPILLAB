import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from '../Context/ContextComponent';

function HomeComponent(props) {
    
    const context = useContext(Context); 
    const navigate = useNavigate(); 

    const handleEdit = (invoiceNo) => {
        const invoice = context.Invoices?.filter(x=> x.invoiceNo === invoiceNo);
        props.setEditInvoice(invoice);
        navigate('/editInvoice');
    }

    return (
        <>
            <hr />
                <Link to="/addNew" className="btn btn-sm btn-primary">Add New</Link>
            <hr />
            <table className="table table-striped">
                <thead>
                    <tr>

                        <th scope="col">Customer Name</th>
                        <th scope="col">Invoice No:</th>
                        <th scope="col">Invoice date</th>
                        <th scope="col">Total Excl</th>
                        <th scope="col">Total Tax</th>
                        <th scope="col">Total Incl</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        context.Invoices?.length !== 0 ? context.Invoices?.map(item => {
                            const clientData = context.Clients?.filter(client => client.dcLink == item.dcLink);
                            return (
                                
                                <tr key={clientData.dCLink}>
                                    <td>{clientData[0]?.name}</td>
                                    <td>{item.invoiceNo}</td>
                                    <td>{item.invoiceDate}</td>
                                    <td>{item.totalExcl}</td>
                                    <td>{item.totalTax}</td>
                                    <td>{item.totalIncl}</td>
                                    <td><button onClick = {()=>handleEdit(item.invoiceNo)} className="btn btn-sm btn-primary">Edit</button></td>
                                </tr>
                            );

                        }) : console.log("No Orders")
                    }


                </tbody>
            </table>
        </>
    );
}

export default HomeComponent;