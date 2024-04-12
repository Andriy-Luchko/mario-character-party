import './CharacterCard.css';
function CharacterCard({name, description, icon}) {

  return (
      <div className='CharacterCard'>
        <h3 className='Charactername' >{name}</h3>
        <img className='Charactericon' src={icon + ".png"}/>
        <p className='Characterdescription' >{description}</p>
      </div>
  )
}

export default CharacterCard;
