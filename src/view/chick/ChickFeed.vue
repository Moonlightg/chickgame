<template>
<!-- chick -->
<div class="chick">
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
    }
  }
</script>