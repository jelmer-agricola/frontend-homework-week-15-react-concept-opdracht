import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import './Subreddit.css';
import { ReactComponent as BackIcon } from '../../assets/back.svg';


function Subreddit() {
    const {id} = useParams();
    const [catchError, setCatchError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [details, setDetails] = useState({});


    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setCatchError(false);
            try {
                const response = await axios.get(`https://www.reddit.com/r/${id}/about.json`);

                setDetails(response.data.data);
            } catch (e) {
                console.error(e);
                setCatchError(true);
            }
            setLoading(false);

        }

        fetchData();

    }, []);

    console.log(details);

    return (

        <>
            <Header>
                {/*    deze nog tot comoponent maken met hoofdletter*/}
                <h1>Title r/{id}</h1>
                <h4>Subreddit specifitations</h4>


            </Header>
            <main className="outer-content-container subreddit">
                {Object.keys(details).length > 0 && (
                    <div className="inner-content-container subreddit-details">
                        <h3>Title </h3>
                        <p>{id}</p>
                        <h3>Decription</h3>
                        <p>{details.public_description}</p>
                        <h3>number of subscribers</h3>
                        <p>{details.subscribers}</p>

                <span className="back-link-wrapper">
                  <BackIcon className="back-icon"/>
                  <Link to="/">Take me back</Link>
                </span>

                    </div>
                )}

            </main>
            {isLoading && <h1>Your awesome Reddit posts are being loaded</h1>}
            {catchError && <p>Something went wrong with..</p>}
        </>
    );
}

export default Subreddit;