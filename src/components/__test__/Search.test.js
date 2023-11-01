import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { afterEach } from "node:test";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

beforeAll(() => {
  console.log("Before All");
});

beforeEach(() => {
  console.log("Before Each");
});

afterAll(() => {
  console.log("After All");
});

afterEach(() => {
  console.log("After Each");
});

it("Should search for ice input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInputBox = screen.getByTestId("searchInput");

  fireEvent.change(searchInputBox, { target: { value: "ice" } });

  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(4);
});

it("Should filter most popular restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topRatedResButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedResButton);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(3);
});
