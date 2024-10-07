import Header from "./components/Header"
import Footer from "./components/Footer"
import MyInfo from './components/MyInfo'
import ClientInfo from "./components/ClientInfo"
import { useEffect, useState } from "react"
import Invoice from "./components/Invoice"
import AddItemDialog from "./components/AddItemDialog"
import AddInvoiceDialog from "./components/AddInvoiceDialog"
import "./assets/app.css"
import ChangeClientDialog from "./components/ChangeClientDialog"




function App() {
  const [myInfo, setMyInfo] = useState({
    "infoid": 0,
    "name": "",
    "address": "",
    "city": "",
    "state": "",
    "zip": 0,
    "phone": "",
    "email": "",
    "createdAt": "",
    "updatedAt": ""
  })
  const [clientList, setClientList] = useState([])
  const [currentClientId, setCurrentClientId] = useState(0)
  const [currentClient, setCurrentClient] = useState({
    "clientid": 0,
    "name": "",
    "address": "",
    "city": "",
    "state": "",
    "zip": 0,
    "phone": "",
    "email": "",
    "createdAt": "",
    "updatedAt": ""
  })

  const [invoiceList, setInvoiceList] = useState([])
  const [currentInvoiceId, setCurrentInvoiceId] = useState(0)
  const [invoiceAddCt, setInvoiceAddCt] = useState(0)
  const [currentInvoice, setCurrentInvoice] = useState({
    "invoiceid": 0,
    "clientid": 0,
    "status": "",
    "deadline": null,
    "shipping": 0,
    "fees": 0,
    "subtotal": 0,
    "amt_paid": 0,
    "date_paid": null,
    "createdAt": "",
    "updatedAt": ""
  })

  const [itemList, setItemList] = useState([])
  const [itemListAddCt, setItemListAddCt] = useState(0)

  useEffect(() => {
    fetch("http://localhost:5199/api/v1/myinfo/2")
      .then((res) => res.json())
      .then((info) => {
        setMyInfo({ ...info })
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    fetch("http://localhost:5199/api/v1/clients")
      .then((res) => res.json())
      .then((allClients) => {
        setClientList(allClients)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:5199/api/v1/clients/${currentClientId}`)
      .then((res) => res.json())
      .then((client) => {
        setCurrentClient({ ...client })
      })

    fetch(`http://localhost:5199/api/v1/invoices/client/${currentClientId}`)
      .then((res) => res.json())
      .then((allInvoices) => {
        setInvoiceList(allInvoices || [])
      })

      .catch(err => console.log(err))
  }, [currentClientId, invoiceAddCt])

  useEffect(() => {
    fetch(`http://localhost:5199/api/v1/invoices/${currentInvoiceId}`)
      .then((res) => res.json())
      .then((invoice) => {
        setCurrentInvoice({ ...invoice })
        const newInvoiceOpt: any = document.querySelector(`#invoice-list option[value='${currentInvoiceId}']`)
        if(newInvoiceOpt) newInvoiceOpt.selected = true

      })
    fetch(`http://localhost:5199/api/v1/items/invoice/${currentInvoiceId}`)
      .then((res) => res.json())
      .then((items) => {
        setItemList(items)
      })
      .catch(err => console.log(err))


  }, [currentInvoiceId, itemListAddCt])


  function handleClientChangeLink() {
    const add_item_dialog:any = document.getElementById("change_client_dialog")
    add_item_dialog?.showModal()
  }

  function handleClientChange(e: any) {
    setCurrentClientId(e.target.value)
    setCurrentInvoiceId(0)
  }

  function handleInvoiceChange(e: any) {
    setCurrentInvoiceId(e.target.value)
  }
  
  function handleAddInvoiceButton() {
    const add_invoice_dialog:any = document.getElementById("add_invoice_dialog")
    add_invoice_dialog?.showModal()
  }

  function handleSaveNewInvoice() { 
    const addInvoiceForm: any = document.querySelector("#add_invoice_dialog form")

    const newInvoice = {
      "clientid": currentClientId,
      "deadline": addInvoiceForm.querySelector("[name='deadline']").value,
      subtotal: 0
    }

    let fetchHeaders = new Headers({
      "Content-Type": "application/json",
    });

    fetch(`http://localhost:5199/api/v1/invoices`, { method: "POST", body: JSON.stringify(newInvoice), headers: fetchHeaders })
      .then((res) => res.json())
      .then((invoice) => {
        setCurrentInvoiceId(invoice.inv)
      })
      .catch(err => console.log(err))
  }


  function handleAddLineItemButton() {
    const add_item_dialog:any = document.getElementById("add_item_dialog")
    add_item_dialog?.showModal()
  }

  

  function handleSaveLineItem() {
    const addItemForm: any = document.querySelector("#add_item_dialog form")

    const newLineItem = {
      "invoiceid": currentInvoiceId,
      "description": addItemForm.querySelector("[name='description']").value,
      "unit_type": addItemForm.querySelector("[name='unit_type']").value,
      "unit_price": addItemForm.querySelector("[name='unit_price']").value,
      "total_units": addItemForm.querySelector("[name='total_units']").value,
    }

    let fetchHeaders = new Headers({
      "Content-Type": "application/json",
    });

    fetch(`http://localhost:5199/api/v1/items`, { method: "POST", body: JSON.stringify(newLineItem), headers: fetchHeaders })
      .then((res) => res.json())
      .catch(err => console.log(err))
    
  }


  return (
    <>
      <Header />

      <main className="invoice-wrapper">
        <MyInfo info={myInfo} />
        <ChangeClientDialog clientList={ clientList} handleClientChange={handleClientChange} />
          <p className="bill-heading">Bill To:</p> 
        <ClientInfo client={currentClient} />
        <p className="link" onClick={handleClientChangeLink}>Change Client</p>
        <div className="invoice-options">
          <div className="invoice-select-group">
          <p className="invoice-select-heading">Select An Invoice</p>  
        <select name="invoice-list" id="invoice-list" onChange={(e) => handleInvoiceChange(e)}>
          {invoiceList.length === 0 ? <option value="">No Invoices Yet</option> : <option value="">--None Selected--</option>}
          {invoiceList.map((invoice: any) => {
            return (
              <option key={invoice.invoiceid} value={invoice.invoiceid}>Invoice No.: {invoice.invoiceid} | Due: {invoice.due_date || "N/A"}</option>
            )
          })}          
        </select>        
        </div>
        
        <button type="button" id="add-invoice-btn" onClick={handleAddInvoiceButton}><span className="icon">&#43; </span> New Invoice for <span className="clientname">{ currentClient.name}</span> </button>
        
      </div>
        <AddInvoiceDialog saveNewInvoice={handleSaveNewInvoice} setInvoiceAddCt={setInvoiceAddCt} />
        <Invoice invoice={currentInvoice} items={itemList} addItemButton={handleAddLineItemButton} />
        <AddItemDialog saveLineItem={handleSaveLineItem} setItemListAddCt={ setItemListAddCt} />
      </main>
      <Footer />
    </>
  )
}

export default App
