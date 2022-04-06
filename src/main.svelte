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