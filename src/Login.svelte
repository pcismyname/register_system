
<main>     
    <div class="center">
        <h1>Login</h1>
        <form method="post">
            <div class="txt_field">
                <input type="text" id="username" required>
                <label for="usernaem">Username</label>
            </div>
            <div class="txt_field">
                <input type="password" id="password" required>
                <label for="password">Password</label>
            </div>
            <div class="pass">Forgot Password?</div>
            <input type="submit" value="Login">
            
        </form>
    </div>
</main>

<style>
    
    main {
        margin: 0;
        padding: 0;
        font-family: Verdana, Geneva, Tahoma, sans-serif;  
        overflow: hidden;
        background-color: aqua;
    }
    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        widows: 400px;
        background: rgb(255, 255, 255) ;
        border-radius: 10px;
    }
</style>