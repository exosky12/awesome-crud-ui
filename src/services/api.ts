import type { ProjectData } from "@/types";

const API_URL = "http://localhost:4000/api/v1";

async function handleResponse(response: Response) {
	const contentType = response.headers.get("content-type");
	if (contentType && contentType.includes("application/json")) {
		return response.json();
	}
	throw new Error(`Unexpected response: ${await response.text()}`);
}

export const projectService = {
	async getAll() {
		const response = await fetch(`${API_URL}/projects`);
		if (!response.ok) {
			throw new Error("Failed to fetch projects");
		}
		return handleResponse(response);
	},

	async getById(id: string) {
		const response = await fetch(`${API_URL}/projects/${id}`);
		if (!response.ok) {
			throw new Error("Failed to fetch project");
		}
		return handleResponse(response);
	},

	async create(data: ProjectData) {
		const response = await fetch(`${API_URL}/projects`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			throw new Error("Failed to create project");
		}
		return handleResponse(response);
	},

	async delete(id: string) {
		const response = await fetch(`${API_URL}/projects/${id}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error("Failed to delete project");
		}
		return response.status === 204 ? true : handleResponse(response);
	},

	async update(id: string, data: ProjectData) {
		const response = await fetch(`${API_URL}/projects/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (!response.ok) {
			throw new Error("Failed to update project");
		}
		return handleResponse(response);
	},
};
