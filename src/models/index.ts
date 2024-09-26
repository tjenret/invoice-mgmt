import Client from "./clientModel";
import DB from "../data/db"
import MyInfo from "./myInfoModel";
import Invoice from "./invoiceModel";

export default async function syncModels() {
  try {
    await MyInfo.sync();
    await Client.sync();
    await Invoice.sync();

    console.log(await DB.authenticate())
  }
  catch (error) {
    console.log(error)
  }
}