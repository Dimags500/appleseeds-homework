const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

// ------------------------------------------ 1

function findPerson(type, id) {
  if (type == "teacher") {
    const teacher = school.teachers.find((t) => t.id == id);
    return teacher !== undefined ? teacher : "Not exsist";
  }
  if (type == "student") {
    const student = school.students.find((s) => s.id == id);
    return student !== undefined ? student : "Not exsist";
  } else return "Wrong type";
}

// console.log(findPerson("studefnt", 01));

// ------------------------------------------ 2

function assignStudent(student_id, subject) {
  const teachers = school.teachers
    .map((x) => x.subjects)
    .join()
    .split(",");

  console.log(teachers);
}

assignStudent(12, "ethics");

// first available teacher who teaches that subject --- find in subjects
//  and who is not in full                          ---- capasityleft >= students.len

// ------------------------------------------ 3
