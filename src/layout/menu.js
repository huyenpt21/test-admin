import { dashboardPath, postsPath, settingsPath } from "../constant/common";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const MENUS = [
  getItem("Dashboard", dashboardPath),
  getItem("Posts Management", postsPath),
  getItem("Settings", settingsPath),
];
