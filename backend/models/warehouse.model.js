const mongoose = require('mongoose')

const Schema = mongoose.Schema

const WarehouseSchema = new Schema({
    name: {type: String, trim: true, required: true}
})

WarehouseSchema.virtual('url').get(function() {
    return `/inventory/warehouse/${this._id}`
})

module.exports = mongoose.model('WarehouseModel', WarehouseSchema)
