export const syncResultFromAPI = result => {
  return {
    type: 'SYNC_RESULT',
    payload: result,
  };
};

export const clearResult = () => {
  return {
    type: 'CLEAR_RESULT',
  };
};

export const setissueCount = count => {
  return {
    type: 'SET_OPEN_ISSUE_COUNT',
    payload: count,
  };
};

export const setUserNameSearchParam = username => {
  return {
    type: 'SET_USERNAME_PARAM',
    payload: username,
  };
};

export const setRepositoryNameSearchParam = repositoryTitle => {
  return {
    type: 'SET_REPOSITORY_PARAM',
    payload: repositoryTitle,
  };
};
export const toggleSearchState = () => {
  return {
    type: 'TOGGLE_CURRENT_STATE',
  };
};
export const setSearchPageIndex = index => {
  return {
    type: 'SET_PAGE_INDEX',
    payload: index,
  };
};
export const toggleResultListEnd = () => {
  return {
    type: 'TOGGLE_RESULT_LIST_ENDED',
  };
};
