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
