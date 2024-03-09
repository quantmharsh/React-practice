import React, { useCallback , useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Select, RTE, Input } from "../index";
import appwriteService from "../../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// taking post in  function which will have all post data if user  has came by clicking edit button
//if user has come by clicking on new post then there will be no value in post so we will show empty fields
const PostForm = ({ post }) => {
	// watch is used to watch form continuously. where as control is used to pass control from RTE to here
	const { register, handleSubmit, watch, setValue, getValues, control } =
		useForm({
			defaultValues: {
				title: post?.title || "",
				content: post?.content || "",
				slug: post?.slug || "",
				status: post?.status || "active",
			},
		});
	const navigate = useNavigate();
	const userData = useSelector((state) => state.user.userData);

	const submit = async (data) => {
		//  check whether user is updating the existing post or creating new post
		//if post is present this means user is updating the  post
		if (post) {
			//get the image which user want to upload if  user wants
			const file = data.image[0]
				? appwriteService.uploadFile(data.image[0])
				: null;
			//delete the previous/old images
			if (file) {
				appwriteService.deleteFile(post.featuredImage);
			}
			//updating data in db
			const dbPost = await appwriteService.updatePost(post.$id, {
				...data,
				featuredImage: file ? file.$id : undefined,
			});
			if (dbPost) {
				navigate(`/post/${dbPost.$id}`);
			}
		}
		// if user creates a new post
		else {
			const file = data.image[0]
				? appwriteService.uploadFile(data.image[0])
				: null;
			if (file) {
				const fileId = file.$id;
				data.featuredImage = fileId;
				const dbPost = appwriteService.createPost({
					...data,
					userId: userData.$id,
				});
				if (dbPost) {
					navigate(`/post/${dbPost.$id}`);
				} 
			}
		}
	};
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);

useEffect(() => {
   const subscription =watch((value , {name})=>{
    if(name==='title')
    {
      setValue('slug', slugTransform(value.title) ,{shouldValidate:true})
    }
   });

   return()=>{
    subscription.unsubscribe();
   }
  

}, [watch , slugTransform , setValue ])


   

	return  <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
  <div className="w-2/3 px-2">
      <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
      />
      <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
      />
      <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
  </div>
  <div className="w-1/3 px-2">
      <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
      />
      {post && (
          <div className="w-full mb-4">
              <img
                  src={appwriteService.getFilePreview(post.featuredImage)}
                  alt={post.title}
                  className="rounded-lg"
              />
          </div>
      )}
      <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
      />
      <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
          {post ? "Update" : "Submit"}
      </Button>
  </div>
</form>
};

export default PostForm;
