<template>
  <div class="main">
    <div class="main2">
      <div class="first_prc flex gap-[8px] mb-[10px]">
        <div class="noutbook flex justify-end items-end relative rounded-lg">
          <button><h1>Noutbuklar</h1></button>
          <img
            src="../../assets/images/category_brands/notebook.svg"
            alt="noutbuk"
          />
        </div>

        <div
          class="konditsoner flex justify-end items-center relative rounded-lg"
        >
          <button><h1>Konditsoner</h1></button>
          <img
            src="../../assets//images/category_brands/konditsoner.svg"
            alt="konditsoner"
          />
        </div>

        <div class="smartphone">
          <button><h1>Smartphone</h1></button>
          <img
            src="../../assets/images/category_brands/telefon.svg"
            alt="smartphone"
          />
        </div>
      </div>

      <div class="asosiy1 flex gap-[10px]">
        <div class="kirmashina flex justify-end items-end relative rounded-lg">
          <button><h1>Kirmashina</h1></button>
          <img
            src="../../assets/images/category_brands/kirmashina.svg"
            alt="kirmashina"
          />
        </div>

        <div class="tv pr-[20px] flex justify-end relative rounded-lg">
          <button><h1>Tv</h1></button>
          <img src="../../assets/images/category_brands/tv.svg" alt="tv" />
        </div>

        <div class="muzlatkich flex justify-end items-end">
          <button><h1>Muzlatgichlar</h1></button>
          <img
            src="../../assets/images/category_brands/muzlatkich.svg"
            alt="muzlatgich"
          />
        </div>
      </div>
    </div>

    <div>
      <div class="koproq w-[250px] h-[57px] mb-[10px]">
        <button>Ko'proq</button>
      </div>

      <div class="katta_muzlatgich flex justify-end items-end">
        
        <img
          src="../../assets/images/category_brands/katta_muzlatkich.svg"
          alt="katta_muzlatgich"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  width: 100%;
  margin-top: 20px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
  height: 511px;
  flex-shrink: 0;
}

.main2 {
  display: flex;
  flex-direction: column;
}

.first_prc {
  flex-direction: row;
}

.noutbook {
  width: 444px;
  height: 248px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #5c4f8c;
  width: 444px;
  height: 248px;
}

.kirmashina {
  width: 227px;
  height: 249px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #b0b0b0;
}

.smartphone {
  width: 240px;
  height: 249px;
  flex-shrink: 0;
  border-radius: 7px;
  background-color: #676D86;
  padding: 20px;
  position: relative;
}

.tv {
  width: 431px;
  height: 249px;
  flex-shrink: 0;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
}

.konditsoner {
  width: 214px;
  height: 248px;
  flex-shrink: 0;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
}

.koproq {
  width: 250px;
  height: 58px;
  display: inline-flex;
  padding: 19px 97px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: var(--primary-p-1, #134e9b);
  color: white;
}

.muzlatkich {
  width: 253px;
  height: 250px;
  background: #8f8f8f;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  position: relative;
}

.katta_muzlatgich {
  width: 250px;
  height: 440px;
  background: #8f8f8f;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  
}

h1 {
  display: inline-flex;
  padding: 4px 0px;
  position: absolute;
  top: 12px;
  left: 12px;
  border-radius: 30px;
  border: 1px solid #fff;
  color: white;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
}
</style>
