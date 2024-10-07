function AddItemDialog(props:any) {

  function closeDialog(e:any) {
    e.target.closest("dialog").close()
  }

  function addItem(e:any) {
    props.saveLineItem()
    props.setItemListAddCt((prevCt:number) => prevCt + 1)
    closeDialog(e)
  }

  return (
    <dialog id="add_item_dialog">
      <form>
      <h3>Add A Line Item</h3>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" />
        </div>

        <div className="form-group">
          <label htmlFor="unit_price">Unit Price</label>
          <input type="text" name="unit_price" />
        </div>

        <div className="form-group">
          <label htmlFor="unit_type">Unit</label>
          <select name="unit_type" id="unit_type">
            <option value="">Unit Type</option>
            <option value="ea">ea</option>
            <option value="ml">ml</option>
            <option value="oz">oz</option>
            <option value="lb">lb</option>
            <option value="dozen">dozen</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="total_units">Quantity to Add</label>
          <input type="number" name="total_units" />
        </div>

        <div className="formbuttons">
          <button type="reset">Clear</button>
          <button type="button" onClick={(e) => closeDialog(e)}>Cancel</button>
          <button type="button" onClick={(e) => addItem(e)}>Add</button>
        </div>
      </form>
    </dialog>
  )
}

export default AddItemDialog
