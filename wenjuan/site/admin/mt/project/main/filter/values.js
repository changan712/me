'use strict';

define(['app'], function (md) {
    //性别
    md.value('viewGender', [
        {"label": "未知", "code": "UNKNOWN"},
        {"label": "男", "code": 'MALE'},
        {"label": "女", "code": "FEMALE"}
    ]);


    //职位性质
    md.value('mapPosProperty', {
            'FULLTIME': '全职',
            'PARTIME': '兼职',
            'INTERN': '实习'
        }
    );

    //职位状态
    md.value('mapPosStatus', {
            'ONGOING': '招聘进行中',
            'PAUSED': '招聘暂停',
            'STOP': '停止招聘',
            'DONE': '招聘完成',
            'CLOSED': '职位关闭'
        }
    );

    //hr端简历状态
    md.value('mapResumeStatus', {
            'ACCEPT': '筛选',
            'NOACCEPT': '拒绝',
            'INTERVIEW': '面试',
            'NOOFFER': '拒绝',
            'SEND_OFFER': '发送OFFER',
            'OFFER': 'OFFER',
            'BOARD': '上岗',
            'GET_OFFER': '接受OFFER',
            'NEW': '筛选',
            // 表中并不存在SCREEN状态， 由 ACCEPT + NEW 产生 SCREEN状态
            'SCREEN': '筛选'
        }
    );
    //项目类型
    md.value('mapProjectType', {
            '1': '社会招聘',
            '2': '校园招聘',
            '3': '实习招聘'
        }
    );


//教育
//    md.value('viewEdu',global_data['edu']);
    //用户头像
    md.value(('avatars'),[
        {"src":"/assets/images/avatars/avatar1.png","code":"0"},
        {"src":"/assets/images/avatars/avatar2.png","code":"1"},
        {"src":"/assets/images/avatars/avatar3.png","code":"2"},
        {"src":"/assets/images/avatars/avatar4.png","code":"3"},
        {"src":"/assets/images/avatars/avatar5.png","code":"4"},
        {"src":"/assets/images/avatars/avatar6.png","code":"5"},
        {"src":"/assets/images/avatars/avatar7.png","code":"6"},
        {"src":"/assets/images/avatars/avatar8.png","code":"7"},
        {"src":"/assets/images/avatars/avatar9.png","code":"8"},
        {"src":"/assets/images/avatars/avatar10.png","code":"9"},
        {"src":"/assets/images/avatars/avatar11.png","code":"10"},
        {"src":"/assets/images/avatars/avatar12.png","code":"11"},
        {"src":"/assets/images/avatars/avatar13.png","code":"12"},
        {"src":"/assets/images/avatars/avatar14.png","code":"13"},
        {"src":"/assets/images/avatars/avatar15.png","code":"14"},
        {"src":"/assets/images/avatars/avatar16.png","code":"15"},
        {"src":"/assets/images/avatars/avatar17.png","code":"16"},
        {"src":"/assets/images/avatars/avatar18.png","code":"17"},
        {"src":"/assets/images/avatars/avatar19.png","code":"18"},
        {"src":"/assets/images/avatars/avatar20.png","code":"19"},
        {"src":"/assets/images/avatars/avatar21.png","code":"20"},
        {"src":"/assets/images/avatars/avatar22.png","code":"21"},
        {"src":"/assets/images/avatars/avatar23.png","code":"22"},
        {"src":"/assets/images/avatars/avatar24.png","code":"23"},
        {"src":"/assets/images/avatars/avatar25.png","code":"24"},
        {"src":"/assets/images/avatars/avatar26.png","code":"25"},
        {"src":"/assets/images/avatars/avatar27.png","code":"26"},
        {"src":"/assets/images/avatars/avatar28.png","code":"27"},
        {"src":"/assets/images/avatars/avatar29.png","code":"28"},
        {"src":"/assets/images/avatars/avatar30.png","code":"29"},
        {"src":"/assets/images/avatars/avatar31.png","code":"30"},
        {"src":"/assets/images/avatars/avatar32.png","code":"31"},
        {"src":"/assets/images/avatars/avatar33.png","code":"32"},
        {"src":"/assets/images/avatars/avatar34.png","code":"33"},
        {"src":"/assets/images/avatars/avatar35.png","code":"34"},
        {"src":"/assets/images/avatars/avatar36.png","code":"35"},
        {"src":"/assets/images/avatars/avatar37.png","code":"36"},
        {"src":"/assets/images/avatars/avatar38.png","code":"37"},
        {"src":"/assets/images/avatars/avatar39.png","code":"38"},
        {"src":"/assets/images/avatars/avatar40.png","code":"39"}
    ]);

    //工资
    //md.value('viewSalary', global_data['salary']);
    //工作经验
    //md.value('viewExp', global_data['exp']);

    //时间选择
    md.value('time', [
            {label: "00:00"},
            {label: "00:30"},
            {label: "01:00"},
            {label: "01:30"},
            {label: "02:00"},
            {label: "02:30"},
            {label: "03:00"},
            {label: "03:30"},
            {label: "04:00"},
            {label: "04:30"},
            {label: "05:00"},
            {label: "05:30"},
            {label: "06:00"},
            {label: "06:30"},
            {label: "07:00"},
            {label: "07:30"},
            {label: "08:00"},
            {label: "08:30"},
            {label: "09:00"},
            {label: "09:30"},
            {label: "10:00"},
            {label: "10:30"},
            {label: "11:00"},
            {label: "11:30"},
            {label: "12:00"},
            {label: "12:30"},
            {label: "13:00"},
            {label: "13:30"},
            {label: "14:00"},
            {label: "14:30"},
            {label: "15:00"},
            {label: "15:30"},
            {label: "16:00"},
            {label: "16:30"},
            {label: "17:00"},
            {label: "17:30"},
            {label: "18:00"},
            {label: "18:30"},
            {label: "19:00"},
            {label: "19:30"},
            {label: "20:00"},
            {label: "20:30"},
            {label: "21:00"},
            {label: "21:30"},
            {label: "22:00"},
            {label: "22:30"},
            {label: "23:00"},
            {label: "23:30"}
        ]
    );

    md.value('eventTypeMap', {
        'record,audit,reply':'简历审核',
        'record,audit,edit-detail':'简历审核-代填',
        'record,offer,audit,reply':'审核OFFER反馈',
        'record,offer,invite,reply':'候选人OFFER反馈',
        'record,interview,align,reply':'面试-邀约面试官',
        'record,interview,invite,reply':'面试-邀约候选人',
        'record,interview,edit-align':'面试-邀约面试官',
        'record,detail,hh_status':'猎头通知',
        'record,interview,feedback,reply':'面试-反馈'
    });

    md.value('eventFormatMap', {
        'record,audit,reply' : function(params){
            return [
                '审核人：'+ params['mail'],
                '审核结果：' + params['result']
            ]
        },
        'record,audit,edit-detail' : function(params){
            return [
                '审核人：'+ params['mail'],
                '审核结果：' + params['result']
            ]
        },
        'record,offer,audit,reply':function(params){
            return [
                '审核人：'+ params['name'],
                '审核结果：' + params['result'],
                '评论：' + params['comment']
            ]
        },
        'record,offer,invite,reply':function(params){
            return [
                '审核结果：' + params['result'],
                '评论：' + params['content']
            ]
        },
        'record,interview,align,reply':function(params){
            return [
                '面试官：'+ params['mail'],
                '反馈：' + params['times']
            ]
        },
        'record,interview,invite,reply':function(params){
            return [
                '反馈：' + params['time']
            ]
        },
        'record,interview,edit-align':function(params){
            return [
                '反馈：' + params['times']
            ]
        },
        'record,detail,hh_status':function(params){
            return [
                '状态：' + params['status']
            ]
        },
        'record,interview,feedback,reply':function(params){
            return [
                '面试官：' + params['name'],
                '结果：' + params['level'],
                '内容：' + params['content']
            ]
        }

    });
})
;



