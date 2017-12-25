<template>
<!-- chick -->
<div class="chick">
  <!-- 营养值进度条 -->
  <div class="nutrition-wrapper">
  	<span></span>
  	<count-down endTime="1514280600" :callback="callback" endText="已经结束了"></count-down>
  	<p>成长值 100/2000</p>
  </div>
  <div class="chick-head"></div>
  <div class="chick-body"></div>
  <div class="eye">
	<span></span>
	<span></span>
  </div>
  <div class="blusher">
	<span></span>
	<span></span>
  </div>
  <div class="face"></div>
  <div class="wing-left"></div>
  <div class="wing-content">
	<span></span>
  </div>
  <div class="wing-right">
	<span v-for="n in 8"></span>
	<div class="food">
	  <p></p>
	  <div class="dot-box">
		<span></span>
		<span></span>
	  </div>
	</div>
  </div>
  <div class="mouth">
	<span></span>
	<span></span>
	<p></p>
  </div>
  <div class="foot">
	<span></span>
	<span></span>
  </div>
  <!-- 鸡饭碗 -->
  <div class="trough">
	<span></span>
	<span></span>
	<div class="fodder"></div>
	<div class="trough-l">
	  <p></p>
	  <p></p>
	  <p></p>
	</div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      callback () {
        console.log('ddd')
      }
    }
  }
</script>