import { useCartStore } from "../store/cart-store";

export function TestCart() {
	const { items, addItem, removeItem, clearCart } = useCartStore();

	const testItem = {
		id: 1,
		name: "Sample Product",
		price: 9.99,
		quantity: 1,
		image: "/sample.jpg",
	};

	return (
		<div className="p-4 space-y-4">
			<div className="flex gap-4">
				<button
					onClick={() => addItem(testItem)}
					className="px-4 py-2 bg-blue-500 text-white rounded"
				>
					Add Item
				</button>
				<button
					onClick={() => removeItem(1)}
					className="px-4 py-2 bg-red-500 text-white rounded"
				>
					Remove Item
				</button>
				<button
					onClick={clearCart}
					className="px-4 py-2 bg-gray-500 text-white rounded"
				>
					Clear Cart
				</button>
			</div>

			<div>
				<h2 className="font-bold mb-2">Cart Items ({items.length})</h2>
				<ul className="space-y-2">
					{items.map((item) => (
						<li key={item.id} className="border p-2">
							{item.name} - ${item.price} (Qty: {item.quantity})
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
