import CharacterCard from '../components/CharacterCard';
import { useEffect, useState } from 'react';
import './CharacterEditPage.css';
import { supabase } from '../client'
import { useParams } from "react-router-dom";

function CharacterEditPage() {

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
                .from('Characters')
                .select('*').eq('id',params.id);

            if (error) {
                console.error('Error fetching data:', error.message);
                console.error('For character id: ', params.id)
            } else {
                if (data.length > 0){
                    setInputs({
        'Name': data[0].name,
        'Description': data[0].description,
        'Icon': data[0].icon
                    })
                    console.log(data[0]);
                }
            }
        };

        fetchData();


    }, [])

    const characters = ["Mario", "Luigi", "Princess Peach", "Toad", "Bowser", "Yoshi", "Daisy", "Wario", "Waluigi", "Rosalina", "Bowser Jr.", "Boo", "Donkey Kong", "Diddy Kong"];
    const [inputs, setInputs] = useState({
        'Name': "",
        'Description': "",
        'Icon': ""
    });
    const params = useParams();

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        console.log(e.target.value);
    }

    const editCharacter = async (event) => {
        event.preventDefault();
        console.log("bruh");
        await supabase
            .from('Characters')
            .update({ name: inputs.Name, description: inputs.Description, icon: inputs.Icon })
            .eq('id', params.id)
            .select();

        window.location = "/viewcharacters";
    }

    return (
        <div className='CharacterEditPage'>
            <h2 className='text'>Edit Your Character!</h2>
            <div className='Formandpreview'>
                <CharacterCard name={inputs.Name} icon={"../../" + inputs.Icon} description={inputs.Description}/>
                <form>
                    <div className='Optioncontainer'>
                        <div className='Option Name'>
                            <p>Character Name:</p>
                            <input className='Nameinput' type='text' name="Name" value={inputs.Name} onChange={handleChange} />
                        </div>
                        <div className='Option Description'>
                            <p>Write a Description For Your Character</p>
                            <textarea className='Descriptioninput' type='text' name="Description" value={inputs.Description} onChange={handleChange} />
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
                    <button className='Addcharacter' value='Submit' type='submit' onClick={editCharacter}>Edit Character!</button>
                </form>
            </div>
        </div>
    )
}

export default CharacterEditPage;
