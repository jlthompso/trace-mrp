const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PartSchema = new Schema({
    number: {type: String, trim: true, required: true},
    name: {type: String, trim: true, required: true},
    unitOfMeasure: {type: String, default: 'each', trim: true, required: true},
    revision: {type: String, default: 'NC', required: true}
})

PartSchema.virtual('url').get(function() {
    return `/inventory/part/${this._id}`
})

module.exports = mongoose.model('PartModel', PartSchema)
