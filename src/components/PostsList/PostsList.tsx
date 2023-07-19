import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useStores } from "../../hooks/rootStoreContext"

const PostsList = () => {

    const { postsStore: { getPostsAction, posts } } = useStores()

    useEffect(() => {
        getPostsAction()
    }, [])

    if (posts?.state === "pending") return <h3>Loading...</h3>
    if (posts?.state === "rejected") return <h3>Error</h3>

    return (
        <>
            {posts?.value[0].body}
        </>
    )
}

export default observer(PostsList)