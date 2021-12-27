<template>
  <div>
    <h1>ORAN-ONAX PRODUCT</h1>
   
      <v-ul>
      <li><a href="#">Orders</a></li>
      <li><a href="#">variants</a></li>
      <li><a href="#">Chiping</a></li>
      <li><a href="#">product link</a></li>
    </v-ul>

    
  </div>
</template>
<style scoped>
v-ul {
  display: flex;

}
 a {
  justify-content: space-between;
  text-decoration: none;
 }
a:hover
{
  color: red;
}
h1 {
  font-size: large;
  text-transform: capitalize;
   margin-left: 10px;
   justify-content: center;
   align-items: center;
}
</style>
