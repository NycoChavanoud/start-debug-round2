const { deleteOneStudent } = require("../../../models/student");

async function handler(req, res) {
  if (req.method === "DELET") {
    const studentToDelete = await deleteOneStudent(req.query.id);
    return res.status(201).send(studentToDelete);
  }
}

export default handler;
