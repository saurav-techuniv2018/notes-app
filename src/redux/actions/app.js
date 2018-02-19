const SWITCH_PAGE = 'SWITCH_PAGE';

export { SWITCH_PAGE };

const switchPage = (page, currentNote) => ({
  type: SWITCH_PAGE,
  payload: { currentPage: page, currentNote },
});

export { switchPage };
