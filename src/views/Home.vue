<template>
  <div class="home">
    <el-container>
      <el-header>首页</el-header>
      <el-main>
        <div class="projectPink">
          <el-select v-model="value" @change="change">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      options: [
        {
          value: '项目1',
          label: '项目1'
        },
        {
          value: '项目2',
          label: '项目2'
        },
        {
          value: '项目3',
          label: '项目3'
        },
        {
          value: '项目4',
          label: '项目4'
        }
      ],
      value: '',
      boxList: []
    }
  },
  async created () {
    // 进入页面时 执行的代码。在这里发送axios请求
    const { meta, data } = await this.$axios.get('menus')

    // 得到返回的数据 res 就是接口返回的数据
    // 数据获值
    if (meta.status === 200) this.boxList = data
  },
  methods: {
    change (even) {
      // even 就是 你在选择中的项目 value
      console.log(even)
    }
  }
}
</script>

<style>
</style>
