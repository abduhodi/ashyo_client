<template>
  <div class="w-[100%] flex items-center justify-center mb-[4%]">
    <div class="w-[1180px] h-[275px] m-[20px] flex">
      <div>
        <div class="artel mb-[8px]">
          <img src="../../assets/images/brands/artel.svg" alt="artel" />
        </div>
        <div class="iphone">
          <img src="../../assets/images/brands/iphone.svg" alt="iphone" />
        </div>
      </div>
      <div>
        <div class="samsung mb-[8px]">
          <img src="../../assets/images/brands/samsung.svg" alt="samsung" />
        </div>
        <div class="vivo">
          <img src="../../assets/images/brands/vivo.svg" alt="vivo" />
        </div>
      </div>
      <div>
        <div class="nokia mb-[8px]">
          <img src="../../assets/images/brands/nokia.svg" alt="nokia" />
        </div>
        <div class="huawei">
          <img src="../../assets/images/brands/huawei.svg" alt="huawei" />
        </div>
      </div>
      <div>
        <div class="mi mb-[8px]">
          <img src="../../assets/images/brands/mi.svg" alt="xiaomi" />
        </div>
        <button class="koproq">Ko'proq</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.artel {
  display: inline-flex;
  padding: 24px 100px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  background: rgba(103, 180, 55, 0.2);
  cursor: pointer;
}

.artel:hover {
}

.iphone {
  display: inline-flex;
  height: 169px;
  padding: 17px 114px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;

  background: rgba(0, 0, 0, 0.1);
}

.samsung {
  display: inline-flex;
  padding: 47px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  cursor: pointer;

  background: rgba(3, 78, 162, 0.1);
}

.vivo {
  width: 300px;
  height: 100px;
  display: inline-flex;
  padding: 22px 96px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  cursor: pointer;

  background: rgba(0, 109, 184, 0.2);
}

.nokia {
  display: inline-flex;
  padding: 17px 84px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  cursor: pointer;

  background: rgba(0, 67, 156, 0.12);
}

.mi {
  display: inline-flex;
  padding: 70px 41px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  cursor: pointer;

  background: rgba(255, 103, 0, 0.2);
}

.huawei {
  display: inline-flex;
  height: 147px;
  padding: 22px 89px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;

  background: rgba(255, 26, 31, 0.2);
}

.koproq {
  width: 220px;
  height: 44px;
  display: inline-flex;
  padding: 12px 82px;
  align-items: flex-start;
  gap: 8px;
  border-radius: 6px;
  cursor: pointer;

  background: var(--secondry-background, #ebeff3);
}
</style>
