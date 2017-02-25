$(document).ready(function () {

                $('#pstress').hide(); /*show text when stress img is hover over*/
                $('#stress').mouseenter(function () {
                    $('#pstress').show(300);
                    $('#pstart').hide();
                });
                $('#stress').mouseleave(function () {
                    $('#pstress').hide(300);
                });

                $('#pphysical').hide(); /*show text when physical img is hover over*/
                $('#physical').mouseenter(function () {
                    $('#pphysical').show(300);
                    $('#pstart').hide();
                });
                $('#physical').mouseleave(function () {
                    $('#pphysical').hide(350);
                });

                $('#pmental').hide(); /*show text when mental img is hover over*/
                $('#mental').mouseenter(function () {
                    $('#pmental').show(300);
                    $('#pstart').hide();
                });
                $('#mental').mouseleave(function () {
                    $('#pmental').hide(300);
                });

                $('#pcoping').hide(); /*show text when coping img is hover over*/
                $('#coping').mouseenter(function () {
                    $('#pcoping').show(300);
                    $('#pstart').hide();
                });
                $('#coping').mouseleave(function () {
                    $('#pcoping').hide(300);
                });
                $('#container1').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Student Stress Signs at John Jay'
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: [
                            'Hostile',
                            'Panicked',
                            'Irritable',
                            'Anxious',
                            'Focused',
                            'Emotional',
                        ]
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Number of Students'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f} Students</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: [{
                            name: 'Freshmen',
                            data: [9, 10, 23, 16, 4, 10]

                        }, {
                            name: 'Sophmore',
                            data: [4, 12, 10, 23, 7, 4]

                        }, {
                            name: 'Junior',
                            data: [4, 0, 4, 7, 7, 2]

                        }, {
                            name: 'Senior',
                            data: [4, 10, 6, 10, 2, 1]

                        }]
                });
                $('#container2').highcharts({
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Student Stress Signs at John Jay (Cont)'
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: {
                        categories: [
                            'Tired',
                            'Headache',
                            'Insomnia',
                            'Loss of Appetite',
                            'Cravings',
                            'Nausea'
                        ]
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Number of Students'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                '<td style="padding:0"><b>{point.y:.1f} students</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: [{
                            name: 'Freshmen',
                            data: [19, 10, 4, 4, 0, 0]

                        }, {
                            name: 'Sophmore',
                            data: [12, 1, 4, 6, 0, 0]

                        }, {
                            name: 'Junior',
                            data: [7, 10, 0, 0, 2, 0]

                        }, {
                            name: 'Senior',
                            data: [9, 10, 1, 0, 4, 3]
                        }]
                });
                $('#container3').highcharts({
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Ways Students Cope'
				},
				subtitle: {
					text: ''
				},
				xAxis: {
					categories: ['Exercise',
						'Talk with friends',
						'Listen to music',
						'Sleep',
						'Work',
						'Read'],
					title: {
						text: null
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Number of Students',
						align: 'high'
					},
					labels: {
						overflow: 'justify'
					}
				},
				tooltip: {
					valueSuffix: ' Students'
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true
						}
					}
				},
				
				credits: {
					enabled: false
				},
				series: [{
					name: 'Student Body',
					data: [40,41,87,39,8,7]
				}]
			});
                $('#container4').highcharts({
				chart: {
					type: 'bar'
				},
				title: {
					text: 'Ways Students Cope'
				},
				subtitle: {
					text: ''
				},
				xAxis: {
					categories: [ 'Hobby',
						'Drugs',
						'Alcohol',
						'Illegal Drugs',
						'Smoking',
						'Other'],
					title: {
						text: null
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Number of Student',
						align: 'high'
					},
					labels: {
						overflow: 'justify'
					}
				},
				tooltip: {
					valueSuffix: ' Students'
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true
						}
					}
				},
				
				credits: {
					enabled: false
				},
				series: [{
					 name: 'Student Body',
					data: [28,7,17,32,11,13]
				}]
			});
                $(".components").hide();
                $("#physicalResponse").click(function () {
                    $("#prslide").fadeToggle("fast");
                });
                $("#psychologicalResponse").click(function () {
                    $("#psrslide").fadeToggle("fast");
                });
                $("#behavior").click(function () {
                    $("#bslide").fadeToggle("fast");
                });
            });