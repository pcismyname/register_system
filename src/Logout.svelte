<script>
    import { islogin, mode } from './stores.js';
  
    function logout() {
      $islogin = false;
      $mode = '';
    }
  </script>

  
  <div class="logout">
      <button on:click={logout}>Log Out</button>
    </div>
  

  <style>
      .logout {
        position: absolute;
        top: 8px;
        right: 16px;
      }
    button {
      background: #2691d9;
      background-size: 800% 400%;
      padding: 1em 2em;
      display: inline-block;
      border: none;
      border-radius: 10px;
      font-size: 17px;
      font-weight: 700;
      color: white;
      transition: all .5s ease-in-out;
    }     

button:hover {
 transform: scale(1.05);
}

button:active {
 animation: gradient 3s infinite;
 transform: scale(0.8);
}

  </style>