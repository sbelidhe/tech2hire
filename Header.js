/**
 *
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Link} from 'react-router-dom';
import './background.css'


export default class Header extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            active: null,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    handleClick(event){
        this.setState({active: event})
    }


    render() {
        const {active} = this.state;
        return (
            <div className="container-fluid background">
                <nav className="navbar navbar-light navbar-expand-sm justify-content-center">
                    <ul className="navbar-nav">
                        <li className={'nav-item' + (active === 'dashboard' ? ' active' : '')}>
                            <Link to='/dashboard' className="nav-link" onClick={()=>this.handleClick('dashboard')} style= {{color:'white'}}>
                                <FormattedMessage {...messages.dashboard}/>
                            </Link>
                        </li>
                          
                        <li className={'nav-item' + (active === 'expenses' ? ' active' : '')}>
                            <Link to='/expenses' className="nav-link" onClick={()=>this.handleClick('expenses')} style= {{color:'white'}}>
                                <FormattedMessage {...messages.expenses}/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
