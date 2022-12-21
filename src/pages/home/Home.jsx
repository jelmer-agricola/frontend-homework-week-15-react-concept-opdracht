import React, {useEffect, useState} from 'react';
import './Home.css';
import axios from 'axios';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import logo from '../../assets/logo.png';


function Home() {
    const [redditPosts, setRedditPosts] = useState([]);
    const [catchError, setCatchError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [endpoint, setEndpoint] = useState('https://www.reddit.com/hot.json?limit=15');

    // GET https://www.reddit.com/hot.json?limit=15
    // useEffect om loopen tegen te gaan

    useEffect(() => {
        async function fetchRedditposts() {
            setLoading(true);
            setCatchError(false);
            try {
                const response = await axios.get(endpoint);
                // console.log(response);
                // console.log(response.data.data.children);
                setRedditPosts(response.data.data.children);
            } catch (e) {
                console.error(e);
                setCatchError(true);
            }
            setLoading(false);

        }

        fetchRedditposts();
    }, []);

    console.log(redditPosts);
    return (
        <>
            <Header>
                <img src={logo} alt="Reddit header logo" className="header-image"/>
                <h1>Reddit</h1>
            </Header>


            <main className="outer-content-container">
                <div className="inner-content-container hottest-posts">
                    <h2 >Hottest posts</h2>
                    <h4 >On reddit right now</h4>
                <div className="article-container">
                    {redditPosts.map((reddit) => {
                        return (
                            <article className="subreddit-article" key={reddit.data.id}>
                                <a href={reddit.data.url} target="_blank" className="subreddit-article-title"><h3> {reddit.data.title}</h3></a>
                                <div className="article-content">
                                    <p><Link to={`/subreddit/${reddit.data.subreddit}`}> {reddit.data.subreddit_name_prefixed}</Link>
                                    </p>
                                    <p>Comments {reddit.data.num_comments} — Ups {reddit.data.ups}</p>
                                </div>
                            </article>


                        );
                    })}
                </div>
                </div>
            </main>
            {isLoading && <h1>Your awesome Reddit posts are being loaded</h1>}
            {catchError && <p>Something went wrong with..</p>}

        </>

    );

}

export default Home;