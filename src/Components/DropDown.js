function CharMenu(props) {

  const levelData = props.levelData

  return (
    <div className="btn-group-vertical btn-group-lg p-1" role="group" hidden={props.showList ? false : true} style={{ position: "absolute", top: props.y, left: props.x }}>
      <button type="button" className="btn btn-dark" onClick={props.size.bind(this, props.x, props.y)}>
        {levelData.first.name}
      </button>
      <button type="button" className="btn btn-dark" onClick={props.size.bind(this, props.x, props.y)}>
        {levelData.second.name}
      </button>
      <button type="button" className="btn btn-dark" onClick={props.size.bind(this, props.x, props.y)}>
        {levelData.third.name}
      </button>
    </div>
  );
}

export default CharMenu;
