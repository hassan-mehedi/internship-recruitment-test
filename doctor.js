const doctors = [
    {
        doctorID: "6215",
        firstName: "Jalaluddin",
        lastName: "Mahbub",
        teamID: "008",
        doctorType: "Consultant",
        email: "jabub@hospital.com",
        active: true,
        doctorRequests: [],
    },
    {
        doctorID: "6216",
        firstName: "Amin",
        lastName: "Morshed",
        teamID: "008",
        doctorType: "Assistant Consultant",
        email: "amhed@hospital.com",
        active: true,
    },
    {
        doctorID: "6214",
        firstName: "Mahady",
        lastName: "Selim",
        teamID: "005",
        doctorType: "Consultant",
        email: "malim@hospital.com",
        active: true,
        doctorRequests: ["6213"],
    },
    {
        doctorID: "6213",
        firstName: "Jamela",
        lastName: "Begum",
        teamID: "005",
        doctorType: "RMO",
        email: "jagum@hospital.com",
        active: false,
    },
];

const team = [
    {
        teamName: "nephrology",
        teamID: "008",
        consultantInCharge: "6215",
        teamMates: ["6216"],
    },
    {
        teamName: "cardiology",
        teamID: "005",
        consultantInCharge: "6214",
        teamMates: [],
    },
];

const getThelastKey = () => {
    doctors.sort((a, b) => {
        return a.doctorID - b.doctorID;
    });

    return doctors[doctors.length - 1].doctorID;
};

const makeMail = (firstName, lastName) => {
    let mail = firstName.slice(0, 2) + lastName.slice(-3) + "@hospital.com";
    return mail;
};

const newDoctor = (firstName, lastName, doctorType) => {
    let lastID = getThelastKey();
    let nextID = (+lastID + 1).toString();
    let mail = makeMail(firstName, lastName);
    const doctor = {
        doctorID:
            nextID.length === 1
                ? "00" + nextID
                : nextID.length === 2
                ? "0" + nextID
                : nextID,
        firstName,
        lastName,
        doctorType,
        email: mail,
        active: false,
    };
    doctors.push(doctor);
};
// Adding a new doctor
newDoctor("Mehedi", "Hassan", "RMO");

// Adding Doctor to team
const addToTeam = (newDocID, teamID) => {
    let conDocID;
    doctors.forEach((doctor) => {
        if (doctor.doctorType === "Consultant" && doctor.teamID === teamID) {
            // Searching for the team consultant
            doctor.doctorRequests.push(newDocID); // Adding id in the consultant's request array
            conDocID = doctor.doctorID;
        }
    });
    approveToTeam(newDocID, teamID, conDocID);
};

const approveToTeam = (newDocID, teamID, condocID) => {
    doctors.forEach((doctor) => {
        if (doctor.doctorID === newDocID) {
            doctor.active = true; // activating the doctor
            doctor.teamID = teamID; // adding the doctor to the team
        }
        // removing the doctor id from the consultant's request array
        if (doctor.doctorID === condocID) {
            let pos = doctor.doctorRequests.indexOf(newDocID); // Searching the position of newDoctor ID
            doctor.doctorRequests.splice(pos, 1); // Removing the ID
        }
    });

    // Adding the ID in team
    team.forEach((t) => {
        if (t.teamID === teamID) {
            t.teamMates.push(newDocID); // adding the doctor id with his teammates
        }
    });
};

let latestDoctorId = getThelastKey();
addToTeam(latestDoctorId, "008");

console.log(doctors);
console.log(team);
