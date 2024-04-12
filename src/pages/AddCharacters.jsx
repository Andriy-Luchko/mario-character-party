import CharacterCard from '../components/CharacterCard';
import { useState } from 'react';
import './AddCharacters.css';
function AddCharacters() {

    const characters = ["Mario", "Luigi", "Princess Peach", "Toad", "Bowser", "Yoshi", "Daisy", "Wario", "Waluigi", "Rosalina", "Bowser Jr.", "Boo", "Donkey Kong", "Diddy Kong"];
    const [inputs, setInputs] = useState({
        'Name': "Mario",
        'Description': "Hey, I'm Mario! Let's create your character! Give it a name, describe it, and pick an icon. Let's-a-go!",
        'Icon': "Mario"
    });

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    return (
        <div className='AddCharacters'>
            <h2 className='text'>Here you can add new customizable characters</h2>
            <div className='Formandpreview'>
                <CharacterCard name={inputs.Name} icon={inputs.Icon} description={inputs.Description} />
                <form>
                    <div className='Optioncontainer'>
                        <div className='Option Name'>
                            <p>Character Name:</p>
                            <input className='Nameinput' type='text' name="Name" value={inputs.Name}  onChange={handleChange}/>
                        </div>
                        <div className='Option Description'>
                            <p>Write a Description For Your Character</p>
                            <textarea className='Descriptioninput' type='text' name="Description" value={inputs.Description}  onChange={handleChange}/>
                        </div>
                        <div className='Option Character'>
                            <p>Choose a Character Persona/Icon</p>
                            <select className="Characters" name="Icon" value={inputs.Icon} onChange={handleChange}>
                                {characters.map((character) => (
                                    <option key={character} value={character}>{character}</option>
                                ))
                                }
                            </select>
                        </div>
                    </div>
                    <button className='Addcharacter' type='submit' >Add Character!</button>
                </form>
            </div>
        </div>
    )
}

export default AddCharacters;
