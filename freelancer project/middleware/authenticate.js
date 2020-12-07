module.exports = function(req,res,next){
    const flag = req.header('x-auth-token');
    if(!flag){
        return res.status(401).json({msg:'Authorization denied'});
    }
    try{
        req._id = flag;
        next();
    }
    catch(err)
    {
        return res.status(401).json({msg:"Authorization denied"});
    }
};