import { useCheckout } from "../../hooks/useCheckout";
import { useCartStore } from "../../store/cart-store";

export function ConfirmationStep() {
	const { goBackStep } = useCheckout();
	const { items, clearCart } = useCartStore();

	return (
		<div className="border rounded-lg p-6">
			<h2 className="text-xl font-bold mb-4">Order Summary</h2>

			<div className="mb-6">
				<h3 className="font-medium mb-2">Your Items:</h3>
				<ul className="space-y-2">
					{items.map((item) => (
						<li key={item.id} className="flex justify-between">
							<span>
								{item.name} × {item.quantity}
							</span>
							<span>${(item.price * item.quantity).toFixed(2)}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="flex gap-4">
				<button
					onClick={goBackStep}
					className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
				>
					Back
				</button>
				<button
					onClick={clearCart}
					className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
				>
					Place Order
				</button>
			</div>
		</div>
	);
}
