import React from "react";

function Receipt(props) {
  return (
    <div>
      {!props.click ? (
        <> </>
      ) : (
        <div>
          <h1>Receipt Info:</h1>
          <h2>{props.name}</h2>
          <h1>Drink:</h1>
          <p>{props.drink}</p>
          <h1>Pastry:</h1>
          <p>{props.pastry}</p>
          <h1>Your Total:</h1>
          <p>${props.total}</p>
          <h6>We hope to see you again!</h6>
        </div>
      )}
    </div>
  );
}

export default Receipt;
