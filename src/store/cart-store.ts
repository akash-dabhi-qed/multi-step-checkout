import { create } from "zustand";

type CartItem = {
	id: string | number;
	name: string;
	price: number;
	quantity: number;
	image?: string;
};

type CartState = {
	items: CartItem[];
	addItem: (item: Omit<CartItem, "quantity">) => void;
	removeItem: (id: CartItem["id"]) => void; // Now decrements instead of removing
	clearCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
	items: [],

	// Add item (default quantity: 1)
	addItem: (newItem) =>
		set((state) => {
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

			return {
				items: [...state.items, { ...newItem, quantity: 1 }],
			};
		}),

	// Modified: Decrements quantity, removes only when reaching 0
	removeItem: (id) =>
		set((state) => {
			const existingItem = state.items.find((item) => item.id === id);

			if (!existingItem) return { items: state.items };

			if (existingItem.quantity > 1) {
				return {
					items: state.items.map((item) =>
						item.id === id ? { ...item, quantity: item.quantity - 1 } : item
					),
				};
			}

			// Remove completely when quantity reaches 0
			return {
				items: state.items.filter((item) => item.id !== id),
			};
		}),

	clearCart: () => set({ items: [] }),
}));
