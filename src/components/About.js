import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className="flex items-center justify-center mt-10 pt-20 flex-col lg:flex-row">
        <div className="lg:pr-10 text-center lg:text-left">
          <h1 className="text-4xl lg:text-7xl font-extrabold">Food On Rails</h1>
          <p className="font-semibold text-xl lg:text-3xl mt-3">
            Get your food delivered in minutes... Order Now!
          </p>
        </div>
        <div className="py-5 lg:py-0 lg:pl-10 lg:border-l-2 lg:border-l-black">
          <img
            src="https://img.freepik.com/premium-vector/fast-delivery-sticker-design-free-shipping-express-service-fast-delivery-express-shipping-urgent-shipping-services-express-delivery-shipping-fast-delivery-quick-move-vector-illustration_435184-1351.jpg?w=2000"
            alt="superfast delivery"
            className="max-h-[200px] lg:max-h-[350px]"
          />
        </div>
      </div>
    );
  };
}

export default About;
