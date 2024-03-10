import React, { useState } from "react";
import appWriteService from "../appwrite/appwriteConfig";
import { Container, PostCard, PostForm } from "../components";

const AllPost = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		appWriteService.getPosts([]).then((posts) => {
			if (posts) {
				setPosts(posts.documents);
			}
		});
	}, []);

	return <div className="w-full py-8" >
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post)=>(
                <div key={post.$id} className="p-2 w-1"> 
                <PostCard post={post} />

                    </div>
            ))}
          </div>
        </Container>
    </div>;
};

export default AllPost;
