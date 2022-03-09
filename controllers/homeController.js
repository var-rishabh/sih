exports.homeDummy =(req,res)=>{
    res.status(200).json({
        success:true,
        greeting:"Welcome to SIH"
    })
};