import React, { Component } from 'react'
import { Col } from 'reactstrap'
import Swal from 'sweetalert2';
import Axios from 'axios';

class Module extends Component {
    clickHandler = data => {
        Swal.fire({
            type: 'question',
            title: data.name,
            text: 'Are you sure ??',
            showCancelButton: true,
            cancelButtonColor: '#ffc107',
        })
        .then(res => {
            if (res.value) {
                console.log(res);
                Axios.get(data.url)
                .then(res => {
                    console.log(res);
                })
            } else {
                console.log(res);
            }
        })
    }
    render() {
        return (
            <Col
                className="p-0 text-center h-100"
                style={{backgroundImage: `url(${this.props.data.background})`, cursor: 'pointer'}}
                onClick={()=>this.clickHandler(this.props.data)} />
        )
    }
}

export default Module;