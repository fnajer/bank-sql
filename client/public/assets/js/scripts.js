var slide;
var kliyent = '<form name="slideChooseForm" method="post" action="/slideChoose_Articles"><div class="form__label-block form__label-block_id"><label>Идентификационный код</label><input type="text" required minlength="10" maxlength="10" name="id_kliyent" min></input></div><div class="form__label-block form__label-block_fio"><label>ФИО</label><input type="text" required minlength="5" maxlength="40" name="fio_kliyent"></input></div><div class="form__label-block"><label>Номер паспорта</label><input type="text" minlength="8" maxlength="8" required name="passport_kliyent"></input></div><div class="form__label-block form__label-block_date_tel"><label>Дата рождения</label><input type="date" required name="data_rozhdeniya_kliyent"></input><label>Телефонный номер</label><input minlength="12" maxlength="12" type="text" required name="telefon_kliyent"></input></div><div class="form__label-block form__label-block_address form__label-block-last"><label>Адрес прописки</label><input minlength="5" maxlength="45" type="text" required name="adres_kliyent"></input></div></form>';
var uslugi = '<form style="display: none" name="slideChooseForm" method="post" action="/slideChoose_Articles"><div class="form__label-block form__label-block_id"><label>Код услуги</label><input type="text" disabled name="id_uslugi"></input></div><div class="form__label-block form__label-block_fio"><label>Название</label><input type="text" minlength="5" maxlength="40" name="name_uslugi"></input></div><div class="form__label-block"><label>Стоимость</label><input type="text" name="ctoimoct_uslugi"></input></div><div class="form__label-block form__label-block-last"><label>Код поставщика</label><input type="text" name="kod_postavshchik"></input></div></form>';
var operatsii = '<form style="display: none" name="slideChooseForm" method="post" action="/slideChoose_Articles"><div class="form__label-block form__label-block_id"><label>Код операции</label><input type="text" disabled name="id_operatsii"></input></div><div class="form__label-block form__label-block_fio"><label>Идентификационный код клиента</label><input type="text" minlength="10" maxlength="10" name="kod_kliyent"></input></div><div class="form__label-block form__label-block_fio"><label>Идентификационный код сотрудника</label><input type="text" minlength="10" maxlength="10" name="kod_sotrudnik"></input></div><div class="form__label-block"><label>Услуги</label><input type="text" name="choose_uslugi"></input></div><div class="form__label-block form__label-block_date_tel form__label-block-last"><label>Дата операции</label><input type="date" name="data_operatsii"></input><label>Сумма операции</label><input type="text" disabled name="summa_operatsii"></input></div></form>';
var otdeleniye = '<form style="display: none" name="slideChooseForm" method="post" action="/slideChoose_Articles"><div class="form__label-block form__label-block_id"><label>Код отделения</label><input type="text" disabled name="id_otdeleniye"></input></div><div class="form__label-block"><label>Номер отделения</label><input type="text" minlength="1" maxlength="3" name="nomer_otdeleniye"></input></div><div class="form__label-block form__label-block_fio"><label>Улица</label><input type="text" minlength="5" maxlength="30" name="ulitsa_otdeleniye"></input></div><div class="form__label-block"><label>Город</label><input type="text" minlength="1" maxlength="15" name="gorod_otdeleniye"></input></div><div class="form__label-block form__label-block-last"><label>Транзитный счет</label><input type="text" minlength="8" maxlength="8" name="tranzitnyy_schet"></input></div></form>';
var sotrudnik = '<form style="display: none" name="slideChooseForm" method="post" action="/slideChoose_Articles"><div class="form__label-block form__label-block_id"><label>Идентификационный код</label><input type="text" maxlength="10" name="id_sotrudnik"></input></div><div class="form__label-block form__label-block_fio"><label>ФИО</label><input type="text" maxlength="40" name="fio_sotrudnik"></input></div><div class="form__label-block form__label-block_date_tel"><label>Номер паспорта</label><input type="text" maxlength="8" name="passport_sotrudnik"></input><label>Телефонный номер</label><input type="text" maxlength="12" name="telefon_sotrudnik"></input></div><div class="form__label-block form__label-block_date_tel" style="width: 710px;"><label style="margin-right: 15px;">Дата рождения</label><input type="date" name="data_rozhdeniya_sotrudnik" style="margin-right: 58px;"></input><label>Дата приема</label><input type="date" name="data_priyema"></input></div><div class="form__label-block form__label-block_date_tel form__label-block-last" style="width: 706px;"><label>Код должности</label><input type="text" name="kod_dolzhnocti" style="margin-right: 43px;"></input><label>Код отделения</label><input type="text" name="kod_otdeleniye"></input></div></form>';
var postavshchik = '<form style="display: none" name="slideChooseForm" method="post" action="/slideChoose_Articles"><div class="form__label-block form__label-block_id"><label>Код поставщика</label><input type="text" disabled name="id_postavshchik"></input></div><div class="form__label-block form__label-block_fio"><label>Название организации</label><input type="text" maxlength="50" name="name_postavshchik"></input></div><div class="form__label-block"><label>Расчетный счет</label><input type="text" maxlength="15" name="raschetnyy_schet"></input></div><div class="form__label-block form__label-block_fio form__label-block-last"><label>Юридический адрес</label><input type="text" name="adres_postavshchik"></input></div></form>';
var allTable = {'kliyent': kliyent, 'uslugi': uslugi, 'operatsii': operatsii, 'otdeleniye': otdeleniye, 'sotrudnik': sotrudnik, 'postavshchik': postavshchik};

var kliyentFieldRus = ['Идентификационный код', 'ФИО', 'Номер паспорта', 'Дата рождения', 'Телефон', 'Адрес'];
var uslugiFieldRus = ['Код услуги', 'Название', 'Стоимость', 'Код поставщика'];
var operatsiiFieldRus = ['Код операции', 'Сумма', 'Дата', 'Код клиента', 'Код сотрудника'];
var otdeleniyeFieldRus = ['Код отделения', 'Номер отделения', 'Улица', 'Город', 'Транзитный счет'];
var sotrudnikFieldRus = ['Идентификационный код', 'ФИО', 'Номер паспорта', 'Телефон', 'Дата приема', 'Дата рождения', 'Код должности', 'Код отделения'];
var postavshchikFieldRus = ['Код поставщика', 'Название организации', 'Расчетный счет', 'Юридический адрес'];
var fieldsTableName = {'kliyent': kliyentFieldRus, 'uslugi': uslugiFieldRus, 'operatsii': operatsiiFieldRus, 'otdeleniye': otdeleniyeFieldRus, 'sotrudnik': sotrudnikFieldRus, 'postavshchik': postavshchikFieldRus};

var currentTable = 'kliyent';
var slide = 0;
var sort = 0;

/*
$(document).ready(function() {
		//$('.slider').hide();
		//$('.id_field').hide();
	//entry-form animation
	$("form[name='entryForm']").submit(function(e) {

		e.preventDefault();
		var entryForm = document.forms["entryForm"];
		var userName = entryForm.elements["userName"].value;
		var userPassword = entryForm.elements["userPassword"].value;
		
		$.ajax({
			type: "POST",
			url: "/entry",
			data: JSON.stringify({userName: userName, userPassword: userPassword}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {

					deniedAccess();
				} else {

					if (userName != 'root') {

						$('#show_menu').remove();
						$('.login__item-del').remove();
						$('.menu__link-del').remove();
					}

					 if (userName == 'kapustin') {

					 	//$('login__link link') купить биткоин
						$('.header').css('backgroundColor', '#000');
						$('.slider__slide').css('backgroundColor', '#000');
						$('.separ_container').css('backgroundColor', '#000');
						$('.slider__layout').css('backgroundColor', 'lightblue');
						$('.subheader').css('backgroundColor', 'lightblue');
						$('.subheader__logo').remove();
						$('.menu__item').hide();
						$('.menu-kap').show();

					 }

					alowedAccess();
					let table = createTable(data);
					showTable(table);
				}
			},
		});

	});



	function alowedAccess() {
		$('.entry-block').addClass('entry-block-change').removeClass('entry-block-hover');
		$('.entry-block').children().fadeOut(200);
		$('.bgvideo').fadeOut(1200);
			$('.entry-block')
			.animate({
				
				width: '100%',
				height: '10px',
				padding: '0px',
				opacity: 1
			}, 1200, 'linear', function() { $('.bgvideo').remove() })
			.animate({
				height: '100%'
			}, 500, 'linear', function() { 
				$('.entry-block').remove();
				$('.blackout').remove(); 
				$('.main_container').fadeIn(1000);
				$('.header').fadeIn(1000);
				$('.subheader').fadeIn(1000);
				$('.slider').fadeIn(1000);
				$('.id_field').fadeIn(1000);
				$('.separ_container').fadeIn(1000);
				showUsers();
			});
	}
	
	function deniedAccess() {

		$('.entry-block').removeClass('entry-block-hover');
		$('.entry-block__desc').css('font-size', '24px').text('Доступ запрещен');
		$("form[name='entryForm']").fadeOut(200);
			$('.entry-block')
			.animate({
				
				width: '110%',
				height: '170px',
				
				opacity: 1
			}, 600, 'swing');
	}
	

	//Transition - переходы меж таблицами
	$('.menu__link').on('click', function() {
					
		sort = 0;

		$('.menu__link').removeClass('menu__link_active');
		$(this).addClass('menu__link_active');

		currentTable = $(this).data('table');
		
		if (currentTable == 'operatsii'){
			$('#print').fadeIn(300);
		} else $('#print').fadeOut(300);

		$(`[name="slideChooseForm"]`).slideUp(200, function() {
			$(`.slider__info`).html(allTable[currentTable]);
			$(`.slider__info form`).slideDown(200, function() {

				
			});
		});
		
		$.ajax({
			type: "POST",
			url: "/table",
			data: JSON.stringify({currentTable: currentTable}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка при /transition');
					
				} else {
					setTimeout(function() {
						if (currentTable == 'operatsii') {
							
							$(`input[name='choose_uslugi']:eq(0)`).on('change', function() {
								changeSum();
							});
							$(`input[name='choose_uslugi']:eq(1)`).on('change', function() {
								changeSum();
							});
							$(`input[name='choose_uslugi']:eq(2)`).on('change', function() {
								changeSum();
							});
						}
					},500);

					let table = createTable(data);
					showTable(table);
				}
				
			}
		});
	});

	//Menu-animation
	$(".menu__link").hover(
			function(){

				 $('.menu__link').not(this).addClass('menu__link_disabled');
					
	}, 
	
	function(){
					
		$('.menu__link').removeClass('menu__link_disabled');
					
	});
	
	//Show and close mobile-menu
	var clicked = false;

	$('#show_menu').click(function() { 
			
			if (clicked == false) {
					
					clicked = true;
					
					$('.sidebar-mobile').show(100);
					
					$('.sidebar-mobile').addClass('sidebar-mobile_visible');
					$('.page').addClass('page_blackout');
					
			}
			
	});
					
	$('#close_menu').click(function() { 
			
		clicked = false;
		
		$('.sidebar-mobile').removeClass('sidebar-mobile_visible');
	
		$('.page').removeClass('page_blackout');
		setTimeout("$('.sidebar-mobile').hide();", 500);
	});
			
	//slider move
	var slideWidth = '100';		
					
	$('.slider__wrapper').width($('.slider__wrapper').children().length * slideWidth + '%');

	$('#next_slide').click(function(){
			
		nextSlide();

	});
	$('#prev_slide').click(function(){
		
		prevSlide();
		
	});
					
	function nextSlide() {
		var currentSlide = parseInt($('.slider__wrapper').data('current'));
		currentSlide++;
		
		let searchId = $(`li[data-currSlide$='${slide}'] input[name^='id']:eq(0)`).val();
		let nameId = $(`li[data-currSlide$='${slide}'] input[name^='id']:eq(0)`).attr('name');		
				
		slide++;
		if (slide == 3) {
			slide = 0;
		}
		searchId++;
		
		$.ajax({
			type: "POST",
			url: "/search/next",
			data: JSON.stringify({searchId: searchId, nameId: nameId}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка');
				} else {
					
					if (!data.length) {
						
						$(`li[data-currSlide='${slide}'] input`).val('');
							
					} else {
					
						for (let key in data[0]) {

							$(`li[data-currSlide$='${slide}'] input[name='${key}']`).val(data[0][key]);
						}
					}
					
				}
			},
		});

		if (currentSlide >= $('.slider__wrapper').children().length) {
				
				$('.slider__wrapper').css('left', -(currentSlide-2)*slideWidth + 'vw');
				
				$('.slider__wrapper').append($('.slider__wrapper').children().first().clone());
				
				$('.slider__wrapper').children().first().remove();
				currentSlide--;
						
		}
		
		$('.slider__wrapper').animate({left: -currentSlide * slideWidth + 'vw'}, 300).data('current', currentSlide);
	}

	function prevSlide() {
		var currentSlide = parseInt($('.slider__wrapper').data('current'));
		currentSlide--;
		
		
		let searchId = $(`li[data-currSlide$='${slide}'] input[name^='id']:eq(0)`).val();
		let nameId = $(`li[data-currSlide$='${slide}'] input[name^='id']:eq(0)`).attr('name');		
			
		slide--;
		if (slide == -1) {
			slide = 2;
		}
		searchId--;
		
		$.ajax({
			type: "POST",
			url: "/search/prev",
			data: JSON.stringify({searchId: searchId, nameId: nameId}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка');
				} else {
					
					if (!data.length) {

						$(`li[data-currSlide='${slide}'] input`).val('');
							
					} else {
						for (let key in data[0]) {
							
							$(`li[data-currSlide$='${slide}'] input[name='${key}']`).val(data[0][key]);
						}
					}
					
				}
			},
		});
		
		
		if (currentSlide < 0) {
				
				$('.slider__wrapper').css('left', -(currentSlide+2)*slideWidth + 'vw');
				$('.slider__wrapper').prepend($('.slider__wrapper').children().last().clone());
				
				$('.slider__wrapper').children().last().remove();
				currentSlide++;
				
		}
		$('.slider__wrapper').animate({left: -currentSlide*slideWidth + 'vw'}, 300).data('current', currentSlide);
	}
	
	function createTable(obj) {
		var table = '<table class="table"><tr>';

		var currentTableFields = fieldsTableName[currentTable];

		if (obj[0].choose_uslugi) {
			delete obj[0].choose_uslugi;
		}

		for (var i = 0; i < currentTableFields.length; i++) {
			table += `<th>${currentTableFields[i]}</th>`;
		}

		table += '</tr><tr>';

		for (let i = 0; i < obj.length; i++) {

			for (let key in obj[i]) {
				table += `<td>${obj[i][key]}</td>`;
			}
			table += '</tr>';
		}
		table += '</table>';
		
		return table;
	}	

	function showTable(table) {
	
		$('#blockForTable').html(table);
	}

	function getTableField() {
		if (currentTable == 'kliyent') {
			return 'kliyentFieldRus';
		}
	}

	$("#btn-insert").click(function(e) {
					 	
		e.preventDefault();
		let ourInputs = $(`li[data-currSlide$='${slide}'] input`);
		
		var jsonForm = {};
		
		if (currentTable == 'kliyent' || currentTable == 'sotrudnik') {
			var i = 0;
		} else var i = 1;

		for (; i < ourInputs.length; i++) {
		
			jsonForm[$(ourInputs[i]).attr('name')] = $(ourInputs[i]).val();
		}


		$.ajax({
			type: "POST",
			url: "/table/insert",
			data: JSON.stringify(jsonForm),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка при добавлении записи');
				} else {
					
					$('.slider__layout').css('box-shadow', 'inset 0px 0px 65px 2px green');
					$('.id_field').css('box-shadow', '0 0 18px 2px darkgreen');
					$('.id_field').css('background-color', 'darkgreen');

					setTimeout(function() {
						
						$('.slider__layout').css('box-shadow', 'inset 0px 0px 0px 0px green');
						$('.id_field').css('background-color', '#987E5B');
						$('.id_field').css('box-shadow', '0 0 18px 2px #987E5B');
					}, 500);

					let table = createTable(data);
					showTable(table);
				}
			},
		});
	});

	$('.btn-drop').on('click', function() {

		let searchId = $(`li[data-currSlide$='${slide}'] input[name^='id']:eq(0)`).val();
		let nameId = $(`li[data-currSlide$='${slide}'] input[name^='id']:eq(0)`).attr('name');
		
			$.ajax({
				type: "POST",
				url: "/table/drop",
				data: JSON.stringify({searchId: searchId, nameId: nameId}),
				dataType: "json",
				contentType: "application/json",
				success: function(data){ 
					if (data == 'Error') {
						
						console.log('Ошибка при удалении записи');
					} else {
						//$('.slider__layout').addClass('slider__layout-insert-effect');
						//$('.id_field').addClass('id_field-insert-effect');
						$('.slider__layout').css('box-shadow', 'inset 0px 0px 65px 2px red');
						$('.id_field').css('box-shadow', '0 0 18px 2px darkred');
						$('.id_field').css('background-color', 'darkred');

						$(`li[data-currSlide='${slide}'] form`).hide(300);
						$(`li[data-currSlide='${slide}'] form`).fadeIn(500);
						setTimeout(function() {
							$(`li[data-currSlide='${slide}'] input`).val('');
						}, 200);

						setTimeout(function() {
							
							$('.slider__layout').css('box-shadow', 'inset 0px 0px 0px 0px red');
							$('.id_field').css('background-color', '#987E5B');
							$('.id_field').css('box-shadow', '0 0 18px 2px #987E5B');
						}, 500);

						let table = createTable(data);
						showTable(table);
					}
				}
			});
	});

	$(".btn-change").click(function(e) {
					 	
		e.preventDefault();
		
		let ourInputs = $(`li[data-currSlide$='${slide}'] input`);
		
		var jsonForm = {};
		
		for (var i = 0; i < ourInputs.length; i++) {
		
			jsonForm[$(ourInputs[i]).attr('name')] = $(ourInputs[i]).val();
		} 
		 
		 
		$.ajax({
			type: "POST",
			url: "/table/change",
			data: JSON.stringify(jsonForm),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка при изменении записи');
				} else {

					$('.slider__layout').css('box-shadow', 'inset 0px 0px 65px 2px orange');
					$('.id_field').css('box-shadow', '0 0 18px 2px darkorange');
					$('.id_field').css('background-color', 'darkorange');

					$(`li[data-currSlide='${slide}'] form`).hide(300);
					$(`li[data-currSlide='${slide}'] form`).fadeIn(500);
					setTimeout(function() {
						$(`li[data-currSlide='${slide}'] input`).val('');
					}, 200);

					setTimeout(function() {
						
						$('.slider__layout').css('box-shadow', 'inset 0px 0px 0px 0px orange');
						$('.id_field').css('background-color', '#987E5B');
						$('.id_field').css('box-shadow', '0 0 18px 2px #987E5B');
					}, 500);

					let table = createTable(data);
					showTable(table);
				}
			},
		});
	});

	$(".header__search-form").submit(function(e) {
					 
		e.preventDefault();

		var searchId = $('.header__input').val();
		let nameId = $(`li[data-currSlide$='${slide}'] input[name^='id']:eq(0)`).attr('name');
		
		var jsonSend = {searchId: searchId, nameId: nameId};

		if (currentTable == 'operatsii') {
			jsonSend.listUslugi = true;
		}

		$.ajax({
			type: "POST",
			url: "/search/current",
			data: JSON.stringify(jsonSend),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка');
				} else {
				
					if (!data.length) {
			
						$(`li[data-currSlide='${slide}'] form`).hide(300);
						$(`li[data-currSlide='${slide}'] form`).fadeIn(500);
						setTimeout(function() {
							$(`li[data-currSlide='${slide}'] input`).val('');
						}, 200);
							
					} else {
						
						$(`li[data-currSlide='${slide}'] form`).hide(300);
						$(`li[data-currSlide='${slide}'] form`).fadeIn(500);
						setTimeout(function() {
							for (let key in data[0]) {
								$(`li[data-currSlide$='${slide}'] input[name='${key}']`).val(data[0][key]);
							}

							let table = createTable(data);
							showTable(table);
						}, 100);
						
					}
				}
			},
		});

	});

	$("#sort").click(function(e) {
			
		var urlSort;
					 	
		if (sort == 0) {
			urlSort = 'sort';
			sort = 1;
		} else if (sort == 1) {
			urlSort = 'sortDesc';
			sort = 0;
		}

		$.ajax({
			type: "POST",
			url: `/table/${urlSort}`,
			data: JSON.stringify({}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка при добавлении записи');
				} else {
					
					$('#sort').addClass('scale');

					setTimeout(function() {
						
						$('#sort').removeClass('scale');
					}, 200);

					let table = createTable(data);
					showTable(table);
				}
			},
		});
	});

	$("[name='queryAdminForm']").submit(function(e) {
					 
		e.preventDefault();

		var queryAdminForm = document.forms["queryAdminForm"];
		var queryAdmin = queryAdminForm.elements["fieldQuery"].value;

		$.ajax({
			type: "POST",
			url: "/users/queryAdmin",
			data: JSON.stringify({queryAdmin: queryAdmin}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка');
				} else {
				
					$('.block-admin-query').addClass('block-admin-query-color');

					setTimeout(function() {
						$('.block-admin-query').removeClass('block-admin-query-color');
					}, 500)

					let table = createTableQuery(data);
					showTable(table);
				}
			},
		});

	});

	function createTableQuery(obj) {
		var table = '<table class="table"><tr>';

		for (let key in obj[0]) {
			table += `<th>${key}</th>`;
		}

		table += '</tr><tr>';

		for (let i = 0; i < obj.length; i++) {

			for (let key in obj[i]) {
				table += `<td>${obj[i][key]}</td>`;
			}
			table += '</tr>';
		}
		table += '</table>';
		
		return table;
	}	

	// function changeSum() {

	// 	let fieldCalcSum = $(`li[data-currSlide$='${slide}'] input[name="choose_uslugi"]`).val();
	// 	console.log(1);
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "/changeSum",
	// 		data: JSON.stringify({fieldCalcSum: fieldCalcSum}),
	// 		dataType: "json",
	// 		contentType: "application/json",
	// 		success: function(data){ 
	// 			if (data == 'Error') {
	// 				console.log('Ошибка');
	// 			} else {
				
	// 				if (!data.length) {
			
	// 					console.log(242);
							
	// 				} else {
	// 					let fieldSum = $(`li[data-currSlide$='${slide}'] input[name="summa_operatsii"]`).val(data[0]);
	// 					console.log(data);
	// 				}
	// 			}
	// 		},
	// 	});
	// }

	$('#print').click(function() {

		let printId = $(`li[data-currSlide$='${slide}'] input[name^='id']:eq(0)`).val();

		$.ajax({
			type: "POST",
			url: "/table/print",
			data: JSON.stringify({printId: printId}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка');
				} else {
				
					var new_win = window.open();
					var content = '<html><head><title>Print page</title><style media="print">@media print {body {font-size: 11px; font-family: "Lucida Console", monospace}</style></head><body>' + data + '</body></html>';
					new_win.document.write(content);
					
				}
			},
		});

		
	});


	$("form[name='addUserForm']").submit(function(e) {
					 
		e.preventDefault();
		var addUserForm = document.forms["addUserForm"];
		var newName = addUserForm.elements["addUsername"].value;
		var newPassword = addUserForm.elements["addPassword"].value;
		
		$.ajax({
			type: "POST",
			url: "/users/add",
			data: JSON.stringify({newName: newName, newPassword: newPassword}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка');
				} else {
				
					let table = createUsers(data);
					$('#forUsers').html(table);
				}
			},
		});
	});
	

	

	
});

/*
function changeSum() {

	let fieldCalcSum = $(`li[data-currSlide$='${slide}'] input[name="choose_uslugi"]`).val();
	alert(fieldCalcSum);
	$.ajax({
		type: "POST",
		url: "/changeSum",
		data: JSON.stringify({fieldCalcSum: fieldCalcSum}),
		dataType: "json",
		contentType: "application/json",
		success: function(data){ 
			if (data == 'Error') {
				console.log('Ошибка');
			} else {
			
				if (!data.length) {
		
					console.log(242);
						
				} else {
					let fieldSum = $(`li[data-currSlide$='${slide}'] input[name="summa_operatsii"]`).val(data[0]);
					console.log(data);
				}
			}
		},
	});
}


	function dropUser(dropName) {
		 
		
		console.log(dropName);
		
		$.ajax({
			type: "POST",
			url: "/users/drop",
			data: JSON.stringify({dropName: dropName}),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка');
				} else {
					
					let table = createUsers(data);
					$('#forUsers').html(table);
				}
			},
		});
	};

	function showUsers() {
		$.ajax({
			type: "POST",
			url: "/users",
			data: JSON.stringify(),
			dataType: "json",
			contentType: "application/json",
			success: function(data){ 
				if (data == 'Error') {
					console.log('Ошибка');
				} else {
				
					let table = createUsers(data);
					$('#forUsers').html(table);
				}
			},
		});
	}

	function createUsers(obj) {

		var string = '';

		for (let i = 0; i < obj.length; i++) {

			string += `<li class="menu-mobile__item"><a class="menu-mobile__link">${obj[i].name_users}<span onclick="dropUser('${obj[i].name_users}')" class="menu-mobile__del-user"><img class="img__del-user" src="images/close.svg"></span></a></li>`;
		}
		
		return string;
	}
*/
