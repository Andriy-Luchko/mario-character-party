import './CharacterCard.css';
import { Link } from 'react-router-dom';
function CharacterCard({ id, name, description, icon, editable, deletable, detailLink }) {

    return (
        <div className='CharacterCard'>
            <div className='Toprow'>
                {editable && <Link to={id + "/edit"} className='Edit Link'><img className='Editicon' src="edit.png" /></Link>}
                <h3 className='Charactername' >{name}</h3>
                {deletable && <Link to={id + "/delete"} className='Delete Link'><img className='Deleteicon' src="delete.png" /></Link>}
            </div>
            {
                detailLink ?
                    <Link to={id + "/details"} ><img className='Charactericon' src={icon + ".png"} /></Link>
                    :
                    <img className='Charactericon' src={icon + ".png"} />
            }
            <p className='Characterdescription' >{description}</p>
        </div>
    )
}

export default CharacterCard;
