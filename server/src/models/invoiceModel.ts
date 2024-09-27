import { DataTypes } from 'sequelize'
import DB from '../data/db'
import Client from './clientModel'

const Invoice = DB.define(
  'Invoice',
  {
    invoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      
    },
    clientid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Due"
    },
    deadline: {
      type: DataTypes.DATE,
    },
    shipping: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    fees: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    subtotal: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    amt_paid: {
      type: DataTypes.NUMBER,
      defaultValue: 0
    },
    date_paid: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: 'invoices',
    
  },
)
  Client.hasOne(Invoice, { foreignKey: 'clientid' })

export default Invoice