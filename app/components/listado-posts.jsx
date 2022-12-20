import {Post} from "~/components";

export const ListadoPosts = ({posts}) => {
    return (
        <>
            <h2 className="heading">Blog</h2>
            <div className="blog">
                {
                    posts?.map(post => (
                        <Post
                            key={post} post={post.attributes}
                        />
                    ))
                }
            </div>
        </>
    );
};
