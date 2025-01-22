localhost:8080/api/projects GET


localhost:8080/api/projects POST
{
    "title": "Logistics Application",
    "description": "Logistics Application",
    "owner": "678f93443cf7a5c374e39547",
    "createdAt": "03-01-2025" 
}


localhost:8080/api/tasks GET


localhost:8080/api/tasks POST
{
    "title" : "Code init",
    "description" : "Code init",
    "status" : "In Progress",
    "deadline" : "03-02-2025",
    "assignedUser" : "678f93443cf7a5c374e39547",
    "project" : "678f9c48880fa616405fda78"
}

// response
{
    "message": "Task Created successfully",
    "response": {
        "status": "In Progress",
        "_id": "678f9e8dc17ecd299c03b1fb",
        "title": "Code init",
        "description": "Code init",
        "deadline": "2025-03-01T18:30:00.000Z",
        "assignedUser": "678f93443cf7a5c374e39547",
        "project": "678f9c48880fa616405fda78",
        "__v": 0
    }
}

localhost:8080/api/assignTask POST

{
    "user_id" : "678f93443cf7a5c374e39547",
    "task_id" : "678f932a3cf7a5c374e39546"
}