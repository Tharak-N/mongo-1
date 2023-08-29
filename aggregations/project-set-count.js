const db = require('../database')
const Employee = require('../models/employee');

db.connect();

const projectSetCount = async () => {
  const aggrgationResult = await Employee.aggregate([

    {
      $set: {
        id: "$employee_id"
      }
    },
    {
      $sort: {
        id: 1
      }
    },
    {
      $project: { 
        position:1, 
        salary: 1,
        _id: 0,
        id: 1,
        dep: "$department"
      }
    },
    // {
    //   $count: "total_docs"
    // }

  ])
  console.log("the aggregation result is", aggrgationResult)
}

projectSetCount()
module.exports = projectSetCount