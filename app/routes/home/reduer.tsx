export type ProductType = {
  id: number;
  name: string;
  price: number;
};

type CartItem = ProductType & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "add"; payload: ProductType }
  | { type: "remove"; payload: number }
  | { type: "clear" };

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "add":
      const exist = state.items.find((item) => item.id === action.payload.id);
      if (exist) {
        return {
          items: state.items.map((item) =>
            item.id == action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    case "remove":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "clear":
      return {
        items: [],
      };
    default:
      return state;
  }
};
