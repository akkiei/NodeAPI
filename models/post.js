const mong = require('mongoose');
const postSchema = new mong.Schema(
    {
        'title' : {
            type : String,
            required : "Title is required",
            minlength: 4,
            maxlength : 50
        },
        'body' : {
            type : String,
            required : "Body is required",
            minlength : 10,
            maxlength : 500

        }

    }
);

module.exports = mong.model("Post", postSchema);
