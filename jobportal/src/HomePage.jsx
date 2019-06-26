import React from 'react';
import './homepage.css';
export default class HomePage extends React.Component {
    render() {
        return (
            <div className="home-div-main container">
                <div className='home-div-sub container'>
                    <div className='jumbotron'>
                        <h1>Job Portal</h1>
                    </div>
                    <h4>Current Jobs</h4>
                </div>
                <div>
                    <ol className='container'>
                        <div className='home-div-list'>
                            <li>
                                <h4>Graphic Designer</h4>
                                <p>Need someone to create a logo!</p>
                            </li>
                        </div>
                        <div className='home-div-list'>
                            <li>
                                <h4>Programmer</h4>
                                <p>Need someone to create my startup site!</p>
                            </li>
                        </div>
                        <div className='home-div-list'>
                            <li>
                                <h4>Marketer</h4>
                                <p>Need someone to promote my startup site!</p>
                            </li>
                        </div>
                        <div className='home-div-list'>
                            <li>
                                <h4>Security Engineer</h4>
                                <p>Security for a website.</p>
                            </li>
                        </div>
                    </ol>
                </div>
            </div>
        )
    }
}