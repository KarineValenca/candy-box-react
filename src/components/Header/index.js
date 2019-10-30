import React from 'react';

import './styles.css'

class Header extends React.Component {
    render(){
        return (
            <header id="main-header">
                <h1>CandyBox</h1>
                <h4 id="subtitle">Monte sua caixa de doces!</h4>
            </header>
            
        )
    }

}

export default Header;