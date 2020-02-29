import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tryProduct } from '../../Actions';

class ProductItem extends Component {
    render() {

        const { name, imgSrc_jpg } = this.props.item;

        return (
            <div className="card p-2 my-2">
                <img src={imgSrc_jpg} alt='item' />
                <p>{name}</p>
                <button className="btn btn-success" onClick={() => { this.props.tryProduct(this.props.item) }}>Thử đồ</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tryProduct: (product) => {
            dispatch(tryProduct(product));
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);