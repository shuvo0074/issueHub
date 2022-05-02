export type state = {
  issueList: Array<any>;
  openIssueCount: number;
  totalIssueCount: number;
  username_param: string;
  repository_param: string;
  currentState: string;
  currentPageIndex: number;
  isLastResultPage: boolean;
};

export const INITIAL_STATE: state = {
  issueList: [],
  openIssueCount: 0,
  totalIssueCount: 0,
  username_param: '',
  repository_param: '',
  currentState: 'open',
  currentPageIndex: 1,
  isLastResultPage: false,
};

export const searchReducer = (state: state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case 'SYNC_RESULT': {
      return {
        ...state,
        issueList: action.payload,
      };
    }

    case 'CLEAR_RESULT': {
      return {
        ...INITIAL_STATE,
      };
    }

    case 'SET_OPEN_ISSUE_COUNT': {
      return {
        ...state,
        openIssueCount: action.payload,
        totalIssueCount: action.payload,
      };
    }

    case 'SET_USERNAME_PARAM': {
      return {
        ...state,
        username_param: action.payload,
      };
    }

    case 'SET_REPOSITORY_PARAM': {
      return {
        ...state,
        repository_param: action.payload,
      };
    }

    case 'TOGGLE_CURRENT_STATE': {
      return {
        ...state,
        currentState: state.currentState === 'open' ? 'closed' : 'open',
      };
    }

    case 'SET_PAGE_INDEX': {
      return {
        ...state,
        currentPageIndex: action.payload,
      };
    }

    case 'TOGGLE_RESULT_LIST_ENDED': {
      return {
        ...state,
        isLastResultPage: !state.isLastResultPage,
      };
    }

    default:
      return state;
  }
};
