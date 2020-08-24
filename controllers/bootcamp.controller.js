const asyncHandler = require('../middlewares/async.middleware')
const Bootcamp = require('../models/bootcamp.model')

// desc  : gets all bootcamps
// route : GET /api/bootcamps | public
exports.getBootcamps = asyncHandler( async (req, res, next) => {
    const bootcamps = await Bootcamp.find()
    res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps })
})

// desc  : get single bootcamp by Id
// route : GET /api/bootcamps/:id | public
exports.getBootcamp = asyncHandler( async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id)
    res.status(200).json({ success: true, data: bootcamp })
})

// desc  : creates a bootcamp
// route : POST /api/bootcamps | private
exports.createBootcamp = asyncHandler( async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body)
    res.status(200).json({ success: true, data: bootcamp })
})

// desc  : updates a bootcamp
// route : PUT /api/bootcamps/:id
exports.updateBootcamp = asyncHandler( async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({ success: true, data: bootcamp })
})

// desc  : deletes a bootcamp
// route : DELETE /api/bootcamps/:id
exports.deleteBootcamp = asyncHandler( async (req, res, next) => {
    await Bootcamp.findByIdAndDelete(req.params.id)
    res.status(200).json({ success: true, data: {} })
})