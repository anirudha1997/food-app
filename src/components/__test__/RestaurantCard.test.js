import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPopularLabel } from "../RestaurantCard";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resCard.json";
import "@testing-library/jest-dom";

it("Should render card with props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const resName = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
  expect(resName).toBeInTheDocument();
});

it("Should render Most Popular Card with props data", () => {
  const RestaurantCardWithLabel = withPopularLabel(RestaurantCard);
  render(
    <BrowserRouter>
      <RestaurantCardWithLabel resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const resName = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
  expect(resName).toBeInTheDocument();
});
