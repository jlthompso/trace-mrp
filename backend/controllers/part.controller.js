const Part = require('../models/part.model')

// Display list of all Parts
exports.part_list = function(req, res, next) {
    Part.find()
        .exec(function (err, list_parts) {
            if (err) return next(err)
            //Successful, so render
            res.json(list_parts)
    }) 
}

// Display detail page for a specific Part
exports.part_detail = function(req, res, next) {
    Part.findById(req.params.id, function (err, part) {
        res.json(part)
    })
}

// Display Part create form on GET
exports.part_create_get = function(req, res, next) {
    //res.render('part_form', {title: 'traceMRP', path: `/inventory${req.path}`})
}

// Handle Part create on POST
exports.part_create_post = function(req, res, next) {
    let part = new Part(req.body)

    Part.findOne({'number': req.body.number})
        .exec(function(err, found_part) {
            if (err) return next(err)

            if (found_part) {
                // Part exists, redirect to its detail page
                //res.redirect(found_part.url)
                res.json(found_part)
            } else {
                part.save(function (err) {
                    if (err) return next(err)
                    // Part saved, redirect to its detail page
                    //res.redirect(part.url)
                    res.json(part)
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
    Part.findById(req.params.id, function (err, part) {
        res.json(part)
    })
}

// Handle Part update on POST
exports.part_update_post = function(req, res, next) {
    let part = new Part(req.body)
    part._id = req.params.id // This is required, or a new ID will be assigned!

    Part.findByIdAndUpdate(req.params.id, part, {}, function (err, thepart) {
        if (err) {return next(err)}
           // Successful - redirect to book detail page.
           res.json(part)
    })
}