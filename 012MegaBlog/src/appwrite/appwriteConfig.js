import { Client, Databases, Query, Storage, ID } from "appwrite";
import config from "../config/config";
export class Service {
	client = new Client();
	databases;
	bucket;

	constructor() {
		//create client
		this.client
			.setEndpoint(config.appwriteUrl)
			.setProject(config.appwriteProjectId);
		this.databases = new Databases(this.client);
		this.bucket = new Storage(this.client);
	}
	async createPost({ title, slug, featuredImage, content, status, userId }) {
		try {
			return await this.databases.createDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug,
				{
					title,
					content,
					status,
					featuredImage,
					userId,
				}
			);
		} catch (error) {
			console.log("error while creating a post", error);
			throw error;
		}
	}
	//since slug is our unique id so we  are taking it diffrently
	async updatePost(slug, { title, content, featuredImage, status }) {
		try {
			return await this.databases.updateDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug,
				{
					title,
					content,
					featuredImage,
					status,
					// slug
				}
			);
		} catch (error) {
			console.log("Error occured while deleting a post", error);
		}
	}
	async deletePost(slug) {
		try {
			await this.databases.deleteDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug
			);
			return true;
		} catch (error) {
			console.log("error while deleting post", error);
			return false;
		}
	}
	async getPost({ slug }) {
		try {
			return await this.databases.getDocument(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				slug
			);
		} catch (error) {
			console.log("Unable to fetch the post", error);
			return false;
		}
	}
	async getPosts(queries = [Query.equal("status", "active")]) {
		try {
			return await this.databases.listDocuments(
				config.appwriteDatabaseId,
				config.appwriteCollectionId,
				queries
			);
		} catch (error) {
			console.log(" error while fetching all posts", error);
			return false;
		}
	}

	//Methods For FILE Handling
	//file is a file to upload
	async uploadFile(file) {
		try {
			return await this.bucket.createFile(
				config.appwriteBucketId,
				ID.unique(),
				file
			);
			return true;
		} catch (error) {
			console.log("error while uploading file", error);
			return false;
		}
	}
	async deleteFile(fileId) {
		try {
			await this.bucket.deleteFile(config.appwriteBucketId, fileId);
			return true;
		} catch (error) {
			console.log("Error while deleting the file ", error);
			return false;
		}
	}
	getFilePreview(fileId) {
		try {
			return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
		} catch (error) {
			console.log("Error while file preview", error);
			return false;
		}
	}
}

const service = new Service();
export default service;
