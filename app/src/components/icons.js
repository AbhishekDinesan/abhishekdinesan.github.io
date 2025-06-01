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
    <div style={{ aspectRatio: '2 / 3', width: '100%' }}>
      <Selected style={{ width: '100%', height: '100%' }} />
    </div>
  );
};
export default CustomIcon

  
