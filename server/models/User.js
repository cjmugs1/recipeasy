// add a username and language (language set to English for MVP)
// combine firstName and lastName into just name
// add a "recipeID" array instead of "order" for own recipes
// -------------------------

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email address']
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 16,
    validate: {
      validator: function (value) {
        // regex to require at least one special character and number in password
        const regexSpecialChar = /[-!#@$%^&*()_+|~=`{}[\]:";'<>?,.\/]/;
        const regexNumber = /\d/;
        return regexSpecialChar.test(value) && regexNumber.test(value);
      },
      message:
        "Password must contain at least one special character and one number and be 8-16 characters long.",
    },
  },
  language: {
    type: String,
    default: "en"
  },
  recipes: [
    //recipe array
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});

// set up pre-save middleware to create password
UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;