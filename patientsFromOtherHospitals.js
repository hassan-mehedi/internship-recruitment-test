import { patients } from "./patient.js";

const patientsFromOtherHospital = [
    {
        firstName: "Agent",
        lastName: "Pena",
        diseases: ["COVID"],
    },
    {
        firstName: "Heisenberg",
        lastName: "Bear",
        diseases: ["Headache"],
    },
    {
        firstName: "Okarin",
        lastName: "May",
        diseases: ["Broken Wrist", "Mad-scientist"],
    },
    {
        firstName: "Hououin",
        lastName: "Kyoma",
        diseases: ["Delusional disorder", "Memory loss"],
    },
];

const getThelastKey = () => {
    patients.sort((a, b) => {
        return a.patientID - b.patientID;
    });

    return patients[patients.length - 1].patientID;
};

let lastId = getThelastKey();

const addIdStatus = (lastId) => {
    let id = +lastId; //converting to number
    patientsFromOtherHospital.forEach((patient) => {
        ++id; //incrementing id
        let tmpID = id.toString(); //converting to string
        patient.patientID =
            tmpID.length === 1
                ? "00" + tmpID
                : tmpID.length === 2
                ? "0" + tmpID
                : tmpID;
        patient.isAdmitted = true;
    });
};

// Adding new ID and Admitting the patients to Hospital
addIdStatus(lastId);

// Updating the patient list
let updatedPatients = [...patients, ...patientsFromOtherHospital];

// Printing the updated list
console.log(updatedPatients);
