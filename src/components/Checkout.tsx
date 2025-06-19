import { ProgressBar } from "./ProgressBar";
import { ShippingStep } from "./steps/ShippingStep";
import { PaymentStep } from "./steps/PaymentStep";
import { ConfirmationStep } from "./steps/ConfirmationStep";
import { useCheckout } from "../hooks/useCheckout";


export function Checkout() {
	const { currentStep, formData } = useCheckout();

	return (
		<div className="max-w-2xl mx-auto p-4">
			<ProgressBar />

			<div className="mt-8">
				{currentStep === "shipping" && (
					<ShippingStep data={formData.shipping} />
				)}
				{currentStep === "payment" && <PaymentStep data={formData.payment} />}
				{currentStep === "confirmation" && <ConfirmationStep />}
			</div>
		</div>
	);
}
