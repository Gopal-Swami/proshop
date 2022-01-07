import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Form, Button, Card } from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";
const CartScreen = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const productId = params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  console.log(qty);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartScreen;
