const db = require('../database')
const Employee = require('../models/employee');

db.connect();

const sortAndLimit = async () => {
  /**sorting and limiting the employee to documents */
  const aggregationResult = await Employee.aggregate([
    {
      $sort: {
        salary: -1
      },
    },
    {
      $limit: 3
    }
  ])

  console.log("the aggregation result is", aggregationResult)
}

sortAndLimit()
module.exports = sortAndLimit