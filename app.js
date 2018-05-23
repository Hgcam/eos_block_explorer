var     express                 = require("express"),
        bodyParser              = require("body-parser"),
        session                 = require("express-session"),
        jquery                  = require("jquery"),
        app                     = express();

// app.js setup     
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Render Home (blocks) page
app.get("/", function(req, res){
    res.render("blocks");
    console.log("Homepage works");
});

// Render Transactions Page
app.get("/transactions", function(req, res){
    res.render("transactions");
    console.log("Transactions page works");
});

// Render Actions Page
app.get("/actions", function(req, res){
    res.render("actions");
    console.log("Actions page works");
});

// Render Accounts Page
app.get("/accounts", function(req, res){
    res.render("accounts");
    console.log("Accounts page works");
});

// Port setup - keep at end of doc
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening to you!")
});
