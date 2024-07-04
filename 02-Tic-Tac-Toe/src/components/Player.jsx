import { useState } from 'react';

export default function Player({
  initailName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [name, setName] = useState(initailName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) onNameChange(symbol, name);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  let playerNameEl = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerNameEl = (
      <input type="text" required defaultValue={name} onChange={handleChange} />
    );
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerNameEl}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
