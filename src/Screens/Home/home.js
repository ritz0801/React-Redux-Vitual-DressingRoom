import React, { Component } from 'react';
import Header from '../../Layouts/Header/header';
import Footer from '../../Layouts/Footer/footer';
import Categories from '../../Components/Categories/categories';
import Products from '../../Components/Products/products';
import Model from '../../Components/Model/model';

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <Categories />
                            <Products />
                        </div>
                        <div className="col-md-6">
                            <Model />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;