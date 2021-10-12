import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Table, Badge, Button } from "reactstrap";

import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertifyjs from "alertifyjs";
class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  addToCart = (product) => {
    this.props.addToCart({ quantity: 1, product });
    alertifyjs.success(product.productName+" sepete eklendi");
  };
  render() {
    return (
      <div>
        <h1>
          <Badge style={{ backgroundColor: "darkgrey" }}>
            Product List
            <Badge style={{ backgroundColor: "darkgreen" }}>
              {this.props.currentCategory.categoryName}
            </Badge>
          </Badge>
        </h1>
        <Row>
          <Col>
            <Table hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Quantity Per Unit </th>
                  <th>Units In Stock</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.products.map((product) => (
                  <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.productName}</td>
                    <td>{product.quantityPerUnit}</td>
                    <td>{product.unitsInStock}</td>
                    <td>
                      <Button
                        onClick={() => this.addToCart(product)}
                        color="success"
                      >
                        Sepet'e Ekle
                      </Button>
                    </td>
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
    addToCart: bindActionCreators(cartActions.addToCart, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
