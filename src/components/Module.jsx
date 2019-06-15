import React, { Component } from 'react'
import { Button,Col } from 'reactstrap'

class Module extends Component {
    render() {
        return (
            <Col md="4" className="p-0 text-center my-auto" style={{backgroundImage: `url(${this.props.data.background})`}}>
                <h4>
                    <Button color="secondary" outline>
                        {this.props.data.name}
                    </Button>
                </h4>
            </Col>
        )
    }
}

export default Module;