const mongoose = require("mongoose");
const { validate } = require("./projectModel");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw Error("Please enter a valid email and password");
  }

  if (!validate.isEmail(email)) {
    throw Error("Please enter a valid email");
  }

  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("This email already used by another user");
  }

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash({ password, salt });

  const user = await this.create({ email, password: hash });

  return user;
};

module.exports = mongoose.model("User", userSchema);
