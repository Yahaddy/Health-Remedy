const mongoose = require( 'mongoose' )

const saleSchema = mongoose.Schema({
	saleDate: {
        type: Date
    }
} )

const sale = mongoose.model( 'sale', saleSchema )

module.exports = sale