import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenu.json";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

beforeEach(async () => {
  await act(() => {
    return render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
});

it("Should open accordion body when clicking on accordion header", () => {
  const accordionHeader = screen.getByText("Veg Pizza (16)");

  fireEvent.click(accordionHeader);

  const itemCards = screen.getAllByTestId("itemCard");

  expect(itemCards.length).toBe(16);
});

it("Should update cart when clicking on add to cart", () => {
  const accordionHeader = screen.getByText("Veg Pizza (16)");

  fireEvent.click(accordionHeader);

  const addtoCartButtons = screen.getAllByRole("button", {
    name: "Add to Cart",
  });

  fireEvent.click(addtoCartButtons[0]);
  fireEvent.click(addtoCartButtons[1]);

  expect(screen.getByText("Cart 🛒 (2)")).toBeInTheDocument();
});

it("Should clear cart when clicking on clear cart", () => {
  const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearCartButton);

  expect(screen.getByText("Your cart is empty!")).toBeInTheDocument();
});

it("Should update cart page when clicking on add to cart", () => {
  const accordionHeader = screen.getByText("Pasta (9)");

  fireEvent.click(accordionHeader);

  const addtoCartButtons = screen.getAllByRole("button", {
    name: "Add to Cart",
  });

  fireEvent.click(addtoCartButtons[0]);

  const itemCards = screen.getAllByTestId("itemCard");

  expect(itemCards.length).toBe(10);
});
