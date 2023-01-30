import clsx from "clsx";
import Image from "next/image";
import {Fragment, useEffect, useMemo, useState} from "react";

import {CartItem} from "../../../types";
import {Size} from "../../../types/product";
import Actionable from "../../commons/Actionable";
import {useCart} from "../../../contexts/CartContext";
import {useCursor} from "../../../contexts/CursorContext";
import parsePrice from "../../../utils/parsePrice";

const QuantitySelector = ({
  quantity,
  setQuantity,
  maxQuantity,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
  maxQuantity: number;
}) => {
  return (
    <div className="flex items-center gap-2 md:gap-3.5">
      <label className="text-11 md:text-21 uppercase">Quantity:</label>
      <div className="flex border border-white rounded-full py-0.5">
        <Actionable
          action={() => quantity > 1 && setQuantity(quantity - 1)}
          className="text-11 pl-1.5 md:text-21 md:pl-3 disabled:opacity-50"
          disabled={quantity <= 1}
        >
          -
        </Actionable>
        <span className="text-11 md:text-21 px-1.5">
          <input
            disabled
            className="w-5 text-center bg-black clean-n-input"
            type="number"
            value={quantity}
          />
        </span>
        <Actionable
          action={() => quantity < maxQuantity && setQuantity(quantity + 1)}
          className="text-11 pr-1.5 md:text-21 md:pr-3 disabled:opacity-50"
          disabled={quantity >= maxQuantity}
        >
          +
        </Actionable>
      </div>
    </div>
  );
};

const SizeSelector = ({
  size,
  id,
  setSize,
  availableSizes,
}: {
  size: Size;
  id: string;
  setSize: (size: Size) => void;
  availableSizes: Size[];
}) => {
  const {setCursor} = useCursor();

  return (
    <div className="flex items-center gap-2 md:gap-3.5">
      <label className="text-11 md:text-21 uppercase">Size:</label>
      <div className="flex gap-[2.4px]">
        {Object.values(Size).map((s) => (
          <Fragment key={s}>
            <label
              key={s}
              className={clsx(
                "uppercase leading-none flex justify-center items-center cursor-pointer w-5 h-5 border-white pt-[1px] rounded-full text-11 md:w-9 md:h-9 md:text-21",
                s === size && "border",
                !availableSizes.includes(s) && "opacity-50 cursor-not-allowed",
              )}
              htmlFor={`size-${id}-${s}`}
              onMouseEnter={() => setCursor("hover")}
              onMouseLeave={() => setCursor("default")}
            >
              {s}
            </label>
            <input
              checked={s === size}
              className="appearance-none"
              disabled={!availableSizes.includes(s)}
              id={`size-${id}-${s}`}
              name="size"
              type="radio"
              value={s}
              onChange={(e) => setSize(e.target.value as Size)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

interface ItemProps {
  item: CartItem;
  handleChanges: (item: CartItem) => void;
  className?: string;
  onRemove?: () => void;
}

const Item = ({item, handleChanges, className, onRemove}: ItemProps) => {
  const {cart} = useCart();

  const getCurrentProductSizes = () => {
    return cart.items
      .filter((i) => i.product.id === item.product.id)
      .filter((i) => i.id !== item.id)
      .map((i) => i.size);
  };

  const availableSizes = item.product?.stock
    .filter((s) => s.quantity > 0)
    .map((s) => s.size)
    .filter((s) => !getCurrentProductSizes().includes(s));

  const [quantity, setQuantity] = useState(item.quantity || 1);
  const [size, setSize] = useState<Size>(item.size || availableSizes[0]);

  const maxQuantity = useMemo(
    () => item.product.stock.find((s) => s.size === size)?.quantity || 0,
    [size, item.product.stock],
  );

  useEffect(() => {
    if (quantity > maxQuantity) {
      setQuantity(maxQuantity);
    }
  }, [maxQuantity, quantity]);

  useEffect(() => {
    if (!availableSizes.includes(size)) {
      setSize(availableSizes[0]);
    }
  }, [availableSizes, size]);

  useEffect(() => {
    handleChanges({...item, quantity, size});
  }, [quantity, size]);

  return item.product ? (
    <div
      className={clsx("flex items-stretch border bg-black border-white p-2 md:p-3.5", className)}
    >
      <Image
        alt={item.product.title}
        className="w-auto h-54 md:h-56 aspect-square object-cover"
        height={100}
        src={item.product.image}
        width={100}
      />
      <div className="relative pl-3 flex flex-col h-full w-full gap-0.5 md:pl-7 md:justify-between md:h-56">
        {onRemove && (
          <Actionable action={onRemove} className="absolute right-0 text-11 md:text-21">
            X
          </Actionable>
        )}
        <div>
          <p className="uppercase text-14 md:text-35">{item.product.title}</p>
          <p className="text-11 md:text-21 text-gray">{item.product.description}</p>
        </div>
        <div className="relative flex flex-col md:gap-2">
          <QuantitySelector
            maxQuantity={maxQuantity}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <SizeSelector
            availableSizes={availableSizes}
            id={item.id}
            setSize={setSize}
            size={size}
          />
          <p className="leading-none text-14 bottom-0 right-0 pt-1 md:text-35 md:absolute">
            {parsePrice(item.product.price * quantity)}
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Item;
