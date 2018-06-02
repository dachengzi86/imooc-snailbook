<script>
import { showSuccess } from './util'
import qcloud from 'wafer2-client-sdk'
import config from './config'

export default {
	async created() {
		// wx.request({
		//   url: (config.host = '/weapp/demo'),
		//   success: function(res) {
		//     console.log(res)
		//   }
		// })

		// const res = await get('/weapp/demo')
		// console.log(123, res)
		// console.log('weapp starts!')

		/* 设置登录地址 */
		/* VM8983:1 获取 wx.getUserInfo 接口后续将不再出现授权弹窗，请注意升级 */
		let user = wx.getStorageSync('userinfo')
		if (!user) {
			qcloud.setLoginUrl(config.loginUrl)
			qcloud.login({
				success: function(userinfo) {
					console.log('登录成功', userinfo)
					showSuccess('登录成功')
					wx.setStorageSync('userinfo', userinfo)
				},
				fail: function(err) {
					console.log('登录失败', err)
				}
			})
		}
	}
}
</script>

<style>
.text-footer {
	text-align: center;
	font-size: 12px;
	margin-bottom: 5px;
}
.text-primary {
	color: #ea5149;
}
.page-title {
	padding-left: 20px;
	background: #eee;
	line-height: 40px;
	font-size: 14px;
}
.right {
	float: right;
}
.btn {
	color: white;
	background: #ea5a49;
	margin-bottom: 10px;
	padding-left: 15px;
	padding-left: 15px;
	border-radius: 2px;
	font-size: 16px;
	line-height: 40px;
	height: 40px;
	width: 100%;
}
.btn:active {
	background: #fa5a49;
}
</style>
