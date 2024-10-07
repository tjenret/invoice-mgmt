export default function ClientInfo(props: any) {
  return (
    <div className="client-info address-info">
      <p className="name">{props.client.name}</p>
      <p className="address">{props.client.address}</p>
      <p className="city-state">{props.client.city}, {props.client.state} {props.client.zip} </p>
      <p className="phone">{props.client.phone}</p>
      <p className="email">{props.client.email}</p>
    </div>

  )
}