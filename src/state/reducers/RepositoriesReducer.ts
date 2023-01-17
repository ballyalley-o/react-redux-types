
interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

// interface Action {
//     type: string;
//     payload?: any;
// }

type Action =
| SearchRepositoriesAction
| SearchRepositoriesSuccessAction
| SearchRepositoriesErrorAction

enum ActionType {
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITOES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITOES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

const reducer = (
    state: RepositoriesState,
    action: Action ): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITOES_SUCCESS:
            return { loading: false, error:null, data: action.payload }
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: []}
        default:
            return state;
    }

}

export default reducer;