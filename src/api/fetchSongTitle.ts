import { SERVER_BASE_URL } from "../config";

export const getSongTitle = async () => {
	const response = await fetch(`${SERVER_BASE_URL}/title`);
	return response.json();
};
