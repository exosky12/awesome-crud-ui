import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Plus } from "lucide-react";
import type { ProjectData } from "../../types";
import { Button } from "../Button";
import toast from "react-hot-toast";

type FormProps = {
	onSubmit: (formData: ProjectData) => Promise<void>;
};

export const Form = ({ onSubmit }: FormProps) => {
	const [formData, setFormData] = useState<ProjectData>({
		name: "",
		description: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (error) {
			toast.error(error);
		}
	}, [error]);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		if (name in formData) {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!formData.name.trim()) {
			setError("Project name is required");
			return;
		}

		setLoading(true);

		try {
			await onSubmit(formData);
			setFormData({ name: "", description: "" });
			toast.success("Project added successfully");
		} catch (error) {
			setError(
				error instanceof Error ? error.message : "An unknown error occurred"
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-4">
				<label htmlFor="name" className="block text-lg font-semibold">
					Project Name
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Enter project name"
					className="w-full p-2 text-white bg-[#070F27] rounded-[10px] border border-[#707070]"
				/>
			</div>

			<div className="mb-4">
				<label htmlFor="description" className="block text-lg font-semibold">
					Description
				</label>
				<textarea
					id="description"
					name="description"
					value={formData.description}
					onChange={handleChange}
					placeholder="Enter project description"
					rows={4}
					className="w-full p-2 text-white bg-[#070F27] rounded-[10px] border border-[#707070]"
				/>
			</div>

			<Button
				name={loading ? "Loading..." : "Add a project"}
				icon={<Plus />}
				type="submit"
			/>
		</form>
	);
};
