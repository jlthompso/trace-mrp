const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PartInstanceSchema = new Schema({
    part: {type: Schema.Types.ObjectId, ref: 'Part', required: true},
    serialNumber: String,
    lot: String,
    scrap: {type: Boolean, default: false},
    history: {type: [String], default: [`${Date.now()}: Part created`]}
})

PartInstanceSchema.virtual('url').get(function() {
    return `/inventory/partinstance/${this._id}`
})

module.exports = mongoose.model('PartInstanceModel', PartInstanceSchema)
