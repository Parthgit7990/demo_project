import axiosInstance from "./LinkxiosInstance";

export default async function getAllPages() {
  const allPageAPI_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp/v2/pages`;
  const allPageApiResponse = await axiosInstance.get(allPageAPI_URL, {
    headers: { Authorization: `Basic ${auth}` },
  });
  return {
    AllPagesContent: allPageApiResponse.data,
  };
}
