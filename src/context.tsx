import { createContext } from 'react';

export interface IContext {
    page: Number;
    data: Object | any;
    changeData: (value: Object) => void;
    togglePage: (value: Number) => void;
}

export const MainContext = createContext<Partial<IContext>>({
    page: 1,
    data: {},
    changeData: () => { },
    togglePage: () => { }
});
