const mongoose = require( 'mongoose' )

const drugSchema = mongoose.Schema({
	drugCategory: {
        type: String
    }
} )

const drug = mongoose.model( 'drug', drugSchema )

module.exports = drug