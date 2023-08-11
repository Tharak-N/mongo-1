
const db = require('../database')
const Employee = require('../models/employee');

db.connect()

const employee = new Employee({
    name: "Tharak",
    emailId: "nadendlatharak23@gmail.com",
    companyId: 3,
})

const addingDocument = async () => {
    /**save() is used to save the document into DB, it is used everytime when we want to save the document 
     * if the document is not present in DB then it shall create else it shall update the existing document
     */
    // let data = await employee.save()

    /**insertOne() is not present on model in mongoose, so we instead use save() or create() methods */
    // let data = await Employee.insertOne(employee)

    /**create() method is used to create the document into the DB */
    let data = await Employee.create(employee)

    /**insertMany() method is used to insert many documents into the DB */
    // let data = await Employee.insertMany([employee])

    console.log("data is", data)
}

addingDocument()
module.exports = addingDocument


