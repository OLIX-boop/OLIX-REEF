/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ydzykndawee4kot")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xubhz06b",
    "name": "phone",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y2pjulnq",
    "name": "name",
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
  const collection = dao.findCollectionByNameOrId("ydzykndawee4kot")

  // remove
  collection.schema.removeField("xubhz06b")

  // remove
  collection.schema.removeField("y2pjulnq")

  return dao.saveCollection(collection)
})
