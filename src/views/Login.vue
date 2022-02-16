<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please login</h1>

      <div class="form-floating">
        <input type="email" class="form-control" name="email" placeholder="name@example.com">
        <label>Email</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" name="password" placeholder="Password">
        <label>Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
    </form>
  </main>
</template>
