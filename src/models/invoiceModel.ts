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
      type: DataTypes.STRING,
      allowNull: false,
    },
    shipping: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    fees: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amt_paid: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    date_paid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'invoices',
    
  },
)
  Client.hasOne(Invoice, { foreignKey: 'clientid' })

export default Invoice