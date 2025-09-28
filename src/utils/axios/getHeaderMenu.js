import axiosInstance from "./LinkxiosInstance";

export default async function getHeaderMenus() {
  const auth = Buffer.from(`${username}:${password}`).toString("base64");

  const headerMenuAPI_URL = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/custom/v1/menus/header-menu`;
  const headerMenuResponse = await axiosInstance.get(headerMenuAPI_URL, {
    headers: { Authorization: `Basic ${auth}` },
  });
  return {
    headerMenu: headerMenuResponse.data,
  };
}
