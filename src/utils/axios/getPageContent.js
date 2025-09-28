import axiosInstance from "@/utils/Linkxios/LinkxiosInstance";

export default async function getPageContent(slug) {
  const API_URL = `/wp/v2/pages?slug=${slug}`;

  try {
    const response = await axiosInstance.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
