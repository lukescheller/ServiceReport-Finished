
//Create numbers for clock-in minutes
let submit_clockIn_min = document.getElementById('submit_clockIn_min');
for(let q=10; q<60; q++){
	let num_node = document.createElement('option');
	let num_txt = document.createTextNode(q);
	num_node.appendChild(num_txt);
	submit_clockIn_min.appendChild(num_node);
}

//Create numbers for clock-out minutes
let submit_clockOut_min = document.getElementById('submit_clockOut_min');
for(let q=10; q<60; q++){
	let num_node = document.createElement('option');
	let num_txt = document.createTextNode(q);
	num_node.appendChild(num_txt);
	submit_clockOut_min.appendChild(num_node);
}

//END SUBMIT MINUTE LOOPS////////////////////////////////////////////////////////////////

//END CUSTOM CANCEL////////////////////////////////////////////////////////////////
	let date = new Date;
	let str_date = date.toString();
	let submit_obj;
	let submit_bt = document.getElementById('submit_bt');
	submit_bt.addEventListener('click',function(event){

	let final_submit;
	let submit_yes = document.getElementById('submit_yes');
	if(submit_yes.checked){
		console.log('Submit Yes Checked');
		final_submit = 'Yes';
	}
	let submit_no = document.getElementById('submit_no');
	if(submit_no.checked){
		console.log('Submit No Checked');
		final_submit = 'No';
	}

	let submit_dollar = document.getElementById('submit_tips_dollar').value;
	let submit_dollar_num = Number(submit_dollar);
	console.log('Submit Dollar Num',submit_dollar_num);

	let submit_clockIn_hour_val = document.getElementById('submit_clockIn_hour').value;
	let submit_clockIn_hour_obj = submit_clockIn_hour_val;
	console.log('Submit Clock-In Hour Val',submit_clockIn_hour_val);
	let submit_clockIn_hour_num = Number(submit_clockIn_hour_val);
	console.log('Submit Clock-In Hour Num',submit_clockIn_hour_num);

	let submit_clockIn_min_val = document.getElementById('submit_clockIn_min').value;
	console.log('Submit Clock-In Min Val',submit_clockIn_min_val);
	let submit_clockIn_min_num = Number(submit_clockIn_min_val);
	console.log('Submit Clock-In Min Num',submit_clockIn_min_num);

	let submit_clockIn_ampm = document.getElementById('submit_clockIn_ampm').value;
	console.log('Submit Clock-In AmPm',submit_clockIn_ampm);

	let submit_clockOut_hour_val = document.getElementById('submit_clockOut_hour').value;
	let submit_clockOut_hour_obj = submit_clockOut_hour_val;
	console.log('Submit ClockOut Hour Val',submit_clockOut_hour_val);
	let submit_clockOut_hour_num = Number(submit_clockOut_hour_val);
	console.log('Submit ClockOut Hour Num',submit_clockOut_hour_num);

	let submit_clockOut_min_val = document.getElementById('submit_clockOut_min').value;
	console.log('Submit ClockOut Min Val',submit_clockOut_min_val);
	let submit_clockOut_min_num = Number(submit_clockOut_min_val);
	console.log('Submit ClockOut Min Num',submit_clockOut_min_num);

	let submit_clockOut_ampm = document.getElementById('submit_clockOut_ampm').value;
	console.log('Submit Clock-Out AmPm',submit_clockOut_ampm);

//FIGURE OUT THE 12 SITUATION////////////////////////////////////////////////////////////////
	
	if(submit_clockIn_ampm === 'Am' && submit_clockIn_hour_val === '12'){
		submit_clockIn_hour_val  = '00';
		submit_clockIn_hour_num  = 0;
	}

	if(submit_clockIn_ampm === 'Pm' && submit_clockIn_hour_val !== '12'){
		submit_clockIn_hour_val  = submit_clockIn_hour_val + 12;
		submit_clockIn_hour_num  = submit_clockIn_hour_num + 12;
	}

	if(submit_clockOut_ampm === 'Am' && submit_clockOut_hour_val === '12'){
		submit_clockOut_hour_val = '00';
		submit_clockOut_hour_num = 0;
	}

	if(submit_clockOut_ampm === 'Pm' && submit_clockOut_hour_val !== '12'){
		submit_clockOut_hour_val = submit_clockOut_hour_val + 12;
		submit_clockOut_hour_num = submit_clockOut_hour_num + 12;
	}	
	
//END FIGURE OUT THE 12 SITUATION////////////////////////////////////////////////////////////////

	let submit_hourly_dollar = document.getElementById('submit_hourly_dollar').value;
	console.log('Submit Hourly Dollar',submit_hourly_dollar);
	let submit_hourly_dollar_num = Number(submit_hourly_dollar);
	console.log('Submit Hourly Dollar Num',submit_hourly_dollar_num);

	let submit_comment_val = document.getElementById('submit_comment').value;
	console.log('Submit Comment',submit_comment_val);

//END SUBMIT ENTRIES////////////////////////////////////////////////////////////////

	let divider = 100/60;
	let clockIn_hour_as_dec = submit_clockIn_hour_num;
	let clockIn_min_as_dec = submit_clockIn_min_num;
	let clockIn_final_min = (divider * clockIn_min_as_dec) / 100;
	let final_clockIn_time = clockIn_hour_as_dec + clockIn_final_min;
	let final_clockIn_time_fixed = Number(final_clockIn_time.toFixed(2));
	console.log('Final Clock-In Time',final_clockIn_time_fixed);

	let clockOut_hour_as_dec = submit_clockOut_hour_num;
	let clockOut_min_as_dec = submit_clockOut_min_num;
	let clockOut_final_min = (divider * clockOut_min_as_dec) / 100;
	let final_clockOut_time = clockOut_hour_as_dec + clockOut_final_min;
	let final_clockOut_time_fixed = Number(final_clockOut_time.toFixed(2));
	console.log('Final Clock-Out Time',final_clockOut_time_fixed);

//END TIME CALCULATIONS////////////////////////////////////////////////////////////////

	let special = '¡™£¢∞§¶•ªº–≠œ∑´®†¥¨ˆøπ“‘«åß∂ƒ©˙∆˚¬…æΩ≈ç√∫˜µ≤≥÷~`!#$%\^&*+=\-\[\]\\\';,/{}|()\\":<>\?]'
	let specialx = special.split('');
	let form = document.getElementById('submit_form').elements;
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

	submit_obj = {};

	submit_obj.date 					= str_date;
	submit_obj.tip_amount_num    		= submit_dollar_num;
	submit_obj.tip_amount_string 		= submit_dollar;

	submit_obj.clockIn_hour_string      = submit_clockIn_hour_obj;
	submit_obj.clockIn_hour_number      = submit_clockIn_hour_num;
	submit_obj.clockIn_min_string       = submit_clockIn_min_val;
	submit_obj.clockIn_min_number       = submit_clockIn_min_num;
	submit_obj.clockIn_ampm             = submit_clockIn_ampm;  
	submit_obj.clockIn_as_whole         = submit_clockIn_hour_obj + ':' + submit_clockIn_min_val + ' ' + submit_clockIn_ampm;    

	submit_obj.overnight                = final_submit;

	submit_obj.clockOut_hour_string     = submit_clockOut_hour_obj;
	submit_obj.clockOut_hour_number     = submit_clockOut_hour_num;
	submit_obj.clockOut_min_string      = submit_clockOut_min_val;
	submit_obj.clockOut_min_number      = submit_clockOut_min_num;
	submit_obj.clockOut_ampm            = submit_clockOut_ampm;
	submit_obj.clockOut_as_whole        = submit_clockOut_hour_obj + ':' + submit_clockOut_min_val + ' ' + submit_clockOut_ampm;  

	if(final_submit === 'No' && submit_clockIn_ampm === 'Am' && submit_clockOut_ampm === 'Am'){
		submit_obj.shift_length         = final_clockOut_time_fixed - final_clockIn_time_fixed;
	}

	if(final_submit === 'No' && submit_clockIn_ampm === 'Am' && submit_clockOut_ampm === 'Pm'){
		submit_obj.shift_length         = final_clockOut_time_fixed - final_clockIn_time_fixed;
	}

	if(final_submit === 'No' && submit_clockIn_ampm === 'Pm' && submit_clockOut_ampm === 'Pm'){
		submit_obj.shift_length			= final_clockOut_time_fixed - final_clockIn_time_fixed;
	}

	if(final_submit === 'No' && submit_clockIn_ampm === 'Pm' && submit_clockOut_ampm === 'Am'){
		submit_obj.shift_length			= final_clockOut_time_fixed - final_clockIn_time_fixed;
	}

	if(final_submit === 'Yes' && submit_clockIn_ampm === 'Am' && submit_clockOut_ampm === 'Am'){
		submit_obj.shift_length			= (24-final_clockIn_time_fixed)+final_clockOut_time_fixed;
	}

	if(final_submit === 'Yes' && submit_clockIn_ampm === 'Am' && submit_clockOut_ampm === 'Pm'){
		submit_obj.shift_length 		= (24-final_clockIn_time_fixed)+final_clockOut_time_fixed;
	}

	if(final_submit === 'Yes' && submit_clockIn_ampm === 'Pm' && submit_clockOut_ampm === 'Am'){
		submit_obj.shift_length			= (24-final_clockIn_time_fixed)+final_clockOut_time_fixed;
	}

	if(final_submit === 'Yes' && submit_clockIn_ampm === 'Pm' && submit_clockOut_ampm === 'Pm'){
		submit_obj.shift_length			= (24-final_clockIn_time_fixed)+final_clockOut_time_fixed;
	}

	submit_obj.hourly_wage_dollar_val   = submit_hourly_dollar;
	submit_obj.hourly_wage_dollar_num   = submit_hourly_dollar_num;

	if(submit_obj.shift_length > 1){
		submit_obj.tips_per_hour 		=  submit_obj.tip_amount_num / submit_obj.shift_length;
		submit_obj.hourly_x_shift 		= submit_obj.hourly_wage_dollar_num * submit_obj.shift_length;
		let calculation 				= (submit_obj.hourly_x_shift + submit_obj.tip_amount_num) / submit_obj.shift_length;
		submit_obj.tips_hourly_shift 	= calculation;
		submit_obj.over_under 			= 'No';
	}

	else {
		submit_obj.tips_per_hour 		= submit_obj.tip_amount_num;
		submit_obj.hourly_x_shift 		= submit_obj.hourly_wage_dollar_num * submit_obj.shift_length;
		let calculation2 				= (submit_obj.shift_length * submit_obj.hourly_wage_dollar_num) + submit_obj.tip_amount_num;
		submit_obj.tips_hourly_shift 	= calculation2;
		submit_obj.over_under 			= 'Yes';
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

	shiftNeg(submit_obj.shift_length);

	submit_obj.comment 					= submit_comment_val;
	if(submit_obj.comment == ''){
		submit_obj.comment 				= 'n/a';
	}

	if(form_dollar_blank === false || form_dollar_letters === false || form_double_start === false || form_dollar_special === false || form_period_start === false || form_checked === false || form_hourly_start === false || form_hourly_blank === false || form_hourly_letters === false || form_hourly_dbl === false || form_hourly_special === false || form_hourly_neg === false){
		event.preventDefault();
		alert('Error: Double check your form input for special characters, multiple decimal points,extra letters or negative shift durations.');
	}

	else {
		console.log(submit_obj);
		let obj_str = JSON.stringify(submit_obj);
		localStorage.setItem(date,obj_str);
	}
	
//END OBJECT CREATION//////////////////////////////////////////////////////////////
	
	});//END SUBMIT////////////////////////////////////////////////////////////////


// console.log(localStorage);
// console.log('Local Storage Entries:' ,localStorage.length);

// // function getUsedLocalStorageSpace() {
// //   return Object.keys(window.localStorage).map(function(key) { return localStorage[key].length;}).reduce(function(a,b) { return a+b;});
// // };

// window.navigator.webkitTemporaryStorage.queryUsageAndQuota(function(used, remaining) {
//   console.log('Used space', used);
//   console.log('Remaining space', remaining);
// }, function(err) {
//   console.warn(err);
// });

// console.log(localStorage);

// 	let word = 'wakanda shit is this';
// 	let x    = word.split(''); //returns array of word that you split
// 	let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// 	for(let p=0;p<x.length;p++){
// 		for(let y=0;y<alph.length;y++){
// 			if(x[p] == alph[y]){
// 				console.log(alph[y],y+1 + ' in the alphabet');
// 		}
// 	}
// }

console.log(localStorage);




















