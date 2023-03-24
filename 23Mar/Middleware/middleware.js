exports.validate =(req, res, next)=>{

    let sid = req.query.studId;
    let sname = req.query.studName;
    let sclass = req.query.studClass;

    if(!sid){
        res.send({message: "Please enter Student Id"});
        return;
    }
    if(!sname){
        res.send({message: "Please enter Student Name"});
        return;
    }
    if(!sclass){
        res.send({message: "Please enter Student Class"});
        return;
    }
    next();
}