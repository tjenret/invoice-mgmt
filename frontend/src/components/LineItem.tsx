export default function Invoice(props: any) {
  return (
    <tr className="line-item">
      <td className="description">{props.item.description}</td>
      <td className="total-units">{props.item.total_units}</td>
      <td className="unit-type">{props.item.unit_type}</td>
      <td className="unit-price">$ {props.item.unit_price}</td>
      <td className="cost">$ {props.item.unit_price * props.item.total_units}</td>
    </tr>
  )
}