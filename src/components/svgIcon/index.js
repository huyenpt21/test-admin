import IcoMoon from "react-icomoon";
import iconSet from "./selection.json";

export default function SvgIcon(props) {
  return (
    <IcoMoon
      iconSet={iconSet}
      {...props}
      size={props?.size ? props?.size : 22}
    />
  );
}
