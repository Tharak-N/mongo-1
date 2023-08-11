const db = require('../database')
const Employee = require('../models/employee');

db.connect()

const findingEmployee = async () => {
    /**find() will give the array of all the data which matches the given param */
    // let data = await Employee.find({ name: 'Tharak' })
    // let data = await Employee.find({})

    /**findOne() will give the first document of the all the finded array of documents */
    // let data = await Employee.findOne({ name: 'Tharak' })

    /**findById() will give the document which exactly matches the given document ID */
    // let data = await Employee.findById({ _id:"64d4c60843ee8805798ffc2d" })

    /**find() with projection will give the specific fields in the query returned documents */
    // let data = await Employee.find({ name: 'Tharak'}, { emailId:1 })

    let data = await Employee.find({})

    console.log("employee is", data)
}

findingEmployee()
module.exports = findingEmployee