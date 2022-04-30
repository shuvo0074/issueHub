import FetchService from '../../services/fetchService';
import {setissueCount, syncResultFromAPI} from '../searchActions';

export const fetchIssues = () => (dispatch, getState) => {
  FetchService(
    'GET',
    `repos/${getState().issues.username_param}/${
      getState().issues.repository_param
    }/issues?state=${getState().issues.currentState}&page=${
      getState().issues.currentPageIndex
    }`,
  ).then(res => {
    dispatch(syncResultFromAPI(res));
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
        } else reject('Project Not Found');
      })
      .catch(() => reject('Project Not Found'));
  });
};

export const fetchSingleUserDetails = () => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    FetchService('GET', `users/${getState().issues.username_param}`)
      .then(res => {
        if (res.id) {
          resolve(res);
        } else reject('User Not found');
      })
      .catch(() => reject('User Not Found'));
  });
};
