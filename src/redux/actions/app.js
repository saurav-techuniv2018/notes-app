const SWITCH_PAGE = 'SWITCH_PAGE';
const SYNC_DATA_STARTED = 'SYNC_DATA_STARTED';
const SYNC_DATA_SUCCEEDED = 'SYNC_DATA_SUCCEEDED';
const SYNC_DATA_FAILED = 'SYNC_DATA_FAILED';

export { SWITCH_PAGE, SYNC_DATA_STARTED, SYNC_DATA_SUCCEEDED, SYNC_DATA_FAILED };

const switchPage = (page, currentNote) => ({
  type: SWITCH_PAGE,
  payload: { currentPage: page, currentNote },
});

export { switchPage };
