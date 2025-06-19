// src/store/cart-store.ts
import { create } from "zustand";
import { CartItem } from "../types/cart";

type CartState = {
	items: CartItem[];
	addItem: (item: CartItem) => void;
	removeItem: (id: CartItem["id"]) => void;
	clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
	items: [],

	addItem: (newItem) =>
		set((state) => {
			// If item exists, increase quantity
			const existingItem = state.items.find((item) => item.id === newItem.id);

			if (existingItem) {
				return {
					items: state.items.map((item) =>
						item.id === newItem.id
							? { ...item, quantity: item.quantity + 1 }
							: item
					),
				};
			}

			// Otherwise add new item (default quantity: 1)
			return {
				items: [
					...state.items,
					{ ...newItem, quantity: newItem.quantity || 1 },
				],
			};
		}),

	removeItem: (id) =>
		set((state) => ({
			items: state.items.filter((item) => item.id !== id),
		})),

	clearCart: () => set({ items: [] }),
}));
