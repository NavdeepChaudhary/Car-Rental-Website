import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    uid: { type: String, required: true, unique: true },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // In production, this should be hashed
    mobileNumber: {
        type: String,
        default: undefined,
        validate: {
            validator: (value) => !value || /^[6-9]\d{9}$/.test(value),
            message: "Mobile number must be 10 digits and start with 6, 7, 8, or 9.",
        },
    },
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

// module.exports = mongoose.model('User', userSchema);
export default mongoose.model("User", userSchema);