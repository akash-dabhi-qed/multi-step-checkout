import { createContext, useContext, useState } from "react";

type CheckoutStep = "shipping" | "payment" | "confirmation";

type FormData = {
	shipping?: {
		address: string;
		city: string;
		// ...other shipping fields
	};
	payment?: {
		cardNumber: string;
		expiry: string;
		// ...other payment fields
	};
};

type CheckoutContextType = {
	currentStep: CheckoutStep;
	formData: FormData;
	goNextStep: () => void;
	goBackStep: () => void;
	updateFormData: (data: Partial<FormData>) => void;
};

const CheckoutContext = createContext<CheckoutContextType | undefined>(
	undefined
);

export function CheckoutProvider({ children }: { children: React.ReactNode }) {
	const [currentStep, setCurrentStep] = useState<CheckoutStep>("shipping");
	const [formData, setFormData] = useState<FormData>({});

	const steps: CheckoutStep[] = ["shipping", "payment", "confirmation"];

	const goNextStep = () => {
		const currentIndex = steps.indexOf(currentStep);
		if (currentIndex < steps.length - 1) {
			setCurrentStep(steps[currentIndex + 1]);
		}
	};

	const goBackStep = () => {
		const currentIndex = steps.indexOf(currentStep);
		if (currentIndex > 0) {
			setCurrentStep(steps[currentIndex - 1]);
		}
	};

	const updateFormData = (data: Partial<FormData>) => {
		setFormData((prev) => ({ ...prev, ...data }));
	};

	return (
		<CheckoutContext.Provider
			value={{ currentStep, formData, goNextStep, goBackStep, updateFormData }}
		>
			{children}
		</CheckoutContext.Provider>
	);
}

export function useCheckout() {
	const context = useContext(CheckoutContext);
	if (!context) {
		throw new Error("useCheckout must be used within a CheckoutProvider");
	}
	return context;
}
