$(function() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('Line2'));

	// 指定图表的配置项和数据
	var option = {
		xAxis: {
			type: 'category',
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		},
		yAxis: {
			type: 'value'
		},
		series: [{
			data: [820, 932, 901, 934, 1290, 1330, 1320],
			type: 'line'
		}]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
})