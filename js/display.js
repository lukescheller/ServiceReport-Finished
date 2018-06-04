let monshow = document.getElementById('monday_button');
let ms = document.getElementById('monday_data');
let msd = document.getElementById('mon_summary_data');
let me = document.getElementById('mon_indv_entry_div');

monshow.addEventListener('click',function(){
	ms.style.display = 'block';
});

let moncan = document.getElementById('mon_summary_cancel');
moncan.addEventListener('click',function(){
	ms.style.display = 'none';
});

let monsum = document.getElementById('mon_summary_bt');
monsum.addEventListener('click',function(){
	msd.style.display = 'block';
});

let monsumcl = document.getElementById('mon_summary_bt_cl');
monsumcl.addEventListener('click',function(){
	msd.style.display = 'none';
});

let mondat = document.getElementById('mon_indv_bt');
mondat.addEventListener('click',function(){
	me.style.display = 'block';
});

let moncl = document.getElementById('mon_indv_bt_cl');
moncl.addEventListener('click',function(){
	me.style.display = 'none';
});

//END MONDAY///////////////////////////////////////////////////////////////////////

let tueshow = document.getElementById('tuesday_button');
let tus = document.getElementById('tuesday_data');
let tuesd = document.getElementById('tue_summary_data');
let tuee = document.getElementById('tue_indv_entry_div');

tueshow.addEventListener('click',function(){
	tus.style.display = 'block';
});

let tuecan = document.getElementById('tue_summary_cancel');
tuecan.addEventListener('click',function(){
	tus.style.display = 'none';
});

let tuesum = document.getElementById('tue_summary_bt');
tuesum.addEventListener('click',function(){
	tuesd.style.display = 'block';
});

let tuesumcl = document.getElementById('tue_summary_bt_cl');
tuesumcl.addEventListener('click',function(){
	tuesd.style.display = 'none';
});

let tuedat = document.getElementById('tue_indv_bt');
tuedat.addEventListener('click',function(){
	tuee.style.display = 'block';
});

let tuecl = document.getElementById('tue_indv_bt_cl');
tuecl.addEventListener('click',function(){
	tuee.style.display = 'none';
});

//END TUESDAY/////////////////////////////////////////////////////////////////

let wedshow = document.getElementById('wednesday_button');
let wed = document.getElementById('wednesday_data');
let wedd = document.getElementById('wed_summary_data');
let wede = document.getElementById('wed_indv_entry_div');

wedshow.addEventListener('click',function(){
	wed.style.display = 'block';
});

let wedcan = document.getElementById('wed_summary_cancel');
wedcan.addEventListener('click',function(){
	wed.style.display = 'none';
});

let wedsum = document.getElementById('wed_summary_bt');
wedsum.addEventListener('click',function(){
	wedd.style.display = 'block';
});

let wedsumcl = document.getElementById('wed_summary_bt_cl');
wedsumcl.addEventListener('click',function(){
	wedd.style.display = 'none';
});

let weddat = document.getElementById('wed_indv_bt');
weddat.addEventListener('click',function(){
	wede.style.display = 'block';
});

let wedcl = document.getElementById('wed_indv_bt_cl');
wedcl.addEventListener('click',function(){
	wede.style.display = 'none';
});

//END WEDNESDAY//////////////////////////////////////////////////////////////////

let thushow = document.getElementById('thursday_button');
let thu = document.getElementById('thursday_data');
let thud = document.getElementById('thu_summary_data');
let thue = document.getElementById('thu_indv_entry_div');

thushow.addEventListener('click',function(){
	thu.style.display = 'block';
});

let thucan = document.getElementById('thu_summary_cancel');
thucan.addEventListener('click',function(){
	thu.style.display = 'none';
});

let thusum = document.getElementById('thu_summary_bt');
thusum.addEventListener('click',function(){
	thud.style.display = 'block';
});

let thusumcl = document.getElementById('thu_summary_bt_cl');
thusumcl.addEventListener('click',function(){
	thud.style.display = 'none';
});

let thudat = document.getElementById('thu_indv_bt');
thudat.addEventListener('click',function(){
	thue.style.display = 'block';
});

let thucl = document.getElementById('thu_indv_bt_cl');
thucl.addEventListener('click',function(){
	thue.style.display = 'none';
});

//END THURSDAY//////////////////////////////////////////////////////////////////

let frishow = document.getElementById('friday_button');
let fri = document.getElementById('friday_data');
let frid = document.getElementById('fri_summary_data');
let frie = document.getElementById('fri_indv_entry_div');

frishow.addEventListener('click',function(){
	fri.style.display = 'block';
});

let frican = document.getElementById('fri_summary_cancel');
frican.addEventListener('click',function(){
	fri.style.display = 'none';
});

let frisum = document.getElementById('fri_summary_bt');
frisum.addEventListener('click',function(){
	frid.style.display = 'block';
});

let frisumcl = document.getElementById('fri_summary_bt_cl');
frisumcl.addEventListener('click',function(){
	frid.style.display = 'none';
});

let fridat = document.getElementById('fri_indv_bt');
fridat.addEventListener('click',function(){
	frie.style.display = 'block';
});

let fricl = document.getElementById('fri_indv_bt_cl');
fricl.addEventListener('click',function(){
	frie.style.display = 'none';
});

//END FRIDAY//////////////////////////////////////////////////////////////////

let satshow = document.getElementById('saturday_button');
let sat = document.getElementById('saturday_data');
let satd = document.getElementById('sat_summary_data');
let sate = document.getElementById('sat_indv_entry_div');

satshow.addEventListener('click',function(){
	sat.style.display = 'block';
});

let satcan = document.getElementById('sat_summary_cancel');
satcan.addEventListener('click',function(){
	sat.style.display = 'none';
});

let satsum = document.getElementById('sat_summary_bt');
satsum.addEventListener('click',function(){
	satd.style.display = 'block';
});

let satsumcl = document.getElementById('sat_summary_bt_cl');
satsumcl.addEventListener('click',function(){
	satd.style.display = 'none';
});

let satdat = document.getElementById('sat_indv_bt');
satdat.addEventListener('click',function(){
	sate.style.display = 'block';
});

let satcl = document.getElementById('sat_indv_bt_cl');
satcl.addEventListener('click',function(){
	sate.style.display = 'none';
});

//END SATURDAY//////////////////////////////////////////////////////////////////

let sunshow = document.getElementById('sunday_button');
let sun = document.getElementById('sunday_data');
let sund = document.getElementById('sun_summary_data');
let sune = document.getElementById('sun_indv_entry_div');

sunshow.addEventListener('click',function(){
	sun.style.display = 'block';
});

let suncan = document.getElementById('sun_summary_cancel');
suncan.addEventListener('click',function(){
	sun.style.display = 'none';
});

let sunsum = document.getElementById('sun_summary_bt');
sunsum.addEventListener('click',function(){
	sund.style.display = 'block';
});

let sunsumcl = document.getElementById('sun_summary_bt_cl');
sunsumcl.addEventListener('click',function(){
	sund.style.display = 'none';
});

let sundat = document.getElementById('sun_indv_bt');
sundat.addEventListener('click',function(){
	sune.style.display = 'block';
});

let suncl = document.getElementById('sun_indv_bt_cl');
suncl.addEventListener('click',function(){
	sune.style.display = 'none';
});




















