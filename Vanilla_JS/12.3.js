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

// ----------------------------------------------------------------- 1

// function findPerson(type, id) {
//   if (type == "teacher") {
//     const teacher = school.teachers.find((t) => t.id == id);
//     return teacher !== undefined ? teacher : "Not exsist";
//   }
//   if (type == "student") {
//     const student = school.students.find((s) => s.id == id);
//     return student !== undefined ? student : "Not exsist";
//   } else return "Wrong type";
// }

// console.log(findPerson("studefnt", 01));

// ---------------------------------------------------------------- 2

// function assignStudent(student_id, subject) {
//   let available_teachers = school.teachers.filter((t) => t.capacityLeft > 0);

//   let teacher_with_required_subject = available_teachers.find((s) =>
//     s.subjects.includes(subject)
//   );

//   if (
//     available_teachers === undefined ||
//     available_teachers.length < 1 ||
//     teacher_with_required_subject === undefined ||
//     teacher_with_required_subject.length < 1
//   ) {
//     console.log("Sorry, no available teachers left for " + subject);

//     return;
//   }

//   if (teacher_with_required_subject.capacityLeft >= 1) {
//     teacher_with_required_subject.capacityLeft--;
//     teacher_with_required_subject.students.push(student_id);
//     console.log(teacher_with_required_subject);

//     if (teacher_with_required_subject.capacityLeft == 0) {
//       console.log(`The ${subject} class is full`);
//       return;
//     }
//   }
// }

// assignStudent(12, "ethics");
// console.log("----------------------------");

// assignStudent(11, "ethics");
// console.log("----------------------------");
// assignStudent(13, "biology");

// console.log("----------------------------");
// assignStudent(10, "biology");

// console.log("----------------------------");
// assignStudent(11, "ethics");

// console.log("----------------------------");

// assignStudent(13, "biology");

// console.log("----------------------------");
// assignStudent(10, "physics");

// console.log("----------------------------");
// assignStudent(11, "physics");

// -------------------------------------------------------- 3

// function assignTeachersSubject(teacher_id, new_subject) {
//   const teacher = school.teachers.find((t) => t.id == teacher_id);

//   if (!teacher.subjects.includes(new_subject)) {
//     teacher.subjects.push(new_subject);
//   }
//   console.log(teacher);
// }

// assignTeachersSubject(2, "history");

// -------------------------------------------------------- 4

// function getAllStudentsWithNameStartsWithHorJ(data) {
//   return data.students.filter(
//     (s) => s.name.startsWith("H") || s.name.startsWith("J")
//   );
// }

// const students = getAllStudentsWithNameStartsWithHorJ(school);
// console.log(students);
