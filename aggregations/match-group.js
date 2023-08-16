const db = require('../database');
const Employee = require('../models/employee');

db.connect()

const employee1 = new Employee({
    name: 'rajesh',
    emailId: 'rajesh3@gmail.com',
    companyId: 1
})

const employee2 = new Employee({
    name: 'rajesh',
    emailId: 'rajesh1233@gmail.com',
    companyId: 2
})

const matchAndGroup = async () => {
    // let data = await Employee.insertMany([employee1, employee2])
    // console.log(data)

    /**filter the docs with name rajesh and grouping them to get the email id */
    let aggregation = await Employee.aggregate([
        {
            $match: {$and: [ {name: 'rajesh'}, {companyId: {$gt: 1}} ]}
        },
        {
            $group: { _id: "$emailId" }
        },
    ])
    console.log("the aggregatoion reuslt is", aggregation)

}

matchAndGroup()
module.exports = matchAndGroup