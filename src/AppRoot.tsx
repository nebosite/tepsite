import React from 'react';

export interface IAppState {
  myState: string;
}

export class AppRoot extends React.Component<{}, IAppState> {

  public render(){
      return (
          <div>
            Hello   
          </div>
      );
  }

}
