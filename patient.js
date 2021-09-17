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
    console.log("-> List of patients by their id:");
    console.log(sortedPatientsList);
};

// Calling the function
sortThePatients();

// Task - 2
// Listing and admitting the patients who are not admitted

const admittPatient = () => {
    // finding not admitted patients and storing the list

    const notAdmittedPatients = patients.filter((patient) => {
        return !patient.isAdmitted;
    });
    // printing the list
    console.log("-> List of patients who are not admitted:");
    console.log(notAdmittedPatients);

    // admitting the patients

    notAdmittedPatients.map((patient) => {
        patient.isAdmitted = true;
    });
    // printing the list
    console.log("-> After admitting the patient:");
    console.log(notAdmittedPatients);
};

// Calling the function
admittPatient();

// Task - 3
// Find the patients who need kidney

// Function to check if a patient need kidney
const checkDiseaseForKidney = (patient) => {
    let flag = false;
    for (let i in patient.diseases) {
        if (patient.diseases[i] === "1-kidney") {
            flag = true;
            break;
        }
    }
    return flag;
};

// Function to find information of patients who need kidney
const findKidneyPatients = () => {
    const needKidney = patients.filter((patient) => {
        return checkDiseaseForKidney(patient);
    });
    // printing the information of patients
    console.log("-> List of patients who need kidneys");
    console.log(needKidney);

    // task - 3a
    // printing the number of patients we need to finish the kidney stock
    console.log(
        `-> Number of patients needed for finishing the kedney stock is: ${
            kidneysInStock - needKidney.length
        }`
    );
};

// Calling the Function
findKidneyPatients();

// Task - 4
// Find the donors who has covid

// Function to check if a donor has covid
const checkDiseaseForCovid = (patient) => {
    let flag = false;
    for (let i in patient.diseases) {
        if (patient.diseases[i] === "COVID") {
            flag = true;
            break;
        }
    }
    return flag;
};

const findCovidPatients = () => {
    const covidPatients = patients.filter((patient) => {
        return checkDiseaseForCovid(patient);
    });

    console.log("-> List of patients who has COVID: ");

    // printing the detail of patients who has covid
    covidPatients.forEach((patient) => {
        const { lastName, firstName } = patient;
        let numberOfDiseases = patient.diseases.length;
        console.log(
            `\t*${lastName}, ${firstName}, ${numberOfDiseases} ${
                numberOfDiseases > 1 ? "diseases" : "disease"
            }`
        );
    });
};

// Calling the function
findCovidPatients();
