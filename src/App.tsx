import CountersWrapper from "./components/CountersWrapper/CountersWrapper"
import TodoList from "./components/TodoList/TodoList"
import PostsList from "./components/PostsList/PostsList"
import { RootStoreContext } from "./hooks/rootStoreContext"
import RootStore from "./store/root-store"

function App() {

    return (
        <RootStoreContext.Provider value = {new RootStore()}>
            <div className="App">
                <CountersWrapper/>
                <TodoList/>
                <PostsList/>
            </div>
        </RootStoreContext.Provider>
    )
}

export default App
