import { ProjectData } from './../types';
import { useState, useCallback } from "react";
import { projectService } from "../services/api";
import toast from "react-hot-toast";

export const useProjects = () => {
	const [projects, setProjects] = useState<ProjectData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchProjects = useCallback(async () => {
		try {
			setLoading(true);
			const data = await projectService.getAll();
			setProjects(data.data);
        } catch (err) {
			const message =
				err instanceof Error ? err.message : "An unknown error occurred";
			setError(message);
			toast.error(message);
		} finally {
			setLoading(false);
		}
	}, []);

	const deleteProject = async (id: string) => {
		try {
			await projectService.delete(id);
			setProjects(projects.filter((p) => p.id !== id));
			toast.success("Project deleted successfully");
		} catch (err) {
			const message =
				err instanceof Error ? err.message : "An unknown error occurred";
			toast.error(message);
		}
	};

	return {
		projects,
		loading,
		error,
		fetchProjects,
		deleteProject,
	};
};
