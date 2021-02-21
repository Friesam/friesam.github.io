const mongoose = require("../database");
const schema = {
    name: { type: mongoose.SchemaTypes.String, required: true },
    email: { type: mongoose.SchemaTypes.String, required: true },
    message: { 
        type: mongoose.SchemaTypes.String, 
        required: true
    }
};
const collectionName = "tribute"; // Name of the collection of documents
const tributeSchema = mongoose.Schema(schema);
const Tribute = mongoose.model(collectionName, tributeSchema);
module.exports = Tribute;

