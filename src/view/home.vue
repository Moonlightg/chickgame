<template>
  <div class="container">
	  <div class="content">
	    <page-bg></page-bg>
      <chick-feed></chick-feed>
      <chick-egg></chick-egg>
      <info-food></info-food>
      <div style="
    display: none;
">
        <h3>{{count}}</h3>
        <button @click="add(10)">+</button>
        <button @click="reduce">-</button>
        <br/>
        <h3>{{count}}</h3>
        <button @click="addAction">+</button>
        <button @click="reduceAction">-</button>
        <span class="icon-cake">
          <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
import InfoFood from '@/view/info/InfoFood'
export default {
  data () {
    return {
    }
  },
  components: {
    InfoFood
  },
  // 计算属性
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
    // count () { return this.$store.getters.count }
  },
  // 方法属性
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  }
}
</script>
