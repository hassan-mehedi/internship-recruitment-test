const doctors = [
    {
        doctorID: "6215",
        firstName: "Jalaluddin",
        lastName: "Mahbub",
        teamID: "008",
        doctorType: "Consultant",
        email: "jabub@hospital.com",
        active: true,
        doctorRequests: []
    },
    {
        doctorID: "6216",
        firstName: "Amin",
        lastName: "Morshed",
        teamID: "008",
        doctorType: "Assistant Consultant",
        email: "amhed@hospital.com",
        active: true
    },
    {
        doctorID: "6214",
        firstName: "Mahady",
        lastName: "Selim",
        teamID: "005",
        doctorType: "Consultant",
        email: "malim@hospital.com",
        active: true,
        doctorRequests: ["6213", ]
    },
    {
        doctorID: "6213",
        firstName: "Jamela",
        lastName: "Begum",
        teamID: "005",
        doctorType: "RMO",
        email: "jagum@hospital.com",
        active: false
    },

]

const team = [
    {
        teamName: "nephrology",
        teamID: "008",
        consultantInCharge: "6215",
        teamMates: ["6216",]
    },
    {
        teamName: "cardiology",
        teamID: "005",
        consultantInCharge: "6214",
        teamMates: []
    },
]
