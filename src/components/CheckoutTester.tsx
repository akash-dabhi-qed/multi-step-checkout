import { useCheckout } from "../hooks/useCheckout";

export function CheckoutTester() {
	const { currentStep, formData, goNextStep, goBackStep, updateFormData } =
		useCheckout();

	return (
		<div>
			{/* <h2>Current Step: {currentStep}</h2>
			<button onClick={goBackStep}>Back</button>
			<button onClick={goNextStep}>Next</button> */}

			<button
				onClick={() =>
					updateFormData({
						shipping: { address: "123 Main St", city: "Anytown" },
					})
				}
			>
				Update Shipping Data
			</button>

			<pre className="text-black">{JSON.stringify(formData, null, 2)}</pre>
		</div>
	);
}
