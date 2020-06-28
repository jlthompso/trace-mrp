const mongoose = require('mongoose')

const Schema = mongoose.Schema

const InventoryLocationSchema = new Schema({
    name: {type: String, required: true},
    parts: [{type: Schema.Types.ObjectId, ref: 'PartInstance'}],
    warehouse: {type: Schema.Types.ObjectId, ref: 'Warehouse', required: true}
})

InventoryLocationSchema.virtual('url').get(function() {
    return `/inventory/inventorylocation/${this._id}`
})

module.exports = mongoose.model('InventoryLocationModel', InventoryLocationSchema)
