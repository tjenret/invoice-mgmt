function ChangeClientDialog(props: any) {

  function closeDialog(e: any) {
    e.target.closest("dialog").close()
  }

  function changeClient(e: any) {
    props.handleClientChange(e)
    closeDialog(e)
  }

  return (
    <dialog id="change_client_dialog">

      <select name="client-list" id="client-list" onChange={(e) => changeClient(e)}>
        <option value="">--Select a client--</option>
        {props.clientList.map((client: any) => {
          return (
            <option key={client.clientid} value={client.clientid}>{client.name}</option>
          )
        })}
      </select>

      <div className="formbuttons">
        {/* <button type="button" onClick={(e) => closeDialog(e)}>Cancel</button> */}
        <button type="button" onClick={(e) => closeDialog(e)}>Close</button>
      </div>

    </dialog>
  )
}

export default ChangeClientDialog