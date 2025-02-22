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

const create =async account => {
  // DO YOUR MAGIC
 const id = await db('accounts').insert(account)
 return getById(id)
}

const updateById = async(id, account) => {
  // DO YOUR MAGIC
  await db('accounts').update(account).where({id:id})
  return getById(id)
}

const deleteById = async id => {
  // DO YOUR MAGIC
  const result = await getById(id)
  await db('accounts')
  .del()
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
