import People from "./schemas/peopleSchema.js";

export const addPeople = async (req, res) => {
  try {
    const newPersonToSave = req.body;
    await People.create(newPersonToSave);
    res.status(201).send("The people was created!");
  } catch (error) {
    res.status(501).send(error);
  }
};
