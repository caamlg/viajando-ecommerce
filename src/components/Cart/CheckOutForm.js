import { React, useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import "./CheckOutForm.css";

const CheckOutForm = ({ cart, totalToPay, clear }) => {
  const [buyer, setBuyer] = useState({
    buyerName: "",
    buyerMail: "",
    buyerPhone: "",
  });

  const [validData, setValidData] = useState(false);

  const formHandler = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
    validateBuyer();
  };

  const validAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Hay un error en los datos ingresados, por favor revisarlo.",
    });
  };

  const validateBuyer = () => {
    if (
      isNaN(buyer.buyerPhone) ||
      !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        buyer.buyerMail
      ) ||
      !/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
        buyer.buyerName
      )
    ) {
      setValidData(false);
    } else {
      setValidData(true);
    }
  };

  const date = new Date();
  const orderDate = date.toLocaleDateString();

  const handleBuy = (e) => {
    e.preventDefault();
    if (validData) {
      const order = {
        buyer,
        cart,
        totalToPay,
        date: orderDate,
      };

      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => {
        Swal.fire({
          icon: "success",
          title: "¡Pedido confirmado!",
          text: "Tu código de orden es " + id,
        }).then((result) => {
          result.isConfirmed && clear();
          result.isDismissed && clear();
        });
      });
    } else {
      validAlert();
    }
  };

  const inputs = [
    { name: "buyerName", placeholder: "Nombre" },
    { name: "buyerMail", placeholder: "Mail" },
    { name: "buyerPhone", placeholder: "Teléfono" },
  ];

  return (
    <div className="form-container">
      <form className="checkout-form">
        <h3>Generar pedido</h3>
        <h4>
          Por favor completa tus datos para contactarte y coordinar el pago y la
          entrega de tu compra.
        </h4>
        {inputs.map((input) => (
          <div key={input.name}>
            <input
              name={input.name}
              placeholder={input.placeholder}
              type="text"
              onChange={formHandler}
            />
          </div>
        ))}
        <button
          disabled={!(buyer.buyerName && buyer.buyerMail && buyer.buyerPhone)}
          className="btn continue"
          onClick={handleBuy}
        >
          Comprar
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
