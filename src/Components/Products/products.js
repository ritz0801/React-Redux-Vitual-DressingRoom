import React, { Component } from 'react';
import ProductItem from '../ProductItem/productItem';
import { connect } from "react-redux";

class Products extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.filterProductsList.map((item, index) => {
                        return <div className="col-md-4" key={index}>
                            <ProductItem item={item} />
                        </div>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.productReducer,
        filterProductsList: state.chooseTypeReducer,
    }
}

export default connect(mapStateToProps, null)(Products);