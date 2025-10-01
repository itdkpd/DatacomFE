<template>
  <div class="root">
    <div class="loaderContainer">
      <h1>Loading</h1>
      <div class="dot-flashing">
        <div class="dot-1"></div>
        <div class="dot-2"></div>
        <div class="dot-3"></div>
        <div class="dot-4"></div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
// $text-color: #f5f5f5;
// $background: #0d1117;
// $dot-color-start: #161b22;
// $dot-color-end: #fff;

$text-color: #0d1117;
$background: none;
$dot-color-start: #fff;
$dot-color-end: #161b22;
@keyframes dotFlashing {
  0% {
    background-color: $dot-color-start;
  }
  100% {
    background-color: $dot-color-end;
  }
}
.root {
  height: 100%;
  background-color: $background;
  display: flex;
  & h1 {
    color: $text-color;
    text-align: center;
  }
}
.loaderContainer {
  padding: 25px 20px;
  align-self: center;
  margin: 0 auto;
  width: 350px;
  border-radius: 5px;

  & .dot-flashing {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: inline-flex;
    column-gap: 10px;
    justify-content: center;

    & .dot-1 {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $dot-color-start;
      color: $dot-color-start;
      animation: dotFlashing 0.5s infinite alternate;
      animation-delay: 0.1s;
    }

    & .dot-2 {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $dot-color-start;
      color: $dot-color-start;
      animation: dotFlashing 0.5s infinite alternate;
      animation-delay: 0.2s;
    }

    & .dot-3 {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $dot-color-start;
      color: $dot-color-start;
      animation: dotFlashing 0.5s infinite alternate;
      animation-delay: 0.3s;
    }

    & .dot-4 {
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $dot-color-start;
      color: $dot-color-start;
      animation: dotFlashing 0.5s infinite alternate;
      animation-delay: 0.4s;
    }
  }
}
</style>
