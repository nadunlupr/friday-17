import { useState } from 'react';
// import axios from 'axios';
import api from '../../services/api';
import { useNavigate } from 'react-router';

function CreateNews(props) {
    // const [title, setTitle] = useState('initial title');
    // const [slug, setSlug] = useState();

    const [state, setState] = useState({
        title: '',
        slug: undefined,
        text: ''
    });
    const navigate = useNavigate();

    const addNews = async () => {
        try {
            const { data } = await api.post('/novice', {
                ...state
            });
            // .then(res => console.log('result: ', res))
            // .catch(err => console.error('err: ', err))

            const {
                id,
                news
            } = data;
            console.log('news: ', news);
            navigate(`/success/${id}`);

        } catch (error) {
            console.error('err: ', error);
        }
    }

    return (
        <div className='create-news'>
            <div className='container'>
                <h1>Add News</h1>

                <input type='text' placeholder='Title'
                    onChange={({ target: { value: inputTitle } }) => setState(prevState => ({ ...prevState, title: inputTitle }))}
                    value={state.title} />
                <p>Title: {state.title}</p>
                <input type='text' placeholder='Slug'
                    onChange={({ target: { value: inputSlug } }) => setState(prevState => ({ ...prevState, slug: inputSlug }))} />
                <p>Slug: {state.slug}</p>
                <textarea placeholder='Enter your news text here'
                    onChange={({ target: { value: inputText } }) => setState(prevState => ({ ...prevState, text: inputText }))} />
            </div>
            <button onClick={() => addNews()}>Create News</button>
        </div>
    )
}

export default CreateNews;