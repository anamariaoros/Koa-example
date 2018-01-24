const koa = require("koa");
const Router = require("koa-router");

const app = new koa();
const router = new Router();
const port = 3003;

// REST API
router
    .post("/users/registration", (ctx, next) => {
        ctx.body = "registration Users";
    })
    .post("/users/login", (ctx, next) => {
        ctx.body = "Login users ";
    })
    .get("/users/", (ctx, next) => {
        ctx.body = "Get all users ";
    })
    .put("/users/:userId/edit", (ctx, next) => {
        const userId = ctx.params.userId;
        ctx.body = "Edit userId: " + userId;
    })
    .delete("/users/:userId/delete", (ctx, next) => {
        const userId = ctx.params.userId;
        ctx.body = "Delete userId: " + userId;
    })
    .all('/users/:userId', (ctx, next) => {
        console.log("All")
    });

app
  .use(router.routes())
  .use(router.allowedMethods());

const server = app.listen(port, function() {
  console.log("Koa is listening to http://localhost:3003");
});
