$(function(){
$('.content-shown').contentShown();
//build products
$('#products').contentShown('option',{
	'navNum':4,
	'navSpace':25,
	'pWidth':500,
	'pHeight':333,
	//'autoPlay':false,
	'nContent':'num',
	'tbgAnimate':false,
	'tipsBtn':true,
	'tipsAnimate':'slide'
});
$('#products').contentShown('build');

$('#pyramid').contentShown('option', {
	"navNum" : "pyramid",
	// "navNum" : "css",
	"pWidth" : 998,
	"pHeight": 280,
	"showTips": false,
	"navSpace": 85,
	// 'autoPlay': false,
	'animate':'left',
	'events' : 'click',
	'playBtn': true,
	//"loop":true,
	"data":[
	{
		"b":{"t":"../content/images/pyramid/benner-1","a":""},
		"s":"../content/images/pyramid/benner-1-s",
		"l":""
	},
	{
		"b":{"t":"../content/images/pyramid/benner-2","a":""},
		"s":"../content/images/pyramid/benner-2-s",
		"l":""
	},
	{
		"b":{"t":"../content/images/pyramid/benner-1","a":""},
		"s":"../content/images/pyramid/benner-1-s",
		"l":""
	},
	{
		"b":"../content/images/pyramid/benner-1.jpg",
		"s":"../content/images/pyramid/benner-1-s.jpg",
		"l":""
	},
	{
		"b":"../content/images/pyramid/benner-2.jpg",
		"s":"../content/images/pyramid/benner-2-s.jpg",
		"l":""
	}
	]
});

//sohu

$('#sohu').contentShown('option',{
	'navNum' : 6,
	'navSpace': 94,
	'pWidth':980,
	'pHeight':380,
	'step':5,
	'selected':5,
	'ptype':true,
	'tipsBtn':true,
	'playBtn':true,
	'data':[
		{
			'b':{'t':'http://i3.itc.cn/20120401/2b49_193d087a_bace_43de_4e1f_35f5133dd283_1.jpg','g':'_self','a':'AA制生活'},
			's':'http://i0.itc.cn/20120401/2b49_8d35b759_53df_38c4_dd04_5fcfedff6a73_1.jpg',
			'l':'http://tv.sohu.com/s2011/aazsh/',
			't':'AA制生活',
			't1':{'t':'（更新至第30集）','l':'http://tv.sohu.com/20120419/n341072737.shtml', 'g':'_self'},
			'm':'何琪和韩心大学毕业不久就结婚了。婚后，何琪提出实行AA制，韩心负责96平米婚房的还贷，自己负责物业费水电煤以及其它日用开销。韩心不认同这种有理无情的AA制…',
			//'b_':'tv',//{'c':'','l':'','t':'','t_':''} class, link, target, text
			'ot':[
				  {
					'n':'类型',
					'list':[
							{'t':'都市剧','l':'http://so.tv.sohu.com/list_p12_p2_u90FD_u5E02_u5267_p3_p4_p5_p6_p7_p8_p9.html','g':'_self'},
							{'t':'言情剧','l':'http://so.tv.sohu.com/list_p12_p2_u8A00_u60C5_u5267_p3_p4_p5_p6_p7_p8_p9.html','g':'_self'}
						   ]
				  },
				  {
					'n':'导演',
					'list':{"t":"赵晨阳","l":"http://so.tv.sohu.com/mts?&wd=%u8D75%u6668%u9633"}
				  },
				  {
					'n':'主演',
					'list':[
							{'t':'李小璐','l':'http://so.tv.sohu.com/mts?&wd=%u674E%u5C0F%u7490'},
							{'t':'马苏','l':'http://so.tv.sohu.com/mts?&wd=%u9A6C%u82CF'}
						   ]
				  }
				]
		},
		{
			'b':'http://i0.itc.cn/20120418/9f4_5fbdc959_4fc9_4106_befe_e4706806e76e_1.jpg',
			's':'http://i0.itc.cn/20120418/9f4_5fbdc959_4fc9_4106_befe_e4706806e76e_2.jpg',
			'l':'http://tv.sohu.com/s2012/mmts/',
			't':'秘密天使',
			't1':{'t':'（更新至第5集）','l':'http://tv.sohu.com/20120418/n340905079.shtml'},
			'm':'天使、恶魔和人类这些本不该出现在同一空间的事物相遇时，必然会撞击出意想不到的火花。天使、恶魔和人类之间相互缠绕的红线，理不清道不明。本应是极为美妙的心动瞬间…',
			'ot':[
				  {
					'n':'类型',
					'list':[
							{"t":"都市剧","l":"http://so.tv.sohu.com/list_p12_p2_u90FD_u5E02_u5267_p3_p4_p5_p6_p7_p8_p9.html"},
							{"t":"偶像剧","l":"http://so.tv.sohu.com/list_p12_p2_u5076_u50CF_u5267_p3_p4_p5_p6_p7_p8_p9.html"}
						   ]
				  },
				  {
					'n':'导演',
					'list':{"t":"赵云","l":"http://so.tv.sohu.com/mts?&wd=%u8D75%u4E91"}
				  },
				  {
					'n':'主演',
					'list':[
							{"t":"陈翔","l":"http://so.tv.sohu.com/mts?&wd=%u9648%u7FD4"},
							{"t":"张佑赫","l":"http://so.tv.sohu.com/mts?wd=%u5f20%u4f51%u8d6b"}
						   ]
				  }
				]
		},
		{
			'b':'http://i1.itc.cn/20120130/9f4_ff63bfca_bcbb_9ad8_c724_08f38e12fe36_1.jpg',
			's':'http://i0.itc.cn/20120130/9f4_00aac2fa_62f2_2811_70d8_569905772931_2.jpg',
			'l':'http://tv.sohu.com/s2012/dsjruyi/',
			't':'如意',
			't1':'（42集全）',
			'm':'民国初年一个充满茶香的小镇，有谭、佟两大家族。谭铭凯在谭老爷弥留之际匆匆赶回继承家业。谭铭凯的回归带给小镇上年轻人除了进步思想之外，还有追求平等和爱情的勇…',
			'ot':[
				  {
					'n':'类型',
					'list':[
							{'t':'年代剧','l':'http//so.tv.sohu.com/list_p12_p2_u5E74_u4EE3_u5267_p3_p4_p5_p6_p7_p8_p9.html'},
							{'t':'言情剧','l':'http//so.tv.sohu.com/list_p12_p2_u8a00_u60c5_u5267_p3_p4-1_p5_p6_p70_p80_p9-1_p101_p11.html'}
						  ]
				  },
				  {
					'n':'导演',
					'list':{'t':'张自强','l':'http://so.tv.sohu.com/mts?&wd=%u5F20%u81EA%u5F3A'}
				  },
				  {
					'n':'主演',
					'list':[
							{'t':'杨幂','l':'http://so.tv.sohu.com/mts?&wd=%u6768%u5E42'},
							{'t':'刘恺威','l':'http://so.tv.sohu.com/mts?&wd=%u5218%u607A%u5A01'}
						   ]
				  }
				]
		},
		{
			'b':"http://i2.itc.cn/20120410/9b8_0e72a40a_c700_b163_8a23_cb87308650cb_1.jpg",
			's':"http://i3.itc.cn/20120410/9b8_0e72a40a_c700_b163_8a23_cb87308650cb_2.jpg",
			'l':"http://tv.sohu.com/20120409/n340119910.shtml",
			't':"捅马蜂窝的女孩",
			't1':"The Girl Who Kicked the Hornet's Nest 2009",
			'm':"本片根据瑞典小说家斯蒂格·拉尔松（Stieg Larsson）的原著改编，是“千禧年三部曲”的最后一部。上一集惨绝人寰的父子三人残杀，让丽莎贝丝·萨兰德头部中弹，几乎丧命…",
			'tp':'movie',
			'ot':[
				  {
					'n':'类型',
					'list':[
							{"t":"动作片","l":"http://so.tv.sohu.com/list_p11_p2_u52a8_u4f5c_u7247_p3_p4-1_p5_p6_p73_p82_p9-1_p101_p11.html"},
							{"t":"恐怖片","l":"http://so.tv.sohu.com/list_p11_p2_u6050_u6016_u7247_p3_p4-1_p5_p6_p73_p82_p9-1_p101_p11.html"}
						  ]
				  },
				  {
					'n':'导演',
					'list':{"t":"丹尼尔-阿尔弗雷森","l":"http://so.tv.sohu.com/mts?box=1&wd=%u4E39%u5C3C%u5C14-%u963F%u5C14%u5F17%u96F7%u68EE"}
				  },
				  {
					'n':'主演',
					'list':[
							{"t":"迈克尔-恩奎斯特","l":"http://so.tv.sohu.com/mts?wd=%u8fc8%u514b%u5c14%2e%u6069%u594e%u65af%u7279"},
							{"t":"劳米-拉佩斯","l":"http://so.tv.sohu.com/mts?wd=%u52b3%u7c73%2e%u62c9%u4f69%u65af"}
						   ]
				  }
				]
		},
		{
			'b':"http://i3.itc.cn/20120420/af8_cf74e001_c4a3_d689_45da_52225838e7bf_1.jpg",
			's':"http://i0.itc.cn/20120420/af8_084ae6c3_6dab_f3e9_a30e_536be15f5c93_1.jpg",
			'l':"http://tv.sohu.com/20120419/n341059337.shtml",
			't':"先锋人物",
			't1':"王佩瑜：京剧混搭吉他 时尚演绎传统艺术",
			'm':"台上是正襟危坐的女老生，台下却是理着板寸的帅气女生。舞台上的王珮瑜老成稳健，舞台下的她率性洒脱。本期先锋人物：王珮瑜……",
			'tp':'zy',
			'b_':'zy',
			'ot':[
				  {
					'n':'类型',
					'list':{"t":"原创","l":"http://tv.sohu.com/20120419/n341059337.shtml"}
				  },
				  {
					'n':'主演',
					'list':{"t":"王佩瑜","l":"http://tv.sohu.com/20120419/n341059337.shtml"}
				  },
				  {
					'n':'时间',
					'list':{"t":"更新至4月20日","l":"http://tv.sohu.com/20120419/n341059337.shtml"}
				  }
				]
		},
		{
			'b':"http://i1.itc.cn/20111223/a56_ecef3d0a_7369_ca75_7c66_b4a28b40d9b0_1.jpg",
			's':"http://i0.itc.cn/20111223/a56_ecef3d0a_7369_ca75_7c66_b4a28b40d9b0_2.jpg",
			'l':"http://tv.sohu.com/s2011/yjdwb/",
			't':"妖精的尾巴",
			't1':"FAIRY TAIL",
			'm':"少女露西一直希望能加入云集众多厉害魔法师的名为“妖精尾巴”的公会，在纳兹的引导下，露西终于得偿所愿，随后，露西跟纳兹、格雷、艾露莎和哈比组成最强队伍，旅程就此展……",
			'tp':'comic',
			'b_':'comic',
			'ot':[
				  {
					'n':'类型',
					'list':[{"t":"魔幻","l":"http://so.tv.sohu.com/list_p116_p2_u9B54_u5E7B_p3_p4_p5_p6_p7_p8_p9.html"},
							{"t":"冒险","l":"http://so.tv.sohu.com/list_p116_p2_u5192_u9669_p3_p4_p5_p6_p7_p8_p9.html"},
							{"t":"少女","l":"http://so.tv.sohu.com/list_p116_p2_u5C11_u5973_p3_p4_p5_p6_p7_p8_p9.html"}]
				  },
				  {
					'n':'主演',
					'list':{"t":"石平信司","l":"http://so.tv.sohu.com/mts?box=1&wd=%u77F3%u5E73%u4FE1%u53F8"}
				  },
				  {
					'n':'产地',
					'list':{"t":"日韩","l":"http://so.tv.sohu.com/mts?box=1&wd=%u65E5%u97E9"}
				  }
				]
		},
		{
			'b':"http://i1.itc.cn/20111223/a56_8a5494f8_da69_61dd_dbf7_d639318ac10b_1.jpg",
			's':"http://i1.itc.cn/20111223/a56_8a5494f8_da69_61dd_dbf7_d639318ac10b_2.jpg",
			'l':"http://tv.sohu.com/s2011/mfjsml/",
			't':"魔法禁书目录",
			't1':"Index",
			'm':"自己的阳台栏杆上出现了像被单一样挂在上面的少女，这种非现实的情节出现在了上条当麻的眼前。虽然在这个城市——最先进科学引导的学院都市中，超能力已经可以通过科学技术……",
			'tp':'comic',
			'b_':'comic',
			'ot':[
				  {
					'n':'类型',
					'list':[{"t":"搞笑","l":"http://so.tv.sohu.com/list_p116_p2_u641E_u7B11_p3_p4_p5_p6_p7_p8_p9.html"},
							{"t":"动作","l":"http://so.tv.sohu.com/list_p116_p2_u52A8_u4F5C_p3_p4_p5_p6_p7_p8_p9.html"},
							{"t":"魔幻","l":"http://so.tv.sohu.com/list_p116_p2_u9B54_u5E7B_p3_p4_p5_p6_p7_p8_p9.html"}
						   ]
				  },
				  {
					'n':'主演',
					'list':{"t":"米喆","l":"http://so.tv.sohu.com/mts?box=1&wd=%u7C73%u5586"}
				  },
				  {
					'n':'产地',
					'list':{"t":"日韩","l":"http://so.tv.sohu.com/mts?box=1&wd=%u65E5%u97E9"}
				  }
				]
		},
		{
			'b':'http://i0.itc.cn/20120321/9f4_05a830a7_df6d_8846_1c19_80cd3b7169ac_1.jpg',
			's':'http://i2.itc.cn/20120321/9f4_b2f7e58b_8c23_9083_8383_10d1971bf908_2.jpg',
			'l':'http://tv.sohu.com/s2012/wtfwsz/',
			't':'屋塔房王世子',
			't1':{'t':'（更新至第10集）','l':'http://tv.sohu.com/20120420/n341143580.shtml'},
			'm':'该剧是一部穿越题材的爱情喜剧，讲述了朝鲜时代痛失世子妃的王子，跨越了300多年来到21世纪的现代后，邂逅与世子妃长相相似的一个女生后展开爱情攻势的故事…',
			'ot':[
				  {
					'n':'类型',
					'list':[
							{'t':'都市剧','l':'http://so.tv.sohu.com/list_p12_p2_u90FD_u5E02_u5267_p3_p4_p5_p6_p7_p8_p9.html'},
							{'t':'偶像剧','l':'http://so.tv.sohu.com/list_p12_p2_u5076_u50CF_u5267_p3_p4_p5_p6_p7_p8_p9.html'}
						   ]
				  },
				  {
					'n':'导演',
					'list':{'t':'申尹燮','l':'http://so.tv.sohu.com/mts?&wd=%u7533%u5C39%u71EE'}
				  },
				  {
					'n':'主演',
					'list':[
							{'t':'朴有天','l':'http://so.tv.sohu.com/mts?wd=%u6734%u6709%u5929'},
							{'t':'韩智敏','l':'http://so.tv.sohu.com/mts?&wd=%u97E9%u667A%u654F'}
						   ]
				  }
				]
		},
		{
			'b':'http://i1.itc.cn/20120416/9f4_0326495b_7121_93b2_40ca_f745b980d2fb_1.jpg',
			's':'http://i2.itc.cn/20110719/9f4_0a36fae4_1cea_4d54_8796_ccfe8758e779_1.jpg',
			'l':'http://tv.sohu.com/s2011/duhai/',
			't':'妒海',
			't1':'（31集全）',
			'm':'薇妮是一个寡妇，给百万富翁艾卡林的女儿当保姆，一次她随艾卡林一家出海，遭遇了暴风雨，艾卡林昏迷后，薇妮利欲熏心害死了艾卡林的妻子和女儿，此后她乘机成为了艾卡林的妻子……',
			'ot':[
				  {
					'n':'类型',
					'list':[
							{'t':'偶像剧','l':'http://so.tv.sohu.com/list_p12_p2_u5076_u50CF_u5267_p3_p4_p5_p6_p7_p8_p9.html'},
							{'t':'言情剧','l':'http://so.tv.sohu.com/list_p12_p2_u8A00_u60C5_u5267_p3_p4_p5_p6_p7_p8_p9.html'}
						   ]
				  },
				  {
					'n':'导演',
					'list':{'t':'伊沙维','l':'http://so.tv.sohu.com/mts?&wd=%u8F9B%u8D3E.%u4F0A%u6C99%u7EF4'}
				  },
				  {
					'n':'主演',
					'list':[
							{'t':'君拉纳拉','l':'http://so.tv.sohu.com/mts?wd=%u7eb3%u74e6%2e%u541b%u62c9%u7eb3%u62c9'},
							{'t':'宗拉维蒙','l':'http://so.tv.sohu.com/mts?wd=%u6960%u8fea%2e%u5b97%u62c9%u7ef4%u8499'}
						   ]
				  }
				]
		},
		{
			'b':'http://i3.itc.cn/20120412/872_b832e2c1_1952_6e79_8a8f_b2a742335b48_1.jpg',
			's':'http://i3.itc.cn/20120412/872_0dc96cf6_eea6_9459_cf95_422982ddd9d6_1.jpg',
			'l':'http://store.tv.sohu.com/view_content/tv/1011071_628542.html?spayid=220012',
			't':'夏娃的诱惑',
			't1':'（4集全）',
			'm':'韩国版《本能》情色系列《夏娃的诱惑》四部曲。电影导演镇英工作受挫，踉踉跄跄来到停车场后门，偶然遇到一个魅力女子仁爱，并被她的风姿深深吸引，发生了一夜情…',
			'ot':[
				  {
					'n':'类型',
					'list':[
							{'t':'言情剧','l':'http://store.tv.sohu.com/list/search.html?fee=1&o=3&c=2&cat=%u8A00%u60C5%u5267'},
							{'t':'家庭剧','l':'http://store.tv.sohu.com/list/search.html?fee=1&o=3&c=2&cat=%u5BB6%u5EAD%u5267'}
						   ]
				  },
				  {
					'n':'价格',
					'list':{'t':'<span class="red">8 元<\/span>','l':'none'}
				  },
				  {
					'n':'主演',
					'list':[
							{'t':'郑义甲','l':'http://so.tv.sohu.com/mts?fee=1&o=3&c=2&wd=%u90D1%u4E49%u7532'},
							{'t':'申素美','l':'http://so.tv.sohu.com/mts?fee=1&o=3&c=2&wd=%u7533%u7D20%u7F8E'}
						   ]
				  }
				]
		},
		{
			'b':'http://i2.itc.cn/20120409/9f4_c435f0cb_2785_0bdb_0766_d0297fa78123_1.jpg',
			's':'http://i0.itc.cn/20111021/9f4_36abf199_9d5d_db44_f9ad_6dbeb02cd1cb_2.jpg',
			'l':'http://tv.sohu.com/s2012/qsmx/ ',
			't':'千山暮雪',
			't1':'（30集全）',
			'm':'童雪明白，搁天涯她就是被唾骂被鄙视被公愤被人肉的坏蛋，俗称小三。只是，帷幕背后盘根错节，与生命中的三位男子的纠葛，远比她所料想的复杂。 萧山是美而伤的初恋…',
			'ot':[
				  {
					'n':'类型',
					'list':[
							{'t':'伦理剧','l':'http://so.tv.sohu.com/list_p12_p2_u5BB6_u5EAD_u5267_p3_p4_p5_p6_p7_p8_p9.html'},
							{'t':'言情剧','l':'http://so.tv.sohu.com/list_p12_p2_u8A00_u60C5_u5267_p3_p4_p5_p6_p7_p8_p9.html'}
						   ]
				  },
				  {
					'n':'导演',
					'list':{'t':'杨玄','l':'http://so.tv.sohu.com/mts?&wd=%u6768%u7384'}
				  },
				  {
					'n':'主演',
					'list':[
							{'t':'刘恺威','l':'http://so.tv.sohu.com/mts?wd=%u5218%u607a%u5a01'},
							{'t':'颖儿','l':'http://so.tv.sohu.com/mts?wd=%u9896%u513f'}
						   ]
				  }
				]
		},
		{
			'b':'http://i0.itc.cn/20120314/9f4_847f96be_fb5b_0d9f_4d0a_8662ca71c31c_1.jpg',
			's':'http://i3.itc.cn/20111028/9f4_67002b92_541f_d095_b247_748e5cda85d7_2.jpg',
			'l':'http://tv.sohu.com/s2011/fhsy/',
			't':'飞虎神鹰',
			't1':'（第42集大结局）',
			'm':'1949年12月，上海解放半年，潜伏在上海的国民党大特务头子陈恭鹏笼络了一大批旧上海的投机商，操纵银元黑市交易，并大肆伪造人民币投放市场，致使银元价格狂飚…',
			'ot':[
				  {
					'n':'类型',
					'list':[
							{'t':'悬疑剧','l':'http://so.tv.sohu.com/list_p12_p2_u60ac_u7591_u5267_p3_p4-1_p5_p6_p70_p80_p9-1_p101_p11.html'},
							{'t':'动作剧','l':'http://so.tv.sohu.com/list_p12_p2_u52a8_u4f5c_u5267_p3_p4-1_p5_p6_p70_p80_p9-1_p101_p11.html'}
						   ]
				  },
				  {
					'n':'导演',
					'list':{'t':'钱雁秋','l':'http://so.tv.sohu.com/mts?wd=%C7%AE%D1%E3%C7%EF&box=1'}
				  },
				  {
					'n':'主演',
					'list':[
							{'t':'梁冠华','l':'http://so.tv.sohu.com/mts?wd=%u6881%u51a0%u534e'},
							{'t':'张子健','l':'http://so.tv.sohu.com/mts?wd=%u5f20%u5b50%u5065'}
						   ]
				  }
				]
		},
		{
			'b':'http://i3.itc.cn/20120313/9f4_57ae955c_a55e_1bd1_64f1_044fcff47525_1.jpg',
			's':'http://i3.itc.cn/20120313/9f4_57ae955c_a55e_1bd1_64f1_044fcff47525_3.jpg',
			'l':'http://tv.sohu.com/s2012/xfszylcd/',
			't':'媳妇是怎样炼成的',
			't1':'（第28集大结局）',
			'm':'该剧剧情围绕着彭俏俏和范亮两家人之间展开，讲述了一些时而温馨、时而琐屑的百姓生活。彭俏俏和范亮是一对准备步入结婚殿堂的情侣，无奈未来婆婆战红缨泼辣挑剔…',
			'ot':[
				  {
					'n':'类型',
					'list':[
							{'t':'都市剧','l':'http://so.tv.sohu.com/list_p12_p2_u90FD_u5E02_u5267_p3_p4_p5_p6_p7_p8_p9.html','g':'_self'},
							{'t':'言情剧','l':'http://so.tv.sohu.com/list_p12_p2_u8A00_u60C5_u5267_p3_p4_p5_p6_p7_p8_p9.html','g':'_self'}
						   ]
				  },
				  {
					'n':'导演',
					'list':{'t':'卢伦常','l':'http://so.tv.sohu.com/mts?box=1&wd=%u5362%u4F26%u5E38'}
				  },
				  {
					'n':'主演',
					'list':[
							{'t':'姚芊羽','l':'http://so.tv.sohu.com/mts?wd=%D2%A6%DC%B7%D3%F0&box=1'},
							{'t':'萨日娜','l':'http://so.tv.sohu.com/mts?wd=%C8%F8%C8%D5%C4%C8&box=1'}
						   ]
				  }
				]
		}
	]
});

//lvyou
$('#lvyou').contentShown('option',{
	'navNum':4,
	'navSpace':25,
	'pWidth':500,
	'pHeight':333,
	'nContent':'num',
	'tbgAnimate':false,
	// 'loop':false,
	'preLoad':false,
	'animate':'bottom',
	'step': 3,
	'playBtn':true,
	'callback': function(data){
		$.contentShown.playPause(data.id);
		$.contentShown.playStart(data.id);
	},
	// 'autoPlay':false,
	// 'preload':false,
	'tipsAnimate':'slide',
'data':[
{
	'b':'../content/images/MG_1221.jpg',
	'l':'',
	'm':'厦门鼓浪屿风景'
},
{
	'b':'../content/images/IMG_1218.jpg',
	'l':'',
	'm':'厦门鼓浪屿风景之二'
},
{
	'b':'../content/images/MG_0683.jpg',
	'l':'',
	'm':'福建客家土楼。'
},
{
	'b':'../content/images/MG_0759.jpg',
	'l':'',
	'm':'福建客家土楼。'
},
{
	'b':'../content/images/MG_1469.jpg',
	'l':'',
	'm':'鼓浪屿某店内。'
},
{
	'b':'../content/images/IMG_0413.jpg',
	'l':'',
	'm':'桃花源之一。'
},
{
	'b':'../content/images/IMG_0458.jpg',
	'l':'',
	'm':'桃花源烤肉！。'
},
{
	'b':'../content/images/IMG_0489.jpg',
	'l':'',
	'm':'桃花源之二。'
}
]
});

//xunlei.com
$('#xunlei').contentShown('option',{
	'navNum' : 12,
	'navSpace': 61,
	'pWidth':740,
	'pHeight':310,
	'animate':'right',
	//'loop':false,
	'tipsAnimate':'slide',
'data':[
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/20/8d9cdd82c05752c2d0d920b5964b84d0.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/20/8330af3647d36ca17631cb1c0eea1387.jpg',
	'l':'http://kankan.xunlei.com/vod/mp4/58/58495.shtml',
	't':'《轰天谍战》动作巨星杜夫·龙格尔自导自演枪战动作片 隐秘特工绝地反击、生死搏杀(独家高清首播)'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/03/22/001225a0abbb33bddd19c53199fddb15.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/03/22/a852adfbdbf454a973133d64f3237c1a.jpg',
	'l':'http://data.movie.xunlei.com/movie/65104',
	't':'《屋塔房王世子》韩智敏遭会长误会朴有天伸出援手 众人面前大胆示爱(昨晚连续两集播出 已更新至09、10集)'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/20/0209fc7b5864b0006ed530cef28b8877.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/20/83b2f1fa0ada309e520ad2b2b276041c.jpg',
	'l':'http://kankan.xunlei.com/vod/mp4/60/60487/235428.shtml',
	't':'《今夜有戏》“樱桃”剧组继续爆笑做客 郭德纲携赵本山弟子打造捧腹大笑版《相亲3》！(更新至04-19期)'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/16/063bde123e6971e9d388ab199d0014d9.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/16/5b9a05bf1db6ae072654052e4dd885f8.jpg',
	'l':'http://kankan.xunlei.com/vod/mp4/63/63238.shtml',
	't':'《夺命金》杜琪峰惊悚悬疑片 浓郁的银河映像风格 刘青云演技获赞(独家国粤双语首播)'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/16/b6f1cf5cb814e390eb037a5d2dec3e84.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/03/02/512e285b8b0b65ddf25ae7748cb7b27c.jpg',
	'l':'',
	't':'换个地方买家电，京东低价天天见！品牌直供，没有水电房租立省10%！'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/17/ac0dc0826ca515cf41f8f2be936d3717.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/16/20b59937f7681ca9569fe73e2671fed6.jpg',
	'l':'',
	't':'“五一”风暴，天天低价！款款秒杀！数码相机专场。'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/17/0c396cde7d2d8bcdcf9e7cdbe97b59ae.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/17/1d9cf07c9d772b7c17ba97e5a4f1777b.jpg',
	'l':'',
	't':'出游？聚会？宅家？五一小长假怎么玩？团购抢货2折起，疯抢免单！'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/20/0cb228e5e3cd987db3dac6e89012980e.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/03/27/0f154ba138bd0e49a643514cc874e7f5.jpg',
	'l':'http://data.movie.xunlei.com/movie/60055',
	't':'被誉史上最精彩宫斗剧《甄嬛传》重磅上星首播 瞬间秒杀那些“穿越”神马的！(更新至50集)'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/16/124ad082cc707ed8762f9f6d1f9ba93c.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/19/8868ac444d57ab80359ffa06b69bf949.jpg',
	'l':'http://kankan.xunlei.com/vod/mp4/58/58951.shtml',
	't':'《巨石阵灾劫》启动终结世界的远古机器，一场场的巨大爆炸与海啸席卷人类（独家高清首播）'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/20/945da25d4a180cf04179338112a5d95b.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/02/7a767d4c20af617e6a44582828f55e12.jpg',
	'l':'http://data.movie.xunlei.com/movie/65511',
	't':'李小璐 马苏争艳《AA制生活》 触动80后婚姻理财 台词给力爆笑开场 (更新至31集)'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/19/9794b03ed62e0c8b94e4b71cedf789c9.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/19/8c3df39378c408bfc597036cf33c17d0.jpg',
	'l':'http://active.game.xunlei.com/zt2s/',
	't':'全新升级至《征途2S》,下载就送3D《泰坦尼克号》电影票、迅雷会员、赢新iPad!'
},
{
	'b':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/12/2b7582859c7e20ee8a2f82a8300f8e3f.jpg',
	's':'http://img2.kankan.xunlei.com/gallery2/block/2012/04/11/cb1158a4fb6789ab8ddf3e19c648a46f.jpg',
	'l':'http://kankan.xunlei.com/vod/mp4/61/61526.shtml',
	't':'《逆战》年度火爆枪战动作巨制 谢霆锋、周杰伦天王对决、玩命出演(国粤双语独家首播)'
}
]
})

//qiyi
$('#qiyi').contentShown('option',{
'navNum' : 12,
'navSpace': 27,
'pWidth':960,
'pHeight':340,
'tbgAnimate':false,
'animate':'left',
'tipsAnimate':'slide',
'nContent':'none',
'loop':false,
'tipsBtn':true,
'listPlace':'center',
'data':[
{
	'b':{'t':'../content/images/qiyi/30525c635d234b09a789be952d00ee89.jpg','g':'_self'},
	'l':'http://yule.iqiyi.com/20120420/9504b0d54b90033d.html?area=focus&c=main&rank=1',
	't':'奇艺两周年庆典',
	'm':'奇艺两周年庆典！'
},
{
	'b':'../content/images/qiyi/a41d5829418c48adb70d46ad3c13c78b.jpg',
	'l':'http://yule.iqiyi.com/datemycar.html#_vid1d10360415c8445d98303ce4e5d44308vid_',
	't':'浪漫满车',
	'm':'浪漫满车<br>浪漫满车.....'
},
{
	'b':'../content/images/qiyi//9a750fb3d16941a09e6976ca5d8fdd08.jpg',
	'l':'http://www.iqiyi.com/dianshiju/aazsh.html?area=focus&c=main&rank=3',
	't':'AA制生活',
	'm':'AA制生活'
},
{
	'b':'../content/images/qiyi/796aa5570f2b4868ba4900e68287f2b5.jpg',
	'l':'http://www.iqiyi.com/dianshiju/tpgzms.html',
	't':'《太平公主秘史未删节版》',
	'm':'太平公主秘史未删节版'
},
{
	'b':'../content/images/qiyi/d551968efe84412dbe350e20c72a2c06.jpg',
	'l':'http://www.iqiyi.com/dianshiju/wtfwsz.html?area=focus&c=main&rank=5',
	't':'《屋塔房王子》',
	'm':'太平公主秘史未删节版'
},
{
	'b':'../content/images/qiyi/0ebe1959943b40128c09c68a8e494f10.jpg',
	'l':'http://app.iqiyi.com/pc/player/index.html?jiaodiantu',
	't':'奇艺影音PC Windows',
	'm':'太平公主秘史未删节版'
},
{
	'b':'../content/images/qiyi/bbb454adb6804d0294034b8873798c16.jpg',
	'l':'http://yule.iqiyi.com/movies.html?area=focus&c=main&rank=1',
	't':'环球影讯：海上变形金刚PK大黄蜂',
	'm':'被誉为“海战版变形金刚”的《超级战舰》IMAX加身华丽登场'
},
{
	'b':'../content/images/qiyi/4c9be9265f5b425bb09c2df1633ac320.jpg',
	'l':'http://www.iqiyi.com/dianying/hongkongfilm.html?area=focus&c=main&rank=7',
	't':'夺命金',
	'm':'太平公主秘史未删节版'
},
{
	'b':'../content/images/qiyi/fb96a61422114b239f3092ed5096a957.jpg',
	'l':'http://www.iqiyi.com/dianying/20120417/ecd3d9bb184c399f.html?area=focus&c=main&rank=8',
	't':'功夫熊猫2',
	'm':'太平公主秘史未删节版'
},
{
	'b':'../content/images/qiyi/4cdc3f0fd9794d4188da97e759325b3f.jpg',
	'l':'http://www.iqiyi.com/dianshiju/asqkl.html?area=focus&c=main&rank=9',
	't':'爱上巧克力',
	'm':'太平公主秘史未删节版'
},
{
	'b':'../content/images/qiyi/393bb8b3a16b4716a89eff100442b7bc.jpg',
	'l':'http://www.iqiyi.com/dianying/dzhb.html?fc=a760470739b4b053',
	't':'大追捕',
	'm':'太平公主秘史未删节版'
},
{
	'b':'../content/images/qiyi/b9079749ad0f449d927bbcfdf76ece29.jpg',
	'l':'http://www.iqiyi.com/zongyi/20120418/b1a0fdc861be1fac.html',
	't':'非常了得',
	'm':'太平公主秘史未删节版'
}
]
});
//qiyi1
$('#qiyi1').contentShown('option',{
	'navNum':'css',
	'pWidth':1002,
	'pHeight':410,
	'tipsBtn':true,
	'autoPlay':true,
	'addtional':true,
	'playBtn': true,
	'target':'_self',
'data':[
{
	'b':{'t':'../content/images/qiyi/bd4816dfbaea4139b7ba66d07df3de8f.jpg','g':'_blank'},
	's':{'t':'../content/images/qiyi/6ec7f6d68fbf4e2eb4662ca00df0a2f5.jpg','w':'161','h':'50'},
	'l':'http://yule.iqiyi.com/2bjiff.html?area=focus&c=main&rank=1',
	't':'第二届北京国际电影节开幕 群星璀璨光影流金'
},
{
	'b':{'t':'../content/images/qiyi/7070e6656bb2427283bd15b20983a36c.jpg','g':'_blank'},
	's':{'t':'../content/images/qiyi/529e0cdad66648dd8e9a300ffaafb4e2.jpg','w':'80','h':'50'},
	'l':'http://yule.iqiyi.com/celebrity.html?area=focus&c=main&rank=2',
	't':'头号人物：罗志祥与Angelababy甜蜜合体'
},
{
	'b':{'t':'../content/images/qiyi/c251ef108833496b9f440789522ad011.jpg','g':'_blank'},
	's':{'t':'../content/images/qiyi/94ebd4e9201842e09905a93c933d7074.jpg','w':'80','h':'50'},
	'l':'http://www.iqiyi.com/dianying/20120423/a96c1e0d48430ac8.html?area=focus&c=main&rank=3',
	't':'《love》舒淇、赵薇、阮经天、赵又廷情爱纠葛'
},
{
	'b':'../content/images/qiyi/8a5f736e717145228b0fa7920fcdd734.jpg',
	's':{'t':'../content/images/qiyi/4b1811356a204988b46102a721432f93.jpg','w':'80','h':'50'},
	'l':'http://www.iqiyi.com/zongyi/20120423/5d318f536e335777.html?area=focus&c=main&rank=4',
	't':'综艺大嘴巴：粉木耳惹争议 爱憎分明张绍刚'
},
{
	'b':'../content/images/qiyi/af3e5c637f68452abc002e0b89bcc542.jpg',
	's':{'t':'../content/images/qiyi/141c8daabda44d0aa1bad939b5dc424f.jpg','w':'80','h':'50'},
	'l':'http://www.iqiyi.com/dianshiju/ssw.html?area=focus&c=main&rank=5',
	't':'《时尚王》[更新至11集] 时尚圈阴谋与爱情'
},
{
	'b':'../content/images/qiyi/40d7f81c4f9f4e5a8f541c4d88f74955.jpg',
	's':{'t':'../content/images/qiyi/71d8458bdfc84167a20da136200aee38.jpg','w':'80','h':'50'},
	'l':'http://www.iqiyi.com/dianshiju/aazsh.html?area=focus&c=main&rank=6',
	't':'《AA制生活》[更新至36集]李小璐试婚变悍妻'
},
{
	'b':'../content/images/qiyi/7e37ef670f6248f7b06f6296535a2c91.jpg',
	's':{'t':'../content/images/qiyi/a4b7ca9349e146d2a749c2a6425e3d01.jpg','w':'80','h':'50'},
	'l':'http://www.iqiyi.com/dongman/mztkngyb.html?area=focus&c=main&rank=7',
	't':'《名侦探柯南》真相永远只有一个'
},
{
	'b':'../content/images/qiyi/b9ddd0e51ad64eca9c722bdfc6f4d7f3.jpg',
	's':{'t':'../content/images/qiyi/3a85912aea49465ebeb1a40f752f5441.jpg','w':'80','h':'50'},
	'l':'http://www.iqiyi.com/dongman/mztkngyb.html?area=focus&c=main&rank=7',
	't':'《母子情仇》[更新至2集]双料影后变身女匪首'
},
{
	'b':'../content/images/qiyi/f7016597c9ed4c53af6991cd7c86a617.jpg',
	's':{'t':'../content/images/qiyi/3147e64e69cc4dac9a74dde7440d8dd2.jpg','w':'80','h':'50'},
	'l':'',
	't':'让每一个人都能驾享愉悦的高品质汽车生活'
},
{
	'b':'../content/images/qiyi/ff8d2297f9dd4f118b875d050a7ad27f.jpg',
	's':{'t':'../content/images/qiyi/6bdd3672da1f4e2babe7a968ba05c422.jpg','w':'161','h':'50'},
	'l':'',
	't':'《舞林大会》美型男团斗舞 养眼指数破表'
}

]
});

//qiyi2
$('#qiyi2').contentShown('option',{
	'navNum':'css',
	'pWidth':680,
	'pHeight':340,
	'tipsBtn':true,
	'target':'_self',
'data':[
{
	'b':'../content/images/qiyi/d2c753d9f14e420ab196ff83c25fd338.jpg',
	's':'../content/images/qiyi/1bf9d3593d28437b99582c060f6b9bce.jpg',
	'l':'http://www.iqiyi.com/dongman/gkljy.html?area=focus&c=dongman&rank=3',
	't':'名侦探柯南 真相永远只有一个',
	'm':'高中青梅竹马与小学神奇侦探十年相伴，白衣怪盗偶像与黑衣神秘组织延续传奇。真相尽在名侦探柯南'
},
{
	'b':'../content/images/qiyi/d501849ef8fc4d5b91b5592d0fa66f41.jpg',
	's':'../content/images/qiyi/8a4248db3d3c49949d11060b0c9eb1d6.jpg',
	'l':'http://www.iqiyi.com/dongman/gkljy.html?area=focus&c=dongman&rank=3',
	't':'我叫MT 第五季第9集',
	'm':'升级之旅第二天，主要角色纷纷到达70级，联盟部落狭路相逢，大战一触即发…'
},
{
	'b':'../content/images/qiyi/59cbbb42bab34b56a8738de7ab46483a.jpg',
	's':'../content/images/qiyi/92016be1ccad4c12a871231a88377aed.jpg',
	'l':'http://www.iqiyi.com/dongman/gkljy.html?area=focus&c=dongman&rank=3',
	't':'喜羊羊与灰太狼之给快乐加油',
	'm':'新角色小狼女小香香霸气登场，喜羊羊和他的伙伴们能HOLD住吗？'
},
{
	'b':'../content/images/qiyi/c5e24487c4304e36a7315aafd24d681f.jpg',
	's':'../content/images/qiyi/5a9388ce01784f1ba60c59cd23182adb.jpg',
	'l':'http://www.iqiyi.com/dongman/gkljy.html?area=focus&c=dongman&rank=3',
	't':'星游记 热血少年的梦想旅程',
	'm':'坚信爱与奇迹的少年们出发前往太空深处的黑洞，寻找被全宇宙视为谎言的梦想之地… '
},
{
	'b':'../content/images/qiyi/96538b3b2d204da3a5caa4608d830d9c.jpg',
	's':'../content/images/qiyi/15a72bed27464e7890a2f0db752468da.jpg',
	'l':'http://www.iqiyi.com/dongman/gkljy.html?area=focus&c=dongman&rank=3',
	't':'倒霉熊 完美诠释萌系天然呆',
	'm':'不是上帝不宠爱，只因笨熊天然呆。可爱北极熊背起包包，走上爆笑的卖萌之旅… '
},
{
	'b':'../content/images/qiyi/130f7424ee65429baa8577ec08a02cbd.jpg',
	's':'../content/images/qiyi/4c15cb86da0b4efcb28caff60f3b5dfb.jpg',
	'l':'http://www.iqiyi.com/dongman/gkljy.html?area=focus&c=dongman&rank=3',
	't':'侠岚 找寻自我的生命征途',
	'm':'中国首部玄幻武侠动画。孤儿辗迟立志寻找失踪姐姐，热血少年化身侠岚拯救世界。  '
},
{
	'b':'../content/images/qiyi/c4def912710e4aa198e36c6aa757382a.jpg',
	's':'../content/images/qiyi/70d9553faea24f28ab652c99b4392d70.jpg',
	'l':'http://www.iqiyi.com/dongman/gkljy.html?area=focus&c=dongman&rank=3',
	't':'铠甲勇士刑天 力量与战斗的真义 ',
	'm':'为了心中的梦，浴血奋战像一阵狂风，撕破黑暗释放光明，永不言弃的英雄。 '
},
{
	'b':'../content/images/qiyi/1c468cbb87c34b1882edabd3ff46847d.jpg',
	's':'../content/images/qiyi/c9f75d37040640a8ba2b989077e070eb.jpg',
	'l':'http://www.iqiyi.com/dongman/gkljy.html?area=focus&c=dongman&rank=3',
	't':'茗记 校园时代的青涩感情故事',
	'm':'一段有关青春年少、感情萌动的回忆，一段有关青涩校园、岁月如歌的经历… '
}
]
});

//left
$('#left').contentShown('option',{
	'navNum':4,
	'pWidth':590,
	'pHeight':188,
	'navSpace':47,
	'navPlace':'lr',
'data':[
{
	'b':'http://news.newone.com.cn/public/cms/public/upload/ad/2011-03-21/1300702369312.jpg',
	's':'http://news.newone.com.cn/public/images/img/spic01.jpg'
},
{
	'b':'http://news.newone.com.cn/public/images/img/lpic02.jpg',
	's':'http://news.newone.com.cn/public/images/img/spic02.jpg',
	'l':'',
	't':''
},
{
	'b':'http://news.newone.com.cn/public/cms/public/upload/ad/2011-03-22/1300778851281.jpg',
	's':'http://news.newone.com.cn/public/images/img/spic03.jpg',
	'l':'',
	't':''
},
{
	'b':'http://news.newone.com.cn/public/images/img/lpic04.jpg',
	's':'http://news.newone.com.cn/public/images/img/spic04.jpg',
	'l':'',
	't':''
},
{
	'b':'http://news.newone.com.cn/public/cms/public/upload/ad/2012-03-28/1332917208343.jpg',
	's':'http://news.newone.com.cn/public/images/img/spic01.jpg',
	'l':'',
	't':''
},
{
	'b':'http://news.newone.com.cn/public/cms/public/upload/ad/2012-04-19/1334827908953.jpg',
	's':'http://news.newone.com.cn/public/images/img/spic03.jpg',
	'l':'',
	't':''
},
{
	'b':'http://news.newone.com.cn/public/cms/public/upload/ad/2012-01-18/1326870513500.jpg',
	's':'http://news.newone.com.cn/public/images/img/spic04.jpg',
	'l':'',
	't':''
}
]
});

//

});
