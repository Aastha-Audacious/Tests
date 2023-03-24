const student = [];
const signup = (req, res)=>{
    try {
        const {studId, studName, studClass} = req.body;
        if(!studId || !studName || !studClass){
            return res.status(400).send("Id, Name, and Class are required!");
        }

        const stud = student.find((stud)=>{stud.sid === sid});
        if(stud){
            return res.send("Id already exists!");
        }

        const newStud={
        studId,
        studName,
        studClass
        };
        
        
        student.push(newStud);
        console.log(`New Student: ${JSON.stringify(newStud)}`);
        return res.status(201).send("Registration Successful!");

    } catch (error) {
        res.status(401).send("Error in Registration")
    }
}


module.exports = {
    signup
};
