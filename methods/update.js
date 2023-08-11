
const db = require('../database')
const Employee = require('../models/employee')

db.connect()

const updatingEmployee = async () => {
    /** updates only the first document from the returned query data */
    // let data = await Employee.updateOne({ emailId: 'nadendlathara@gmail.com'}, { emailId: 'nadendla@gmail.com'})

    /**updates all the documents from the returned query data */
    // let data = await Employee.updateMany({name: 'Tharak'}, { name: 'Thara'})

    /** This applies the findone query first and then apply the update query to the first document which is returned by findone query*/
    // let data = await Employee.findOneAndUpdate({ emailId: 'nadendla@gmail.com'}, { emailId: 'nadendlatharak8@gmail.com'})
    
    /**This applies the findById query first and then apply the update query to the returned document */
    // let data = await Employee.findByIdAndUpdate("64d5d6acd825668d48439656", { name: 'Thar'})


    /**updateOne using Native Mongo commands */
    let data = await Employee.updateOne(
        { companyId: 3 },
        {
            $set: { name: 'Tharakaaa'}
        }
    )
    console.log(data)
}

updatingEmployee()
module.exports = updatingEmployee