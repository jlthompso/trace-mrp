import React, { Component } from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Part = props => (
    <tr>
        <td>{props.part.number}</td>
        <td>{props.part.name}</td>
        <td>{props.part.revision}</td>
        <td>{props.part.unitOfMeasure}</td>
        <td>TBI</td>
        <td>
            <Link to={"parts/" + props.part._id + "/update"}>Edit</Link>
        </td>
    </tr>
)

class PartList extends Component {
    constructor (props) {
        super(props)
        this.state = {parts: []}
    }

    componentDidMount () {
        axios.get('http://localhost:4000/inventory/parts/')
            .then(response => {
                this.setState({parts: response.data})
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    PartList() {
        return this.state.parts.map(function(part, i){
            return <Part part={part} key={i} />;
        })
    }

    render () {
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>Part Number</th>
                        <th>Name/Description</th>
                        <th>Revision</th>
                        <th>Unit of Measure</th>
                        <th>Available QTY</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.PartList()}
                </tbody>
           </Table> 
        )
    }
}

export default PartList