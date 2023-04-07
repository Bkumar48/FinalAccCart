const mongoose = require("mongoose");
const ticketSchema = new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId, ref:"users", default:""},
  name:{type:String, default:""},
  assignedto:{type:String,enum: ['admin','customer'], default:""},
  email: { type: String, default:"" },
  contact:{type:String, default:""},
  subject:{type:String, default:""},
  query:{type:String, default:""},
  ticketId:{type:String, default:""},
  ticketBy:{type:String, enum: ['admin','customer'], default:""},
  status:{type:String, enum: ['open','closed','escalated', 'on-hold'], default:""},
  read_status:{type:String, enum: ['read','unread'], default:""},
  conversation:[{
    message:{type:String, default:""},
    repliedBy:{type:String, default:""},
    date:{type:Date, default:Date.now()},
    read_status:{type:String, enum: ['read','unread'], default:""},
  }],

},
{timestamps: true}
);

module.exports = mongoose.model("ticket", ticketSchema); 