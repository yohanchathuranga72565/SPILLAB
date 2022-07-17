import { Button } from 'react-bootstrap';
import { useState, useContext, useEffect } from 'react';
import AddItemComponent from './AddItemComponent';
import { Context } from '../Context/ContextComponent';
import ListInvoiceItemComponent from './ListInvoiceItemComponent';
import { saveOrder,editOrder } from '../Services/apiCall';

function SalesOrderComponent(props) {

    const [show, setShow] = useState(false);
    const [items, setItems] = useState([]);
    const [totalExcl, setTotalExcl] = useState(0.0);
    const [totalTax, setTotalTax] = useState(0.0);
    const [totalIncl, setTotalIncl] = useState(0.0);
    const [filterValues, setFilterValues] = useState([]);
    const [invoiceNo, setInvoiceNo] = useState(0);
    const [invoiceDate, setInvoiceDate] = useState("");
    const [referenceNo, setReferenceNo] = useState(0);
    const [note, setNote] = useState("");
    const [editFlag, setEditFlag] = useState(false);
    const [editItem, setEditItem] = useState({});
    const [bindFilterValuesToModel, setBindFilterValuesToModel]= useState(()=>{});


    const context = useContext(Context);

    useEffect(() => {
        editFilterValues();
    }, []);

    const handleShow = () => {
        bindFilterValuesToModel();
        setShow(true);}

    const editFilterValues = () => {
        if (props.editInvoice) {
            const client = context.Clients?.filter(client => client.dcLink === props.editInvoice[0]?.dcLink);
            setFilterValues(client);
            setInvoiceNo(props.editInvoice[0]?.invoiceNo);
            setInvoiceDate(props.editInvoice[0]?.invoiceDate);
            setReferenceNo(props.editInvoice[0]?.referenceNo);

            const orderItemsInvoice = context.OrderItems?.filter(x => x.invoiceNo === props.editInvoice[0]?.invoiceNo);
            const orderItemsShowObj = orderItemsInvoice?.map(invoiceItem => {
                const stkItem = context.StkItems?.filter(x => x.stockLink === invoiceItem.stockLink);
                return ({
                    item_code: stkItem[0].code,
                    description: stkItem[0].description_1,
                    note: invoiceItem.note,
                    quantity: invoiceItem.quantity,
                    price: invoiceItem.price,
                    tax: invoiceItem.tax,
                    excl_amount: invoiceItem.exclAmount,
                    tax_amount: invoiceItem.taxAmount,
                    incl_amount: invoiceItem.inclAmount

                });
            });
            setItems(orderItemsShowObj);

        }

    }

    const handleOnChangeClientName = (e) => {
        const item = context.Clients?.filter(client => client.name == e.target.value);
        setFilterValues(item);
    }

    const handleOnChangeInvoiceNo = (e) => {
        setInvoiceNo(e.target.value);
    }

    const handleOnChangeInvoiceDate = (e) => {
        setInvoiceDate(e.target.value);
    }

    const handleOnChangeReferenceNo = (e) => {
        setReferenceNo(e.target.value);
    }

    const handleOnChangeNote = (e) => {
        setNote(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = prepareOrder();
        if (filterValues[0]?.name !== undefined && requestData.invoiceDetails.invoiceNo !== 0 && requestData.invoiceDetails.invoiceDate !== '' && requestData.invoiceDetails.referenceNo !== 0 && requestData.items.length !== 0) {
            const response = await saveOrder(requestData);

            if (response.response?.status !== 400) {
                context.setInvoices(prev => [...prev, requestData.invoiceDetails]);
                alert("Order submitted Succesfully..!");
            }
            else {
                alert("Invoice number is available..");
            }

        }
        else {
            alert("Fill All field correctly..!");
        }

    }

    const handleEdit = async (e) => {
        e.preventDefault();
        const requestData = prepareOrder();
        if (filterValues[0]?.name !== undefined && requestData.invoiceDetails.invoiceNo !== 0 && requestData.invoiceDetails.invoiceDate !== '' && requestData.invoiceDetails.referenceNo !== 0 && requestData.items.length !== 0) {
            const response = await editOrder(requestData);

            if (response.response?.status !== 400) {
                alert("Order submitted Succesfully..!");
            }
            else {
                alert("Invoice number is available..");
            }

        }
        else {
            alert("Fill All field correctly..!");
        }

    }
    const prepareOrder = () => {
        const temp = items?.map(item => {
            const stockLink = context.StkItems?.filter(itemStk => itemStk.code === item.item_code)[0]?.stockLink;
            const orderItem = {
                invoiceNo: parseInt(invoiceNo),
                stockLink: stockLink,
                note: item.note,
                quantity: parseInt(item.quantity),
                price: parseFloat(item.price),
                tax: parseFloat(item.tax),
                exclAmount: item.excl_amount,
                taxAmount: item.tax_amount,
                inclAmount: item.incl_amount
            }
            return orderItem;
        });
        const value = {
            invoiceNo: parseInt(invoiceNo),
            invoiceDate,
            referenceNo: parseInt(referenceNo),
            totalExcl,
            totalTax,
            totalIncl,
            dcLink: filterValues[0]?.dcLink
        }
        return {
            invoiceDetails: value,
            items: temp
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <hr />
                        <div className="col-3 mb-2">
                            <button type="submit" className="btn btn-sm btn-primary">Save Order</button>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row mb-1">
                                <label htmlFor="customerName" className="col-sm-3 col-form-label col-form-label-sm">Customer Name</label>
                                <div className="col-sm-9">
                                    <select name="item_code" id="item_code" className="form-control form-control-sm" onChange={handleOnChangeClientName}>
                                        {filterValues.length !== 0 ? <option value={filterValues[0].name}>{filterValues[0].name}</option> : <option value="">--Select Customer--</option>}
                                        {
                                            context.Clients?.map(item => {
                                                return (<option key={item.dcLink} value={item.name}>{item.name}</option>);
                                            })

                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="address1" className="col-sm-3 col-form-label col-form-label-sm">Address 1</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control form-control-sm" id="address1" value={filterValues[0]?.physical1} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="address2" className="col-sm-3 col-form-label col-form-label-sm">Address 2</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control form-control-sm" id="address2" value={filterValues[0]?.physical2} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="address3" className="col-sm-3 col-form-label col-form-label-sm">Address 3</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control form-control-sm" id="address3" value={filterValues[0]?.physical3} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="suburb" className="col-sm-3 col-form-label col-form-label-sm">Suburb</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control form-control-sm" id="suburb" value={filterValues[0]?.physical4} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="state" className="col-sm-3 col-form-label col-form-label-sm">State</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control form-control-sm" id="state" value={filterValues[0]?.physical5} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="post_code" className="col-sm-3 col-form-label col-form-label-sm">Post Code</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control form-control-sm" id="post_code" value={filterValues[0]?.physicalPC} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group row mb-1">
                                <label htmlFor="invoice_no" className="col-sm-3 col-form-label col-form-label-sm">Invoice No.</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control form-control-sm" id="invoice_no" onChange={handleOnChangeInvoiceNo} value={invoiceNo} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="invoice_date" className="col-sm-3 col-form-label col-form-label-sm">Invoice Date</label>
                                <div className="col-sm-9">
                                    <input type="date" className="form-control form-control-sm" id="invoice_date" onChange={handleOnChangeInvoiceDate} value={invoiceDate} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="reference_no" className="col-sm-3 col-form-label col-form-label-sm">Reference No.</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control form-control-sm" id="reference_no" onChange={handleOnChangeReferenceNo} value={referenceNo} />
                                </div>
                            </div>
                            <div className="form-group row mb-1">
                                <label htmlFor="note" className="col-sm-3 col-form-label col-form-label-sm">Note</label>
                                <div className="col-sm-9">
                                    <textarea name="note"
                                        rows="5" cols="60" onChange={handleOnChangeNote} value={note}>
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <hr />
                <div className="row mt-2">
                    <AddItemComponent show={show} setShow={setShow} items={items} setItems={setItems} editItem={editItem} editFlag={editFlag} setEditFlag={setEditFlag} setBindFilterValuesToModel={setBindFilterValuesToModel}/>
                    <div className="col-3">
                        <button className="btn btn-sm btn-primary" onClick={handleShow}>
                            Add Item
                        </button>
                    </div>
                </div>

                <div className="row mt-2">
                    <ListInvoiceItemComponent items={items} setTotalExcl={setTotalExcl} setTotalTax={setTotalTax} setTotalIncl={setTotalIncl} setEditItem = {setEditItem} setShow={setShow} />
                </div>

            </div>
        </>
    );
}

export default SalesOrderComponent;