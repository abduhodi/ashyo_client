<template>
  <div
    class="main w-[100%] mt-[20px] flex relative items-center justify-center mb-[4%]"
  >
    <div class="flex flex-col">
      <div class="qator1 flex gap-[10px] mb-[10px]">
        <div class="noutbook">
          <button><h1>Noutbooklar</h1></button>
          <img src="../../assets/category_img/noutbook.png" alt="noutbook" />
        </div>
        <div class="konditsioner">
          <button><h1>Konditseoner</h1></button>

          <img
            src="../../assets/category_img/condisioner.png"
            alt="condisioner"
          />
        </div>
        <div class="telefon">
          <button>
            <h1>Smartfonlar</h1>
          </button>
          <img
            class="tel"
            src="../../assets/category_img/telefon.png"
            alt="telefon"
          />
        </div>
      </div>
      <div class="qator1 flex gap-[10px]">
        <div class="kirMashina">
          <button><h1>Kiryuvish mashinasi</h1></button>
          <img
            src="../../assets/category_img/kirmashina.png"
            alt="kirmashina"
          />
        </div>
        <div class="tv pr-[20px]">
          <button><h1>Televizorlar</h1></button>
          <img src="../../assets/category_img/tv.png" alt="tv" />
        </div>
        <div class="muzlatgich1 relative">
          <img
            class="absolute right-[-62px]"
            src="../../assets/category_img/muz1.png"
            alt="muz1"
          />
          <button>
            <h1>Muzlatgichlar</h1>
          </button>
        </div>
      </div>
    </div>

    <div>
      <div class="koproq w-[250px] h-[57px] mb-[10px]">
        <button>Ko'proq</button>
      </div>
      <div class="muzlatgich2">
        <img src="../../assets/category_img/muz2.png" alt="muz2" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main {
  height: 511px;
  flex-shrink: 0;
}

.qator1 {
  flex-direction: row;
}
.noutbook {
  width: 444px;
  height: 248px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #5c4f8c;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
}
.kirMashina {
  width: 227px;
  height: 249px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #887979;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
}

.telefon {
  width: 240px;
  height: 249px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #5f5e8d;
  position: relative;
}
.tv {
  width: 431px;
  height: 249px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #ceaf75;
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.konditsioner {
  width: 214px;
  height: 248px;
  flex-shrink: 0;
  border-radius: 7px;
  background: #797c7d;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}
.koproq {
  display: inline-flex;
  padding: 19px 97px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  background: var(--primary-p-1, #134e9b);
  color: white;
}
.koproq:hover {
  cursor: pointer;
  background: var(--primary-p-1, #0c56b6);
}
.muzlatgich1 {
  width: 253px;
  height: 250px;
  background: #8f8f8f;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
}
.muzlatgich2 {
  width: 250px;
  height: 440px;
  background: #8f8f8f;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 7px;
  border-bottom-right-radius: 7px;
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
}
.muzWord {
  position: absolute;
  top: 270px;
  left: 1050px;
}
h1:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.315);
}
.tel {
  height: 240px;
  margin-top: -15px;
  margin-left: 5px;
}
</style>
