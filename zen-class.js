//switched to db 
//> use db;

//collections creation
db.student.insertMany([
    {
        "studentid": 1,
        "fullname": "pramila",
        "email": "pramila@gmail",
        "mobile": "9034563343",
        "college": "panimalar",
        "currentCity": "chennai",
        "mentorid": 1,
        "courseid": 1
    },
    {
        "studentid": 2,
        "fullname": "kavitha",
        "email": "kavitha@gmail",
        "mobile": "8745962130",
        "college": "MIT",
        "currentCity": "bangalore",
        "mentorid": 1,
        "courseid": 1
    },
    {
        "studentid": 3,
        "fullname": "guru",
        "email": "guru@gmail",
        "mobile": "7845963210",
        "college": "IITM",
        "currentCity": "chennai",
        "mentorid": 1,
        "courseid": 1
    },
    {
        "studentid": 4,
        "fullname": "mani",
        "email": "mani@gmail",
        "mobile": "9034563343",
        "college": "NIT",
        "currentCity": "pune",
        "mentorid": 1,
        "courseid": 1
    },
    {
        "studentid": 5,
        "fullname": "puhpa",
        "email": "pushpa@gmail",
        "mobile": "9034565643",
        "college": "KEC",
        "currentCity": "madurai",
        "mentorid": 2,
        "courseid": 1
    },
    {
        "studentid": 6,
        "fullname": "tamilselvi",
        "email": "tamilselvi@gmail",
        "mobile": "987463251",
        "college": "kongu",
        "currentCity": "erode",
        "mentorid": 2,
        "courseid": 1
    },
    {
        "studentid": 7,
        "fullname": "sundaram",
        "email": "sundaram@gmail",
        "mobile": "9034563343",
        "college": "PEC",
        "currentCity": "puducherry",
        "mentorid": 3,
        "courseid": 2
    },
    {
        "studentid": 8,
        "fullname": "agathiyan",
        "email": "agathiyan@gmail",
        "mobile": "8759641230",
        "college": "anna university",
        "currentCity": "chennai",
        "mentorid": 3,
        "courseid": 2
    },
    {
        "studentid": 9,
        "fullname": "priya",
        "email": "priya@gmail",
        "mobile": "9846258712",
        "college": "SMVEC",
        "currentCity": "trichy",
        "mentorid": 4,
        "courseid": 3
    },
    {
        "studentid": 10,
        "fullname": "riya",
        "email": "riya@gmail",
        "mobile": "9568479513",
        "college": "NIT",
        "currentCity": "hamirpur",
        "mentorid": 4,
        "courseid": 3
    }
]);
db.mentor.insertMany([
    {
        "mentorid": 1,
        "mentorname": "sudha",
        "designation": "senior software developer",
        "courseid": 1,
        "totalstudents": 20
    },
    {
        "mentorid": 2,
        "mentorname": "kathir",
        "designation": "Full stack web developer",
        "courseid": 1,
        "totalstudents": 30
    }, {
        "mentorid": 3,
        "mentorname": "kavin",
        "designation": "software developer",
        "courseid": 2,
        "totalstudents": 10
    }, {
        "mentorid": 4,
        "mentorname": "manish",
        "designation": "system engineer",
        "courseid": 3,
        "totalstudents": 38
    },
]);
db.course.insertMany([
    {
        "courseid": 1,
        "coursename": "full stack web development(mern)",
        "courseduration": 5,
        "fees": 40000,
        "mode": "online",

    },
    {
        "courseid": 2,
        "coursename": "Fornt end(REACT)",
        "courseduration": 4,
        "fees": 20000,
        "mode": "offline",

    },
    {
        "courseid": 3,
        "coursename": "DSA",
        "courseduration": 2,
        "fees": 40000,
        "mode": "online",

    },

])
db.task.insertMany([
    {
        "taskid": 1,
        "taskurl": "www.dummyurl.com",
        "date": ISODate("2020-09-28"),
        "courseid": 1,
        "topicid": 1,
    },
    {
        "taskid": 2,
        "taskurl": "www.dummyurl.com",
        "date": ISODate("2020-10-17"),
        "courseid": 1,
        "topicid": 2,
    },
    {
        "taskid": 3,
        "taskurl": "www.dummyurl.com",
        "date": ISODate("2020-11-02"),
        "courseid": 1,
        "topicid": 2,
    },
    {
        "taskid": 4,
        "taskurl": "www.dummyurl.com",
        "date": ISODate("2020-09-29"),
        "courseid": 2,
        "topicid": 4,
    },
    {
        "taskid": 5,
        "taskurl": "www.dummyurl.com",
        "date": ISODate("2020-10-04"),
        "courseid": 2,
        "topicid": 5,
    },
    {
        "taskid": 6,
        "taskurl": "www.dummyurl.com",
        "date": ISODate("2020-09-04"),
        "courseid": 3,
        "topicid": 6,
    },
    {
        "taskid": 7,
        "taskurl": "www.dummyurl.com",
        "date": ISODate("2020-10-28"),
        "courseid": 3,
        "topicid": 6,
    },
    {
        "taskid": 8,
        "taskurl": "www.dummyurl.com",
        "date": ISODate("2020-10-30"),
        "courseid": 3,
        "topicid": 7,
    },
    {
        "taskid": 9,
        "taskurl": "www.dummyurl.com",
        "date": ISODate("2020-11-01"),
        "courseid": 3,
        "topicid": 7,
    }

])
db.topic.insertMany([
    {
        "topicid": 1,
        "topic": "HTML",
        "courseid": 1,
        "date": ISODate("2020-10-14")
    },
    {
        "topicid": 2,
        "topic": "CSS",
        "courseid": 1,
        "date": ISODate("2020-10-16")
    }, {
        "topicid": 3,
        "topic": "Javascript",
        "courseid": 1,
        "date": ISODate("2020-10-17")
    }, {
        "topicid": 4,
        "topic": "React",
        "courseid": 2,
        "date": ISODate("2020-08-28")
    }, {
        "topicid": 5,
        "topic": "Netlify deployment",
        "courseid": 2,
        "date": ISODate("2020-10-03")
    }, {
        "topicid": 6,
        "topic": "time complexity",
        "courseid": 3,
        "date": ISODate("2020-09-30")
    }, {
        "topicid": 7,
        "topic": "stack",
        "courseid": 3,
        "date": ISODate("2020-10-27")
    },
    {
        "topicid": 8,
        "topic": "queue",
        "courseid": 3,
        "date": ISODate("2020-11-01")
    }

])
db.studenttask.insertMany([
    {
        "studentid": 1,
        "taskid": 1,
        "submitteddate": ISODate("2020-09-30"),

    }, {
        "studentid": 1,
        "taskid": 2,
        "submitteddate": ISODate("2020-10-20")

    }, {
        "studentid": 1,
        "taskid": 3,
        "submitteddate": ISODate("2020-11-15"),

    }, {
        "studentid": 3,
        "taskid": 4,
        "submitteddate": ISODate("2020-09-30")

    }, {
        "studentid": 3,
        "taskid": 5,
        "submitteddate": ISODate("2020-10-10")

    }, {
        "studentid": 10,
        "taskid": 6,
        "submitteddate": ISODate("2020-09-10")

    }, {
        "studentid": 10,
        "taskid": 7,
        "submitteddate": ISODate("2020-10-29")

    }, {
        "studentid": 10,
        "taskid": 8,
        "submitteddate": ISODate("2020-11-04")

    }, {
        "studentid": 10,
        "taskid": 9,
        "submitteddate": ISODate("2020-11-10")
    }
])
db.attendance.insertMany([
    {
        "date": ISODate("2020-10-12"),
        "absentees": [1, 3],
    },
    {
        "date": ISODate("2020-10-13"),
        "absentees": [3, 10],
    },
    {
        "date": ISODate("2020-10-16"),
        "absentees": [2],
    },
    {
        "date": ISODate("2020-10-17"),
        "absentees": [4, 5],
    },
    {
        "date": ISODate("2020-10-19"),
        "absentees": [1, 3, 6]
    }
])
db.companydrive.insertMany([
    {
        "companyname": "HCL",
        "driveid": 1,
        "ctc": 6,
        "studentsappeared": [1, 2, 3],
        "date": ISODate("2020-09-28")
    },
    {
        "companyname": "zoho",
        "driveid": 2,
        "ctc": 12,
        "studentsappeared": [3, 4],
        "date": ISODate("2020-10-17")
    }, {
        "companyname": "tcs",
        "driveid": 3,
        "ctc": 10,
        "studentsappeared": [5, 6, 7, 2],
        "date": ISODate("2020-10-28")
    }])
db.codekata.insertMany([
    {
        "problemno": 1,
        "solvedstudentid": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        "geekcoins": 20,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 2,
        "solvedstudentid": [1, 2, 4, 5, 6],
        "geekcoins": 10,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 3,
        "solvedstudentid": [2, 3, 4, 6],
        "geekcoins": 10,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 4,
        "solvedstudentid": [1, 6],
        "geekcoins": 20,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 5,
        "solvedstudentid": [6, 7, 10],
        "geekcoins": 20,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 6,
        "solvedstudentid": [1, 5, 7, 9],
        "geekcoins": 30,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 7,
        "solvedstudentid": [1, 5, 4, 7],
        "geekcoins": 10,
        "programming_lang": ["java", "nodejs", "python"]
    },
    {
        "problemno": 8,
        "solvedstudentid": [6, 7, 8, 9, 10],
        "geekcoins": 30,
        "programming_lang": ["java", "nodejs", "python"]
    },
])



//     Find all the topics and tasks which are thought in the month of October
db.task.find({ "date": { $gte: ISODate("2020-10-01"), $lt: ISODate("2020-10-30") } }).forEach(item => {
    db.topic.find({ "topicid": item.topicid }).forEach((val) => {
        {
            if (val.date.getUTCMonth() === 9) {
                print("taskid:" + item.taskid,
                    "taskurl:" + item.taskurl,
                    "topicid:" + val.topicid,
                    "topicname:" + val.topic
                )
            }
        }
    })
})

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020.
db.companydrive.find({ "date": { $gte: ISODate("2020-10-15"), $lt: ISODate("2020-10-30") } }).pretty();


// Find all the company drives and students who are appeared for the placement.
db.companydrive.find().forEach(value => {
    value.studentsappeared.forEach(item => {
        db.student.find({ "studentid": item }).forEach(val => {
            {
                print("studentid:" + val.studentid,
                    "studentname:" + val.fullname,
                    "companyname:" + value.companyname)
            }
        })
    })
})


// Find the number of problems solved by the user in codekata
db.student.find().forEach(value => {
    let count = 0;
    db.codekata.find().forEach(item => {
        item.solvedstudentid.forEach(val => {
            if (val === value.studentid) {
                count++;
            }
        })
    })
    {
        print("studentid:" + value.studentid,
            "studentname:" + value.fullname,
            "problemsolved:" + count)
    }
})


// Find all the mentors with who has the mentee's count more than 15
db.mentor.find({ "totalstudents": { $gt: 15 } }).pretty();




