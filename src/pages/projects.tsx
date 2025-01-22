import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { projectService } from "../services/api";
import type { ProjectData } from "../types";
import toast from "react-hot-toast";
import { ProjectCard } from "../components/ProjectCard";

export const Project = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [project, setProject] = useState<ProjectData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProject = async () => {
			try {
				setLoading(true);
				if (!id) throw new Error("No project ID provided");
				const response = await projectService.getById(id);
				setProject(response.data);
			} catch (error) {
				toast.error(
					error instanceof Error ? error.message : "Failed to fetch project"
				);
				navigate("/");
			} finally {
				setLoading(false);
			}
		};

		fetchProject();
	}, [id, navigate]);

	const handleDelete = async (projectId: string) => {
		try {
			await projectService.delete(projectId);
			toast.success("Project deleted successfully");
			navigate("/", { state: { refresh: true } });
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to delete project"
			);
		}
	};

	const handleEditProject = async (
		id: string,
		updatedData: { name: string; description: string }
	) => {
		if (!updatedData.name) {
			toast.error("Name is required");
			return;
		}
		try {
			await projectService.update(id, updatedData);
			const response = await projectService.getById(id);
			setProject(response.data);
			toast.success("Project updated successfully");
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to update project"
			);
		}
	};

	if (loading) return <p>Loading...</p>;
	if (!project) return <p>Project not found</p>;

	return (
		<div className="flex items-center justify-center w-screen h-screen text-white">
			<div className="flex flex-col p-[18px] gap-12 w-9/12 sm:w-[48%] bg-[#070F27] rounded-[10px] border border-[#707070]">
				<ProjectCard
					project={project}
					onDelete={handleDelete}
					onEdit={handleEditProject}
				/>
				<Button
					name="Go back"
					icon={<ArrowLeft />}
					onClick={() => navigate(-1)}
				/>
			</div>
		</div>
	);
};
