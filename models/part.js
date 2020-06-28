const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PartSchema = new Schema({
    number: {type: String, required: true},
    name: {type: String, required: true},
    unitOfMeasure: {type: String, default: 'each', required: true},
    revision: {type: String, default: 'NC', required: true}
})

PartSchema.virtual('url').get(function() {
    return `/inventory/part/${this._id}`
})

module.exports = mongoose.model('PartModel', PartSchema)
