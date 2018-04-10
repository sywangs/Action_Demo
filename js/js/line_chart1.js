$(function() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('line_chart1'));

	option = {
    title: {
        text: '天粒度趋势图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['UP','MIDDLE','DOWN']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        
        {
            name:'UP',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
        },
        {
            name:'MIDDLE',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
        },
        {
            name:'DOWN',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 2]
        }
    ]
};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
})
