import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";
import { Button, Table } from "reactstrap";

class CartDetail extends Component {
  removeFromCart(product) {
    this.props.removeFromCart(product);
    alertify.error("Sepetten ürün kaldırıldı");
  }
  render() {
    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
