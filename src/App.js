import React, { useEffect, useState } from "react";
import "./App.css";

import bgImage from "./images/6.jpeg";
import chip from "./images/chip.png";
import visa from "./images/visa.png";
import mastercard from "./images/mastercard.png";
import americanexpress from "./images/amex.png";
import dinersclub from "./images/dinersclub.png";
import discover from "./images/discover.png";
import jcb from "./images/jcb.png";

import ReactCardFlip from "react-card-flip";

const Card = ({ cardNumber }) => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (cardNumber.startsWith("51")) {
      setActiveCard("mastercard");
      return;
      
    }
    if (cardNumber.startsWith("34")) {
      setActiveCard("americanexpress");
      return;
      
    }

    if (cardNumber.startsWith("300")) {
      setActiveCard("dinersclub");
      return;
      
    }

    if (cardNumber.startsWith("6011")) {
      setActiveCard("discover");
      return;
      
    }

    if (cardNumber.startsWith("35")) {
      setActiveCard("jcb");
      return;
    }
    setActiveCard(null);
  }, [cardNumber]);

  return (
    <>
      {activeCard === "mastercard" && (
        <img
          src={mastercard}
          alt="mastercard img "
          className="card_animation"
        />
      )}
      {activeCard === "americanexpress" && (
        <img
          src={americanexpress}
          alt="americanexpress img "
          className="card_animation"
        />
      )}
      {activeCard === "jcb" && (
        <img src={jcb} alt="jcb img " className="card_animation" />
      )}
      {activeCard === "dinersclub" && (
        <img
          src={dinersclub}
          alt="dinersclub img "
          className="card_animation"
        />
      )}
      {activeCard === "discover" && (
        <img src={discover} alt="discover img " className="card_animation" />
      )}
      {activeCard === null && (
        <img src={visa} alt="visa img " className="card_animation" />
      )}
    </>
  );
};

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpireMonth, setCardExpireMonth] = useState("");
  const [cardExpireYear, setCardExpireYear] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [displayCardNumber, setDisplayCardNumber] = useState("");
  const [activeState, setActiveState] = useState("");

  const noreload = (e) => {
    e.preventDefault();
  };

  return (
    <div id="card">
      <div className="card_rotate">
        <ReactCardFlip
          containerStyle={{ position: "relative" }}
          cardZIndex="9999"
          isFlipped={isFlipped}
          flipDirection="horizontal"
        >
          <div>
            <div
              className="card_entry"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${bgImage})`,
              }}
            >
              <div className="d-flex justify-content-between align-items-around h-25 m-3">
                <img src={chip} alt="bg img" className="chip" />
                <div className="card_type_img d-flex justify-content-between my-2 align-items-center">
                  <Card cardNumber={cardNumber} />
                </div>
              </div>
              <div
                className={`mx-4 p-2 ${
                  activeState.id === "cardNumber"
                    ? "border rounded border-white"
                    : ""
                }`}
              >
                <h5>
                  {cardNumber.length > 0
                    ? displayCardNumber
                    : "#### #### #### ####"}
                </h5>
              </div>
              <div className="d-flex justify-content-between align-items-center mx-4 h-50 ">
                {/* <div className="p-1 w-100 mr-2"> */}
                <div
                  className={`w-100 p-2 mr-2 ${
                    activeState.id === "cardName"
                      ? "border rounded border-white"
                      : ""
                  }`}
                >
                  <label> Card Holder </label>
                  <h5 className="text-uppercase">
                    {cardName.length > 0 ? cardName : "FULL NAME"}
                  </h5>
                </div>
                {/* <div className="p-1"> */}
                <div
                  className={`p-1 ${
                    activeState.id === "cardExpMonth" ||
                    activeState.id === "cardExpYear"
                      ? "border rounded border-white"
                      : ""
                  }`}
                >
                  <label>Expires</label>
                  <div className="d-flex justify-content-center">
                    <h6>
                      {cardExpireMonth.length > 0
                        ? cardExpireMonth + "/"
                        : "MM/"}
                    </h6>
                    <h6>
                      {cardExpireYear.length > 0
                        ? cardExpireYear.slice(2, 4)
                        : "YY"}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div onClick={() => setIsFlipped(!isFlipped)}>
            <div
              className="card_entry"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${bgImage})`,
              }}
            >
              <div className="card_strip"></div>
              <div className="d-flex m-2 h-25">
                <div className="p-1 w-100 mr-2 ">
                  <h6 className="text-right px-2"> CVV </h6>
                  <h6 className="text-uppercase border rounded p-2 my-1 bg-light text-right text-dark">
                    {cardCVV.length > 0 ? cardCVV : "***"}
                  </h6>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center m-3 h-25">
                <span></span>

                <div className="card_type_img my-2">
                  {cardNumber[0] === "5" && cardNumber[1] === "1" ? (
                    <img src={mastercard} alt="mastercard img " />
                  ) : cardNumber[0] === "3" && cardNumber[1] === "4" ? (
                    <img src={americanexpress} alt="americanexpress img " />
                  ) : cardNumber[0] === "3" &&
                    cardNumber[1] === "0" &&
                    cardNumber[2] === "0" ? (
                    <img src={dinersclub} alt="dinersclub img " />
                  ) : cardNumber[0] === "6" &&
                    cardNumber[1] === "0" &&
                    cardNumber[2] === "1" &&
                    cardNumber[3] === "1" ? (
                    <img src={discover} alt="discover img " />
                  ) : cardNumber[0] === "3" && cardNumber[1] === "5" ? (
                    <img src={jcb} alt="jcb img " />
                  ) : (
                    <img src={visa} alt="visa img " />
                  )}
                </div>
              </div>
            </div>
          </div>
        </ReactCardFlip>
      </div>
      <form onSubmit={noreload}>
        <div className="card_detail card px-4 d-flex justify-content-center">
          <div className="card_data p-4">
            <div className="py-2">
              <label> Card Number </label>
              <input
                type="tel"
                maxLength="16"
                id="cardNumber"
                value={cardNumber}
                onFocus={(e) => {
                  setActiveState(e.target);
                  setIsFlipped(false);
                }}
                onBlur={(e) => setActiveState("card")}
                onClick={() => setIsFlipped(false)}
                onChange={(e) => {
                  const card_number = e.target.value.trim();
                  const card_number_hash =
                    card_number + "#".repeat(16 - card_number.length);
                  setDisplayCardNumber(
                    card_number_hash.match(/.{1,4}/g).join(" ")
                  );
                  setCardNumber(card_number);
                }}
                className="card_number w-100 form-control mr-2"
              />
            </div>
            <div className="py-2">
              <label> Card Name </label>
              <input
                id="cardName"
                type="text"
                maxLength="27"
                value={cardName}
                onFocus={(e) => {
                  setActiveState(e.target);
                  setIsFlipped(false);
                }}
                onBlur={(e) => setActiveState("card")}
                onClick={() => setIsFlipped(false)}
                onChange={(e) => setCardName(e.target.value)}
                className="w-100 form-control mr-2"
              />
            </div>
            <div className="d-flex justify-content-around align-items-center py-2 row">
              <div className="col-8">
                <label> Expiration Date </label>
                <div className="d-flex">
                  <select
                    id="cardExpMonth"
                    className="form-control mr-2"
                    onFocus={(e) => {
                      setActiveState(e.target);
                      setIsFlipped(false);
                    }}
                    onClick={() => setIsFlipped(false)}
                    onBlur={(e) => setActiveState("card")}
                    onChange={(e) => {
                      setCardExpireMonth(e.target.value);
                    }}
                  >
                    <option>MM</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <select
                    id="cardExpYear"
                    className="form-control mr-2"
                    onFocus={(e) => {
                      setActiveState(e.target);
                      setIsFlipped(false);
                    }}
                    onClick={() => setIsFlipped(false)}
                    onBlur={(e) => setActiveState("card")}
                    onChange={(e) => {
                      setCardExpireYear(e.target.value);
                    }}
                  >
                    <option>YY</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                  </select>
                </div>
              </div>

              <div className="col-4">
                <label> CVV </label>
                <div>
                  <input
                    type="tel"
                    className="cvv form-control mr-2"
                    id="cvv"
                    maxLength="4"
                    value={cardCVV}
                    onFocus={(e) => {
                      setActiveState(e.target);
                      setIsFlipped(true);
                    }}
                    onBlur={(e) => setActiveState("card")}
                    onClick={() => setIsFlipped(true)}
                    onChange={(e) => setCardCVV(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button className="btn btn-primary my-2 w-100"> Submit </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
