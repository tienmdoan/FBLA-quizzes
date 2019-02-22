// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys


var quizJSON = {
    "info": {
        "name":    "FLBA Random!!",
        "main":    "<p>Think you're smart enough to be on FBLA-Jeopardy? Find out with this FBLA knowledge quiz, covering all 5 FBLA categories: history, National Leadership conference, national officers, parlimentary procedure, and sponsors!</p>",
        "results": "<h5>Learn More</h5><p><a href='index.html'>Go back and take another quiz</a></p>",
        "level1":  "FBLA-Jeopardy Ready",
        "level2":  "FBLA-Jeopardy Contender",
        "level3":  "FBLA-Jeopardy Amateur",
        "level4":  "FBLA-Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
 {
   "q": "Which of the following is NOT one of FBLA's regions?",
   "a": [
      {
         "option": "Midwest",
         "correct": true
      },
      {
         "option": "Mountain Plains",
         "correct": false
      },
      {
         "option": "Eastern",
         "correct": false
      },
      {
         "option": "North Central",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Well, no.</span> Hamden L. Forkner</p>",
   "select_any": ""
},
 {
   "q": "How many articles are there in the FBLA Bylaws?",
   "a": [
      {
         "option": "13",
         "correct": true
      },
      {
         "option": "15",
         "correct": false
      },
      {
         "option": "10",
         "correct": false
      },
      {
         "option": "9",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Not quite.</span> 1940</p>",
   "select_any": ""
},
 {
   "q": "Who is the founder of FLBA?",
   "a": [
      {
         "option": "Hamden L. Forkner",
         "correct": true
      },
      {
         "option": "Robert Baden-Powell",
         "correct": false
      },
      {
         "option": "Theodore Roosevelt",
         "correct": false
      },
      {
         "option": "Juliette Low",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Well, no.</span> Hamden L. Forkner</p>",
   "select_any": ""
},
 {
   "q": "FBLA was established in ____.",
   "a": [
      {
         "option": "1940",
         "correct": true
      },
      {
         "option": "1878",
         "correct": false
      },
      {
         "option": "1972",
         "correct": false
      },
      {
         "option": "1969",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Not quite.</span> 1940</p>",
   "select_any": ""
},
 {
   "q": "The first National Leadership Conference was held in  _____.",
   "a": [
      {
         "option": "Chicago, Illinois in 1952",
         "correct": true
      },
      {
         "option": "Des Moines, Iowa in 1949",
         "correct": false
      },
      {
         "option": "New York, New York in 1967",
         "correct": false
      },
      {
         "option": "Nashville, Tennesee in 1971",
         "correct": false
      }
   ],
   "correct": "<p><span>Excellent.</span></p>",
   "incorrect": "<p><span>No.</span> Chicago, Illinois in 1952</p>",
   "select_any": ""
},
 {
   "q": "What foundation purchased 1.6 acres of land in the Center for Educational Associations, Reston, Virginia, as the site for a future FBLA-PBL National Center in 1981?",
   "a": [
      {
         "option": "The Conrad N. Hilton Foundation",
         "correct": true
      },
      {
         "option": "The Carnegie Mellon Foundation",
         "correct": false
      },
      {
         "option": "The Ford Foundation",
         "correct": false
      },
      {
         "option": "The Rockefeller Foundation",
         "correct": false
      }
   ],
   "correct": "<p><span>Correct.</span></p>",
   "incorrect": "<p><span>Incorrect.  </span> The Conrad N. Hilton Foundation</p>",
   "select_any": ""
},
 {
   "q": "When was the last National Leadership Conference held in Washington, D.C.?",
   "a": [
      {
         "option": "1996",
         "correct": true
      },
      {
         "option": "1972",
         "correct": false
      },
      {
         "option": "1985",
         "correct": false
      },
      {
         "option": "2002",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>No.  </span> 1996</p>",
   "select_any": ""
},
 {
   "q": "The first collegiate FBLA was chartered in _____.",
   "a": [
      {
         "option": "Iowa",
         "correct": true
      },
      {
         "option": "Tennesee",
         "correct": false
      },
      {
         "option": "Ohio",
         "correct": false
      },
      {
         "option": "New York",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Well, no.</span> Iowa</p>",
   "select_any": ""
},
 {
   "q": "Which state becomes the first FBLA state chapter? What year?",
   "a": [
      {
         "option": "Iowa, 1947",
         "correct": true
      },
      {
         "option": "New York, 1948",
         "correct": false
      },
      {
         "option": "California, 1969",
         "correct": false
      },
      {
         "option": "Virginia, 1957",
         "correct": false
      }
   ],
   "correct": "<p><span>Excellent.</span></p>",
   "incorrect": "<p><span>Not quite.</span> Iowa, 1947</p>",
   "select_any": ""
},
 {
   "q": "When did FBLA-PBL is granted independent status as a nonprofit educational student association under Internal Revenue Code 501(c)(3)?",
   "a": [
      {
         "option": "1969",
         "correct": true
      },
      {
         "option": "1971",
         "correct": false
      },
      {
         "option": "1942",
         "correct": false
      },
      {
         "option": "1959",
         "correct": false
      }
   ],
   "correct": "<p><span>Correct.</span></p>",
   "incorrect": "<p><span>No.</span> 1969</p>",
   "select_any": ""
},
 {
   "q": "The PBL in FBLA-PBL stands for _____ .",
   "a": [
      {
         "option": "Phi Beta Lambda",
         "correct": true
      },
      {
         "option": "Pre-eminent Business Leaders",
         "correct": false
      },
      {
         "option": "Problem- Based Learning",
         "correct": false
      },
      {
         "option": "Power Business Logic",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Incorrect.  </span> Phi Beta Lambda</p>",
   "select_any": ""
},
 {
   "q": "The FBLA-Middle Level division was started in ____ for students in grades 5-9.",
   "a": [
      {
         "option": "1974",
         "correct": true
      },
      {
         "option": "1979",
         "correct": false
      },
      {
         "option": "1970",
         "correct": false
      },
      {
         "option": "1967",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>No.  </span> 1974</p>",
   "select_any": ""
},
 {
   "q": "Who spoke at the 2018 National Leadership Conference?",
   "a": [
      {
         "option": "Shane Feldman",
         "correct": true
      },
      {
         "option": "Maria Santiago",
         "correct": false
      },
      {
         "option": "Paula Robinson",
         "correct": false
      },
      {
         "option": "Gary Howard",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Well, no.</span> Shane Feldman</p>",
   "select_any": ""
},
 {
   "q": "Where was the 2018 National Leadership Conference held?",
   "a": [
      {
         "option": "Baltimore",
         "correct": true
      },
      {
         "option": "Washington D.C.",
         "correct": false
      },
      {
         "option": "Salt Lake City",
         "correct": false
      },
      {
         "option": "Houston",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Not quite.</span> Baltimore</p>",
   "select_any": ""
},
 {
   "q": "Where will the 2019 National Leadership Conference be held?",
   "a": [
      {
         "option": "San Antonio",
         "correct": true
      },
      {
         "option": "Dallas",
         "correct": false
      },
      {
         "option": "Santa Fe",
         "correct": false
      },
      {
         "option": "Dover",
         "correct": false
      }
   ],
   "correct": "<p><span>Excellent.</span></p>",
   "incorrect": "<p><span>No.</span> San Antonio</p>",
   "select_any": ""
},
 {
   "q": "When will the 2019 National Leadership Conference occur?",
   "a": [
      {
         "option": "June 29-July 2",
         "correct": true
      },
      {
         "option": "June 30-July 3",
         "correct": false
      },
      {
         "option": "July 3-6",
         "correct": false
      },
      {
         "option": "August 3-6",
         "correct": false
      }
   ],
   "correct": "<p><span>Correct.</span></p>",
   "incorrect": "<p><span>Incorrect.  </span> June 29-July 2</p>",
   "select_any": ""
},
 {
   "q": "Which of the following is not included in the motto of the National Leadership Conference?",
   "a": [
      {
         "option": "Innovate",
         "correct": true
      },
      {
         "option": "Create",
         "correct": false
      },
      {
         "option": "Lead",
         "correct": false
      },
      {
         "option": "Inspire",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>No.  </span> Innovate</p>",
   "select_any": ""
},
 {
   "q": "Where was the first NLC held?",
   "a": [
      {
         "option": "Chicago",
         "correct": true
      },
      {
         "option": "New York",
         "correct": false
      },
      {
         "option": "San Francisco",
         "correct": false
      },
      {
         "option": "Dallas",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Well, no.</span> Chicago</p>",
   "select_any": ""
},
 {
   "q": "Where will the 2020 National Leadership Conference be held?",
   "a": [
      {
         "option": "Anaheim, CA",
         "correct": true
      },
      {
         "option": "San Antonio, CA",
         "correct": false
      },
      {
         "option": "Houston, TX",
         "correct": false
      },
      {
         "option": "Dover, CO",
         "correct": false
      }
   ],
   "correct": "<p><span>Excellent.</span></p>",
   "incorrect": "<p><span>Not quite.</span> Anaheim, CA</p>",
   "select_any": ""
},
 {
   "q": "Which of the following conferences is an intensive, two-day seminar held in conjunction with the NLC?",
   "a": [
      {
         "option": "IFL",
         "correct": true
      },
      {
         "option": "PBLCCC",
         "correct": false
      },
      {
         "option": "SLC",
         "correct": false
      },
      {
         "option": "RLC",
         "correct": false
      }
   ],
   "correct": "<p><span>Correct.</span></p>",
   "incorrect": "<p><span>No.</span> IFL</p>",
   "select_any": ""
},
 {
   "q": "In what year was the first NLC held?",
   "a": [
      {
         "option": "1952",
         "correct": true
      },
      {
         "option": "1960",
         "correct": false
      },
      {
         "option": "1958",
         "correct": false
      },
      {
         "option": "1955",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Incorrect.  </span> 1952</p>",
   "select_any": ""
},
 {
   "q": "What was the slogan of the 2018 NLC?",
   "a": [
      {
         "option": "Elevate Your Future",
         "correct": true
      },
      {
         "option": "Create-Lead-Inspire",
         "correct": false
      },
      {
         "option": "No Less Than Success",
         "correct": false
      },
      {
         "option": "MOTIV8",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>No.  </span> Elevate Your Future</p>",
   "select_any": ""
},
 {
   "q": "Who is the current FBLA national president?",
   "a": [
      {
         "option": "Eu Wang",
         "correct": true
      },
      {
         "option": "Gail Hopkins",
         "correct": false
      },
      {
         "option": "Obi Tan",
         "correct": false
      },
      {
         "option": "Fiona Aster",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Well, no.</span> Eu Wang</p>",
   "select_any": ""
},
 {
   "q": "Which of the following roles is in charge of ensuring meetings are conduted in accordance to proper procedure?",
   "a": [
      {
         "option": "Parliamentarian",
         "correct": true
      },
      {
         "option": "Timekeeper",
         "correct": false
      },
      {
         "option": "Historian",
         "correct": false
      },
      {
         "option": "Proceduralist",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Not quite.</span> Parliamentarian</p>",
   "select_any": ""
},
 {
   "q": "Which role is responsible for preparing the Local Chapter Annual Business Report?",
   "a": [
      {
         "option": "Vice President",
         "correct": true
      },
      {
         "option": "President",
         "correct": false
      },
      {
         "option": "Head of Chapter",
         "correct": false
      },
      {
         "option": "Chapter Committee",
         "correct": false
      }
   ],
   "correct": "<p><span>Excellent.</span></p>",
   "incorrect": "<p><span>No.</span> Vice President</p>",
   "select_any": ""
},
 {
   "q": "Which of the following jobs does the FBLA National Secretary do?",
   "a": [
      {
         "option": "Create a meeting agenda",
         "correct": true
      },
      {
         "option": "Keep track of the budget",
         "correct": false
      },
      {
         "option": "Maintain a history of the chapter",
         "correct": false
      },
      {
         "option": "Prepare a news article/release within one week of an activity",
         "correct": false
      }
   ],
   "correct": "<p><span>Correct.</span></p>",
   "incorrect": "<p><span>Incorrect.  </span> Create a meeting agenda</p>",
   "select_any": ""
},
 {
   "q": "Whose job is it to call special meetings as deemed necessary?",
   "a": [
      {
         "option": "President",
         "correct": true
      },
      {
         "option": "Secretary",
         "correct": false
      },
      {
         "option": "Vice President",
         "correct": false
      },
      {
         "option": "Caller",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>No.  </span> President</p>",
   "select_any": ""
},
 {
   "q": "Who is in charge of handling the chapter's general correspondence?",
   "a": [
      {
         "option": "Secretary",
         "correct": true
      },
      {
         "option": "Reporter",
         "correct": false
      },
      {
         "option": "Vice President",
         "correct": false
      },
      {
         "option": "President",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Well, no.</span> Secretary</p>",
   "select_any": ""
},
 {
   "q": "Which current officer is in charge of keeping attendance and taking roll as National Secretary?",
   "a": [
      {
         "option": "Keerti Soundappan",
         "correct": true
      },
      {
         "option": "Michael Zhao",
         "correct": false
      },
      {
         "option": "Madelyn Remington",
         "correct": false
      },
      {
         "option": "Ty Rickard",
         "correct": false
      }
   ],
   "correct": "<p><span>Excellent.</span></p>",
   "incorrect": "<p><span>Not quite.</span> Keerti Soundappan</p>",
   "select_any": ""
},
 {
   "q": "Which officer serves as an ex-officio non-voting member of every committee?",
   "a": [
      {
         "option": "President",
         "correct": true
      },
      {
         "option": "Vice President",
         "correct": false
      },
      {
         "option": "Committee Chair",
         "correct": false
      },
      {
         "option": "Speaker",
         "correct": false
      }
   ],
   "correct": "<p><span>Correct.</span></p>",
   "incorrect": "<p><span>No.</span> President</p>",
   "select_any": ""
},
 {
   "q": "Which officer's role is to preside over regional meetings at the National Leadership Conference?",
   "a": [
      {
         "option": "Vice President",
         "correct": true
      },
      {
         "option": "President",
         "correct": false
      },
      {
         "option": "Regional Manager",
         "correct": false
      },
      {
         "option": "Treasurer",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Incorrect.  </span> Vice President</p>",
   "select_any": ""
},
 {
   "q": "Who does the secretary NOT need to send a copy of the meeting minutes and substantiating reports to?",
   "a": [
      {
         "option": "Reporter",
         "correct": true
      },
      {
         "option": "President",
         "correct": false
      },
      {
         "option": "Chief Executive Officer",
         "correct": false
      },
      {
         "option": "Association President",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>No.  </span> Reporter</p>",
   "select_any": ""
},
 {
   "q": "What is the name of the book FBLA follows concerning Parliamentary Procedure?",
   "a": [
      {
         "option": "Robert's Rules of Order",
         "correct": true
      },
      {
         "option": "FBLA Official Handbook",
         "correct": false
      },
      {
         "option": "Parlimentary Procedure and How to Do It",
         "correct": false
      },
      {
         "option": "Maintaining Order: Parliamentary Procedure",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Well, no.</span> Robert's Rules of Order</p>",
   "select_any": ""
},
 {
   "q": "A(n) ____ is a formal proposal by a member of a deliberative assembly that the assembly take certain action",
   "a": [
      {
         "option": "Motion",
         "correct": true
      },
      {
         "option": "Action Point",
         "correct": false
      },
      {
         "option": "Point",
         "correct": false
      },
      {
         "option": "Call",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Not quite.</span> Motion</p>",
   "select_any": ""
},
 {
   "q": "What is the most common type of motion?",
   "a": [
      {
         "option": "Main",
         "correct": true
      },
      {
         "option": "Subsidiary",
         "correct": false
      },
      {
         "option": "Budgetary",
         "correct": false
      },
      {
         "option": "Daily",
         "correct": false
      }
   ],
   "correct": "<p><span>Excellent.</span></p>",
   "incorrect": "<p><span>No.</span> Main</p>",
   "select_any": ""
},
 {
   "q": "Which of the following is NOT one of the classifications of motions?",
   "a": [
      {
         "option": "Additional",
         "correct": true
      },
      {
         "option": "Subsidiary",
         "correct": false
      },
      {
         "option": "Privileged",
         "correct": false
      },
      {
         "option": "Incidental",
         "correct": false
      }
   ],
   "correct": "<p><span>Correct.</span></p>",
   "incorrect": "<p><span>Incorrect.  </span> Additional</p>",
   "select_any": ""
},
 {
   "q": "What is the formal name of a motion made in writing?",
   "a": [
      {
         "option": "Resolution",
         "correct": true
      },
      {
         "option": "Written Proposal",
         "correct": false
      },
      {
         "option": "Codified Proposal",
         "correct": false
      },
      {
         "option": "Codified Motion",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>No.  </span> Resolution</p>",
   "select_any": ""
},
 {
   "q": "The chairman indicates that the mover has the right to speak. This is known as�",
   "a": [
      {
         "option": "Obtaining the floor",
         "correct": true
      },
      {
         "option": "The First Amendment",
         "correct": false
      },
      {
         "option": "Speaker Law",
         "correct": false
      },
      {
         "option": "Permission to Proceed",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Well, no.</span> Obtaining the floor</p>",
   "select_any": ""
},
 {
   "q": "What is the rank of privileged motions from most to least urgent? 1) Raise a question of privilege 2) Adjourn, but not if qualified or if adjournment will end the assembly 3) Fix the time to adjourn if another question is pending 4) Call for orders of the day 5) Take a recess if another question is pending",
   "a": [
      {
         "option": "3, 2, 5, 1, 4",
         "correct": true
      },
      {
         "option": "4, 1, 5, 3, 2",
         "correct": false
      },
      {
         "option": "3, 5, 2, 1, 4",
         "correct": false
      },
      {
         "option": "1, 4, 5, 3, 2",
         "correct": false
      }
   ],
   "correct": "<p><span>Excellent.</span></p>",
   "incorrect": "<p><span>Not quite.</span> 3, 2, 5, 1, 4</p>",
   "select_any": ""
},
 {
   "q": "Which of the following is NOT a type of incidental motion?",
   "a": [
      {
         "option": "Limit or extend limits of a debate",
         "correct": true
      },
      {
         "option": "Motions relating to nominations",
         "correct": false
      },
      {
         "option": "Objection to the consideration of a question",
         "correct": false
      },
      {
         "option": "Request to be excused from duty",
         "correct": false
      }
   ],
   "correct": "<p><span>Correct.</span></p>",
   "incorrect": "<p><span>No.</span> Limit or extend limits of a debate</p>",
   "select_any": ""
},
 {
   "q": "True or False: Using dilatory tactics and motions is allowed.",
   "a": [
      {
         "option": "TRUE",
         "correct": true
      },
      {
         "option": "FALSE",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Incorrect.  </span> TRUE</p>",
   "select_any": ""
},
 {
   "q": "Which of the following motions does NOT provide an exception to the non-renewal of motions?",
   "a": [
      {
         "option": "Compromise",
         "correct": true
      },
      {
         "option": "Reconsider",
         "correct": false
      },
      {
         "option": "Rescind",
         "correct": false
      },
      {
         "option": "Amend something previously adopted",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>No.  </span> Compromise</p>",
   "select_any": ""
},
 {
   "q": "What foundation purchased 1.6 acres of land in the Center for Educational Associations, Reston, Virginia, as the site for a future FBLA-PBL National Center in 1981?",
   "a": [
      {
         "option": "The Conrad N. Hilton Foundation",
         "correct": true
      },
      {
         "option": "The Rockefeller Foundation",
         "correct": false
      },
      {
         "option": "Young Business Organization",
         "correct": false
      },
      {
         "option": "Association for Business Education",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Well, no.</span> The Conrad N. Hilton Foundation</p>",
   "select_any": ""
},
 {
   "q": "Which of the following organizations is NOT one of FBLA's current sponsors or partners?",
   "a": [
      {
         "option": "Apple",
         "correct": true
      },
      {
         "option": "Berkeley College",
         "correct": false
      },
      {
         "option": "AMA, Operation Enterprise",
         "correct": false
      },
      {
         "option": "Custom Shades",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Not quite.</span> Apple</p>",
   "select_any": ""
},
 {
   "q": "Which of the following oganizations helps FBLA with fundraising?",
   "a": [
      {
         "option": "Reach and Teach",
         "correct": true
      },
      {
         "option": "Nspire",
         "correct": false
      },
      {
         "option": "Minute Maid",
         "correct": false
      },
      {
         "option": "Schwebber's",
         "correct": false
      }
   ],
   "correct": "<p><span>Excellent.</span></p>",
   "incorrect": "<p><span>No.</span> Reach and Teach</p>",
   "select_any": ""
},
 {
   "q": "Each year, FBLA contributes donations towards the health of premature babies through which organization?",
   "a": [
      {
         "option": "March of Dimes",
         "correct": true
      },
      {
         "option": "Prematurity Awareness",
         "correct": false
      },
      {
         "option": "Graham's Foundation",
         "correct": false
      },
      {
         "option": "Eunice Shriver Research Institute",
         "correct": false
      }
   ],
   "correct": "<p><span>Correct.</span></p>",
   "incorrect": "<p><span>Incorrect.  </span> March of Dimes</p>",
   "select_any": ""
},
 {
   "q": "Which of the following organizations does NOT help FBLA with fundraising?",
   "a": [
      {
         "option": "Yankee Candle",
         "correct": true
      },
      {
         "option": "School Spirit Coffee",
         "correct": false
      },
      {
         "option": "Schermer Pecans",
         "correct": false
      },
      {
         "option": "Tom-Wat Fundraising",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>No.  </span> Yankee Candle</p>",
   "select_any": ""
},
 {
   "q": "Which of the following sponsors/partners of FBLA is not linked to education and/or leadership?",
   "a": [
      {
         "option": "Alamo",
         "correct": true
      },
      {
         "option": "Stevens Institute of Technology School of Business",
         "correct": false
      },
      {
         "option": "Stock Market Game",
         "correct": false
      },
      {
         "option": "Cengage",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>Well, no.</span> Alamo</p>",
   "select_any": ""
},
 {
   "q": "Which of the following is NOT one of the benefits provided by FBLA's sponsors?",
   "a": [
      {
         "option": "Internship opportunities",
         "correct": true
      },
      {
         "option": "Educational programs",
         "correct": false
      },
      {
         "option": "Scholarships",
         "correct": false
      },
      {
         "option": "Funding for Trophies and Awards",
         "correct": false
      }
   ],
   "correct": "<p><span>Excellent.</span></p>",
   "incorrect": "<p><span>Not quite.</span> Internship opportunities</p>",
   "select_any": ""
},
 {
   "q": "Which organization does NOT provide membership benefits and discounts to those involved with FBLA?",
   "a": [
      {
         "option": "Cengage",
         "correct": true
      },
      {
         "option": "Geico",
         "correct": false
      },
      {
         "option": "Amazon",
         "correct": false
      },
      {
         "option": "Men's Wearhouse",
         "correct": false
      }
   ],
   "correct": "<p><span>Correct.</span></p>",
   "incorrect": "<p><span>No.</span> Cengage</p>",
   "select_any": ""
},
 {
   "q": "Which of the following organizations partnered with FBLA allows students to experience a simulation in controlling a forty million dollar company?",
   "a": [
      {
         "option": "Capsim",
         "correct": true
      },
      {
         "option": "Crimson Education",
         "correct": false
      },
      {
         "option": "Sims",
         "correct": false
      },
      {
         "option": "Destinations",
         "correct": false
      }
   ],
   "correct": "<p><span>Good call.</span></p>",
   "incorrect": "<p><span>Incorrect.  </span> Capsim</p>",
   "select_any": ""
},
 {
   "q": "Which of the following organizations partnered with FBLA helped to create a school store manual?",
   "a": [
      {
         "option": "The Raymond Geddes company",
         "correct": true
      },
      {
         "option": "Find Your Grind",
         "correct": false
      },
      {
         "option": "Crimson Education",
         "correct": false
      },
      {
         "option": "Knowledge Matters",
         "correct": false
      }
   ],
   "correct": "<p><span>Good job.</span></p>",
   "incorrect": "<p><span>No.  </span> The Raymond Geddes company</p>",
   "select_any": ""
}
		
]
};