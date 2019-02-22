// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What number is the letter A in the English alphabet?",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "14",     "correct": false},
                {"option": "1",      "correct": true},
                {"option": "23",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which of the following best represents your preferred breakfast?",
            "a": [
                {"option": "Bacon and eggs",               "correct": false},
                {"option": "Fruit, oatmeal, and yogurt",   "correct": true},
                {"option": "Leftover pizza",               "correct": false},
                {"option": "Eggs, fruit, toast, and milk", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Where are you right now? Select ALL that apply.",
            "a": [
                {"option": "Planet Earth",           "correct": true},
                {"option": "Pluto",                  "correct": false},
                {"option": "At a computing device",  "correct": true},
                {"option": "The Milky Way",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "How many inches of rain does Michigan get on average per year?",
            "a": [
                {"option": "149",    "correct": false},
                {"option": "32",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "Is Earth bigger than a basketball?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};

var historyQuizJSON = {
    "info": {
        "name":    "FLBA History!!",
        "main":    "<p>Think you're smart enough to be on FBLA-Jeopardy? Find out with this FBLA history knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "FBLA-Jeopardy Ready",
        "level2":  "FBLA-Jeopardy Contender",
        "level3":  "FBLA-Jeopardy Amateur",
        "level4":  "FBLA-Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
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
}
    ]
};