const mongoose = require('mongoose')

const EmergencyContact = Schema(
  {
    emergencycontact:Number,
    emergencyname:String,
    emergencyrelationship:String,
  }
)

const Patient = mongoose.Schema(
  {
    PatientId:String,
    Surname:String,
    OtherNames:String,
    Gender:String,
    EmergencyContact:emergencycontact,emergencyname,emergencyrelationship,
  }
)

export const PatientModel=model("Patient",Patient)