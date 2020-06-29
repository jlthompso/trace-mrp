const Part = require('../models/part')

// Display list of all Parts
exports.part_list = function(req, res) {
    res.render('inventory', {title: 'traceMRP', path: `/inventory${req.path}`})
}

// Display detail page for a specific Part
exports.part_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Part detail: ' + req.params.id)
}

// Display Part create form on GET
exports.part_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Part create GET')
}

// Handle Part create on POST
exports.part_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Part create POST')
}

// Display Part delete form on GET
exports.part_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Part delete GET')
}

// Handle Part delete on POST
exports.part_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Part delete POST')
}

// Display Part update form on GET
exports.part_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Part update GET')
}

// Handle Part update on POST
exports.part_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Part update POST')
}
