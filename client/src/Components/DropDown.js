function CharMenu(props) {

  const levelData = props.levelData

  return (
    <div className="btn-group-vertical btn-group-lg p-3" role="group" hidden={props.showList ? false : true} style={{ position: "absolute", left: props.menuX, top: props.menuY }}>
      <button type="button" className="btn btn-dark" onClick={props.size.bind(this, props.x, props.y, "first")} hidden={props.progress.first ? true : false}>
        {levelData.first.name}
      </button>
      <button type="button" className="btn btn-dark" onClick={props.size.bind(this, props.x, props.y, "second")} hidden={props.progress.second ? true : false}>
        {levelData.second.name}
      </button>
      <button type="button" className="btn btn-dark" onClick={props.size.bind(this, props.x, props.y, "third")} hidden={props.progress.third ? true : false}>
        {levelData.third.name}
      </button>
    </div>
  );
}

export default CharMenu;
