import { Trash, Edit } from "lucide-react";
import type { ProjectData } from "../../types";

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
	return (
		<div
			className="flex w-full cursor-pointer flex-col p-[18px] bg-[#070F27] rounded-[10px] border border-[#707070]"
			onClick={onClick}
		>
			<div>
				<h3 className="text-xl">{project.name}</h3>
				<p className="opacity-40">{project.description}</p>
			</div>
			<div className="flex gap-3 mt-auto ml-auto">
				<Trash
					onClick={(e) => {
						e.stopPropagation();
						if (project.id) onDelete(project.id);
					}}
					className="cursor-pointer"
				/>
				<Edit
					onClick={(e) => {
						e.stopPropagation();
						if (project.id) onEdit(project.id, { name: project.name, description: project.description });
					}}
					className="cursor-pointer "
				/>
			</div>
		</div>
	);
};
