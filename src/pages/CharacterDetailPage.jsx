import CharacterCard from '../components/CharacterCard';
import { useEffect, useState } from 'react';
import './CharacterDetailPage.css';
import { supabase } from '../client'
import { useParams } from "react-router-dom";

function CharacterDetailPage() {

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
                        'Icon': data[0].icon,
                        'Created': data[0].created_at,
                        'id': data[0].id
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
        'Icon': "",
        'Created': "",
        'id': ""
    });
    const params = useParams();

    return (
        <div className='CharacterDetailPage'>
            <h2 className='text'>More Character Details</h2>
            <div className='Previewanddelete'>
                <CharacterCard name={inputs.Name} icon={"../../" + inputs.Icon} description={inputs.Description}/>
                <h3>Created: {new Date(inputs.Created).toLocaleDateString()}</h3>
                <h3>ID: {inputs.id}</h3>
            </div>
        </div>
    )
}

export default CharacterDetailPage;
