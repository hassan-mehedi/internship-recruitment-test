const kidneysInStock = 5;

const patients = [
    {
        firstName: "Shakira",
        lastName: "Hossain",
        patientID: "007",
        diseases: ["COVID", "1-kidney", "3/4-dissolved-brain"],
        isAdmitted: true,
    },
    {
        firstName: "Uzumaki",
        lastName: "Naruto",
        patientID: "008",
        diseases: ["Obesity"],
        isAdmitted: true,
    },
    {
        firstName: "Sheikh",
        lastName: "Selim Ahmed",
        patientID: "006",
        diseases: ["Broken heart", "Depression"],
        isAdmitted: true,
    },
    {
        firstName: "Rafsan",
        lastName: "Wayne",
        patientID: "009",
        diseases: ["COVID", "1-kidney", "Impaired vision"],
        isAdmitted: false,
    },
];

// Task - 1
// Listing all the patients in order of thier patient IDs

const sortThePatients = () => {
    const sortedPatientsList = patients.sort((a, b) => {
        return a.patientID - b.patientID;
    });
    // printing all the patients
    console.log(sortedPatientsList);
};

sortThePatients();
