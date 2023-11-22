<template>
  <div class="main">
    <div
      class="overall flex flex-col md:flex-row items-center justify-evenly relative"
    >
      <img
        class="headphone"
        src="../../assets/images/headphone/headphone.svg"
        alt="HeadPhonee"
      />

      <div class="flex flex-col justify-center">
        <p>Musiqa zavqini his qilish uchun ko'p mablag' sarflash shart emas!</p>
        <button class="batafs">Batafsil</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding-bottom: 80px;
}
.overall {
  width: 1180px;
  height: 420px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #282828;

  button {
    display: inline-flex;
    padding: 18px 16px;
    align-items: flex-start;
    border-radius: 10px;
    width: 161px;
    height: 54px;
    background: #fff;
    justify-content: center;
    margin-top: 15px;
    border: 0 solid;
    text-shadow: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    transition: all 0.3s ease;
  }

  button:hover {
    background: rgb(51, 51, 48);
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border: 1px solid;
  }

  p {
    width: 438px;
    height: 114px;
    color: var(--secondry-white, #fff);
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
  }
  .headphone {
    width: 518px;
    height: 513px;
    flex-shrink: 0;
  }

  .batafs {
    color: #111;
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
  }
}
</style>
