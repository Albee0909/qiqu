export const mutations = {
	//得到banner，更改state对象
 	GETBANNER : function(state,bannerarray){
 		state.jingxuanbanner = bannerarray;
 	},

 	//得到小贱，更改state对象
 	GETXIAOJIAN: function(state,xiaojianarr){
 		state.xiaojian = xiaojianarr;
 	},


 	GETJINGXUAN: function(state,o){
 		state.jingxuan = state.jingxuan.concat(o.shuju);
 		state.jingxuanpno = o.pno;
 	},


 	CHANGEJINGXUANLOCK: function(state,torf){
 		state.jingxuanlock = torf;
 	}
}