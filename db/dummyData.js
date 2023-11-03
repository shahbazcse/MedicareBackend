const data = {
  patients: [
    {
      "name": "John Doe",
      "age": 45,
      "gender": "Male",
      "contact": 1234567890,
      "medicalHistory": "77 yo woman – swelling of tongue and difficulty breathing and swallowing",
      "ward": "W101"
    },
    {
      "name": "Jane Smith",
      "age": 32,
      "gender": "Female",
      "contact": 9876543210,
      "medicalHistory": "47 yo woman – abdominal pain",
      "ward": "W102"
    },
    {
      "name": "Mike Johnson",
      "age": 50,
      "gender": "Male",
      "contact": 5551234567,
      "medicalHistory": "56 yo man – shortness of breath",
      "ward": "W103"
    },
    {
      "name": "Emily Wilson",
      "age": 28,
      "gender": "Female",
      "contact": 7890123456,
      "medicalHistory": "82 yo man – new onset of fever, HTN, rigidity and altered mental status",
      "ward": "W104"
    },
    {
      "name": "David Brown",
      "age": 60,
      "gender": "Male",
      "contact": 4567890123,
      "medicalHistory": "76 yo man – chest pain",
      "ward": "W105"
    },
    {
      "name": "Sarah Davis",
      "age": 42,
      "gender": "Female",
      "contact": 6543210987,
      "medicalHistory": "24 yo man – bilateral knee pain",
      "ward": "W106"
    },
    {
      "name": "Robert Lee",
      "age": 38,
      "gender": "Male",
      "contact": 2224445678,
      "medicalHistory": "51 yo man – dyspnea on exertion",
      "ward": "W107"
    },
    {
      "name": "Olivia Harris",
      "age": 55,
      "gender": "Female",
      "contact": 7779993333,
      "medicalHistory": "47 yo woman – chest pain, SOB",
      "ward": "W101"
    },
    {
      "name": "William Clark",
      "age": 48,
      "gender": "Male",
      "contact": 1112223333,
      "medicalHistory": "61 yo man – increased weakness and slurred speech",
      "ward": "W102"
    },
    {
      "name": "Sophia Turner",
      "age": 30,
      "gender": "Female",
      "contact": 9998887777,
      "medicalHistory": "77 yo woman – swelling of tongue and difficulty breathing and swallowing",
      "ward": "W103"
    },
    {
      "name": "John Doe",
      "age": 45,
      "gender": "Male",
      "contact": 1234567890,
      "medicalHistory": "77 yo woman – swelling of tongue and difficulty breathing and swallowing",
      "ward": "W101"
    },
    {
      "name": "Jane Smith",
      "age": 32,
      "gender": "Female",
      "contact": 9876543210,
      "medicalHistory": "47 yo woman – abdominal pain",
      "ward": "W102"
    },
    {
      "name": "Mike Johnson",
      "age": 50,
      "gender": "Male",
      "contact": 5551234567,
      "medicalHistory": "56 yo man – shortness of breath",
      "ward": "W103"
    },
    {
      "name": "Emily Wilson",
      "age": 28,
      "gender": "Female",
      "contact": 7890123456,
      "medicalHistory": "82 yo man – new onset of fever, HTN, rigidity and altered mental status",
      "ward": "W104"
    },
    {
      "name": "David Brown",
      "age": 60,
      "gender": "Male",
      "contact": 4567890123,
      "medicalHistory": "76 yo man – chest pain",
      "ward": "W105"
    },
    {
      "name": "Sarah Davis",
      "age": 42,
      "gender": "Female",
      "contact": 6543210987,
      "medicalHistory": "24 yo man – bilateral knee pain",
      "ward": "W106"
    },
    {
      "name": "Robert Lee",
      "age": 38,
      "gender": "Male",
      "contact": 2224445678,
      "medicalHistory": "51 yo man – dyspnea on exertion",
      "ward": "W107"
    },
    {
      "name": "Olivia Harris",
      "age": 55,
      "gender": "Female",
      "contact": 7779993333,
      "medicalHistory": "47 yo woman – chest pain, SOB",
      "ward": "W101"
    },
    {
      "name": "William Clark",
      "age": 48,
      "gender": "Male",
      "contact": 1112223333,
      "medicalHistory": "61 yo man – increased weakness and slurred speech",
      "ward": "W102"
    },
    {
      "name": "Sophia Turner",
      "age": 30,
      "gender": "Female",
      "contact": 9998887777,
      "medicalHistory": "77 yo woman – swelling of tongue and difficulty breathing and swallowing",
      "ward": "W103"
    },
  ],
  wards: [
    {
      "wardNo": "W101",
      "capacity": 20,
      "department": "pediatrics"
    },
    {
      "wardNo": "W102",
      "capacity": 25,
      "department": "surgery"
    },
    {
      "wardNo": "W103",
      "capacity": 18,
      "department": "cardiology"
    },
    {
      "wardNo": "W104",
      "capacity": 30,
      "department": "medicine"
    },
    {
      "wardNo": "W105",
      "capacity": 22,
      "department": "neurology"
    },
    {
      "wardNo": "W106",
      "capacity": 15,
      "department": "emergency"
    },
    {
      "wardNo": "W107",
      "capacity": 65,
      "department": "general"
    },
  ]
  ,
}

const seedData = (addNew, type) => {
  if (type === "patients") {
    data.patients.forEach((patient) => addNew(patient));
  } else if (type === "wards") {
    data.wards.forEach((ward) => addNew(ward));
  }
  console.log("Seeded...")
}

module.exports = seedData;