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
    <div style={{ overflow: 'hidden', width: '125px', height: 'auto' }}>
    <Selected
      style={{ width: '100%', height: '100%' }}
      preserveAspectRatio="none"
    />
  </div>
  );
};

export default CustomIcon

  
