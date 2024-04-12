import { useState, useEffect } from 'react';
import './ViewCharacters.css';
import { supabase } from '../client'
import CharacterCard from '../components/CharacterCard';
function ViewCharacters() {

    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
                .from('Characters')
                .select('*');

            if (error) {
                console.error('Error fetching data:', error.message);
            } else {
                data.sort((a, b) => a.id - b.id);
                setCharacterList(data);
                console.log(data);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='ViewCharacters'>
            <h2>View all added characters here!</h2>
            <div className='Characterscontainer'>
                {characterList.map((character) => (<CharacterCard
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    description={character.description}
                    icon={character.icon}
                    editable={true}
                    deletable={true}
                    detailLink={true}
                />))}
            </div>
        </div>
    )
}

export default ViewCharacters;
