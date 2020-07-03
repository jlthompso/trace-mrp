const Part = require('../models/part')

// Display list of all Parts
exports.part_list = function(req, res, next) {
    Part.find()
        .exec(function (err, list_parts) {
            if (err) return next(err)
            //Successful, so render
            res.render('part_list', {title: 'traceMRP', part_list: list_parts, path: `/inventory${req.path}`})
    }) 
}

// Display detail page for a specific Part
exports.part_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Part detail: ' + req.params.id)
}

// Display Part create form on GET
exports.part_create_get = function(req, res, next) {
    res.render('part_form', {title: 'traceMRP', path: `/inventory${req.path}`})
}

// Handle Part create on POST
exports.part_create_post = function(req, res, next) {
    console.log(req.body)
    let part = new Part({
        number: req.body.partNumber,
        name: req.body.partName,
        unitOfMeasure: req.body.unitOfMeasure,
        revision: req.body.partRev
    })

    Part.findOne({'number': req.body.number})
        .exec(function(err, found_part) {
            if (err) return next(err)

            if (found_part) {
                // Part exists, redirect to its detail page
                res.redirect(found_part.url)
            } else {
                part.save(function (err) {
                    if (err) return next(err)
                    // Part saved, redirect to its detail page
                    res.redirect(part.url)
                })
            }
        })
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
