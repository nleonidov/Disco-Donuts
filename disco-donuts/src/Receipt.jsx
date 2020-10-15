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
          <p>{props.drink}</p>
          <p>{props.pastry}</p>
          <p>{props.total}</p>
        </div>
      )}
    </div>
  );
}

export default Receipt;
