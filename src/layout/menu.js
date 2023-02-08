function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const MENUS = [
  getItem("Dashboard", "/"),
  getItem("Posts Management", "/posts"),
  getItem("Settings", "/settings"),
];
