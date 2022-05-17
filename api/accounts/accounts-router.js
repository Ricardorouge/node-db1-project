const Accounts = require('./accounts-model')
const {checkAccountId,checkAccountNameUnique,checkAccountPayload} = require('./accounts-middleware')

const router = require('express').Router()

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.getAll()
  .then(result=>{
    result?
    res.json(result)
    :
    res.json([])
  })
  .catch(next)
})

router.get('/:id',checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  res.json(req.account)
})

router.post('/',checkAccountPayload,checkAccountNameUnique, async(req, res, next) => {
  // DO YOUR MAGIC
 try{
   const {name,budget} = req.body
   const newAccount = await Accounts.create({
     name:name.trim(),
     budget:budget
   })
   res.status(201).json(newAccount)
 }
 catch(err){
   next(err)
 }
})

router.put('/:id',checkAccountId,checkAccountPayload, async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    const {name,budget} = req.body
    const updated = await Accounts.updateById(req.params.id,{name:name.trim(),budget:budget})
    res.status(200).json(updated)
  }
  catch(err){
    next(err)
  }
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
