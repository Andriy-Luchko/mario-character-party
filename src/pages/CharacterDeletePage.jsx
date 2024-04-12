import CharacterCard from '../components/CharacterCard';
import { useEffect, useState } from 'react';
import './CharacterDeletePage.css';
import { supabase } from '../client'
import { useParams } from "react-router-dom";

function CharacterDeletePage() {

    useEffect(() => {
        const fetchData = async () => {
            let { data, error } = await supabase
                .from('Characters')
                .select('*').eq('id', params.id);

            if (error) {
                console.error('Error fetching data:', error.message);
                console.error('For character id: ', params.id)
            } else {
                if (data.length > 0) {
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

    const [inputs, setInputs] = useState({
        'Name': "",
        'Description': "",
        'Icon': ""
    });
    const params = useParams();

    const deleteCharacter = async (event) => {
        event.preventDefault();
        await supabase
            .from('Characters')
            .delete()
            .eq('id', params.id);

        window.location = "/viewcharacters";
    }

    return (
        <div className='CharacterDeletePage'>
            <h2 className='text'>Are you sure you want to delete this character?</h2>
            <div className='Previewanddelete'>
                <CharacterCard name={inputs.Name} icon={"../../" + inputs.Icon} description={inputs.Description} />
                <button className='Addcharacter' value='Submit' type='submit' onClick={deleteCharacter}>Delete Character</button>
            </div>
        </div>
    )
}

export default CharacterDeletePage;
