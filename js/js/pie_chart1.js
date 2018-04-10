$(function() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('pie_chart1'));

	option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title: {
        left: 'center',
        text: '全天动作计数占比'
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        data:['DOWN','UP','MIDDLE']
    },
    series: [
        {
            name:'动作计数占比',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                {value:234, name:'DOWN'},
                {value:135, name:'UP'},
                {value:548, name:'MIDDLE'}
            ]
        }
    ]
};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
})
