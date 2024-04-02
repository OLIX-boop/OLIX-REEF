/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txsj83jx40qf0xj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctguo2o2",
    "name": "type1",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "SPS",
        "LPS",
        "SOFT"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txsj83jx40qf0xj")

  // remove
  collection.schema.removeField("ctguo2o2")

  return dao.saveCollection(collection)
})
