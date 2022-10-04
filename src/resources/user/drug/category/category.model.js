const mongoose = require( 'mongoose' )

const categorySchema = mongoose.Schema({
	categoryType: {
        type: String
    }
} )

const category = mongoose.model( 'category', categorySchema )

module.exports = category