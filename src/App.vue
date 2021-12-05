<template>
  <div id="app" class="container">
    <div id="nav" class="row text-center">
    <router-link to="/">Home</router-link> | 
    <router-link to="/marca">Marcas</router-link> | 
    <router-link to="/produto">Produtos</router-link> | 
    <router-link to="/usuario">Usuários</router-link> | 
    <router-link to="/login">Login</router-link>
  </div>
    <router-view/>
 </div>
</template>