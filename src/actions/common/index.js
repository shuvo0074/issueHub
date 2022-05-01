import FetchService from '../../services/fetchService';
import {
  setissueCount,
  syncResultFromAPI,
  toggleResultListEnd,
} from '../searchActions';

export const fetchIssues = () => (dispatch, getState) => {
  const {
    username_param,
    repository_param,
    currentState,
    currentPageIndex,
    isLastResultPage,
  } = getState().issues;
  FetchService(
    'GET',
    `repos/${username_param}/${repository_param}/issues?state=${currentState}&page=${currentPageIndex}`,
  ).then(res => {
    if (res.length > 0) {
      if (isLastResultPage) dispatch(toggleResultListEnd()); // response may have more results, enable next button
      dispatch(syncResultFromAPI(res)); // if response has results, sync
      if (res.length < 30) dispatch(toggleResultListEnd()); // issuesPerpage is 30, so if result has less than 30, then disable next button
    } else dispatch(toggleResultListEnd()); // if response has no results, disable next button
  });
};

export const fetchSingleRepoDetails = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    FetchService(
      'GET',
      `repos/${getState().issues.username_param}/${
        getState().issues.repository_param
      }`,
    )
      .then(res => {
        if (res.open_issues_count) {
          dispatch(setissueCount(res.open_issues_count));
          resolve(res);
        } else {
          setissueCount(0);
          reject(new Error('Project Not Found'));
        }
      })
      .catch(() => {
        setissueCount(0);
        reject(new Error('Project Not Found'));
      });
  });
};

export const fetchSingleUserDetails = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    FetchService('GET', `users/${getState().issues.username_param}`)
      .then(res => {
        if (res.id) {
          resolve(res);
        } else {
          setissueCount(0);
          reject(new Error('User Not found'));
        }
      })
      .catch(() => {
        setissueCount(0);
        reject(new Error('User Not found'));
      });
  });
};
