import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { projectService } from "@/services/api";
import type { ProjectData } from "@/types";
import { useProjects } from "@/hooks/useProjects";

import { toast } from "react-hot-toast";
import { Rocket } from "lucide-react";
import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { ProjectCard } from "@/components/ProjectCard";

export const Home = () => {
	const { projects, loading, error, fetchProjects, deleteProject } =
		useProjects();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		fetchProjects();
	}, [fetchProjects]);

	useEffect(() => {
		if (location.state?.refresh) {
			fetchProjects();
		}
	}, [location, fetchProjects]);

	const handleFormSubmit = async (formData: ProjectData) => {
		try {
			await projectService.create(formData);
			await fetchProjects();
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to create project"
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
			await fetchProjects();
			toast.success("Project updated successfully");
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Failed to update project"
			);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center gap-[382px] px-[5%] md:px-[20%] text-white">
			<div className="flex flex-col items-center justify-center w-full gap-3 mt-32 text-center md:mt-80">
				<h1 className="w-5/6 text-3xl md:text-5xl max-w-[830px] title">
					Create, Read, Delete & Update with ease thanks to AwesomeCRUD.
				</h1>
				<span className="w-5/6 md:w-3/6 opacity-60">
					Create, read, update, and delete your projects with ease through a
					fast and intuitive interface. Designed for efficiency, AwesomeCRUD
					streamlines data management with a modern and user-friendly
					experience.
				</span>
				<Button name="Try it now !" href="#manage" icon={<Rocket />} />
			</div>
			<main id="manage" className="flex gap-[22px] flex-col w-4/5">
				<h2 className="text-4xl title">Manage your projects</h2>
				<div className="flex flex-wrap w-full gap-4">
					{loading && <p>Loading...</p>}
					{error && <p className="text-red-500">{error}</p>}
					{projects.length > 0 ? (
						projects.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
								onDelete={deleteProject}
								onEdit={handleEditProject}
								onClick={() => navigate(`/projects/${project.id}`)}
							/>
						))
					) : (
						<p>You have no projects yet. Create one now!</p>
					)}
				</div>
				<Form onSubmit={handleFormSubmit} />
			</main>
			<div className="h-30"></div>
		</div>
	);
};
