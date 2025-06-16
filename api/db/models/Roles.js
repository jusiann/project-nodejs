const MONGOOSE = require("mongoose")

const schema = MONGOOSE.Schema({
    roleName: {
        type: String, required: true
    },
    isActive: {
        type: Boolean, default: true
    },
    createdBy: {
        type: MONGOOSE.SchemaTypes.ObjectId,
        required: true
    }
},{
    versionKey : false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

class Roles extends MONGOOSE.Model {

}

schema.loadClass(Users);
module.exports = MONGOOSE.model("roles", schema);