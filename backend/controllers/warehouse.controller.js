const Warehouse = require('../models/warehouse.model')

// Display list of all Warehouses
exports.warehouse_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Warehouse list')
}

// Display detail page for a specific Warehouse
exports.warehouse_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Warehouse detail: ' + req.params.id)
}

// Display Warehouse create form on GET
exports.warehouse_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Warehouse create GET')
}

// Handle Warehouse create on POST
exports.warehouse_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Warehouse create POST')
}

// Display Warehouse delete form on GET
exports.warehouse_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Warehouse delete GET')
}

// Handle Warehouse delete on POST
exports.warehouse_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Warehouse delete POST')
}

// Display Warehouse update form on GET
exports.warehouse_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Warehouse update GET')
}

// Handle Warehouse update on POST
exports.warehouse_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Warehouse update POST')
}