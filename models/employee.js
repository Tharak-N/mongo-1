
const { Schema, model } = require('mongoose')

const employeeSchema = new Schema({
    name: { type: String },
    emailId: { type: String, unique: true, required: true },
    companyId: { type: Number }
})

module.exports = model('Employee', employeeSchema)