const mongoose = require( 'mongoose' )

const patientSchema = mongoose.Schema({
	patientAge: {
        type: Int
    }
} )

const patient = mongoose.model( 'patient', patientSchema )

module.exports = patient