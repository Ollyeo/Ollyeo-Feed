import React, { Component } from 'react'
import { Card } from 'antd'

class FeedCard extends Component{

    constructor(){
        
    }
    
    render() {
        const { title } = this.props;
        
        return (
            <Card title={title} style = {{ width: 300 }}>
            </Card>
        )
    }
}

export default FeedCard;