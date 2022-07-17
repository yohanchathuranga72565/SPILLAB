import { useEffect, useState } from "react";

function ListInvoiceItemComponent(props) {

    var totalExcl = 0.0;
    var totalTax = 0.0;
    var totalIncl = 0.0;

    useEffect(()=>{
        props.setTotalExcl(totalExcl);
        props.setTotalTax(totalTax);
        props.setTotalIncl(totalIncl);
    });

    const handleEditOrderItem = (item_code) => {
        const editItem = props.items?.filter(x=> x.item_code === item_code);
        props.setEditItem(editItem);
        props.setShow(true);
    }
    return (
        <>
            {props.items?.length !== 0 ? (
                <>
                    <div className="row">
                        <table className="table table-striped">
                            <thead>
                                <tr>

                                    <th scope="col">Item Code</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Note</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Tax</th>
                                    <th scope="col">Excl Amount</th>
                                    <th scope="col">Tax Amount</th>
                                    <th scope="col">Incl Amount</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.items?.length !== 0 ? props.items?.map(item => {
                                        totalExcl = totalExcl + parseFloat(item.excl_amount);
                                        totalTax = totalTax + parseFloat(item.tax_amount);
                                        totalIncl = totalIncl + parseFloat(item.incl_amount);
                                        return (
                                            <tr key={item.item_code}>
                                                <td>{item.item_code}</td>
                                                <td>{item.description}</td>
                                                <td>{item.note}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.price}</td>
                                                <td>{item.tax}</td>
                                                <td>{item.excl_amount}</td>
                                                <td>{item.tax_amount}</td>
                                                <td>{item.incl_amount}</td>
                                                <td><button onClick = {()=>handleEditOrderItem(item.item_code)} className="btn btn-sm btn-primary">Edit</button></td>
                                            </tr>
                                        );

                                    }) : console.log("No any items")
                                }
                            </tbody>
                        </table>
                    </div>
                    <div class="row justify-content-end mt-1">
                        <div class="col-md-3 text-end">
                            Total Excl
                        </div>
                        <div class="col-md-3 text-end">
                        <input type="text" className="form-control form-control-sm" name="total_excl" id="total_excl" value={totalExcl} readOnly/>
                        </div>
                    </div>
                    <div class="row justify-content-end mt-1">
                        <div class="col-md-3 text-end">
                            Total Tax
                        </div>
                        <div class="col-md-3 text-end">
                        <input type="text" className="form-control form-control-sm" name="total_tax" id="total_tax" value={totalTax} readOnly/>
                        </div>
                    </div>
                    <div class="row justify-content-end mt-1">
                        <div class="col-md-3 text-end">
                            Total Incl
                        </div>
                        <div class="col-md-3 text-end">
                        <input type="text" className="form-control form-control-sm" name="total_incl" id="total_incl" value={totalIncl} readOnly/>
                        </div>
                    </div>
                </>

            ) : <p>No item added</p>}

        </>
    );
}

export default ListInvoiceItemComponent;