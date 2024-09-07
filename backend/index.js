const express = require("express");
const cors = require("cors")
const data = require("./data.json")
const fs = require("fs");
const users = require("./Data/users.json");
const path = require("path");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// get menu data 
app.get("/api/menu",(request,response)=>{
   return  response.json(data);
});

// Register new user
app.post("/api/register",(request,response)=>{
    const newUser = request.body;
    
    // Check if the user already exists
    const existedUser = users.find((user)=>user.username === newUser.username);
    if(existedUser){
        return response.status(409).send('username already existed');
    }

    // Add new user to the users array
    users.push(newUser);

     // Write updated users array to the users.json file
    fs.watchFile(
        path.join(__dirname,"./Data/users.json"), JSON.stringify(users,null,2),
        (err)=>{
            if(err){
                console.error("Error saving user data:", err);
                return response.status(500).json({ message: "Internal server error" });
            }
            console.log("New user registered:", newUser);
      return response.status(200).json({ message: "User registered successfully" });
        }
    )
 });


app.listen(PORT,()=>console.log("Server Started"));
