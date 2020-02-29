import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chooseType } from '../../Actions';

class Categories extends Component {
    render() {
        return (
            <div className="btn-group">
                {this.props.categoriesList.map((item, index) => {
                    return <button key={index} className="btn btn-secondary" onClick={() => { this.props.chooseType(item.type) }}>{item.showName}</button>
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categoriesList: state.categoriesReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chooseType: (type) => {
            dispatch(chooseType(type));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);