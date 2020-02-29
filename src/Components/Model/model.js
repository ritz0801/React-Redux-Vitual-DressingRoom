import React, { Component } from 'react';
import { connect } from 'react-redux';

import "./styleModel.css";

class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contain: 'images/background/background_998.jpg',
            body: 'images/allbody/bodynew.png',
            bikinitop: 'images/allbody/bikini_branew.png',
            bikinibottom: 'images/allbody/bikini_pantsnew.png',
            model: 'images/model/1000new.png',
            feetleft: 'images/allbody/feet_high_leftnew.png',
            feetright: 'images/allbody/feet_high_rightnew.png',
        }
    }
    render() {
        return (
            <div className="contain" style={{ background: `url(${this.state.contain})` }}>
                <div className="body" style={{ background: `url(${this.state.body})` }}>
                </div>
                <div className="model" style={{ background: `url(${this.state.model})` }}>
                </div>
                <div className="bikinitop" style={{ background: `url(${this.state.bikinitop})` }}>
                </div>
                <div className="bikinibottom" style={{ background: `url(${this.state.bikinibottom})` }}>
                </div>
                <div className="feetleft" style={{ background: `url(${this.state.feetleft})` }}>
                </div>
                <div className="feetright" style={{ background: `url(${this.state.feetright})` }}>
                </div>
                <div className="bikinitop" style={{ backgroundImage: `url(${this.props.tryProduct.topclothes})`, backgroundSize: 'cover' }}></div>
                <div className="bikinibottom" style={{ backgroundImage: `url(${this.props.tryProduct.botclothes})`, backgroundSize: 'cover' }}></div>
                <div className="body" style={{ backgroundImage: `url(${this.props.tryProduct.shoes})`, backgroundSize: 'cover' }}></div>
                <div className="body" style={{ backgroundImage: `url(${this.props.tryProduct.handbags})`, backgroundSize: 'cover' }}></div>
                <div className="body" style={{ backgroundImage: `url(${this.props.tryProduct.necklaces})`, backgroundSize: 'cover' }}></div>
                <div className="contain" style={{ backgroundImage: `url(${this.props.tryProduct.background})`, backgroundSize: 'cover' }}></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tryProduct: state.tryProductReducer,
    }
}

export default connect(mapStateToProps, null)(Model);