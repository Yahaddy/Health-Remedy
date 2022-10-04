const mongoose = require( 'mongoose' )

const itemSchema = mongoose.Schema({
	itemQuantity: {
        type: Number
    }
} )

const item = mongoose.model( 'item', itemSchema )

module.exports = item

