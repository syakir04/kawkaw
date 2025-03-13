<template>
  <header class="site-header">
    <div class="logo-container">
      <img src="/kawkawLogo.png" alt="Logo" class="logo" href="#" />
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background-color: #e8efff;
  padding: 10px 120px;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 60px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px; /* Adjust as needed */
}
@media (max-width: 768px) {
  .site-header{
    padding: 10px 10px;
    justify-content: center;
  }
}

</style>
