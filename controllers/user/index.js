

const userController = {
    login: async(req,res)=>{
        res.status(200).send({
            status:true,
            message:"login succesfully",
        });
    },
    register: async(req,res)=>{
        res.status(200).send({
            status:true,
            message:"register successfully",
        });
    }
}

module.exports = userController;