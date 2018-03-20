import React  from 'react'
import { Avatar, Row, Col } from 'antd'

// Gutter => column과 column 사이의 간격정도

const FeedCardComment = ({avatar, comment}) => {
    return (
        <div className="gutter">
            <Row gutter={48}>
                <Col className="gutter-row" span={4}>
                    <Avatar src={avatar}/>
                </Col>
                <Col className="gutter-row" span={12}>
                    <p>{comment}</p>
                </Col> 
            </Row>
        </div>
    )
}

export default FeedCardComment;