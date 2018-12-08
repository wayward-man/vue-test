import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		isSilent: true,
		playerInfo,
		boardInfo: [],
		isLongScreen:false,
		selectInfo: {
			isJudge: true,
			name: '',
			isSilent: true
		},
		isFromStart:true,
		isShowList: {
			start: true,
			select: false,
			game: false,
			over: false,
			board: false
		}
	},
	getters:{
		isLogin:state => {
			return Boolean(state.playerInfo.uid);
		}
	},
	mutations: {
		//判断是否长屏，例如inphonex
		changeScreen(state,isLongScreen){
			state.isLongScreen = isLongScreen;
		},
		switchAudio(state){
			state.selectInfo.isSilent = !state.selectInfo.isSilent;
		},
		selectInfo(state,info){
			state.selectInfo.isJudge = info.isJudge;
			state.selectInfo.name = info.name;
		},
		clipName(state){
			state.selectInfo.name = state.selectInfo.name.slice(0,6);
		},
		switchPage(state, to) {
			for(let item in state.isShowList) {
				state.isShowList[item] = false;
			}
			state.isShowList[to] = true;

		},
		seeBoard(state, boardInfo) {
			for(let item in state.isShowList) {
				state.isShowList[item] = false;
			}
			state.isShowList.board = true;
			state.boardInfo = boardInfo;
			
			//结束的统计
			$('.suda_board').click();
		},
		showPage(state, to) {
			state.isShowList[to] = true;
		},
		setPlayerScore(state,score){
			state.playerInfo.num = score;
		},
		//过滤敏感词汇
		setSlectName(state,name){
			state.selectInfo.name = name;
		},
		setIsFrom(state,from){
			state.isFromStart = from;
			console.log(from);
		}
	}
})