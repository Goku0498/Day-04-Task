let resume = {
  name: "Gokul E S",
  contact: {
    email: "gokul15shanmugam@gmail.com",
    phone: "99946-98888",
  },
  summary:
    "Experienced Front-end with a strong background in JavaScript, Python, and web development.",
  experience: [
    {
      title: "IT Analyst",
      company: "Chennai, TN",
      location: "Chennai, TN",
      start_date: "Nov 2023",
      end_date: "Present",
    },
    {
      title: "System Engineer",
      company: "TCS",
      location: "Chennai, TN",
      start_date: "2023",
      end_date: "2019",
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "Amrita School of Engineering, Coimbatore",
      graduation_year: 2019,
    },
  ],
  skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "Python", "ReactJS"],
};

//Iterating in For loop
console.log("Output of For loop");
for (let i = 0; i < resume.experience.length; i++) {
  console.log(resume.experience[i].title);
}

//Iterating in For-in loop
console.log("\n\nOutput of For-in loop");
for (let key in resume.skills) {
  console.log(key + ": " + JSON.stringify(resume.skills[key]));
}

//Iterating in For-of loop
console.log("\n\nOutput of For-of loop");
for (let job of resume.experience) {
  console.log(job.company);
}

//Iterating in For-each loop
console.log("\n\nOutput of For-each loop");
resume.education.forEach((education) => {
  console.log(education);
});
