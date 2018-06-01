<script>
import config from './config'
export default {
  async created() {
    wx.request({
      url: config.host = '/weapp/demo',
      success: function(res) {
        console.log(res)
      }
    })
    console.log('weapp starts!')
  }
}
</script>

<style>
</style>
