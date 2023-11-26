import ItemCard from "./ItemCard";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const { categoryData, showItemsInList, setIndex } = props;
  const { itemCards, title } = categoryData.card.card;
  return (
    <div className="bg-slate-100 my-3 w-10/12 md:w-8/12 m-auto px-4 py-2 shadow-md">
      <div
        className="flex items-center justify-between border-b-2 pb-2 mb-3 border-b-black cursor-pointer"
        onClick={() => {
          setIndex();
        }}
      >
        <h2 className="md:text-xl">{title + " (" + itemCards.length + ")"}</h2>
        <span className="text-xl">⌄</span>
      </div>
      {showItemsInList && (
        <div>
          {itemCards.map((item) => (
            <ItemCard
              key={item.card.info.id}
              itemData={item}
              cardLocation="Menu"
            ></ItemCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
