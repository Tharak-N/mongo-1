const { default: mongoose, Schema } = require('mongoose');
const db = require('../database')
const Employee = require('../models/employee');

db.connect();

const out = async () => {
  const aggregationResult = await Employee.aggregate([
    {
      $match: {
        salary: { $gt: 80000 }
      }
    },
    {
      $project: {
        first_name:1,
        employee_id: 1,
        salary: 1,
        _id: 0
      }
    }, 
    {
      $sort: {
        // _id: 1,
        salary: 1
      }
    },
    {
      $group: {
        _id: "$employee_id",
        details: { $push: { employee_name: "$first_name", employee_salary: "$salary"} }
      }
    },
    {
      $limit: 3
    },
    {
      $out: "highest_paid_employees"
    }
  ])

  const highest_paid_employees = mongoose.model('highest_paid_employees', new Schema({ _id: Number }))
  const highest_paid_employees_result = await highest_paid_employees.find({})

  highest_paid_employees_result.forEach((item) => {
    console.log(
      "each item is", item,
    )
  })

}

out()
module.exports = out