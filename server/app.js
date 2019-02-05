// SERVER
//Express
const express = require("express");
const app = express();
//Port #
const port = process.env.PORT || 4000;
//GraphQL
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
//Import the schema
const schema = require("./schema/schema");
// CORS
const cors = require("cors");

// Allows cross origin request
app.use(cors());
     
    
// Mlab Connection
const mlab = "mongodb://chase123:chase123@ds115595.mlab.com:15595/strom-centre";
mongoose.connect(mlab, () => {
    console.log("Connected to the Database");
});

//When "/graphql" is called in the browser
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

// REDIRECT FOR DEVELOPMENT ONLY
app.get("/", (req, res) => {
   res.redirect("/graphql");
});

////////////////////////////////////////////////////////
app.listen(port, process.env.IP, function(){
   console.log("Server has started");
});