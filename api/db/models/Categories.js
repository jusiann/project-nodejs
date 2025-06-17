const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean, 
        default: true
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})

class Categories extends mongoose.Model {

}

schema.loadClass(Categories);
module.exports = mongoose.model("categories", schema);