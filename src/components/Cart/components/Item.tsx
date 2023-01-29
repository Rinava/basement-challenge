import clsx from "clsx";
import Image from "next/image";
import {useState} from "react";

import {CartItem} from "../../../types";
import parsePrice from "../../../utils/parsePrice";
import Actionable from "../../commons/Actionable";

const QuantitySelector = ({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
}) => {
  const handleQuantityChange = (operation: "+" | "-") => {
    if (operation === "+") {
      setQuantity(quantity + 1);
    } else if (operation === "-" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-11 uppercase">Quantity:</label>
      <div className="flex border border-white rounded-full py-0.5">
        <Actionable action={() => handleQuantityChange("-")} className="text-11 pl-1.5 ">
          -
        </Actionable>
        <span className="text-11 px-1.5">
          <input
            className="w-5 text-center bg-black clean-n-input"
            min="1"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
          />
        </span>
        <Actionable action={() => handleQuantityChange("+")} className="text-11 pr-1.5">
          +
        </Actionable>
      </div>
    </div>
  );
};

const SizeSelector = () => {
  const sizes = ["s", "m", "l", "xl"];

  const [size, setSize] = useState("s");

  return (
    <div className="flex items-center gap-2">
      <label className="text-11 uppercase">Size:</label>
      <div className="flex gap-[2.4px]">
        {sizes.map((s) => (
          <>
            <label
              key={s}
              className={clsx(
                "leading-none flex justify-center items-center cursor-pointer w-5 h-5  border-white pt-[1px] rounded-full text-11 uppercase",
                s === size && "border",
              )}
              htmlFor={`size-${s}`}
            >
              {s}
            </label>
            <input
              checked={s === size}
              className="appearance-none"
              id={`size-${s}`}
              name="size"
              type="radio"
              value={s}
              onChange={(e) => setSize(e.target.value)}
            />
          </>
        ))}
      </div>
    </div>
  );
};

interface ItemProps {
  item: CartItem;
  className?: string;
}

const Item = ({item, className}: ItemProps) => {
  const [quantity, setQuantity] = useState(0);

  return item.product ? (
    <div className={clsx("flex items-center border bg-black border-white p-2", className)}>
      <Image
        alt={item.product.title}
        className="w-auto h-24 aspect-square object-cover"
        height={100}
        src={item.product.image}
        width={100}
      />
      <div className="pl-3 flex flex-col gap-0.5">
        <p className="uppercase text-14">{item.product.title}</p>
        <p className="text-11 text-gray">{item.product.description}</p>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <SizeSelector />
        <p className="text-14 pt-1">{parsePrice(item.product.price)}</p>
      </div>
    </div>
  ) : null;
};

export default Item;
