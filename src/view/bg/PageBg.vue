<template>
<div>
  <!-- 太阳光 -->
  <div class="sunlight-wrapper">
	<span v-for="n in 4"></span>
  </div>
  <!-- 山峰 -->
  <div class="peak-wrapper">
	<div class="peak-1"></div>
	<div class="peak-2"></div>
	<div class="peak-3"></div>
	<div class="peak-4"></div>
	<div class="peak-5"></div>
	<div class="peak-6"></div>
	<div class="peak-7">
	  <div class="peak-7-1"></div>
	  <div class="peak-7-2"></div>
	</div>
	<div class="peak-8"></div>
	<div class="peak-9"></div>
	<!-- 风车塔 -->
	<div class="windmill-wrapper">
	  <div class="windmill-1"></div>
	  <div class="windmill-2"></div>
	  <div class="windmill-3"></div>
	  <div class="windmill-4"></div>
	  <div class="windmill-5">
		<div class="windmill-5-1"></div>
		<div class="windmill-5-2"></div>
	  </div>
	</div>
  </div>
  <!-- 白云 -->
  <div class="clouds-wrapper">
  	<span v-for="n in 3" class="cloud"></span>
  </div>
  <!-- 地面 -->
  <div class="ground">
  	<!-- 草地 -->
  	<div class="grass-wrapper">
  	  <span v-for="n in 6"></span>
  	</div>
  	<!-- 房子 -->
  	<div class="house-wrapper">
  	  <span v-for="n in 13"></span>
    </div>
    <!-- 护栏 -->
    <div class="fence-wrapper">
      <span v-for="n in 4"></span>
    </div>
    <!-- 蜜蜂鲜花 -->
	<div class="bee-wrapper">
		<div class="soil two"></div>
		<div class="soil"></div>
		<div class="flowerpot">
			<div class="flowerpot-top"></div>
			<div class="flowerpot-bottom"></div>
		</div>
		<div class="flower">
			<div class="flower-top">
				<p v-for="n in 4"></p>
			</div>
			<div class="flower-head"></div>
		</div>
		<div class="bee">
			<div class="bee-body"></div>
		</div>
		<div class="bee bee-2">
			<div class="bee-body"></div>
		</div>
		<div class="triangle-box two">
			<div class="item"></div>
			<div class="item"></div>
			<div class="item"></div>
		</div>
	</div>
    <!-- 叶子 -->
    <div class="leaf-wrapper">
      <span v-for="n in 4"></span>
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
