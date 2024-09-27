import MyInfo from "./myInfoModel"
import Client from "./clientModel"
import Invoice from "./invoiceModel"

export default async function syncModels() {
  try {
    await MyInfo.sync()
    await Client.sync()
    await Invoice.sync()
  }
  catch (error) {
    console.log(error)
  }
}