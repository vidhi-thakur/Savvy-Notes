import React from 'react';

// images and icons
import notes_home from '../../images/home/notes_home.svg';
import { HiArrowNarrowRight } from 'react-icons/hi';

// css
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home-page'>
            <aside>
                <img
                    className='home-image'
                    src={notes_home}
                    alt="notes app"
                />
            </aside>
            <aside>
                <header className='home-header'>
                    <h1 className='home-heading'>Notes savvy</h1>
                    <p className='home-description'>Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</p>
                    <Link to="/dashboard">
                        <button className='btn btn-primary-contained btn-home'>get started <HiArrowNarrowRight /></button>
                    </Link>
                </header>
            </aside>
        </div>
    )
}

export { Home }