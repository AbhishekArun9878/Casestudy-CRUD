const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const employeeSchema = new Schema({  
name:String,
location: String,
position: String,
salary: Number,
}, {versionKey: false});

const employeeData = mongoose.model('employees', employeeSchema);

module.exports = employeeData;