const express = require("express"); 
const cors = require("cors"); 
const dotenv = require("dotenv"); 
const ConnectDB = require("./db/connect"); 
const Operations = require("./models/operations");

dotenv.config();

const app = express();

app.use(cors());
// app.set('view engine','ejs')
ConnectDB()
app.get("/bfhl", (req, res) => {
    res.status(200).json({
        operation_code: 1
    })
})

app.post("/test", (req, res) => {
    try {
        console.log(req.body)
        // const data = new Operations({
        //     status: true,
        //     userid: req.body.user_id,
        //     email: req.body.email,
        //     rollno: req.body.roll_number,
        //     number: req.body.number,
        //     alphabets: req.body.aplhabets,
        //     highestalphabet: req.body.alphabet[0]
        // })
        // res.json({
        //     user_id: req.body.user_id,
        //     is_success: true,
        //     email: req.body.email,
        //     roll_number: req.body.roll_number,
        //     numbers: req.body.numbers,
        //     alphabets: req.body.alphabets,
        //     highest_alphabet: req.body.alphabet[0]
        // })
        res.status(200).json({
            operation_code: 1
        })
    } catch(error) {
        res.json({
            user_id: req.body.user_id,
            is_success: false
        })
    }

})

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    ConnectDB();
    console.log(`Server is listening on port ${PORT}`);
});
