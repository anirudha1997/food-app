import React, { useEffect, useState } from "react";

const ToastMessage = ({ message }) => {
  return (
    <div
      className={
        "fixed left-1/2 -translate-x-1/2 top-16 px-5 py-2 bg-green-100 font-bold z-50 rounded-lg"
      }
    >
      {message}
    </div>
  );
};

export default ToastMessage;
