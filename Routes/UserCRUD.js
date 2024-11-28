const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.get("/get", async (req, res) => {
    try{
        const users = await User.find();
        res.send({msg: "Users Found successfully", users});
    }catch(error){
        res.status(400).send({msg: error.message});
    }
});

router.post("/post", async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.status(200).send({msg: "User added successfully", user});
    }catch(error){
        res.status(400).send({msg: error.message});
    }
});

router.put("/put/:id", async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,
            req.body,
            {new : true} );
        
            if (!user) {
                res.status(404).send("User Not Found ! Verify your Id !");
            }

            res.status(200).send({msg : "User Updated Successfully !" })
    } catch (error){
        res.status(500).send({msg: "Server error", error})
    }
});

router.delete("/delete/:id", async (req,res) =>{
    try{
        const user = await  User.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).send({msg : "User not found ! Verify your Id !"})
        }
        res.status(200).send({msg : "User Deleted Successfully"})
    } catch (error){
        res.status(500).send({msg : "Server error", error})
    }
});

module.exports= router ;