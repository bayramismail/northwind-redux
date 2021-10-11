import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Table } from "reactstrap";

import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

import MUIDataTable from "mui-datatables";


const columns = [
    {
     name: "productName",
     label: "Product Name",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "quantityPerUnit",
     label: "Quantity Per Unit",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "unitsInStock",
     label: "Units In Stock",
     options: {
      filter: true,
      sort: false,
     }
    }
   ];
   const options = {
    //filterType: 'checkbox',
  };

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div>
        <h1>Product List {this.props.currentCategory.categoryName}</h1>
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Quantity Per Unit </th>
                  <th>Units In Stock</th>
                </tr>
              </thead>
              <tbody>
                {this.props.products.map((product) => (
                  <tr>
                    <th scope="row">{product.id}</th>
                    <td>{product.productName}</td>
                    <td>{product.quantityPerUnit}</td>
                    <td>{product.unitsInStock}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: bindActionCreators(productActions.getProducts, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
