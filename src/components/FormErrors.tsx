import type { FieldErrors, FieldValues } from 'react-hook-form';

export function getErrorMessages<T extends FieldValues>(errors: FieldErrors<T>) {
	return Object.entries(errors).map(([field, error]) => ({
		field,
		message: error?.message as string,
	}));
}

interface FormErrorsProps {
	errors: { field: string; message: string }[];
}

const FormErrors = ({ errors }: FormErrorsProps) => {
	if (errors.length === 0) return null;

	return (
		<div className="flex flex-col text-destructive text-sm space-y-1">
			{errors.map((error, index) => (
				<p key={index}>{error.message}</p>
			))}
		</div>
	);
};

export default FormErrors;
