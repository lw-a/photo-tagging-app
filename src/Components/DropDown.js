function CharMenu(props) {

  const levelData = props.levelData

  return (
    <div className="btn-group-vertical btn-group-lg p-1" role="group" hidden={props.showList ? false : true} style={{ position: "absolute", top: props.y, left: props.x }}>
      <button type="button" className="btn btn-dark">
        {levelData.first.name}
      </button>
      <button type="button" className="btn btn-dark">
        {levelData.second.name}
      </button>
      <button type="button" className="btn btn-dark">
        {levelData.third.name}
      </button>
    </div>
  );
}

export default CharMenu;
