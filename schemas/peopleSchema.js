import { Schema, model } from "mongoose";

const peopleSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  isAdult: { type: Boolean, default: true },
  adress: {
    postalCode: { type: String, required: true },
    streetHouseNumber: { type: String, required: true },
    streetName: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now() },
});

const People = model("People", peopleSchema);

export default People;
