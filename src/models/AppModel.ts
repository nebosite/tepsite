import { observable } from "mobx";

export class AppModel 
{
    // observable decorator turns username into state.  Any change
    // to an observable item will for a re-render on the page of 
    // anything that depends on it.
    @observable username = "pluripotentato";  
}