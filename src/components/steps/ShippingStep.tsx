import { useCheckout } from "../../hooks/useCheckout";

export function ShippingStep({ data }: { data?: any }) {
	const { goNextStep, updateFormData, formData } = useCheckout();

  const handleSubmit = () => {
		updateFormData({
			shipping: { address: "123 Test St", city: "San Francisco" },
		});
		goNextStep(); 
	};

	return (
		<div className="border rounded-lg p-6">
			<h2 className="text-xl font-bold mb-4">Shipping Information</h2>
			
			{/* {data && ( */}
				<div className="mb-4 p-2 bg-gray-50 rounded">
					{formData.shipping && (
						<pre className="text-black">{JSON.stringify(formData.shipping, null, 2)}</pre>
					)}
				</div>
			{/* )} */}

			<button
				onClick={handleSubmit}
				className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				Continue to Payment
			</button>
		</div>
	);
}
