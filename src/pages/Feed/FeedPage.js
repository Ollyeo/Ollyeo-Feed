import React, { Component } from 'react';
import { Card } from 'component/Card';
import { connect } from 'react-redux';

class FeedPage extends Component{
    constructor(){
        
    }
    
    render(){
        
        return {
            
        }
    }
}

export default connect(
  (state) => ({
    number: state.counter.number
  })
)(FeedPage);
