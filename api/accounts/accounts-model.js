const db = require('../../data/db-config')

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts')
  .where({id:id})
  .first()
}

const create = account => {
  // DO YOUR MAGIC
  db('accounts')
  .insert(account)
  .then(result=>{
    return getById(result)
  })
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  db('accounts')
  .update(account)
  .where({id:id})
  .then(result=>{
    return getById(result)
  })
}

const deleteById = id => {
  // DO YOUR MAGIC
  const result = getById(id)
  db('accounts')
  .delete()
  .where({id:id})
  return result
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
