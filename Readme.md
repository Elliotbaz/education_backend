**BRIEF INTRODUCTION** 
################################
This project is build using Node.js express and MongoDB for database. My choice for this tech stack as opposed to 
using Django and PostgreSQL, is because of time constraints, For Python, i haven't used Django in a while so it would take a bit longer 
than using Express that i can make anything in my sleep. For the choice of DB, using MongDB is just because of the Atlas remote. It's just 
faster for anyone running this application without having to download DB locally (if not a technically skilled individual), 
it's all coming from the cloud.
################################

**SET UP**
RUN CMD: 
npm install  (you install all dependencies)

THE .ENV file would be send via email, but this is just a MongoDB connection string

RUN CMD: 
nodemon start (to start the server)

################################

**ROUTES:**

**TEACHERS**
GET ALL TEACHERS : localhost:5000/api/teachers - GET
GET TEACHERS BY ID: localhost:5000/api/teachers/:id - GET
ADD NEW TEACHERS: localhost:5000/api/teachers - POST (Please see data/models - for the body of the POST)
UPDATE TEACHERS: localhost:5000/api/teachers/:id - PUT
DELETE TEACHERS: localhost:5000/api/teachers/:id - DELETE

**STUDENT PROGRESS**
GET ALL PROGRESS :localhost:5000/api/studentprogress - GET
GET PROGRESS BY ID :localhost:5000/api/studentprogress/:id - GET
ADD NEW PROGRESS :localhost:5000/api/studentprogress - POST (Please see data/models - for the body of the POST)
UPDATE PROGRESS :localhost:5000/api/studentprogress/:id - PUT
DELETE PROGRESS :localhost:5000/api/studentprogress/:id - DELETE

**COACHES**
GET ALL COACHES :localhost:5000/api/coaches - GET
GET COACHES BY ID :localhost:5000/api/coaches/:id - GET
ADD NEW COACHES :localhost:5000/api/coaches - POST (Please see data/models - for the body of the POST)
UPDATE COACHES :localhost:5000/api/coaches/:id - PUT
DELETE COACHES :localhost:5000/api/coaches/:id - DELETE

**COACHES AND TEACHERS INTERACTIONS**
GET ALL COACHES AND TEACHER INTERACTIONS: localhost:5000/api/interactions - GET
GET COACHES AND TEACHER INTERACTIONS BY ID: localhost:5000/api/interactions/:id - GET
ADD NEW COACHES AND TEACHER INTERACTIONS: localhost:5000/api/interactions - POST (Please see data/models - for the body of the POST)
UPDATE COACHES AND TEACHER INTERACTIONS: localhost:5000/api/interactions/:id -  PUT
DELETE COACHES AND TEACHER INTERACTIONS: localhost:5000/api/interactions/:id - DELETE

**RESOURCE MANAGEMENT**
GET ALL RESOURCE MANAGEMENT: localhost:5000/api/resources - GET
GET ALL RESOURCE MANAGEMENT BY ID: localhost:5000/api/resources/:id - GET
GET ALL RESOURCE MANAGEMENT: localhost:5000/api/resources - POST (Please see data/models - for the body of the POST)
GET ALL RESOURCE MANAGEMENT: localhost:5000/api/resources/:id - PUT
GET ALL RESOURCE MANAGEMENT: localhost:5000/api/resources/:id - DELETE