import { CheckoutTester } from "@/components/CheckoutTester";
import { TestCart } from "../components/TestCart";
import { useCheckout } from "@/hooks/useCheckout";
import { ProgressBar } from "@/components/ProgressBar";
import { ShippingStep } from "@/components/steps/ShippingStep";
import { ConfirmationStep } from "@/components/steps/ConfirmationStep";
import { PaymentStep } from "@/components/steps/PaymentStep";
import { CheckoutProvider } from "@/context/CheckoutContext";
import Checkout from "./checkout";

export default function Home() {
  // const { currentStep } = useCheckout();
	return (
		<main className="max-w-2xl mx-auto p-4">
			<TestCart />
			<CheckoutTester />
			{/* <ProgressBar />
			{currentStep === "shipping" && <ShippingStep />}
			{currentStep === "payment" && <PaymentStep />}
			{currentStep === "confirmation" && <ConfirmationStep />} */}

			<CheckoutProvider>
				{/* Wrap with CartProvider if needed */}
				<Checkout />
			</CheckoutProvider>
		</main>
	);
}
