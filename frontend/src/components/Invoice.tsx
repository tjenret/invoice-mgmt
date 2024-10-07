import LineItem from "./LineItem"



export default function Invoice(props: any) {

  let subtotal = props.items.reduce((total: number, item: any) => total = total + (item.unit_price * item.total_units), 0)
  let taxes = subtotal * .07

  return (
    <>
      <div className="invoice-meta">
        <p className="invoice-id">Invoice No. <span className="data">{props.invoice.invoiceid}</span> </p>
        <p className="due-date">Due By: <span className="data">{props.invoice.deadline}</span></p>
      </div>

      <table className="line-item-list">
        <thead>
          <tr>
            <th className="description">Description</th>
            <th className="total-units">Quantity</th>
            <th className="unit-price">Unit Type</th>
            <th className="unit-type">Unit Price</th>
            <th className="cost">Cost</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item: any) => {
            return (<LineItem key={item.itemid} item={item} />)
          })}
        </tbody>

      </table>
      <button type="button" onClick={props.addItemButton}><span className="icon">&#43; </span> New Line Item</button>

      <div className="invoice-totals">
        <div className="totals-group"> <p className="total-heading">Subtotal</p><p className="subtotal">$ {subtotal}</p></div>
        <div className="totals-group"> <p className="total-heading">Taxes</p><p className="taxes">$ {taxes}</p></div>
        <div className="totals-group"> <p className="total-heading">Shipping</p><p className="shipping">$ {props.invoice.shipping}</p></div>
        <div className="totals-group"> <p className="total-heading">Amount Paid</p><p className="amt_paid">- $ {props.invoice.amt_paid}</p></div>
        <div className="totals-group"> <p className="total-heading">Total Due</p><p className="total_due">$ {(subtotal + props.invoice.shipping + taxes) - props.invoice.amt_paid || 0.00}</p></div>
      </div>
    </>
  )
}