const express = require('express')
const router = express.Router()

const inventory_location_controller = require('../controllers/inventorylocationController')
const part_controller = require('../controllers/partController')
const part_instance_controller = require('../controllers/partinstanceController')
const warehouse_controller = require('../controllers/warehouseController')

/* Part Routes */

// GET request for creating a Part
// This must come before routes that display Part (uses id)
router.get('/part/create', part_controller.part_create_get)

// POST request for creating Part
router.post('/part/create', part_controller.part_create_post)

// GET request to delete Part
router.get('/part/:id/delete', part_controller.part_delete_get)

// POST request to delete Part
router.post('/part/:id/delete', part_controller.part_delete_post)

// GET request to update Part
router.get('/part/:id/update', part_controller.part_update_get)

// POST request to update Part
router.post('/part/:id/update', part_controller.part_update_post)

// GET request for one Part
router.get('/part/:id', part_controller.part_detail)

// GET request for list of all Parts
router.get('/parts', part_controller.part_list)

/* PartInstance Routes */

// GET request for creating a PartInstance
// This must come before routes that display PartInstance (uses id)
router.get('/partinstance/create', part_instance_controller.partinstance_create_get)

// POST request for creating PartInstance
router.post('/partinstance/create', part_instance_controller.partinstance_create_post)

// GET request to delete PartInstance
router.get('/partinstance/:id/delete', part_instance_controller.partinstance_delete_get)

// POST request to delete PartInstance
router.post('/partinstance/:id/delete', part_instance_controller.partinstance_delete_post)

// GET request to update PartInstance
router.get('/partinstance/:id/update', part_instance_controller.partinstance_update_get)

// POST request to update PartInstance
router.post('/partinstance/:id/update', part_instance_controller.partinstance_update_post)

// GET request for one PartInstance
router.get('/partinstance/:id', part_instance_controller.partinstance_detail)

// GET request for list of all PartInstances
router.get('/partinstances', part_instance_controller.partinstance_list)

/* InventoryLocation Routes */

// GET request for creating an InventoryLocation
// This must come before routes that display InventoryLocation (uses id)
router.get('/inventorylocation/create', inventory_location_controller.inventorylocation_create_get)

// POST request for creating InventoryLocation
router.post('/inventorylocation/create', inventory_location_controller.inventorylocation_create_post)

// GET request to delete InventoryLocation
router.get('/inventorylocation/:id/delete', inventory_location_controller.inventorylocation_delete_get)

// POST request to delete InventoryLocation
router.post('/inventorylocation/:id/delete', inventory_location_controller.inventorylocation_delete_post)

// GET request to update InventoryLocation
router.get('/inventorylocation/:id/update', inventory_location_controller.inventorylocation_update_get)

// POST request to update InventoryLocation
router.post('/inventorylocation/:id/update', inventory_location_controller.inventorylocation_update_post)

// GET request for one InventoryLocation
router.get('/inventorylocation/:id', inventory_location_controller.inventorylocation_detail)

// GET request for list of all InventoryLocations
router.get('/inventorylocations', inventory_location_controller.inventorylocation_list)

/* Warehouse Routes */

// GET request for creating a Warehouse
// This must come before routes that display Warehouse (uses id)
router.get('/warehouse/create', warehouse_controller.warehouse_create_get)

// POST request for creating Warehouse
router.post('/warehouse/create', warehouse_controller.warehouse_create_post)

// GET request to delete Warehouse
router.get('/warehouse/:id/delete', warehouse_controller.warehouse_delete_get)

// POST request to delete Warehouse
router.post('/warehouse/:id/delete', warehouse_controller.warehouse_delete_post)

// GET request to update Warehouse
router.get('/warehouse/:id/update', warehouse_controller.warehouse_update_get)

// POST request to update Warehouse
router.post('/warehouse/:id/update', warehouse_controller.warehouse_update_post)

// GET request for one Warehouse
router.get('/warehouse/:id', warehouse_controller.warehouse_detail)

// GET request for list of all Warehouses
router.get('/warehouses', warehouse_controller.warehouse_list)

module.exports = router