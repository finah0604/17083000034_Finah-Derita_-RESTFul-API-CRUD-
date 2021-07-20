const mongoose = require('mongoose')

const BiodataSchema = mongoose.Schema({
	nama: {
		type: String,
		require: true
	},
	alamat: {
		type: String,
		require: true
    },
    pekerjaan: {
        type: String,
        require: true
    },
    hobi: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
	},
	tglTerdaftar: {
		type: Date,
		default: Date.now
	}
})


module.exports = mongoose.model('Biodata', BiodataSchema)