/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("svhlma9q3av101j")

  // remove
  collection.schema.removeField("uoxnouol")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pprm1cck",
    "name": "items",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "txsj83jx40qf0xj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("svhlma9q3av101j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uoxnouol",
    "name": "items",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("pprm1cck")

  return dao.saveCollection(collection)
})
