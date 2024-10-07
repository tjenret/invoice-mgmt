export default function MyInfo(props:any) {
  return (
    <div className="my-info address-info">

      <p className="name">{props.info.name}</p>
      <p className="address">{props.info.address}</p>
      <p className="city-state">{props.info.city}, {props.info.state} {props.info.zip} </p>
      <p className="phone">{props.info.phone}</p>
      <p className="email">{props.info.email}</p>

    </div>
)
}