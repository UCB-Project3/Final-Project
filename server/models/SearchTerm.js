var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SearchTermSchema = new Schema({
    term: {
        type: String,
        required: true
    }
});

var SearchTerm = mongoose.model("SearchTerm", SearchTermSchema);

module.exports = SearchTerm;