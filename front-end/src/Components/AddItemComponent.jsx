import React, {useEffect, useState, useContext } from 'react';
import { useFormik } from "formik";
import { Modal, Button } from "react-bootstrap";
import { Context } from '../Context/ContextComponent';

function AddItemComponent(props) {
    const [filterValues, setFilterValues] = useState([]);
    const [quantity, setQuantity] = useState(0.0);
    const [tax, setTax] = useState(0.0);
    const [note, setNote] = useState("");
    const [exclAmount, setExclAmount] = useState(0.0);
    const [taxAmount, setTaxAmount] = useState(0.0);
    const [inclAmount, setInclAmount] = useState(0.0);

    const context = useContext(Context);
    
    useEffect(()=>{
        calculateExclAmount();
        calculateTaxAmount();
        calculateInclAmount();
        props.setBindFilterValuesToModel(editItemValueBind);
        
    },[filterValues,quantity,tax,note,exclAmount,taxAmount,inclAmount]);

    
    const handleClose = () => {
        props.setShow(false);
        setFilterValues([]);
        setQuantity(0.0);
        setTax(0.0);
        setNote("");
        setExclAmount(0.0);
        setTaxAmount(0.0);
        setInclAmount(0.0);
    }

    const editItemValueBind = () => {
        const item = context.StkItems?.filter(stkItem => stkItem.code == props.editItem[0]?.item_code);
        setFilterValues(item);
        setQuantity(props.editItem[0]?.quantity);
        setTax(props.editItem[0]?.tax);
        setNote(props.editItem[0]?.note);
        setExclAmount(props.editItem[0]?.excl_amount);
        setTaxAmount(props.editItem[0]?.tax_amount);
        setInclAmount(props.editItem[0]?.incl_amount);
       
    }

    
    const handleChangeItem = (e) => {
        setFilterValues([]);
        const item = context.StkItems?.filter(stkItem => stkItem.code == e.target.value || stkItem.description_1 == e.target.value);
        setFilterValues(item);
    }

    const handleChangeQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const handleChangeTax = (e) => {
        setTax(e.target.value);
        
    }

    const handleChangeNote = (e) => {
        setNote(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = {
            item_code: filterValues[0]?.code,
            description: filterValues[0]?.description_1,
            note,
            quantity,
            price: filterValues[0]?.purchaseAccount,
            tax,
            excl_amount: exclAmount,
            tax_amount: taxAmount,
            incl_amount: inclAmount
        }
        if(values.item_code !== undefined && values.description !== undefined && values.note !== '' && values.quantity !== '' && values.price !== '' && values.tax !== ''){
            //const saveItem = props.items?.filter(x=> x.item_code !== values.item_code);
            props.setItems(prev=>[...prev,values]);
        }
        else{
            alert("Fill all fields to submit..!");
        }

        handleClose();
    }

    const calculateExclAmount = ()=> {
        setExclAmount(quantity * filterValues[0]?.purchaseAccount);
    }

    const calculateTaxAmount = ()=> {
        setTaxAmount(exclAmount * tax/100);
    }

    const calculateInclAmount = ()=> {
        setInclAmount(exclAmount + taxAmount);
    }


    return (
        <>
            <Modal show={props.show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Item For The Invoice</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="row">
                            <div className="col">
                                <div className="form-group row mb-1">
                                    <label htmlFor="item_code" className="col-sm-3 col-form-label col-form-label-sm">Item Code</label>
                                    <div className="col-sm-9">
                                        <select name="item_code" id="item_code" className="form-control form-control-sm" onChange={handleChangeItem}>
                                            {filterValues.length !== 0?<option value={filterValues[0].code}>{filterValues[0].code}</option>:<option value="">--Select Customer--</option>}
                                            {
                                                context.StkItems?.map(item => {
                                                    return (<option key={item.code} value={item.code}>{item.code}</option>);
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="description" className="col-sm-3 col-form-label col-form-label-sm">Description</label>
                                    <div className="col-sm-9">
                                        <select name="description" id="description" className="form-control form-control-sm" onChange={handleChangeItem}>
                                            {filterValues.length !== 0?<option value={filterValues[0].description_1}>{filterValues[0].description_1}</option>:<option value="">--Select Customer--</option>}
                                            {
                                                context.StkItems?.map(item => {
                                                    return (<option key={item.code} value={item.description_1}>{item.description_1}</option>);
                                                })

                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="note" className="col-sm-3 col-form-label col-form-label-sm">Note</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control form-control-sm" name="note" id="note" onChange={handleChangeNote} value={note}/>
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="quantity" className="col-sm-3 col-form-label col-form-label-sm">Quantity</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control form-control-sm" name='quantity' id="quantity" onChange={handleChangeQuantity} value={quantity}/>
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="price" className="col-sm-3 col-form-label col-form-label-sm">Price</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control form-control-sm" name='price' id="price" onChange={handleChangeItem} value={filterValues[0]?.purchaseAccount}/>
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="tax" className="col-sm-3 col-form-label col-form-label-sm">Tax</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control form-control-sm" name='tax' id="tax" onChange={handleChangeTax} value={tax}/>
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="excl_amount" className="col-sm-3 col-form-label col-form-label-sm">Excl Amount</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control form-control-sm" name='excl_amount' id="excl_amount"  value={exclAmount?exclAmount:0}/>
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="tax_amount" className="col-sm-3 col-form-label col-form-label-sm">Tax Amount</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control form-control-sm" name='tax_amount' id="tax_amount"  value={taxAmount && exclAmount?taxAmount:0}/>
                                    </div>
                                </div>
                                <div className="form-group row mb-1">
                                    <label htmlFor="incl_amount" className="col-sm-3 col-form-label col-form-label-sm">Incl Amount</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control form-control-sm" name='incl_amount' id="incl_amount"  value={inclAmount?inclAmount:0}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-sm btn-secondary" onClick={handleClose}>
                            Close
                        </button>
                        <button className="btn btn-sm btn-primary" type="submit">
                            Save Changes
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}
export default AddItemComponent;