import { postsPath, settingsPath, subscriptionPath } from "../constant/common";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const MENUS = [
  getItem("Dashboard", subscriptionPath),
  getItem("Posts Management", postsPath),
  getItem("Settings", settingsPath),
];
