import React, { Component } from 'react';
import library from '../Images/library.jpg';
function Home() {
    const style = { width: '100%' };
    return <img alt='home' style={style} src={library} />;
}


export default Home;