let foods = {
  // 喂食
  feeding (state) {
    if (this.state.foods.count > 0) {
      this.commit('reduce')
    }
  }
}
