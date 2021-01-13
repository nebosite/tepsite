import { inject, observer } from "mobx-react";
import React from "react";
import { AppModel } from "../models/AppModel";

@inject("appModel")
@observer
export default class HomePage extends React.Component<{appModel?: AppModel}> 
{
    // -------------------------------------------------------------------
    // render
    // -------------------------------------------------------------------
    render() {
        const {appModel} = this.props;
        return (
            <div>
                Tep is awesome
            </div>
        )
    }
}


