import request from "supertest";
import { app } from "../app";
import { describe, expect, test, it, beforeAll, afterAll } from "@jest/globals";
import mongoose from "mongoose";

import path from "path";

let url = process.env.TEST_DB || "mongodb://127.0.0.1:27017/blog_web_test";

beforeAll(async () => {
  await mongoose.connect(url);
  console.log("connected to the test db");
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  console.log("database dropped, connection closed");
});

let postId:string;
describe("POST /api/post", () => {
  it("should create post with image", async () => {
    const imagePath = path.join(__dirname, "__testImage__", "test-image.jpg");

    const response = await request(app)
      .post("/api/post/")
      .field("title", "test title")
      .field("description", "some random ass description")
      .field("content", "thhhhhhhhhhhhhssssssssseee    rrrrrrr")
      .attach("image", imagePath);

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("post added successfully");
    expect(response.body.post).toBeDefined();
    expect(response.body.post.title).toBe("test title");
    expect(response.body.post.description).toBe("some random ass description");
    expect(response.body.post.content).toBe(
      "thhhhhhhhhhhhhssssssssseee    rrrrrrr"
    );
    expect(response.body.post.picUrl).toContain("uploads/");
    expect(response.body.post._id).toBeDefined();

    // {
    //     "message": "post added successfully",
    //     "post": {
    //         "title": "test  title",
    //         "description": "test desription",
    //         "content": "this is content of the file",
    //         "picUrl": "uploads/image1725587368136.png",
    //         "_id": "66da5fa8fee99478840780d6",
    //         "date": "2024-09-06T01:49:28.160Z",
    //         "__v": 0
    //     }
    // }

    //storing the post id 
    postId = response.body.post._id.toString();
  });
});

describe("GET /api/post", () => {
  it("it should return all the post there is", async () => {
    const response = await request(app).get("/api/post");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("here are all the post :");
    expect(Array.isArray(response.body.post)).toBe(true); // Ensure 'post' is an array

    expect(response.body.post[0].title).toBe("test title");
    expect(response.body.post[0].description).toBe("some random ass description");
    expect(response.body.post[0].content).toBe(
      "thhhhhhhhhhhhhssssssssseee    rrrrrrr"
    );
    expect(response.body.post[0].picUrl).toContain("uploads/");
    expect(response.body.post[0]._id).toBeDefined();
  });

  it("should return a individual post", async() => {
    const response = await request(app).get(`/api/post/${postId}`)

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain('here is the post ');
    expect(response.body.singlePost).toBeDefined();
    expect(response.body.singlePost.title).toBe("test title");
    expect(response.body.singlePost.description).toBe("some random ass description");
    expect(response.body.singlePost.content).toBe(
      "thhhhhhhhhhhhhssssssssseee    rrrrrrr"
    );
    expect(response.body.singlePost.picUrl).toContain("uploads/");
    expect(response.body.singlePost._id).toBeDefined();

  })
});
