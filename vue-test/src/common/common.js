/*
 * @params pre: 起始时间戳
 * @params cur: 现在时间戳
**/

export const getDisTime = (pre,cur) =>{
	//转化为秒
	let dis = Math.round((cur - pre)/1000);
	if(dis === 0 || dis<0){
		dis = 0;
	}
	let min = Math.floor(dis/60);
	let second = Math.round(dis%60);
	min = min < 10 ? `0${min}` : `${min}`;
	second = second < 10 ? `0${second}` : `${second}`
	let timeArr = `${min}:${second}`.split('');
	return {
		timeArr,
		second:dis
	};
}