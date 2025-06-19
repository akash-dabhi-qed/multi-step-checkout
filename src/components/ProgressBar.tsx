import { useCheckout } from "../hooks/useCheckout";

export function ProgressBar() {
	const { currentStep, updateFormData } = useCheckout();

	const steps = [
		{ id: "shipping", label: "Shipping" },
		{ id: "payment", label: "Payment" },
		{ id: "confirmation", label: "Confirmation" },
	];

	const currentIndex = steps.findIndex((s) => s.id === currentStep);

	return (
		<div className="relative mb-10 px-4">
			{/* Background line */}
			<div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full z-0" />

			{/* Progress line */}
			<div
				className="absolute top-5 left-0 h-1 bg-blue-500 rounded-full z-10 transition-all duration-500"
				style={{
					width: `${(currentIndex / (steps.length - 1)) * 100}%`,
				}}
			/>

			<div className="flex justify-between relative z-20">
				{steps.map((step, index) => {
					const isCompleted = index < currentIndex;
					const isCurrent = index === currentIndex;

					return (
						<div
							key={step.id}
							className="flex flex-col items-center w-full group"
						>
							<button
								onClick={() => {
									if (isCompleted) {
										updateFormData({});
									}
								}}
								className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white 
                  transition-all duration-300 shadow-md
                  ${
										isCompleted
											? "bg-green-500"
											: isCurrent
											? "bg-blue-600 animate-pulse shadow-blue-400"
											: "bg-gray-400"
									}
                  ${isCurrent ? "scale-110 ring-2 ring-blue-300" : ""}
                `}
							>
								{isCompleted ? "✓" : index + 1}
							</button>
							<span
								className={`mt-2 text-sm font-medium 
                  ${
										isCurrent
											? "text-blue-600"
											: isCompleted
											? "text-green-600"
											: "text-gray-500"
									}
                  group-hover:text-white transition-colors duration-200`}
							>
								{step.label}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
