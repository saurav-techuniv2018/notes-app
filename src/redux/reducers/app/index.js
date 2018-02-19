import { SWITCH_PAGE } from '../../actions/app';
import switchPage from './switch-page';

const defaultState = {
  currentPage: 0,
  currentNote: {
    title: '',
    note: '',
  },
};

const app = (currentState = defaultState, action) => {
  switch (action.type) {
    case SWITCH_PAGE:
      return switchPage(currentState, action.payload);

    default:
      return currentState;
  }
};

export default app;
