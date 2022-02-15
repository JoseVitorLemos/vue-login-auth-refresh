<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <router-link to="/" class="nav-link px-2 text-white">Home</router-link>
          </li>
        </ul>

        <div class="text-end">
          <router-link to="/login" class="btn btn-outline-light me-2">Login</router-link>
          <router-link to="/signin" class="btn btn-outline-light me-1">Signin</router-link>
        </div>

      </div>
    </div>

  <router-view/>
  </header>
</template>

<style>
.form-app {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-app .checkbox {
  font-weight: 400;
}
.form-app .form-floating:focus-within {
  z-index: 2;
}
.form-app input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-app input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
