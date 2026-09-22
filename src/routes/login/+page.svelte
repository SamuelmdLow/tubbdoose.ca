<div class="container">
    <div class="box">
    <h1>Password.</h1>
    <form method="POST" action="?/login">
        <input name="password" type="password">
        <button>Login</button>
    </form>
    </div>
</div>

<style>
.container {
    margin: auto;
    display: flex;
    height: 100vh;
    .box {
        margin: auto;
        text-align: center;
    }
}
form {
    display: flex;
    gap: 1em;
}
</style>