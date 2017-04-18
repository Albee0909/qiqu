import store from "./store.js";

export const actions = {
	//罗列Action，非常像React + Redux中的action文件
	getBanner : function({commit}){
		$.get("php/banner.php",function(data){
			 commit("GETBANNER",JSON.parse(data));
		});
	},
	getXiaojian : function({commit}){
		$.get("php/xiaojianribao.php?page=0",function(data){
			commit("GETXIAOJIAN",JSON.parse(data).data);
		});
	},
	abcd1234({commit}){
		return (m)=>{
			return {
				store
			}
		}
	},
	getJingxuan : function(context,page){
		$.get("php/jingxuan.php",{"page":page},function(data){
			context.commit("GETJINGXUAN",{shuju: JSON.parse(data).data , pno : page });
		});
	},

	getJingxuanNextPage : function(context){

		context.commit("CHANGEJINGXUANLOCK",false);
		$.get("php/jingxuan.php",{"page":store.state.jingxuanpno + 1},function(data){
		 	context.commit("GETJINGXUAN",{shuju : JSON.parse(data).data, pno : store.state.jingxuanpno + 1});

		 	
		 	if(JSON.parse(data).data.length != 0){
		 		context.commit("CHANGEJINGXUANLOCK",true);
		 	}
		});
	}
}