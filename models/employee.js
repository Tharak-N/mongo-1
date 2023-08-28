
const { Schema, model } = require('mongoose')

const employeeSchema = new Schema({
    employee_id: { type: Number, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    position: { type: String },
    department: { type: String },
    salary: { type: Number }
})

module.exports = model('Employee', employeeSchema)