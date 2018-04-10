/*FullCalendar Init*/
$(document).ready(function() {
	'use strict';
	
    var drag =  function() {
        $('.calendar-event').each(function() {

        // store data so the calendar knows to render an event upon drop
        $(this).data('event', {
            title: $.trim($(this).text()), // use the element's text as the event title
            stick: true // maintain when user navigates (see docs on the renderEvent method)
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
            zIndex: 1111999,
            revert: true,      // will cause the event to go back to its
            revertDuration: 0  //  original position after the drag
        });
    });
    };
    
    var removeEvent =  function() {
		$(document).on('click','.remove-calendar-event',function(e) {
			$(this).closest('.calendar-event').fadeOut();
        return false;
    });
    };
    
    $(".add-event").keypress(function (e) {
        if ((e.which == 13)&&(!$(this).val().length == 0)) {
            $('<div class="btn btn-success calendar-event">' + $(this).val() + '<a href="javascript:void(0);" class="remove-calendar-event"><i class="ti-close"></i></a></div>').insertBefore(".add-event");
            $(this).val('');
        } else if(e.which == 13) {
            alert('Please enter event name');
        }
        drag();
        removeEvent();
    });
    
    
    drag();
    removeEvent();
    
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    $('#calendar').fullCalendar({
       
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            eventLimit: true, // allow "more" link when too many events
            events: [
                {
                    title: 'Daily Report',
                    start: new Date(year, month, day),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
                },
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -1),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -2),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -3),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day-4),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -5),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -6),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -7),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -8),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -9),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -10),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -11),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -12),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -13),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -14),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -15),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -16),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -17),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -18),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -19),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -20),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -21),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -22),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -23),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day - 24),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -25),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -26),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -27),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -28),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -29),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -30),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -31),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -32),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -33),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -34),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -35),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -36),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -37),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -38),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -39),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
				{
					title: 'Daily Report',
                    start: new Date(year, month, day -40),
					url:'https://vmaxx.blob.core.windows.net/public/report/Huanqiulama-2018-04-09.pdf'
				},
                {
                    id: 999,
                    title: 'Weekily Report',
                    start: new Date(year, month, day)
                },
                {
                    id: 999,
                    title: 'Weekily Report',
                    start: new Date(year, month, day-7)
                }
				,
                {
                    id: 999,
                    title: 'Weekily Report',
                    start: new Date(year, month, day-7 * 2)
                },
                {
                    id: 999,
                    title: 'Weekily Report',
                    start: new Date(year, month, day-7 * 3)
                },
                {
                    id: 999,
                    title: 'Weekily Report',
                    start: new Date(year, month, day-7 * 4)
                },
                {
                    id: 999,
                    title: 'Weekily Report',
                    start: new Date(year, month, day-7 * 5)
                },
                {
                    id: 999,
                    title: 'Weekily Report',
                    start: new Date(year, month, day-7 * 6)
                },
                {
                    id: 999,
                    title: 'Weekily Report',
                    start: new Date(year, month, day-7 * 7)
                },
                {
                    title: 'Walmart Show',
                    start: new Date(year, month, day),
                    end: new Date(year, month, day+3)
                }
            ]
        });
    
	 $('#calendar_small').fullCalendar({
       
            header: {
                left: 'title',
                right: 'prev,next',
			},
			height: 'auto',
            editable: false,
            droppable: false, // this allows things to be dropped onto the calendar
            eventLimit: true, // allow "more" link when too many events
        });
    
});