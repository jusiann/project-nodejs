const MONGOOSE = require("mongoose")

const schema = MONGOOSE.Schema({
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    isActive: {
        type: Boolean, default: true
    },
    firstName: String,
    lastName: String,
    phoneNumber: String
},{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

class Users extends MONGOOSE.Model {

}

schema.loadClass(Users);
module.exports = MONGOOSE.model("users", schema);