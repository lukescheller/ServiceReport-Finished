// let c = document.getElementById('su_avr_hourly').firstChild;
// console.log(c);
let tipGroup = [];
let tip_sum;
let tip_avr;

let shiftGroup = [];
let shift_sum;
let shift_avr;

let avr1Group = [];
let avr1_sum;
let avr1_avr;

let avr2Group2 = [];
let avr2_sum2;
let avr2_avr2;

for(var key in localStorage){
	if(key.includes('Mon') || key.includes('Tue') || key.includes('Wed') || key.includes('Thu') || key.includes('Fri') || key.includes('Sat') || key.includes('Sun')){
		let ls = localStorage;
		let json = ls.getItem(key);
		let json2 = JSON.parse(json);

		//Data compilation

		//1. sum of every tip collected
		function tipSum(tip){
			tipGroup.push(tip);
			return tipGroup
		}
		function add(a,b){
			return a + b;
		}
		tipSum(json2.tip_amount_num);
		tip_sum = tipGroup.reduce(add,0);
		tip_sum = tip_sum.toFixed(2);

		//2. avr of sum of every tip collected
		tip_avr = tip_sum / tipGroup.length;
		tip_avr = tip_avr.toFixed(2);

		//3. sum of shift lengths
		function shiftSum(shift){
			shiftGroup.push(shift);
			return shiftGroup;
		}
		function add2(a,b){
			return a + b;
		}
		shiftSum(json2.shift_length);
		shift_sum = shiftGroup.reduce(add2,0);
		shift_sum = shift_sum.toFixed(2);

		//4. avr shift length
		shift_avr = shift_sum / shiftGroup.length;
		shift_avr = shift_avr.toFixed(2);

		//5. avr tips per hour
		function avrTip(avr){
			avr1Group.push(avr);
			return avr1Group;
		}
		function add3(a,b){
			return a + b;
		}
		avrTip(json2.tips_per_hour);
		avr_sum = avr1Group.reduce(add3,0);
		avr_sum = avr_sum.toFixed(2);

		avr1_avr = avr_sum / avr1Group.length;
		avr1_avr = avr1_avr.toFixed(2);

		//6. avr tips + hourly per hourly
		function avrTip2(avr2){
			avr2Group2.push(avr2);
			return avr2Group2;
		}
		function add3(a,b){
			return a + b;
		}
		avrTip2(json2.tips_hourly_shift);
		avr2_sum2 = avr2Group2.reduce(add3,0);
		avr2_sum2 = avr2_sum2.toFixed(2);

		avr2_avr2 = avr2_sum2 / avr2Group2.length;
		avr2_avr2 = avr2_avr2.toFixed(2);
	}
}

let su_tip_ind;
let mn_tip_ind;
let su_tip_group = [];

mn_tip_ind = document.getElementById('mn_avr_tps').innerText;
mn_tip_ind = Number(mn_tip_ind);
console.log(mn_tip_ind);
su_tip_group.push(mn_tip_ind);

td_tip_ind = document.getElementById('td_avr_tps').innerText;
td_tip_ind = Number(td_tip_ind);
console.log(td_tip_ind);
su_tip_group.push(td_tip_ind);

wd_tip_ind = document.getElementById('wdd_avr_tps').innerText;
wd_tip_ind = Number(wd_tip_ind);
console.log(wd_tip_ind);
su_tip_group.push(wd_tip_ind);

th_tip_ind = document.getElementById('th_avr_tps').innerText;
th_tip_ind = Number(th_tip_ind);
console.log(th_tip_ind);
su_tip_group.push(th_tip_ind);

fr_tip_ind = document.getElementById('fr_avr_tps').innerText;
fr_tip_ind = Number(fr_tip_ind);
console.log(fr_tip_ind);
su_tip_group.push(fr_tip_ind);

sa_tip_ind = document.getElementById('sa_avr_tps').innerText;
sa_tip_ind = Number(sa_tip_ind);
console.log(sa_tip_ind);
su_tip_group.push(sa_tip_ind);

su_tip_ind = document.getElementById('su_avr_tps').innerText;
su_tip_ind = Number(su_tip_ind);
console.log(su_tip_ind);
su_tip_group.push(su_tip_ind);

console.log('before',su_tip_group);
let before = su_tip_group;

for(let z=0; z<8; z++){
	if(su_tip_group[z] > su_tip_group[z+1]){

		let eins = su_tip_group[z];
		let zwei = su_tip_group[z+1];

		su_tip_group[z] = zwei;
		su_tip_group[z+1] = eins;

		z=-1; continue;
	}
}

console.log('after',su_tip_group);

let last = su_tip_group[su_tip_group.length-1];
console.log('last',last)

let gotchya;

for(let g=0;g<su_tip_group.length;g++){

	if(last === mn_tip_ind){
		gotchya = 'Monday';
	}
	if(last === td_tip_ind){
		gotchya = 'Tuesday';
	}
	if(last === wd_tip_ind){
		gotchya = 'Wednesday';
	}
	if(last === th_tip_ind){
		gotchya = 'Thursday';
	}
	if(last === fr_tip_ind){
		gotchya = 'Friday';
	}
	if(last === sa_tip_ind){
		gotchya = 'Saturday';
	}
	if(last === su_tip_ind){
		gotchya = 'Sunday';
	}
}

console.log('Day:',gotchya);

let total_tipSum = document.getElementById('total_tipSum');
total_tipSum.innerHTML = '<h3>' + 'Sum of Entries: ' + '<span class="right">' + '$' + tip_sum + '</span>' + '</h3>';

let total_tipAvr = document.getElementById('total_tipAvr');
total_tipAvr.innerHTML = '<h3>' + 'Average Entry Submitted: ' + '<span class="right">' + '$' + tip_avr + '</span>' + '</h3>';

let total_shiftSum = document.getElementById('total_shiftSum');
total_shiftSum.innerHTML = '<h3>' + 'Total Hours Worked: ' + '<span class="right">' + shift_sum + ' ' + 'hours' + '</span>' + '</h3>';

let total_shiftAvr = document.getElementById('total_shiftAvr');
total_shiftAvr.innerHTML = '<h3>' + 'Average Shift Length: ' + '<span class="right">' + shift_avr + ' ' + 'hours' + '</span>' + '</h3>';

let most_profit = document.getElementById('most_profit');
most_profit.innerHTML = '<h3>' + 'Most Profitable Day: ' + '<span class="right">' + gotchya + '</span>' + '</h3>';

let clear_bt = document.getElementById('clear_bt');
clear_bt.addEventListener('click',function(){
	let yes = confirm('Press ok to delete every entry');
	if(yes == true){
		localStorage.clear();
		location.reload();
	}
});

