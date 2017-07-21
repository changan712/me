'use strict';

define(['app'], function (md) {
    md.service('edu', function () {
        return ["初中", "高中", "中专", "大专", "本科", "硕士", "博士", "博士后", "其它"];
    });
    md.service('salary', function () {
        return [
            {
                "label": "面议",
                "code": "0"
            },
            {
                "label": "1500\u4ee5\u4e0b",
                "code": "1"
            },
            {
                "label": "1500-1999",
                "code": "2"
            },
            {
                "label": "2000-2999",
                "code": "3"
            },
            {
                "label": "3000-4499",
                "code": "4"
            },
            {
                "label": "4500-5999",
                "code": "5"
            },
            {
                "label": "6000-7999",
                "code": "6"
            },
            {
                "label": "8000-9999",
                "code": "7"
            },
            {
                "label": "10000-14999",
                "code": "8"
            },
            {
                "label": "15000-19999",
                "code": "9"
            },
            {
                "label": "20000-24999",
                "code": "10"
            },
            {
                "label": "25000-29999",
                "code": "11"
            },
            {
                "label": "30000-39999",
                "code": "12"
            },
            {
                "label": "40000-49999",
                "code": "13"
            },
            {
                "label": "50000-59999",
                "code": "14"
            },
            {
                "label": "60000-69999",
                "code": "15"
            },
            {
                "label": "70000--99999",
                "code": "16"
            },
            {
                "label": "100000\u4ee5\u4e0a",
                "code": "17"
            }
        ]
    });

    md.service('exp', function () {
        return [
            {
                label: "不限",
                code: "0"
            },
            {
                label: "无经验",
                code: "1"
            },
            {
                label: "应届生",
                code: "2"
            },
            {
                label: "1年以下",
                code: "3"
            },
            {
                label: "1-3年",
                code: "4"
            },
            {
                label: "3-5年",
                code: "5"
            },
            {
                label: "5-7年",
                code: "6"
            },
            {
                label: "8-9年",
                code: "7"
            },
            {
                label: "10年以上",
                code: "8"
            }
        ]
    });

    md.service('schools', function () {
        return [
            {
                "name": "对外经济贸易大学",
                "province": "北京",
                "en_name": "duiwaijingjimaoyidaxue",
                "en_province": "beijing"
            },
            {
                "name": "中央财经大学",
                "province": "北京",
                "en_name": "zhongyangcaijingdaxue",
                "en_province": "beijing"
            },
            {
                "name": "中国人民大学",
                "province": "北京",
                "en_name": "zhongguorenmindaxue",
                "en_province": "beijing"
            },
            {
                "name": "首都经济贸易大学",
                "province": "北京",
                "en_name": "shoudujingjimaoyidaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京工商大学",
                "province": "北京",
                "en_name": "beijinggongshangdaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京林业大学",
                "province": "北京",
                "en_name": "beijinglinyedaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京大学",
                "province": "北京",
                "en_name": "beijingdaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京邮电大学",
                "province": "北京",
                "en_name": "beijingyoudiandaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京交通大学",
                "province": "北京",
                "en_name": "beijingjiaotongdaxue",
                "en_province": "beijing"
            },
            {
                "name": "中国农业大学",
                "province": "北京",
                "en_name": "zhongguonongyedaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京化工大学",
                "province": "北京",
                "en_name": "beijinghuagongdaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京理工大学",
                "province": "北京",
                "en_name": "beijingligongdaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京工业大学",
                "province": "北京",
                "en_name": "beijinggongyedaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京航空航天大学",
                "province": "北京",
                "en_name": "beijinghangkonghangtiandaxue",
                "en_province": "beijing"
            },
            {
                "name": "中央民族大学",
                "province": "北京",
                "en_name": "zhongyangminzudaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京科技大学",
                "province": "北京",
                "en_name": "beijingkejidaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京师范大学",
                "province": "北京",
                "en_name": "beijingshifandaxue",
                "en_province": "beijing"
            },
            {
                "name": "清华大学",
                "province": "北京",
                "en_name": "qinghuadaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京外国语大学",
                "province": "北京",
                "en_name": "beijingwaiguoyudaxue",
                "en_province": "beijing"
            },
            {
                "name": "中国科学院",
                "province": "北京",
                "en_name": "zhongguokexueyuan",
                "en_province": "beijing"
            },
            {
                "name": "中国政法大学",
                "province": "北京",
                "en_name": "zhongguozhengfadaxue",
                "en_province": "beijing"
            },
            {
                "name": "中国传媒大学",
                "province": "北京",
                "en_name": "zhongguochuanmeidaxue",
                "en_province": "beijing"
            },
            {
                "name": "北京中医药大学",
                "province": "北京",
                "en_name": "beijingzhongyiyaodaxue",
                "en_province": "beijing"
            },
            {
                "name": "中国科学院研究生院",
                "province": "北京",
                "en_name": "zhongguokexueyuanyanjiushengyuan",
                "en_province": "beijing"
            },
            {
                "name": "首都医科大学",
                "province": "北京",
                "en_name": "shouduyikedaxue",
                "en_province": "beijing"
            },
            {
                "name": "华北电力大学",
                "province": "河北省",
                "en_name": "huabeidianlidaxue",
                "en_province": "hebeisheng"
            },
            {
                "name": "天津财经大学",
                "province": "天津市",
                "en_name": "tianjincaijingdaxue",
                "en_province": "tianjinshi"
            },
            {
                "name": "南开大学",
                "province": "天津市",
                "en_name": "nankaidaxue",
                "en_province": "tianjinshi"
            },
            {
                "name": "天津大学",
                "province": "天津市",
                "en_name": "tianjindaxue",
                "en_province": "tianjinshi"
            },
            {
                "name": "辽宁大学",
                "province": "辽宁省",
                "en_name": "liaoningdaxue",
                "en_province": "liaoningsheng"
            },
            {
                "name": "东北大学",
                "province": "辽宁省",
                "en_name": "dongbeidaxue",
                "en_province": "liaoningsheng"
            },
            {
                "name": "沈阳医科大学",
                "province": "辽宁省",
                "en_name": "shenyangyikedaxue",
                "en_province": "liaoningsheng"
            },
            {
                "name": "中国医科大学",
                "province": "辽宁省",
                "en_name": "zhongguoyikedaxue",
                "en_province": "liaoningsheng"
            },
            {
                "name": "东北财经大学",
                "province": "辽宁省",
                "en_name": "dongbeicaijingdaxue",
                "en_province": "liaoningsheng"
            },
            {
                "name": "大连理工大学",
                "province": "辽宁省",
                "en_name": "dalianligongdaxue",
                "en_province": "liaoningsheng"
            },
            {
                "name": "大连海事大学",
                "province": "辽宁省",
                "en_name": "dalianhaishidaxue",
                "en_province": "liaoningsheng"
            },
            {
                "name": "山东财经大学",
                "province": "山东省",
                "en_name": "shandongcaijingdaxue",
                "en_province": "shandongsheng"
            },
            {
                "name": "山东大学",
                "province": "山东省",
                "en_name": "shandongdaxue",
                "en_province": "shandongsheng"
            },
            {
                "name": "青岛大学",
                "province": "山东省",
                "en_name": "qingdaodaxue",
                "en_province": "shandongsheng"
            },
            {
                "name": "中国海洋大学",
                "province": "山东省",
                "en_name": "zhongguohaiyangdaxue",
                "en_province": "shandongsheng"
            },
            {
                "name": "青岛科技大学",
                "province": "山东省",
                "en_name": "qingdaokejidaxue",
                "en_province": "shandongsheng"
            },
            {
                "name": "中国石油大学",
                "province": "山东省",
                "en_name": "zhongguoshiyoudaxue",
                "en_province": "shandongsheng"
            },
            {
                "name": "西安交通大学",
                "province": "陕西省",
                "en_name": "xianjiaotongdaxue",
                "en_province": "shanxisheng"
            },
            {
                "name": "西安外国语大学",
                "province": "陕西省",
                "en_name": "xibeidaxuedaxue",
                "en_province": "shanxisheng"
            },
            {
                "name": "西北大学",
                "province": "陕西省",
                "en_name": "xibeidaxue",
                "en_province": "shanxisheng"
            },
            {
                "name": "西北工业大学",
                "province": "陕西省",
                "en_name": "xibeigongyedaxue",
                "en_province": "shanxisheng"
            },
            {
                "name": "西安电子科技大学",
                "province": "陕西省",
                "en_name": "xiandianzikejidaxue",
                "en_province": "shanxisheng"
            },
            {
                "name": "西北农林科技大学",
                "province": "陕西省",
                "en_name": "xibeinonglinkejidaxue",
                "en_province": "shanxisheng"
            },
            {
                "name": "兰州大学",
                "province": "甘肃省",
                "en_name": "lanzhoudaxue",
                "en_province": "gansusheng"
            },
            {
                "name": "吉林大学",
                "province": "吉林省",
                "en_name": "jilindaxue",
                "en_province": "jilinsheng"
            },
            {
                "name": "东北师范大学",
                "province": "吉林省",
                "en_name": "dongbeishifandaxue",
                "en_province": "jilinsheng"
            },
            {
                "name": "新疆大学",
                "province": "新疆省",
                "en_name": "xinjiangdaxue",
                "en_province": "xinjiangsheng"
            },
            {
                "name": "哈尔滨工业大学",
                "province": "黑龙江省",
                "en_name": "haerbingongyedaxue",
                "en_province": "heilongjiangsheng"
            },
            {
                "name": "哈尔滨工程大学",
                "province": "黑龙江省",
                "en_name": "haerbingongchengdaxue",
                "en_province": "heilongjiangsheng"
            },
            {
                "name": "上海财经大学",
                "province": "上海",
                "en_name": "shanghaicaijingdaxue",
                "en_province": "shanghai"
            },
            {
                "name": "上海大学",
                "province": "上海",
                "en_name": "shanghaidaxue",
                "en_province": "shanghai"
            },
            {
                "name": "东华大学",
                "province": "上海",
                "en_name": "donghuadaxue",
                "en_province": "shanghai"
            },
            {
                "name": "华东理工大学",
                "province": "上海",
                "en_name": "huadongligongdaxue",
                "en_province": "shanghai"
            },
            {
                "name": "同济大学",
                "province": "上海",
                "en_name": "tongjidaxue",
                "en_province": "shanghai"
            },
            {
                "name": "上海交通大学",
                "province": "上海",
                "en_name": "shanghaijiaotongdaxue",
                "en_province": "shanghai"
            },
            {
                "name": "华东师范大学",
                "province": "上海",
                "en_name": "huadongshifandaxue",
                "en_province": "shanghai"
            },
            {
                "name": "复旦大学",
                "province": "上海",
                "en_name": "fudandaxue",
                "en_province": "shanghai"
            },
            {
                "name": "上海外国语大学",
                "province": "上海",
                "en_name": "shanghaiwaiguoyudaxue",
                "en_province": "shanghai"
            },
            {
                "name": "华东政法大学",
                "province": "上海",
                "en_name": "huadongzhengfadaxue",
                "en_province": "shanghai"
            },
            {
                "name": "上海对外经贸大学",
                "province": "上海",
                "en_name": "shanghaiduiwaijingmaodaxue",
                "en_province": "shanghai"
            },
            {
                "name": "浙江大学",
                "province": "浙江省",
                "en_name": "zhejiangdaxue",
                "en_province": "zhejiangsheng"
            },
            {
                "name": "浙江财经大学",
                "province": "浙江省",
                "en_name": "zhejiangcaijingdaxue",
                "en_province": "zhejiangsheng"
            },
            {
                "name": "宁波诺丁汉大学",
                "province": "浙江省",
                "en_name": "ningbonuodinghandaxue",
                "en_province": "zhejiangsheng"
            },
            {
                "name": "西南财经大学",
                "province": "四川省",
                "en_name": "xinancaijingdaxue",
                "en_province": "sichuansheng"
            },
            {
                "name": "四川大学",
                "province": "四川省",
                "en_name": "sichuandaxue",
                "en_province": "sichuansheng"
            },
            {
                "name": "西南交通大学",
                "province": "四川省",
                "en_name": "xinanjiaotongdaxue",
                "en_province": "sichuansheng"
            },
            {
                "name": "成都信息工程学院",
                "province": "四川省",
                "en_name": "chengduxinxigongchengxueyuan",
                "en_province": "sichuansheng"
            },
            {
                "name": "电子科技大学",
                "province": "四川省",
                "en_name": "dianzikejidaxue",
                "en_province": "sichuansheng"
            },
            {
                "name": "西南石油大学",
                "province": "四川省",
                "en_name": "xinanshiyoudaxue",
                "en_province": "sichuansheng"
            },
            {
                "name": "重庆大学",
                "province": "四川省",
                "en_name": "zhongqingdaxue",
                "en_province": "sichuansheng"
            },
            {
                "name": "中南财经政法大学",
                "province": "湖北省",
                "en_name": "zhongnancaijingzhengfadaxue",
                "en_province": "hubeisheng"
            },
            {
                "name": "武汉理工大学",
                "province": "湖北省",
                "en_name": "wuhanligongdaxue",
                "en_province": "hubeisheng"
            },
            {
                "name": "华中科技大学",
                "province": "湖北省",
                "en_name": "huazhongkejidaxue",
                "en_province": "hubeisheng"
            },
            {
                "name": "武汉大学",
                "province": "湖北省",
                "en_name": "wuhandaxue",
                "en_province": "hubeisheng"
            },
            {
                "name": "中国地质大学",
                "province": "湖北省",
                "en_name": "zhongguodizhidaxue",
                "en_province": "hubeisheng"
            },
            {
                "name": "华中师范大学",
                "province": "湖北省",
                "en_name": "huazhongshifandaxue",
                "en_province": "hubeisheng"
            },
            {
                "name": "河海大学",
                "province": "江苏省",
                "en_name": "hehaidaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "南京师范大学",
                "province": "江苏省",
                "en_name": "nanjingshifandaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "南京大学",
                "province": "江苏省",
                "en_name": "nanjingdaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "南京审计大学",
                "province": "江苏省",
                "en_name": "nanjingshenjidaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "东南大学",
                "province": "江苏省",
                "en_name": "dongnandaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "南京航空航天大学",
                "province": "江苏省",
                "en_name": "nanjinghangkonghangtiandaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "南京邮电大学",
                "province": "江苏省",
                "en_name": "nanjingyoudiandaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "南京理工大学",
                "province": "江苏省",
                "en_name": "nanjingligongdaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "南京农业大学",
                "province": "江苏省",
                "en_name": "nanjingnongyedaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "中国药科大学",
                "province": "江苏省",
                "en_name": "zhongguoyaokedaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "苏州大学",
                "province": "江苏省",
                "en_name": "suzhoudaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "江南大学",
                "province": "江苏省",
                "en_name": "jiangnandaxue",
                "en_province": "jiangsusheng"
            },
            {
                "name": "郑州大学",
                "province": "河南省",
                "en_name": "zhengzhoudaxue",
                "en_province": "henansheng"
            },
            {
                "name": "湖南大学",
                "province": "湖南省",
                "en_name": "hunandaxue",
                "en_province": "hunansheng"
            },
            {
                "name": "中南大学",
                "province": "湖南省",
                "en_name": "zhongnandaxue",
                "en_province": "hunansheng"
            },
            {
                "name": "合肥工业大学",
                "province": "安徽省",
                "en_name": "hefeigongyedaxue",
                "en_province": "anhuisheng"
            },
            {
                "name": "中国科学技术大学",
                "province": "安徽省",
                "en_name": "zhongguokexuejishudaxue",
                "en_province": "anhuisheng"
            },
            {
                "name": "广东外语外贸大学",
                "province": "广东省",
                "en_name": "guangdongwaiyuwaimaodaxue",
                "en_province": "guangdongsheng"
            },
            {
                "name": "广东财经大学",
                "province": "广东省",
                "en_name": "guangdongcaijingdaxue",
                "en_province": "guangdongsheng"
            },
            {
                "name": "中山大学",
                "province": "广东省",
                "en_name": "zhongshandaxue",
                "en_province": "guangdongsheng"
            },
            {
                "name": "暨南大学",
                "province": "广东省",
                "en_name": "nandaxue",
                "en_province": "guangdongsheng"
            },
            {
                "name": "华南理工大学",
                "province": "广东省",
                "en_name": "huananligongdaxue",
                "en_province": "guangdongsheng"
            },

            {
                "name": "华南农业大学",
                "province": "广东省",
                "en_name": "huanannongyedaxue",
                "en_province": "guangdongsheng"
            },
            {
                "name": "华南师范大学",
                "province": "广东省",
                "en_name": "huananshifandaxue",
                "en_province": "guangdongsheng"
            },
            {
                "name": "广东工业大学",
                "province": "广东省",
                "en_name": "guangdonggongyedaxue",
                "en_province": "guangdongsheng"
            },
            {
                "name": "南方医科大学",
                "province": "广东省",
                "en_name": "nanfangyikedaxue",
                "en_province": "guangdongsheng"
            },
            {
                "name": "深圳大学",
                "province": "广东省",
                "en_name": "shendaxue",
                "en_province": "guangdongsheng"
            },
            {
                "name": "广东药学院",
                "province": "广东省",
                "en_name": "guangdongyaoxueyuan",
                "en_province": "guangdongsheng"
            },
            {
                "name": "厦门大学",
                "province": "福建省",
                "en_name": "xiamendaxue",
                "en_province": "fujiansheng"
            },
            {
                "name": "福州大学",
                "province": "福建省",
                "en_name": "fuzhoudaxue",
                "en_province": "fujiansheng"
            },
            {
                "name": "云南大学",
                "province": "云南省",
                "en_name": "yunnandaxue",
                "en_province": "yunnansheng"
            },
            {
                "name": "其它",
                "province": "其它",
                "en_name": "zzqita",
                "en_province": "zzqita"
            }
        ]
    });
});


