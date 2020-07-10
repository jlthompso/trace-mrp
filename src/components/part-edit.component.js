import React, { Component } from 'react'
import {Form, Col, Button} from 'react-bootstrap'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class PartEdit extends Component {
    constructor (props) {
        super(props)

        this.onChangePartName = this.onChangePartName.bind(this)
        this.onChangePartNumber = this.onChangePartNumber.bind(this)
        this.onChangePartRevision = this.onChangePartRevision.bind(this)
        this.onChangePartUnitOfMeasure = this.onChangePartUnitOfMeasure.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            part_number: '',
            part_name: '',
            part_revision: 'NC',
            part_unitOfMeasure: 'each'
        }
    }

    componentDidMount () {
        let path = this.props.location.pathname
        if (path.split('/')[4] === 'update') {
            axios.get('http://localhost:4000' + path)
            .then(response => {
                this.setState({
                    part_number: response.data.number,
                    part_name: response.data.name,
                    part_revision: response.data.revision,
                    part_unitOfMeasure: response.data.unitOfMeasure
                })
            })
            .catch(function (error) {
                console.log(error)
            })
        }
    }

    onChangePartNumber (e) {
        this.setState({part_number: e.target.value})
    }

    onChangePartName (e) {
        this.setState({part_name: e.target.value})
    }

    onChangePartRevision (e) {
        this.setState({part_revision: e.target.value})
    }

    onChangePartUnitOfMeasure (e) {
        this.setState({part_unitOfMeasure: e.target.value})
    }

    onSubmit (e) {
        e.preventDefault()

        const newPart = {
            number: this.state.part_number,
            name: this.state.part_name,
            revision: this.state.part_revision,
            unitOfMeasure: this.state.part_unitOfMeasure
        }

        axios.post(`http://localhost:4000/inventory/parts/${this.props.match.params.id}/update`, newPart)
            .then(response => {
                this.setState({
                    part_number: response.data.number,
                    part_name: response.data.name,
                    part_revision: response.data.revision,
                    part_unitOfMeasure: response.data.unitOfMeasure
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render () {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="formPartNumber">
                        <Form.Label>Part Number</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.part_number}
                            onChange={this.onChangePartNumber}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="formPartRev">
                        <Form.Label>Revision</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.part_revision}
                            onChange={this.onChangePartRevision}
                            required
                        />
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="formPartUOM">
                        <Form.Label>Unit of Measure</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.part_unitOfMeasure}
                            onChange={this.onChangePartUnitOfMeasure}
                            required
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="7" controlId="formPartName">
                        <Form.Label>Part Name or Description</Form.Label>
                        <Form.Control
                            value={this.state.part_name}
                            onChange={this.onChangePartName}
                            type="text"
                        />
                    </Form.Group>
                </Form.Row>

                <Button variant="secondary" type="submit">Update Part</Button>
            </Form>
        )
    }
}

export default PartEdit