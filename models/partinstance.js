const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PartInstanceSchema = new Schema({
    part: {type: Schema.Types.ObjectId, ref: 'Part', required: true},
    serialNumber: {type: String, trim: true},
    lot: {type: String, trim: true},
    scrap: {type: Boolean, default: false},
    history: {type: [String], default: [`${Date.now()}: Part created`]}
})

PartInstanceSchema.virtual('url').get(function() {
    return `/inventory/partinstance/${this._id}`
})

module.exports = mongoose.model('PartInstanceModel', PartInstanceSchema)
