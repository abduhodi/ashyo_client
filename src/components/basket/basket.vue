<template>
  <div class="flex flex-col w-[761px] h-[850px] gap-[30px] ">
    <div class="card bg-[rgb(4, 2, 243)] flex flex-row w-[761px] h-[170px]">
      <div class=" bg-[#ebeff3]">
        <img
          class="w-[202px] h-[170px] rounded-lg"
          src="../../assets/images/brands/phone.svg"
          alt="phone"
        />
    </div>
    <p class="w-[338px] h-[36px] font-[Roboto] text-base font-normal leading-6 m-3">Смартфон Xiaomi 12 Lite 8/128Gb qora</p>
    <p class="w-[288px] h-[36px] font-[Roboto] text-base font-normal leading-6 m-3">2 470 000 </p>
    
    <svg-icon
    type="mdi"
    :path="mdiThumbUp"
    class="absolute m-[40px] mt-[50px]"
    ></svg-icon>
    <svg-icon
    type="mdi"
    :path="mdiDeleteCircle"
    class="absolute ml-[80px] mt-[50px]"
    ></svg-icon>
  </div>


  

 

</div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiThumbUp, mdiDeleteCircle } from "@mdi/js";</script>

<style lang="scss" scoped>
.main {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 761px;
  height: 850px;
}

.savatcha-frame48097062 {
  gap: 10px;
  top: 104px;
  left: 233px;
  display: flex;
  padding: 8px 14px;
  position: absolute;
  align-items: flex-start;
  border-radius: 6px;
  background-color: rgba(235, 239, 243, 1);
}

.savatcha-heart13 {
  width: 24px;
  height: 24px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}



</style>

