const { Schema } = require('mongoose')

const Park = new Schema (
{
    name: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true },
    avg_price: { type: String, required: true },
    image: { type: String, required: true }
},
{ timestamps: true }

)

module.exports = Park