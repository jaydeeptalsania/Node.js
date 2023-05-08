const express = require('express');
const router = express.Router();

const getAllUsers = (req,res)=>{
    res.status(500).json({
      status:'error',
      message:'Routes are not ready!'
    })
  }
  
  const creatUser = (req,res)=>{
    res.status(500).json({
      status:'error',
      message:'Routes are not ready!'
    })
  }
  
  const updateUser = (req,res)=>{
    res.status(500).json({
      status:'error',
      message:'Routes are not ready!'
    })
  }
  
  const deleteUser = (req,res)=>{
    res.status(500).json({
      status:'error',
      message:'Routes are not ready!'
    })
  }
  
  const getUser = (req,res)=>{
    res.status(500).json({
      status:'error',
      message:'Routes are not ready!'
    })
  }

router.route('/').get(getAllUsers).post(creatUser);
router.route('/:id').patch(updateUser).delete(deleteUser).get(getUser);

module.exports = router;