import { useCheckout } from "../../hooks/useCheckout";

export function PaymentStep({ data }: { data?: any }) {
	const { goNextStep, goBackStep, updateFormData, formData } = useCheckout();

	const handleSubmit = () => {
		updateFormData({
			payment: {
				cardNumber: "4242 4242 4242 4242", 
				expiry: "12/25",
			},
		});
		goNextStep();
	};

	return (
		<div className="border rounded-lg p-6">
			<h2 className="text-xl font-bold mb-4">Payment Method</h2>

			{data && (
        <div className="mb-4 p-2 bg-gray-50 rounded">
          {formData.payment && (
            <pre className="text-black">{JSON.stringify(data, null, 2)}</pre>
          )}
				</div>
			)}

			<div className="flex gap-4">
				<button
					onClick={goBackStep}
					className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
				>
					Back
				</button>
				<button
					onClick={handleSubmit}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Continue to Confirmation
				</button>
			</div>
		</div>
	);
}
