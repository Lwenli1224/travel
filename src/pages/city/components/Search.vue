<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名/拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      border-radius .06rem
      text-align center
      color #666
</style>
