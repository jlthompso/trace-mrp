import React from 'react'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function InventoryNavbar () {
    let path = '/inventory'
    return (
        <Nav variant="pills" defaultActiveKey="link-3" className="flex-column">
            <Nav.Link as={Link} to={`${path}/warehouses`} eventKey="link-1">Warehouses</Nav.Link>
            <Nav.Link as={Link} to={`${path}/locations`} eventKey="link-2">Inventory Locations</Nav.Link>
            <Nav.Link as={Link} to={`${path}/parts`} eventKey="link-3">Parts</Nav.Link>
            <hr className="w-100" />
            <Nav.Link as={Link} to={`${path}/warehouses/create`} eventKey="link-4">Add Warehouse</Nav.Link>
            <Nav.Link as={Link} to={`${path}/locations/create`} eventKey="link-5">Add Inventory Location</Nav.Link>
            <Nav.Link as={Link} to={`${path}/parts/create`} eventKey="link-6">Add Part</Nav.Link>
        </Nav>
    )
}

function ManufacturingNavbar () {
    let path = '/manufacturing'
    return (
        <Nav variant="pills" defaultActiveKey="link-1" className="flex-column">
            <Nav.Link as={Link} to={`${path}/workorders`}  eventKey="link-1">Workorders</Nav.Link>
            <hr className="w-100" />
            <Nav.Link as={Link} to={`${path}/workorders/create`} eventKey="link-2">New Workorder Template</Nav.Link>
        </Nav>
    )
}

function UserNavbar () {
    let path = 'user'
    return (
        <Nav variant="pills" defaultActiveKey="link-1" className="flex-column">
            <Nav.Link as={Link} to={`${path}/profile`} eventKey="link-1">Profile</Nav.Link>
            <Nav.Link as={Link} to={`${path}/password`} eventKey="link-2">Change Password</Nav.Link>
        </Nav>
    )
}

export {InventoryNavbar, ManufacturingNavbar, UserNavbar}