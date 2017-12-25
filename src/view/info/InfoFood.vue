<template>
  <div>
    <div class="ic-wrapper x1" @click="showFood">
      <div class="ic-btn burger">
      </div>
      <p>饲料</p>
    </div>
    <!--产品详情-->
    <action-sheet class="pop_bottom" asKey="food">
      <sub-title title="饲料" class="h line">
        <i class="icon-close" @click="hideFood"></i>
      </sub-title>
      <div class="actionSheet_scroll">
        <p>{{user.money}}</p>
        <ul class="item-wrapper">
          <li v-for="food in foods">
            <div class="item_img">
              <food-image :src="food.image"></food-image>
            </div>
            <div class="item_l">
              <b>{{food.name}}</b>
              <p>营养值：{{food.nutrition}}</p>
            </div>
            <div class="item_r"><span>{{food.count}}</span></div>
            <div class="item_r" v-if="food.count || !food.count===0"><p class="price" @click="setfeeding(food)">喂食</p></div>
            <div class="item_r" v-if="!food.count || food.count===0"><p class="price buy">商店</p></div>
          </li>
        </ul>
      </div>
    </action-sheet>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    // 计算属性
    computed: {
      ...mapState(['foods', 'user'])
    },
    methods: {
      ...mapMutations(['setfeeding']),
      decreaseCart () {
        if (this.food.count) {
          this.food.count--
        }
      },
      // 让操作表显示调用这个方法
      showFood () {
        this.showActionSheet('food')
      },
      hideFood () {
        this.hideActionSheet('food')
      }
    }
  }
</script>