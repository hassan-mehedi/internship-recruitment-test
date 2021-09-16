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
    // sorting patients according to their id
    const sortedPatientsList = patients.sort((a, b) => {
        return a.patientID - b.patientID;
    });
    // printing all the patients
    console.log("List of patients by their id:");
    console.log(sortedPatientsList);
};

// Calling the function

// sortThePatients();

// Task - 2
// Listing and admitting the patients who are not admitted

const admittPatient = () => {
    // finding not admitted patients and storing the list

    const notAdmittedPatients = patients.filter((patient) => {
        return !patient.isAdmitted;
    });
    // printing the list
    console.log("List of patients who are not admitted:");
    console.log(notAdmittedPatients);

    // admitting the patients

    notAdmittedPatients.map((patient) => {
        patient.isAdmitted = true;
    });
    // printing the list
    console.log("After admitting the patient:");
    console.log(notAdmittedPatients);
};

// Calling the function

// admittPatient();

const checkDisease = (patient) => {
    let flag = false;
    for (let i in patient.diseases) {
        if (patient.diseases[i] === "1-kidney") {
            flag = true;
            break;
        }
    }
    return flag;
};

const findPatients = () => {
    const needKidney = patients.filter((patient) => {
        return checkDisease(patient);
    });

    console.log("List of patients who need kidneys");
    console.log(needKidney);

    console.log(
        `Number of patients needed for finishing the kedney stock is ${
            kidneysInStock - needKidney.length
        }`
    );
};

findPatients();
