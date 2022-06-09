const db = require("../lib/prisma");

module.exports.createStudent = async ({ firstname, campus }) => {
  return await db.student.create({
    data: { firstname, lastname: "toto", campus },
  });
};

module.exports.getStudents = () => db.student.findMany({});

module.exports.deleteOneStudent = (id) => {
  return db.student.delete({
    where: {
      id: parseInt(id, 10),
    },
  });
};
