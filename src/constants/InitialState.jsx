const INITIALSTATE = {
    repositories: [],
    filteredRepos: [],
    selectedRepo: {},
    loading: false,
    error: null,
    warning: null,
    searchQuery: {
        input: '',
        filter: '',
        sort: {
            value: null,
            direction: null
        },
        history: []
    },
    recentlyViewed: [],
    stargazers: 1,
    commentFormShow: false,
    showVal: false,
    setStar: true,
    repoQuantityPerPage: 6
}

export {INITIALSTATE};