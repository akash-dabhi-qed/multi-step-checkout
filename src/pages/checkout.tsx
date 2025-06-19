import { PaymentStep } from '@/components/steps/PaymentStep';
import { ProgressBar } from '../components/ProgressBar';
import { ShippingStep } from '@/components/steps/ShippingStep';
import { ConfirmationStep } from '@/components/steps/ConfirmationStep';
import { useCheckout } from '@/hooks/useCheckout';

import { Checkout } from "../components/Checkout";
import { CheckoutProvider } from "../context/CheckoutContext";

export default function CheckoutPage() {
  const { currentStep } = useCheckout();

  return (
		<div className="max-w-2xl mx-auto p-4">
			<CheckoutProvider>
				
				<Checkout />
			</CheckoutProvider>
			{/* <ProgressBar />
			{currentStep === "shipping" && <ShippingStep />}
			{currentStep === "payment" && <PaymentStep />}
			{currentStep === "confirmation" && <ConfirmationStep />} */}
		</div>
	);
}
