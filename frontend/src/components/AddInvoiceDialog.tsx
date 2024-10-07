function AddInvoiceDialog(props:any) {

  function closeDialog(e:any) {
    e.target.closest("dialog").close()
  }

  function addInvoice(e:any) {
    props.saveNewInvoice()
    props.setInvoiceAddCt((prevCt:number) => prevCt + 1)
    closeDialog(e)
  }

  return (
    <dialog id="add_invoice_dialog">
      <form>
        <h3>Add An Invoice</h3>
        <div className="form-group">
          <label htmlFor="deadline">Due Date</label>
          <input type="date" name="deadline" />
          <span>You can change or remove this later.</span>
        </div>


        <div className="formbuttons">
          <button type="reset">Clear</button>
          <button type="button" onClick={(e) => closeDialog(e)}>Cancel</button>
          <button type="button" onClick={(e) => addInvoice(e)}>Save and Add Line Items</button>
        </div>
      </form>
    </dialog>
  )
}

export default AddInvoiceDialog
