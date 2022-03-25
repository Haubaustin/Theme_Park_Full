const { Schema } = require('mongoose')

const Package = new Schema(
  {
    deal_name: { type: String, required: true },
    description: { type: String, required: true },
    money_saved: { type: String, required: true },
    park: { type: Schema.Types.ObjectId, ref: 'parks' }
  },
  { timestamps: true }
)

module.exports = Package