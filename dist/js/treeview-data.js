/*Treeview Init*/

$(function() {
		"use strict";
		
        var defaultData = [
          {
            text: 'Cam1',
            tags: ['2'],
            nodes: [
              {
                text: 'Cam1 Left',
                tags: ['0'],
              },
              {
                text: 'Cam1 Right',
                tags: ['0']
              }
            ]
          },
          {
            text: 'Parent 2',
            href: '#parent2',
            tags: ['0']
          },
          {
            text: 'Parent 3',
            href: '#parent3',
             tags: ['0']
          },
          {
            text: 'Parent 4',
            href: '#parent4',
            tags: ['0']
          },
          {
            text: 'Parent 5',
            href: '#parent5'  ,
            tags: ['0']
          }
        ];

        var alternateData = [
          {
            text: 'Cam 1',
            tags: ['2'],
            nodes: [
              {
                text: 'Cam1 Left',
                tags: ['3']               
              },
              {
                text: 'Child 2',
                tags: ['3']
              }
            ]
          },
          {
            text: 'Parent 2',
            tags: ['7']
          },
          {
            text: 'Parent 3',
            icon: 'glyphicon glyphicon-earphone',
            href: '#demo',
            tags: ['11']
          },
          {
            text: 'Parent 4',
            icon: 'glyphicon glyphicon-cloud-download',
            href: '/demo.html',
            tags: ['19'],
            selected: true
          },
          {
            text: 'Parent 5',
            icon: 'glyphicon glyphicon-certificate',
            color: 'pink',
            backColor: 'red',
            href: 'http://www.tesco.com',
            tags: ['available','0']
          }
        ];

        var json = '[' +
          '{' +
            '"text": "Cam1",' +
            '"nodes": [' +
              '{' +
                '"text": "Cam1 Left"' +
              '},' +
              '{' +
                '"text": "Cam1 Right"' +
              '}' +
            ']' +
          '},' +
          '{' +
            '"text": "Cam 2"' +
          '},' +
          '{' +
            '"text": "Cam3"' +
          '},' +
          '{' +
            '"text": "Cam 4"' +
          '},' +
          '{' +
            '"text": "Cam 5"' +
          '}' +
        ']';


        $('#treeview1').treeview({
          data: defaultData
        });

        $('#treeview2').treeview({
          levels: 1,
          data: defaultData
        });

        $('#treeview3').treeview({
          levels: 99,
          data: defaultData
        });

        var $tree = $('#treeview4').treeview({
          data: json
        });
});
