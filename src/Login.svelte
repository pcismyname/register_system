<script>
    import { accounts, account, islogin, mode } from './stores.js';
    let username = '';
    let pin = '';

    function isLogin(){
        if(!(username in $accounts) || $accounts[username].pin != pin){
            alert('Incorrect Username or password');
        }
        else {
            $islogin = true;
            $mode = 'menu';
            $account = username;
            username = '';
            pin = '';  
        }
    }

</script>

<!-- svelte-ignore a11y-missing-attribute -->
<body> 
    <div class="center">
        <h1>Login</h1>
        <form method="post">
            <div class="txt_field">
                <input bind:value={username}  type="text" id="username" required>
                <span></span>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label >Username</label>
            </div>
            <div class="txt_field">
                <input  bind:value={pin}  type="password" id="password" required>
                <span></span>
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label >Password</label>
            </div>
            <div class="pass" >
                <a >Forgot Password?</a> </div>
            <input on:click={isLogin} type="submit" value="Login">
            
        </form>
    </div>
</body> 

<style>
    :global(body){
        margin: 0;
        padding: 0;
        font-family: Verdana, Geneva, Tahoma, sans-serif;  
        overflow: hidden;
        background: linear-gradient(#e66465, #9198e5); 
        caret-color: transparent;

    }
   
    .center {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        widows: 400px;
        background: rgb(255, 255, 255) ;
        border-radius: 10px;
        outline: none;
        
    }
    .center h1 {
        text-align: center;
        padding:0 0 20px 0;
        border-bottom: 1px solid silver;
    }
    .center form {
        padding: 0 40px;
        box-sizing: border-box;
    }
    form .txt_field {
        position: relative;
        border-bottom: 2px solid #adadad;
        margin: 30px 0;
    }
    .txt_field input {
        widows: 100%;
        padding: 0 5px;
        height: 40px;
        font-size: 16px;
        border: none;
        background: none;
        outline: none;
        caret-color: auto;

    }
    .txt_field label {
        position: absolute;
        top: 50%;
        left: 5px;
        color: #adadad;
        transform: translateY(-50%);
        font-size: 16px;
        pointer-events: none;
        transition: .5s;
    }
    .txt_field span::before{
        content: '';
        position: absolute;
        top: 48px;
        left: 0;
        width: 0%;
        height: 2px;
        background: #9198e5;
        transition: .5s;
    }
    .txt_field input:focus ~ label,
    .txt_field input:valid ~ label{
        top: -5px;
        color: #9198e5;
    }
    .txt_field input:focus ~ span::before,
    .txt_field input:valid ~ span::before{
        width: 100%;
    }
    .pass{
        margin: -5px 0 20px 5px;
        counter-reset: #a6a6a6;
    }
    .pass:hover{
        text-decoration: underline;
    }
    input[type="submit"]{
        width: 100%;
        height: 50px;
        border: 1px solid;
        background: #2691d9;
        border-radius: 25px;
        font-size: 18px;
        color: #e9f4fb;
        font-weight: 700;
        cursor: pointer;
        outline: none;
    }
    input[type="submit"]:hover{
        border-color:#2691d9 ;
        transition: .5s;
    }
</style>