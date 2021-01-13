import { inject, observer } from "mobx-react";
import React from "react";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import { AppModel } from "./models/AppModel";
import PlanariaPage from "./pages/Planaria";
import HomePage from "./pages/HomePage";
import ParentPage from "./pages/ParentPage";
import StudentPage from "./pages/StudentPage";

@inject("appModel")
@observer
export default class AppRoot 
extends React.Component<{appModel?: AppModel}> 
{

    // -------------------------------------------------------------------
    // clickLogo
    // -------------------------------------------------------------------
    clickLogo = (e: any) => {
        window.location.assign('/')
    }

   
    // -------------------------------------------------------------------
    // render
    // -------------------------------------------------------------------
    render() {
        const {appModel} = this.props;
        return (
            <div className="rootStyle basicRow">
                <div className="sideMenuContainer">
                    <div className="sideMenu">
                        <nav>
                            <h3>TEP Xi at MIT</h3>
                            <Link to={`${process.env.PUBLIC_URL}`}>                                    
                                    <img alt="logo" src={`${process.env.PUBLIC_URL}/favicon.ico`}/>
                            </Link>
                        </nav>
                        <div>
                            <nav>
                                <NavLink className="navLink" activeClassName="navLinkSelected" to={`${process.env.PUBLIC_URL}/home`}>Home</NavLink>
                                <br/><NavLink className="navLink" activeClassName="navLinkSelected" to={`${process.env.PUBLIC_URL}/students`}>For Students</NavLink>
                                <br/><NavLink className="navLink" activeClassName="navLinkSelected" to={`${process.env.PUBLIC_URL}/parents`}>For Parents</NavLink>
                                <br/><NavLink className="navLink" activeClassName="navLinkSelected" to={`${process.env.PUBLIC_URL}/planaria`}>For Planaria</NavLink>
                            </nav>              
                        </div>                        
                    </div>
                </div>
                <div className="pageContainer">
                    <Switch>
                        <Route exact path={`${process.env.PUBLIC_URL}/students`}><StudentPage /></Route>
                        <Route exact path={`${process.env.PUBLIC_URL}/parents`}><ParentPage /></Route>
                        <Route exact path={`${process.env.PUBLIC_URL}/planaria`}><PlanariaPage /></Route>
                        <Route exact path={`${process.env.PUBLIC_URL}/home`}><HomePage /></Route>
                        <Route ><Redirect to="/home" /> </Route>
                    </Switch>
                </div>
            </div>)
    }
}


