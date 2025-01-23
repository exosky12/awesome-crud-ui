import { useState, useEffect } from "react";

import { ProjectData } from "@/types";

import { Trash, Edit, Save } from "lucide-react";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";

type ProjectCardProps = {
	project: ProjectData;
	onDelete: (id: string) => void;
	onEdit: (
		id: string,
		updatedData: { name: string; description: string }
	) => void;
	onClick?: () => void;
};

export const ProjectCard = ({
	project,
	onDelete,
	onEdit,
	onClick,
}: ProjectCardProps) => {
	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(project.name);
	const [description, setDescription] = useState(project.description);

	useEffect(() => {
		setIsEditing(false);
		setName(project.name);
		setDescription(project.description);
	}, [project]);

	const handleEdit = () => {
		if (!project.id) return;
		onEdit(project.id, { name, description });
		setIsEditing(false);
	};

	return (
		<div
			className="flex w-full cursor-pointer flex-col p-4 bg-[#070F27] rounded-lg border border-[#707070]"
			onClick={isEditing ? undefined : onClick}
		>
			<div>
				<h3 className="text-xl">{project.name}</h3>
				<p className="opacity-40">{project.description}</p>
			</div>
			<div className="flex gap-3 mt-auto ml-auto">
				<button
					onClick={(e) => {
						e.stopPropagation();
						if (project.id) onDelete(project.id);
					}}
					className="cursor-pointer"
				>
					<Trash />
				</button>

				<button
					onClick={(e) => {
						e.stopPropagation();
						setIsEditing(true);
					}}
					className="cursor-pointer"
				>
					<Edit />
				</button>
			</div>

			<Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
				<div onClick={(e) => e.stopPropagation()}>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Project Name"
						className="w-full p-2 mb-2 bg-[#070F27] rounded-lg border border-[#707070]"
					/>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder="Project Description"
						className="w-full p-2 mb-4 bg-[#070F27] rounded-lg border border-[#707070]"
					/>
					<Button icon={<Save />} name="Update project" onClick={handleEdit} />
				</div>
			</Modal>
		</div>
	);
};
