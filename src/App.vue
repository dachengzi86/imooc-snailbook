<script>
// import config from './config'
import { get } from './util'
export default {
	async created() {
    // wx.request({
    //   url: (config.host = '/weapp/demo'),
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
		const res = await get('/weapp/demo')
		console.log(123, res)
		console.log('weapp starts!')
	}
}
</script>

<style>
</style>
