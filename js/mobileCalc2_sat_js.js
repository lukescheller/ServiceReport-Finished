//Begin Saturday/////////////////////////////////////////////
let tips_group_sat   = []; //needs to be completely out of the localstorage loop
let tip_sum_sat;
let tips_group_sat2 = [];
let tip_sum_sat2;
let tips_group_sat3 = [];
let tip_sum_sat3;
let tips_group_sat4 = [];
let tip_sum_sat4;
let tips_group_sat5 = [];
let tip_sum_sat5;

for(var key in localStorage) {

if(key.includes('Sat')){

		// console.log(key);
		let json = ls.getItem(key);
		// console.log(json);
		let json2 = JSON.parse(json);
		console.log(json2);

		function averageFinder(int,group,result){
			//push numbers to group
			group.push(int);

			//find sum of group
			function add(a,b){
				return a + b;
			}
			result = group.reduce(add,0);

			//find avr of group
			result = result / group.length;
			result = Number(result.toFixed(2));
			console.log(result);

			return result;
		}

		//innerHTML these functions

		//average tips per shift
		let atps = document.getElementById('sa_avr_tps');
		atps.innerHTML 	= averageFinder(json2.tip_amount_num,tips_group_sat,tip_sum_sat);

		//average shift length
		let asl = document.getElementById('sa_avr_shift');
		asl.innerHTML 	= averageFinder(json2.shift_length,tips_group_sat2,tip_sum_sat2);

		//average tips per hour
		let atph = document.getElementById('sa_avr_tph');
		atph.innerHTML 	= averageFinder(json2.tips_per_hour,tips_group_sat3,tip_sum_sat3);

		//average tips with hourly
		let ahw = document.getElementById('sa_avr_hourly');
		ahw.innerHTML 	= averageFinder(json2.tips_hourly_shift,tips_group_sat4,tip_sum_sat4);

		function sumFinder(int,group,result){
			//push numbers to group
			group.push(int);
			//find sum of group
			function add(a,b){
				return a + b;
			}
			result = group.reduce(add,0);
			result = Number(result.toFixed(2));
			console.log(result);

			return result;
		}

		//innerHTML this function

		//sum of tips
		let ts 			= document.getElementById('sa_tip_sum');
		ts.innerHTML 	= sumFinder(json2.tip_amount_num,tips_group_sat5,tip_sum_sat5);

		//get entries box in html
		let entry_main_container 	= document.getElementById('sat_indv_entry_div');

		//create div container, this div will append every other div
		let entry_div 				= document.createElement('div');
		entry_div.setAttribute('id','scrollup');
		entry_div.style.border 		= '1px solid white';
		entry_div.style.margin 		= '5px';
		entry_div.style.padding 	= '5px';

		//create div entry: date
		let entry_date 				= document.createElement('div');
		entry_date.style.border 	= '1px solid white';
		entry_date.style.textAlign  = 'center';
		entry_date.style.margin 	= '5px';
		entry_date.style.padding	= '5px';
		entry_date.style.fontSize	= '12px';
		let entry_date_txt 			= document.createTextNode('Date:' + ' ' + json2.date);
		//add text to div
		entry_date.appendChild(entry_date_txt);

		//create div entry: tips
		let entry_tips				= document.createElement('div');
		entry_tips.style.borderBottom 	= '1px solid black';
		entry_tips.style.margin 	= '5px';
		entry_tips.style.padding	= '5px';
		entry_tips.style.fontSize	= '12px';
		let entry_tips_txt 			= document.createTextNode('Tips:' + ' ' + '$'+json2.tip_amount_string);
		//add text to div
		entry_tips.appendChild(entry_tips_txt);

		//create div entry: clock in
		let entry_clockIn				= document.createElement('div');
		entry_clockIn.style.borderBottom 		= '1px solid black';
		entry_clockIn.style.margin 		= '5px';
		entry_clockIn.style.padding		= '5px';
		entry_clockIn.style.fontSize	= '12px';
		let entry_clockIn_txt 			= document.createTextNode('Clock-In:' + ' ' + json2.clockIn_as_whole);
		//add text to div
		entry_clockIn.appendChild(entry_clockIn_txt);

		//create div entry: clock out
		let entry_clockOut				= document.createElement('div');
		entry_clockOut.style.borderBottom 	= '1px solid black';
		entry_clockOut.style.margin 	= '5px';
		entry_clockOut.style.padding	= '5px';
		entry_clockOut.style.fontSize	= '12px';
		let entry_clockOut_txt 			= document.createTextNode('Clock-Out:' + ' ' + json2.clockOut_as_whole);
		//add text to div
		entry_clockOut.appendChild(entry_clockOut_txt);

		//create div entry: Shift Length
		let entry_shiftLength				= document.createElement('div');
		entry_shiftLength.style.borderBottom 		= '1px solid black';
		entry_shiftLength.style.margin 		= '5px';
		entry_shiftLength.style.padding		= '5px';
		entry_shiftLength.style.fontSize	= '12px';
		let entry_shiftLength_txt 			= document.createTextNode('Shift Length:' + ' ' + json2.shift_length.toFixed(2) + ' ' + 'Hours');
		//add text to div
		entry_shiftLength.appendChild(entry_shiftLength_txt);

		//create div entry: Tips Per Hour
		let entry_tipsPhour					= document.createElement('div');
		entry_tipsPhour.style.borderBottom 		= '1px solid black';
		entry_tipsPhour.style.margin 		= '5px';
		entry_tipsPhour.style.padding		= '5px';
		entry_tipsPhour.style.fontSize		= '12px';
		let entry_tipsPhour_txt 			= document.createTextNode('Tips per Hour:' + ' ' + '$'+json2.tips_per_hour.toFixed(2));
		//add text to div
		entry_tipsPhour.appendChild(entry_tipsPhour_txt);

		//create div entry: Hourly with Tips
		let entry_hourlyWtips				= document.createElement('div');
		entry_hourlyWtips.style.borderBottom 		= '1px solid black';
		entry_hourlyWtips.style.margin 		= '5px';
		entry_hourlyWtips.style.padding		= '5px';
		entry_hourlyWtips.style.fontSize	= '12px';
		let entry_hourlyWtips_txt 			= document.createTextNode('Hourly Wage + Tips:' + ' ' + '$'+json2.tips_hourly_shift.toFixed(2));
		//add text to div
		entry_hourlyWtips.appendChild(entry_hourlyWtips_txt);

		let entry_comment 					= document.createElement('div');
		entry_comment.style.borderBottom 			= '1px solid black';
		entry_comment.style.margin  		= '5px';
		entry_comment.style.padding 		= '5px';
		entry_comment.style.fontSize 		= '12px';
		entry_comment.style.overflowY		= 'scroll';
		let entry_comment_txt 				= document.createTextNode('Comment: ' + ' ' + json2.comment);
		entry_comment.appendChild(entry_comment_txt);

		//create delete button
		let entry_delete 			= document.createElement('button');
		entry_delete.innerHTML 		= 'Remove';	
		entry_delete.style.border 	= '1px solid black';
		entry_delete.style.borderRadius = '5px';
		entry_delete.style.margin	= '5px';
		entry_delete.style.padding  = '5px';
		entry_delete.style.width 	= '25%';
		entry_delete.addEventListener('click',function(){
			let remove = confirm('Would you like to remove this entry?');
			if(remove){
				ls.removeItem(json2.date);
				location.reload();
			}
		});

		let entry_edit 				= document.createElement('button');
		entry_edit.setAttribute('id','edit_toggle');
		entry_edit.innerHTML 		= 'Edit';	
		entry_edit.style.border 	= '1px solid black';
		entry_edit.style.borderRadius = '5px';
		entry_edit.style.margin		= '5px';
		entry_edit.style.padding  	= '5px';
		entry_edit.style.width 		= '25%';
		entry_edit.addEventListener('click',function(){

			//Figure Out Scroll Up Situation

		});

		//create div for delete and edit
		let entry_box					= document.createElement('div');
		entry_box.style.border 			= '1px solid white';
		entry_box.style.margin			= '5px';
		entry_box.style.padding			= '5px';
		entry_box.style.display 		= 'flex';
		entry_box.style.justifyContent 	= 'space-around';
		entry_box.appendChild(entry_delete);
		entry_box.appendChild(entry_edit);

		entry_edit.addEventListener('click',function(){
			entry_edit.disabled = true;
			//create form div for edit
			let edit_form_div = document.createElement('form');
			edit_form_div.setAttribute('action','mobileCalc2_data.html');
			edit_form_div.style.border 	= '1px solid black';
			edit_form_div.style.borderRadius = '5px';
			edit_form_div.style.padding = '5px';
			edit_form_div.style.margin 	= '5px';

			//create div for first input
			let edit_input_div = document.createElement('div');
			edit_input_div.style.borderBottom 		= '1px solid black';
			edit_input_div.style.margin 		= '5px';
			edit_input_div.style.padding 		= '5px';
			edit_input_div.style.display 		= 'flex';
			edit_input_div.style.justifyContent = 'space-around';

			//create div for title
			let edit_input_title_div = document.createElement('div');
			// edit_input_title_div.style.border = '1px solid black';

			//create text for title div
			let edit_input_title_txt = document.createTextNode('Tips: ');
			edit_input_title_div.appendChild(edit_input_title_txt);

			//create input for title
			let edit_input_element = document.createElement('input');

			//create div for clock in
			let edit_clockin_div 					= document.createElement('div');
			edit_clockin_div.style.borderBottom 			= '1px solid black';
			edit_clockin_div.style.margin 			= '5px';
			edit_clockin_div.style.padding 			= '5px';
			edit_clockin_div.style.display 			= 'flex';
			edit_clockin_div.style.justifyContent 	= 'space-around';

			//create clock in title
			let edit_clockin_title = document.createTextNode('Clock-In');
			edit_clockin_div.appendChild(edit_clockin_title);

			//create clock in hour
			let edit_clockin_hour_select = document.createElement('select');

			for(let x=1; x<10; x++){
				let edit_clockin_hour_option_01 = document.createElement('option');
				let edit_clockin_hour_01 		= document.createTextNode('0' + x);
				edit_clockin_hour_option_01.appendChild(edit_clockin_hour_01);
				edit_clockin_hour_select.appendChild(edit_clockin_hour_option_01);
			}

			for(let y=10; y<13; y++){
				let edit_clockin_hour_option_02 = document.createElement('option');
				let edit_clockin_hour_02 		= document.createTextNode(y);
				edit_clockin_hour_option_02.appendChild(edit_clockin_hour_02);
				edit_clockin_hour_select.appendChild(edit_clockin_hour_option_02);
			}	

			//create colon for clockin
			let edit_clockin_colon = document.createTextNode(':');

			//create min for clockin
			let edit_clockin_min_select = document.createElement('select');
			for(let m=0; m<10; m++){
				let edit_clockin_min_option_01 	= document.createElement('option');
				let edit_clockin_min_01 		= document.createTextNode('0' + m);
				edit_clockin_min_option_01.appendChild(edit_clockin_min_01);
				edit_clockin_min_select.appendChild(edit_clockin_min_option_01);
			}

			for(let i=10; i<60; i++){
				let edit_clockin_min_option_02 	= document.createElement('option');
				let edit_clockin_min_02 		= document.createTextNode(i);
				edit_clockin_min_option_02.appendChild(edit_clockin_min_02);
				edit_clockin_min_select.appendChild(edit_clockin_min_option_02);
			}

			//create clock in am/pm
			let edit_clockin_ampm_select 		= document.createElement('select');
			let edit_clockin_ampm_option_am 	= document.createElement('option');
			let edit_clockin_ampm_am 			= document.createTextNode('Am');
			edit_clockin_ampm_option_am.appendChild(edit_clockin_ampm_am);
			let edit_clockin_ampm_option_pm 	= document.createElement('option');
			let edit_clockin_ampm_pm 			= document.createTextNode('Pm');
			edit_clockin_ampm_option_pm.appendChild(edit_clockin_ampm_pm);
			edit_clockin_ampm_select.appendChild(edit_clockin_ampm_option_am);
			edit_clockin_ampm_select.appendChild(edit_clockin_ampm_option_pm);

			//create div for overnight
			let edit_overnight_div = document.createElement('div');
			edit_overnight_div.style.borderBottom 	= '1px solid black';
			edit_overnight_div.style.margin 	= '5px';
			edit_overnight_div.style.padding 	= '5px';
			edit_overnight_div.style.display 	= 'flex';
			edit_overnight_div.style.flexWrap 	= 'wrap';

			//create div for overnight title
			let edit_overnight_title_div = document.createElement('div');
			edit_overnight_title_div.style.border 		= '1px solid white';
			edit_overnight_title_div.style.textAlign 	= 'center';
			edit_overnight_title_div.style.fontSize 	= '15.5px';
			edit_overnight_title_div.style.width 		= '100%';

			//create title for overnight div
			let edit_overnight_title = document.createTextNode('Did your shift span into the next day?');
			edit_overnight_title_div.appendChild(edit_overnight_title);
			edit_overnight_div.appendChild(edit_overnight_title_div);

			//create div for radio yes
			let edit_overnight_div_yes = document.createElement('div');
			edit_overnight_div_yes.style.border 	= '1px solid white';
			edit_overnight_div_yes.style.margin 	= '5px';
			edit_overnight_div_yes.style.padding 	= '5px';
			edit_overnight_div_yes.style.width 		= '41.5%';
			edit_overnight_div_yes.style.textAlign 	= 'center';
			edit_overnight_div.appendChild(edit_overnight_div_yes);

			//create edit radio button yes title
			let edit_overnight_title_yes = document.createTextNode('Yes');
			edit_overnight_div_yes.appendChild(edit_overnight_title_yes);

			//create edit radio button yes
			let edit_overnight_radio_yes = document.createElement('input');
			edit_overnight_radio_yes.setAttribute('type','radio');
			edit_overnight_radio_yes.setAttribute('name','edit_radio');
			edit_overnight_div_yes.appendChild(edit_overnight_radio_yes);

			//create div for radio no
			let edit_overnight_div_no 				= document.createElement('div');
			edit_overnight_div_no.style.border 		= '1px solid white';
			edit_overnight_div_no.style.margin 		= '5px';
			edit_overnight_div_no.style.padding 	= '5px';
			edit_overnight_div_no.style.width 		= '41.5%';
			edit_overnight_div_no.style.textAlign 	= 'center';
			edit_overnight_div.appendChild(edit_overnight_div_no);

			//create edit radio button no title
			let edit_overnight_title_no = document.createTextNode('No');
			edit_overnight_div_no.appendChild(edit_overnight_title_no);

			//create edit radio button no
			let edit_overnight_radio_no = document.createElement('input');
			edit_overnight_radio_no.setAttribute('type','radio');
			edit_overnight_radio_no.setAttribute('name','edit_radio');
			edit_overnight_div_no.appendChild(edit_overnight_radio_no);

			//create div for clock out
			let edit_clockout_div = document.createElement('div');
			edit_clockout_div.style.borderBottom 			= '1px solid black';
			edit_clockout_div.style.margin 			= '5px';
			edit_clockout_div.style.padding 		= '5px';
			edit_clockout_div.style.display 		= 'flex';
			edit_clockout_div.style.justifyContent 	= 'space-around';

			//create title for clock out
			let edit_clockout_title = document.createTextNode('Clock-Out');
			edit_clockout_div.appendChild(edit_clockout_title);

			//create hour for clock out
			let edit_clockout_hour_select = document.createElement('select');

			//create clock out hour
			for(let w=1; w<10; w++){
				let edit_clockout_hour_option_01 	= document.createElement('option');
				let edit_clockout_hour_01 			= document.createTextNode('0' + w);
				edit_clockout_hour_option_01.appendChild(edit_clockout_hour_01);
				edit_clockout_hour_select.appendChild(edit_clockout_hour_option_01);
			}

			for(let y=10; y<13; y++){
				let edit_clockout_hour_option_02 	= document.createElement('option');
				let edit_clockout_hour_02 			= document.createTextNode(y);
				edit_clockout_hour_option_02.appendChild(edit_clockout_hour_02);
				edit_clockout_hour_select.appendChild(edit_clockout_hour_option_02);
			}	

			//create colon for clock out
			let edit_clockout_colon = document.createTextNode(':');

			//create clock out min
			let edit_clockout_min_select = document.createElement('select');
			for(let m=0; m<10; m++){
				let edit_clockout_min_option_01 = document.createElement('option');
				let edit_clockout_min_01 = document.createTextNode('0' + m);
				edit_clockout_min_option_01.appendChild(edit_clockout_min_01);
				edit_clockout_min_select.appendChild(edit_clockout_min_option_01);
			}

			for(let i=10; i<60; i++){
				let edit_clockout_min_option_02 = document.createElement('option');
				let edit_clockout_min_02 = document.createTextNode(i);
				edit_clockout_min_option_02.appendChild(edit_clockout_min_02);
				edit_clockout_min_select.appendChild(edit_clockout_min_option_02);
			}

			//create clock out am/pm
			let edit_clockout_ampm_select = document.createElement('select');
			let edit_clockout_ampm_option_am = document.createElement('option');
			let edit_clockout_ampm_am = document.createTextNode('Am');
			edit_clockout_ampm_option_am.appendChild(edit_clockout_ampm_am);
			let edit_clockout_ampm_option_pm = document.createElement('option');
			let edit_clockout_ampm_pm = document.createTextNode('Pm');
			edit_clockout_ampm_option_pm.appendChild(edit_clockout_ampm_pm);
			edit_clockout_ampm_select.appendChild(edit_clockout_ampm_option_am);
			edit_clockout_ampm_select.appendChild(edit_clockout_ampm_option_pm);

			//create hourly rate div 
			let edit_hourly_div = document.createElement('div');
			edit_hourly_div.style.borderBottom = '1px solid black';
			edit_hourly_div.style.margin = '5px';
			edit_hourly_div.style.padding = '5px';
			edit_hourly_div.style.display = 'flex';
			edit_hourly_div.style.justifyContent = 'space-around';

			//create title for hourly rate div
			let edit_hourly_title = document.createTextNode('Hourly-Wage:');
			edit_hourly_div.appendChild(edit_hourly_title);

			//create input for hourly rate div
			let edit_hourly_input = document.createElement('input');
			edit_hourly_input.setAttribute('type','text');
			edit_hourly_div.appendChild(edit_hourly_input);

			//create div for text area
			let edit_comment_div = document.createElement('div');
			edit_comment_div.style.borderBottom = '1px solid black';
			edit_comment_div.style.margin = '5px';
			edit_comment_div.style.padding = '5px';
			edit_comment_div.style.overflowY = 'scroll';
			edit_comment_div.style.display = 'flex';
			edit_comment_div.style.justifyContent = 'space-around';

			//create title for text area
			let edit_comment_title = document.createTextNode('Comment:');
			edit_comment_div.appendChild(edit_comment_title);

			//create textarea for text div
			let edit_comment_textarea = document.createElement('textarea');
			edit_comment_textarea.style.width = '75%';
			edit_comment_textarea.style.resize = 'none';
			edit_comment_textarea.style.overflowY = 'scroll';
			edit_comment_div.appendChild(edit_comment_textarea);

			//create div for cancel submit buttons
			let edit_buttons_div = document.createElement('div');
			edit_buttons_div.style.border = '1px solid white';
			edit_buttons_div.style.margin = '5px';
			edit_buttons_div.style.padding = '5px';
			edit_buttons_div.style.display = 'flex';
			edit_buttons_div.style.justifyContent = 'space-around';

			//create cancel button for submit buttons div
			let edit_buttons_cancel = document.createElement('button');
			edit_buttons_cancel.innerHTML = 'cancel';
			edit_buttons_cancel.addEventListener('click',function(event){
				entry_edit.disabled = false;
				edit_form_div.style.display = 'none';
				event.preventDefault();

				//Figure out scroll up sitation

			});

			//create submit button for submit buttons div
			let edit_buttons_submit = document.createElement('input');
			edit_buttons_submit.innerHTML = 'submit';
			edit_buttons_submit.setAttribute('type','submit');
			edit_buttons_submit.addEventListener('click',function(event){
				
				let edit_obj = {};

				let obj_tip_str = edit_input_element.value;
				console.log('tips str',obj_tip_str);
				let obj_tip_num = Number(obj_tip_str);
				console.log('tips num()',obj_tip_num);

				let obj_date = json2.date;
				console.log('date',obj_date);

				let obj_comment = edit_comment_textarea.value;
				console.log('comment',obj_comment);

				let obj_clockin_hour_str = edit_clockin_hour_select.value;
				console.log('clock in hour str',obj_clockin_hour_str);
				let obj_clockin_hour_num = Number(obj_clockin_hour_str);
				console.log('clock in hour num()',obj_clockin_hour_num);

				let obj_clockin_ampm = edit_clockin_ampm_select.value;
				console.log('clock in ampm',obj_clockin_ampm);

				if(edit_clockin_ampm_select.value === 'Am' && edit_clockin_hour_select.value === '12'){
					obj_clockin_hour_str = '00';
					console.log('clockin hourly str am and 12 test str',obj_clockin_hour_str);
					obj_clockin_hour_num = 0;
					console.log('clockin hourly num() am and 12 test num',obj_clockin_hour_num);
				}

				if (edit_clockin_ampm_select.value === 'Pm' && edit_clockin_hour_select.value !== '12'){
					obj_clockin_hour_num = obj_clockin_hour_num + 12;
					console.log('clockin hourly str pm and not 12 test num',obj_clockin_hour_num);
					obj_hourly_str = String(obj_clockin_hour_num);
					console.log('clockin hourly str pm and not 12 test str',obj_clockin_hour_str);
				}

				let obj_clockin_min_str = edit_clockin_min_select.value;
				console.log('clock in min str',obj_clockin_min_str);
				let obj_clockin_min_num = Number(obj_clockin_min_str);
				console.log('clock in min num()',obj_clockin_min_num);

				let obj_clockin_whole = obj_clockin_hour_str + ':' + obj_clockin_min_str + ' ' + obj_clockin_ampm;
				console.log('clockin whole',obj_clockin_whole);

				let obj_overnight;
				if(edit_overnight_radio_yes.checked){
					obj_overnight = 'Yes';
					console.log('overnight yes',obj_overnight);
				}

				if(edit_overnight_radio_no.checked){
					obj_overnight = 'No';
					console.log('overnight no',obj_overnight);
				}

				let obj_clockout_hour_str = edit_clockout_hour_select.value;
				console.log('clock out str',obj_clockout_hour_str);
				let obj_clockout_hour_num = Number(obj_clockout_hour_str);
				console.log('clock out num()',obj_clockout_hour_num);

				let obj_clockout_ampm = edit_clockout_ampm_select.value;
				console.log('clock out ampm',obj_clockout_ampm);

				if(edit_clockout_ampm_select.value === 'Am' && edit_clockout_hour_select.value === '12'){
					obj_clockout_hour_str = '00';
					console.log('clock out hourly str am and 12 test str',obj_clockout_hour_str);
					obj_clockout_hour_num = 0;
					console.log('clock outhourly num() am and 12 test num',obj_clockout_hour_num);
				}

				if (edit_clockout_ampm_select.value === 'Pm' && edit_clockout_hour_select.value !== '12'){
					obj_clockout_hour_num = obj_clockout_hour_num + 12;
					console.log('clock out hourly str pm and not 12 test num',obj_clockout_hour_num);
					obj_hourly_str = String(obj_clockout_hour_num);
					console.log('clock out hourly str pm and not 12 test str',obj_clockout_hour_str);
				}

				let obj_clockout_min_str = edit_clockout_min_select.value;
				console.log('clock out min str',obj_clockout_min_str);
				let obj_clockout_min_num = Number(obj_clockout_min_str);
				console.log('clock out min num',obj_clockout_min_num);

				let obj_clockout_whole = obj_clockout_hour_str + ':' + obj_clockout_min_str + ' ' + obj_clockout_ampm;
				console.log('clockout whole',obj_clockout_whole);

				//Figure out clock in and clock out as decimal
				let obj_clockin_min_dec;
				let obj_clockout_min_dec;
				function MinDec(ci_min,co_min){
					let divider = 100/60;
					let hundred = 100;
					let clockin_min_start = divider * ci_min;
					let clockin_min_end   = clockin_min_start / hundred;
					obj_clockin_min_dec = clockin_min_end;
					console.log('clockin min dec',obj_clockin_min_dec);

					let clockout_min_start = divider * co_min;
					let clockout_min_end = clockout_min_start / hundred;
					obj_clockout_min_dec = clockout_min_end;
					console.log('clockout min dec',obj_clockout_min_dec);
				}

				MinDec(obj_clockin_min_num,obj_clockout_min_num);

				let obj_clockin_time_dec = obj_clockin_hour_num + obj_clockin_min_dec;
				console.log('clockin as dec',obj_clockin_time_dec);

				let obj_clockout_time_dec = obj_clockout_hour_num + obj_clockout_min_dec;
				console.log('clockout as dec',obj_clockout_time_dec);

				let obj_hourly_wage_str = edit_hourly_input.value;
				let obj_hourly_wage_num = Number(obj_hourly_wage_str);

				let special = '¡™£¢∞§¶•ªº–≠œ∑´®†¥¨ˆøπ“‘«åß∂ƒ©˙∆˚¬…æΩ≈ç√∫˜µ≤≥÷~`!#$%\^&*+=\-\[\]\\\';,/{}|()\\":<>\?]'
				let specialx = special.split('');
				let form = edit_form_div.elements;
				let form_dollar_special = true;
				let form_period_start   = true;
				let form_double_start   = true;
				let form_dollar_letters = true;
				let form_dollar_blank 	= true;
				let form_checked 		= true;
				let form_hourly_special = true;
				let form_hourly_start   = true;
				let form_hourly_dbl     = true;
				let form_hourly_letters = true;
				let form_hourly_blank 	= true;
				let form_hourly_neg     = true;

				for(let i=0; i<form[0].value.length; i++){
					for(let t=0; t<specialx.length; t++){
						if(form[0].value[i] == specialx[t]){
							event.preventDefault();
							// alert('works special');
							form_dollar_special = false;
						}
					}
				}

				if(form[0].value.startsWith('.')){
					event.preventDefault();
					// alert('works period');
					form_period_start = false; 
				}

				let input_split = form[0].value.split('');
				let input_split_ar = [];
				for(let p=0; p<input_split.length; p++){
					if(input_split[p] == '.'){
						input_split_ar.push(input_split[p]);
						if(input_split_ar.length > 1){
							// alert('works tips multiple period');
							event.preventDefault();
							form_double_start = false;
						}
					}
				}

				if(form[0].value.match(/[a-z]/i)){
					event.preventDefault();
					// alert('works letters');
					form_dollar_letters = false;
				}

				if(form[0].value == ''){
					event.preventDefault();
					// alert('works tips');
					form_dollar_blank = false;
				}

				if(!form[4].checked && !form[5].checked){
					event.preventDefault();
					// alert('works radio')
					form_checked = false;
				}

				for(let i=0; i<form[9].value.length; i++){
					for(let t=0; t<specialx.length; t++){
						if(form[9].value[i] == specialx[t]){
							event.preventDefault();
							// alert('works special 2');
							form_hourly_special = false;
						}
					}
				}

				if(form[9].value.match(/[a-z]/i)){
					event.preventDefault();
					// alert('works letters 2');
					form_hourly_letters = false;
				}

				let input_splithourly = form[9].value.split('');
				// alert(input_splithourly);
				let input_splithourly_ar = [];
				for(let p=0; p<input_splithourly.length; p++){
					if(input_splithourly[p] == '.'){
						input_splithourly_ar.push(input_splithourly[p]);
						if(input_splithourly_ar.length > 1){
							// alert('works hourly multiple period 2');
							event.preventDefault();
							form_hourly_dbl = false;
						}
					}
				}

				if(form[9].value.startsWith('.')){
					event.preventDefault();
					// alert('works period 2');
					form_hourly_start = false;
				}

				if(form[9].value == ''){
					event.preventDefault();
					// alert('works hourly');
					form_hourly_blank = false;
				}

				edit_obj.date = obj_date;
				edit_obj.tip_amount_num = obj_tip_num;
				edit_obj.tip_amount_string = obj_tip_str;

				edit_obj.clockIn_hour_string = obj_clockin_hour_str;
				edit_obj.clockIn_hour_number = obj_clockin_hour_num;
				edit_obj.clockIn_min_string = obj_clockin_min_str;
				edit_obj.clockIn_min_number = obj_clockin_min_num;
				edit_obj.clockIn_ampm = obj_clockin_ampm;
				edit_obj.clockIn_as_whole = obj_clockin_whole;

				edit_obj.overnight = obj_overnight;

				edit_obj.clockOut_hour_string = obj_clockout_hour_str;
				edit_obj.clockOut_hour_number = obj_clockout_hour_num;
				edit_obj.clockOut_min_string = obj_clockout_min_str;
				edit_obj.clockOut_min_num = obj_clockout_min_num;
				edit_obj.clockOut_ampm = obj_clockout_ampm;
				edit_obj.clockOut_as_whole = obj_clockout_whole;

				if(obj_overnight === 'No' && obj_clockin_ampm === 'Am' && obj_clockout_ampm === 'Am'){
					edit_obj.shift_length = obj_clockout_time_dec - obj_clockin_time_dec;
				}

				if(obj_overnight === 'No' && obj_clockin_ampm === 'Am' && obj_clockout_ampm === 'Pm'){
					edit_obj.shift_length = obj_clockout_time_dec - obj_clockin_time_dec;
				}

				if(obj_overnight === 'No' && obj_clockin_ampm === 'Pm' && obj_clockout_ampm === 'Pm'){
					edit_obj.shift_length = obj_clockout_time_dec - obj_clockin_time_dec;
				}

				if(obj_overnight === 'No' && obj_clockin_ampm === 'Pm' && obj_clockout_ampm === 'Am'){
					edit_obj.shift_length = obj_clockout_time_dec - obj_clockin_time_dec;
				}

				if(obj_overnight === 'Yes' && obj_clockin_ampm === 'Am' && obj_clockout_ampm === 'Am'){
					edit_obj.shift_length = (24-obj_clockin_time_dec)+obj_clockout_time_dec;
				}

				if(obj_overnight === 'Yes' && obj_clockin_ampm === 'Am' && obj_clockout_ampm === 'Pm'){
					edit_obj.shift_length = (24-obj_clockin_time_dec)+obj_clockout_time_dec;
				}

				if(obj_overnight === 'Yes' && obj_clockin_ampm === 'Pm' && obj_clockout_ampm === 'Am'){
					edit_obj.shift_length = (24-obj_clockin_time_dec)+obj_clockout_time_dec;
				}

				if(obj_overnight === 'Yes' && obj_clockin_ampm === 'Pm' && obj_clockout_ampm === 'Pm'){
					edit_obj.shift_length = (24-obj_clockin_time_dec)+obj_clockout_time_dec;
				}

				edit_obj.hourly_wage_dollar_val = obj_hourly_wage_str;
				edit_obj.hourly_wage_dollar_num = obj_hourly_wage_num;

				if(edit_obj.shift_length > 1){
					edit_obj.tips_per_hour = edit_obj.tip_amount_num / edit_obj.shift_length;
					edit_obj.hourly_x_shift = edit_obj.hourly_wage_dollar_num * edit_obj.shift_length;
					let calculation = (edit_obj.hourly_x_shift + edit_obj.tip_amount_num) / edit_obj.shift_length;
					edit_obj.tips_hourly_shift = calculation;
					edit_obj.over_under = 'No';
				}

				else {
					edit_obj.tips_per_hour = edit_obj.tip_amount_num;
					edit_obj.hourly_x_shift = edit_obj.hourly_wage_dollar_num * edit_obj.shift_length;
					let calculation2 = (edit_obj.shift_length * edit_obj.hourly_wage_dollar_num) + edit_obj.tip_amount_num;
					edit_obj.tips_hourly_shift = calculation2;
					edit_obj.over_under = 'Yes';
				}

				function shiftNeg(shift){
					let to_str = shift.toString();
					let sl_node = to_str;
					let sl_ar = sl_node.split('');
					for(let a=0;a<sl_node.length;a++){
						if(sl_ar[a] == '-'){
							form_hourly_neg = false;
							return form_hourly_neg;
						}
						else{
							form_hourly_neg = true;
							return form_hourly_neg;
						}
					}
				}

				shiftNeg(edit_obj.shift_length);

				edit_obj.comment = obj_comment;
				if(edit_obj.comment == ''){
					edit_obj.comment = 'n/a';
				}

				if(form_dollar_blank === false || form_dollar_letters === false || form_double_start === false || form_dollar_special === false || form_period_start === false || form_checked === false || form_hourly_start === false || form_hourly_blank === false || form_hourly_letters === false || form_hourly_dbl === false || form_hourly_special === false || form_hourly_neg === false){
					event.preventDefault();
					alert('Error: Double check your form input for special characters, multiple decimal points,extra letters or negative shift durations.');
				}

				else {
					let obj_str = JSON.stringify(edit_obj);
					localStorage.setItem(edit_obj.date,obj_str);
				}
			});	

			edit_buttons_div.appendChild(edit_buttons_cancel);
			edit_buttons_div.appendChild(edit_buttons_submit);
			
			edit_clockout_div.appendChild(edit_clockout_hour_select);
			edit_clockout_div.appendChild(edit_clockout_colon);
			edit_clockout_div.appendChild(edit_clockout_min_select);
			edit_clockout_div.appendChild(edit_clockout_ampm_select);

			edit_clockin_div.appendChild(edit_clockin_hour_select);
			edit_clockin_div.appendChild(edit_clockin_colon);
			edit_clockin_div.appendChild(edit_clockin_min_select);
			edit_clockin_div.appendChild(edit_clockin_ampm_select);

			edit_input_div.appendChild(edit_input_title_div);
			edit_input_div.appendChild(edit_input_element)
			
			edit_form_div.appendChild(edit_input_div)
			edit_form_div.appendChild(edit_clockin_div);
			edit_form_div.appendChild(edit_overnight_div);
			edit_form_div.appendChild(edit_clockout_div);
			edit_form_div.appendChild(edit_hourly_div);
			edit_form_div.appendChild(edit_comment_div);
			edit_form_div.appendChild(edit_buttons_div);

			//combine form with each entry
			entry_div.appendChild(edit_form_div);
		});
		
		//add to div container
		entry_div.appendChild(entry_date);
		entry_div.appendChild(entry_tips);
		entry_div.appendChild(entry_clockIn);
		entry_div.appendChild(entry_clockOut);
		entry_div.appendChild(entry_shiftLength);
		entry_div.appendChild(entry_tipsPhour);
		entry_div.appendChild(entry_hourlyWtips);
		entry_div.appendChild(entry_comment);
		entry_div.appendChild(entry_box);

		//add entry div to html div
		entry_main_container.appendChild(entry_div);
	}
}

//End Saturday/////////////////////////////////////////////