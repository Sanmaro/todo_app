import supertest from "supertest";
import app from "../server.js";
import { expect } from 'chai';


describe("Tasks API", () => {
  it("GET /api/tasks - should return all tasks", async () => {
    const response = await supertest(app).get("/api/tasks");
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an("array");
  });

  it("POST /api/tasks - should add a new task", async () => {
    const task = "Test task";
    const response = await supertest(app).post("/api/tasks").send({ task });
    expect(response.status).to.equal(201);
    expect(response.body).to.equal(task);
  });

  it("PUT /api/tasks/:id - should update an existing task", async () => {
    const newTask = "Updated task";
    const response = await supertest(app).put("/api/tasks/0").send({ task: newTask });
    expect(response.status).to.equal(200);
    expect(response.body).to.equal(newTask);
  });

  it("DELETE /api/tasks/:id - should delete an existing task", async () => {
    const response = await supertest(app).delete("/api/tasks/0");
    expect(response.status).to.equal(204);
  });
});
