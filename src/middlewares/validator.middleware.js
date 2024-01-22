/**
    * Middleware function for validating request data against a specified schema.
    * @param {Object} schema - Validation schema created with the 'zod' library.
    * @returns {Function} - Express middleware function.
*/

const validateSchema = (schema) => (req, res, next) =>{
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        const { errors } = error
        return res.status(400).json(errors.map(error => error.message))
    }
}

export default validateSchema