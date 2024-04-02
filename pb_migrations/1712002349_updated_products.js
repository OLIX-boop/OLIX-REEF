/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txsj83jx40qf0xj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k1lh3v0x",
    "name": "type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("txsj83jx40qf0xj")

  // remove
  collection.schema.removeField("k1lh3v0x")

  return dao.saveCollection(collection)
})
