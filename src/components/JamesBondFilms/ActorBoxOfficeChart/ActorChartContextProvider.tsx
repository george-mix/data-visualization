import React, {createContext, useContext, useMemo, useReducer} from 'react';
import {BoxOfficeType} from './actorTypes';

type ActorState = {
  selectedIndex: number;
  boxOfficeType: BoxOfficeType;
}

type ActorActions =
  | {type: 'changeSelectedIndex', index: ActorState['selectedIndex']}
  | {type: 'switchBoxOfficeType', newType: BoxOfficeType}

type API = {
  changeSelectedIndex: (_index: number) => void;
  switchBoxOfficeType: () => void;
};

const reducer = (state: ActorState, action: ActorActions) => {
  switch (action.type) {
    case 'changeSelectedIndex':
      return {...state, selectedIndex: action.index};
    case 'switchBoxOfficeType':
      return {...state, boxOfficeType: action.newType};
    default:
      return {...state};
  }
};

const SelectedActorContext = createContext<ActorState['selectedIndex']>({} as ActorState['selectedIndex']);
const ActorBoxOfficeApiContext = createContext<API>({} as API);
const BoxOfficeContext = createContext<ActorState['boxOfficeType']>({} as ActorState['boxOfficeType']);

const initialState: ActorState = {
  selectedIndex: 0,
  boxOfficeType: 'total',
};

export const ActorChartContextProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const api = useMemo(() => {
    const changeSelectedIndex = (index: number) => {
      dispatch({type: 'changeSelectedIndex', index});
    };

    const switchBoxOfficeType = () => {
      const newType = state.boxOfficeType === 'total' ? 'average' : 'total';
      dispatch({type: 'switchBoxOfficeType', newType});
    };

    return {changeSelectedIndex, switchBoxOfficeType};
  }, [state.boxOfficeType]);

  return (
    <ActorBoxOfficeApiContext.Provider value={api}>
      <SelectedActorContext.Provider value={state.selectedIndex}>
        <BoxOfficeContext.Provider value={state.boxOfficeType}>
          {children}
        </BoxOfficeContext.Provider>
      </SelectedActorContext.Provider>
    </ActorBoxOfficeApiContext.Provider>
  );
};

export const useActorApi = () => useContext(ActorBoxOfficeApiContext);
export const useSelectedIndex = () => useContext(SelectedActorContext);
export const useBoxOfficeContext = () => useContext(BoxOfficeContext);
