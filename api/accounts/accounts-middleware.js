const Accounts = require('./accounts-model')
const db = require('../../data/db-config')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const {name,budget} = req.body 
  if(name === undefined|| budget === undefined){
    return res.status(400).json({ message: "name and budget are required" })
  }
  else if(name.trim().length <3 || name.trim().length >100){
    return res.status(400).json({ message: "name of account must be between 3 and 100"})
  }  
  else if(!Number(budget)){
    return res.status(400).json({message: "budget of account must be a number" })
  }
  else if(budget < 0 || budget>1000000){
    return res.status(400).json({message: "budget of account is too large or too small"})
  }
  next()

}

exports.checkAccountNameUnique = async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const exists = await db('accounts').where({name:req.body.name.trim()}).first()
    exists?
    res.status(400).json({message: "that name is taken"})
    :next()
  }
  catch(err){
    next(err)
  }

}

exports.checkAccountId = async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const account = await(Accounts.getById(req.params.id))
    !account?
    res.status(404).json({message: "account not found"})
    :
    req.account= account
    next()
  }
  catch(err){
    next(err)
  }
}
