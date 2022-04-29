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

export const fetchSingleIssue = () => (dispatch, getState) => {
  FetchService(
    'GET',
    `repos/${getState().issues.username_param}/${
      getState().issues.repository_param
    }`,
  ).then(res => {
    console.log(res.open_issues_count);
    dispatch(setissueCount(res.open_issues_count));
  });
};
