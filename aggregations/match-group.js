const db = require('../database');
const Employee = require('../models/employee');

db.connect()

class AddingEmployee {
    employeeSchemaGroup = []
    
    addingEmployee(mockData) {
        mockData.forEach((element) => {
            this.employeeSchemaGroup.push(
                new Employee({
                    employee_id: element.employee_id,
                    first_name: element.first_name,
                    last_name: element.last_name,
                    position: element.position,
                    department: element.department,
                    salary: element.salary
                })
                )
            })
            return this;
    }
        
    getEmployeeDetails(){
        return this.employeeSchemaGroup
    }
        
}
    
/**Mock data for working on mongo DB aggregations */
const mockData = 
[
    {
      employee_id: 1,
      first_name: "John",
      last_name: "Doe",
      position: "Software Engineer",
      department: "Engineering",
      salary: 80000
    },
    {
      employee_id: 2,
      first_name: "Jane",
      last_name: "Smith",
      position: "Marketing Manager",
      department: "Marketing",
      salary: 75000
    },
    {
      employee_id: 3,
      first_name: "Michael",
      last_name: "Johnson",
      position: "Sales Associate",
      department: "Sales",
      salary: 60000
    },
    {
        employee_id: 101,
        first_name: "Alice",
        last_name: "Johnson",
        position: "Software Engineer",
        department: "Engineering",
        salary: 90000
    },
    {
        employee_id: 102,
        first_name: "Bob",
        last_name: "Smith",
        position: "Data Scientist",
        department: "Data Science",
        salary: 85000
    },
    {
        employee_id: 103,
        first_name: "Carol",
        last_name: "Williams",
        position: "Marketing Manager",
        department: "Marketing",
        salary: 75000
    },
    {
        employee_id: 104,
        first_name: "David",
        last_name: "Brown",
        position: "Sales Associate",
        department: "Sales",
        salary: 60000
    },
    {
        employee_id: 105,
        first_name: "Ella",
        last_name: "Davis",
        position: "HR Specialist",
        department: "Human Resources",
        salary: 65000
    },
    {
        employee_id: 106,
        first_name: "Frank",
        last_name: "Miller",
        position: "Product Manager",
        department: "Product Management",
        salary: 95000
    },
    {
        employee_id: 107,
        first_name: "Grace",
        last_name: "Wilson",
        position: "Customer Support",
        department: "Customer Service",
        salary: 55000
    },
    {
        employee_id: 108,
        first_name: "Henry",
        last_name: "Moore",
        position: "Financial Analyst",
        department: "Finance",
        salary: 78000
    },
    {
        employee_id: 109,
        first_name: "Ivy",
        last_name: "Clark",
        position: "Graphic Designer",
        department: "Design",
        salary: 60000
    },
    {
        employee_id: 110,
        first_name: "Jack",
        last_name: "Anderson",
        position: "IT Specialist",
        department: "IT",
        salary: 70000
    }  
]

const matchAndGroup = async () => {

    // console.log(
    //     new AddingEmployee()
    //     .addingEmployee(mockData)
    //     .getEmployeeDetails()
    // )

    /**Dropping a collection */
    // Employee.collection.drop(function (err) {
    //     if(err){
    //         console.log(error)
    //     }
    //     else {
    //         console.log("colletion dropped successfully")
    //     }
    // })

    /**Inserting multiple employees data into the database */
    // let data = await Employee.insertMany(
    //     new AddingEmployee()
    //     .addingEmployee(mockData)
    //     .getEmployeeDetails()
    // )
    // console.log(data)

    /**Find all the employees data and display them */
    let findData = await Employee.find({})
    console.log("the find data is", findData)

    /**filter the docs with name and grouping them to get the position */
    let aggregation = await Employee.aggregate([
        {
            $match: { salary: {$gt: 80000 }}
        },
        { 
            $group: { _id: "$position" }
        },
    ])
    console.log("the aggregatoion reuslt is", aggregation)

}

matchAndGroup()
module.exports = matchAndGroup