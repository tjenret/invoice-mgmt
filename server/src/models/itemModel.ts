import { DataTypes } from 'sequelize'
import DB from '../data/db'
import Invoice from './invoiceModel'

const Item = DB.define(
  'Item',
  {
    itemid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    invoiceid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit_price: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    total_units: {
      type: DataTypes.NUMBER,
      defaultValue: 0
    },
  },
  {
    tableName: 'items',
    
  },
)
  Item.hasOne(Invoice, { foreignKey: 'invoiceid' })

export default Item