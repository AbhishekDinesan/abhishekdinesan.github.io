import * as Icons from "react-icons/gi";

const iconSelector = ({iconName}) => {
  const selectedIcon = Icons[iconName]
  if (!selectedIcon) {
    return <span>404: Icon not found</span>;
  }
  return selectedIcon;
}

const CustomIcon = ({ iconName }) => {
  const Selected = iconSelector({ iconName });
  return (
      <Selected
        style={{ width: '50%', height: '10%' }}
        preserveAspectRatio="none"
      />
  );
};

export default CustomIcon

  
