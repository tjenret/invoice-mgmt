import MyInfo from "./myInfoModel"
import Client from "./clientModel"
import Invoice from "./invoiceModel"
import Item from "./itemModel"

export default async function syncModels() {
  try {
    await MyInfo.sync()
    await Client.sync()
    await Invoice.sync()
    await Item.sync()
  }
  catch (error) {
    console.log(error)
  }
}