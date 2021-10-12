import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  NavItem,
  NavLink,
  Badge,
  Button,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";
class CartSummary extends Component {
  componentDidMount() {}
  renderEmpty() {
    return (
      <NavItem>
        <NavLink href="#">Sepet Boş</NavLink>
      </NavItem>
    );
  }
  removeFromCart = (product) => {
    this.props.removeFromCart(product);
    alertify.error("Sepetten ürün kaldırıldı");
  };
  renderSummary() {
    return (
      <UncontrolledButtonDropdown direction="left" >
        <DropdownToggle caret color="light">Sepet</DropdownToggle>
        <DropdownMenu >
          {this.props.cart.map((cartItem) => (
            <DropdownItem>
              <Button size="sm" onClick={() => this.removeFromCart(cartItem.product)} color="danger">Sil</Button>
              {cartItem.product.productName}
              <Badge style={{ backgroundColor: "darkgreen" }}>
                {cartItem.quantity}
              </Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider></DropdownItem>
          <DropdownItem>Sepete Git</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
