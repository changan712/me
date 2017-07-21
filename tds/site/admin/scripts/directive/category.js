'use strict';

define(['app'], function (md) {
    md.directive('category', [function () {
        return {
            restrict: 'E',
            replace: 'true',
            templateUrl: 'views/com/category.html',
            scope: {
                isShow: '=',
                result: '=',
                maxLength: '@',
                onMaxLength: '&'
            },
            link: function (scope, ele, attr) {
                //  var c2 = [];
                var category = getData();
                scope.max = scope.maxLength || 5;
                scope.isShow = false;
                scope.error = false;
                scope.c1 = category;
                scope.result = [];

                scope.clickC1 = function (item) {
                    scope.c2 = item.child;
                    scope.c2Show = true;
                };


                scope.clickC2 = function (item) {
                    if (_.findWhere(scope.result, item)) return;
                    if (scope.result.length >= scope.max) {
                        scope.error = true;
                        scope.onMaxLength || scope.onMaxLength();
                        return;
                    }
                    item.active = true;
                    scope.result.push(item);

                };
                scope.closeC2 = function () {
                    scope.c2Show = false;
                    _.each(scope.c2, function (item) {
                        item.active = false;
                    })
                };

                scope.removeResult = function (item) {
                    var activeC2 = _.findWhere(scope.c2, item);
                    var activeCc = _.findWhere(scope.cc, item);
                    scope.result.splice(_.indexOf(scope.result, item), 1);
                    if (activeC2)
                        activeC2.active = false;
                    if (activeCc)
                        activeCc.active = false;
                    scope.error = false;
                };

                scope.hide = function () {
                    scope.isShow = false;
                    scope.error = false;
                    scope.closeC2();
                };

                scope.show = function () {
                    scope.isShow = true;
                };


                scope.ok = function () {
                    scope.hide();
                };

                scope.cancel = function () {
                    scope.hide();
                    scope.result = [];
                    scope.error = false;
                    _.each(scope.c2, function (item) {
                        item.active = false;
                    })

                    _.each(scope.cc, function (item) {
                        item.active = false;
                    })
                };


                function getC2() {

                    var item = _.findWhere(category, {active: true});
                    if (item)
                        return item.child;
                    return [];
                }

            }
        };


        function getData() {
            return [
                {
                    label: "计算机硬件",
                    en_name: "Computer, Hardware",
                    code: "10",
                    child: [
                        {
                            label: "高级硬件工程师",
                            en_name: "Senior Hardware Engineer",
                            code: "1001"
                        },
                        {
                            label: "硬件工程师",
                            en_name: "Hardware Engineer",
                            code: "1002"
                        }
                    ]
                },
                {
                    label: "计算机软件",
                    en_name: "Computer, Software",
                    code: "11",
                    child: [
                        {
                            label: "高级软件工程师",
                            en_name: "Senior Software Engineer",
                            code: "1101"
                        },
                        {
                            label: "软件工程师",
                            en_name: "Software Engineer",
                            code: "1102"
                        },
                        {
                            label: "软件UI设计师/工程师",
                            en_name: "Software UI/ Designer Engineer",
                            code: "1103"
                        },
                        {
                            label: "算法工程师",
                            en_name: "Algorithm Engineer",
                            code: "1104"
                        },
                        {
                            label: "ERP实施顾问",
                            en_name: "ERP Implementation",
                            code: "1106"
                        },
                        {
                            label: "ERP技术开发",
                            en_name: "ERP R&D",
                            code: "1107"
                        },
                        {
                            label: "需求工程师",
                            en_name: "Demand / Specification Engineer",
                            code: "1108"
                        },
                        {
                            label: "系统集成工程师",
                            en_name: "System Integration Engineer",
                            code: "1109"
                        },
                        {
                            label: "系统分析员",
                            en_name: "System Analyst",
                            code: "1110"
                        },
                        {
                            label: "系统工程师",
                            en_name: "System Engineer",
                            code: "1111"
                        },
                        {
                            label: "系统架构设计师",
                            en_name: "System Architecture Design",
                            code: "1112"
                        },
                        {
                            label: "数据库工程师/管理员",
                            en_name: "Database Engineer/Administrator",
                            code: "1113"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "1115"
                        }
                    ]
                },
                {
                    label: "互联网/电子商务/网游",
                    en_name: "Internet/E-Commerce/Online Game",
                    code: "12",
                    child: [
                        {
                            label: "互联网软件开发工程师",
                            en_name: "Internet/E-Commerce Software Engineer",
                            code: "1201"
                        },
                        {
                            label: "语音/视频开发工程师",
                            en_name: "Audio/Video Development Engineer",
                            code: "1202"
                        },
                        {
                            label: "多媒体/游戏开发工程师",
                            en_name: "Multimedia/Game Development Engineer",
                            code: "1203"
                        },
                        {
                            label: "手机应用开发工程师",
                            en_name: "Mobile Application Development Engineer",
                            code: "1204"
                        },
                        {
                            label: "网站营运总监",
                            en_name: "Web Operations Director",
                            code: "1205"
                        },
                        {
                            label: "网站营运经理/主管",
                            en_name: "Web Operations Manager/Supervisor",
                            code: "1206"
                        },
                        {
                            label: "网站营运专员",
                            en_name: "Web Operations Specialist",
                            code: "1207"
                        },
                        {
                            label: "产品总监",
                            en_name: "Product Director",
                            code: "1208"
                        },
                        {
                            label: "产品经理/主管",
                            en_name: "Product Manager/Supervisor",
                            code: "1209"
                        },
                        {
                            label: "产品专员",
                            en_name: "Product Specialist",
                            code: "1210"
                        },
                        {
                            label: "SEO搜索引擎优化",
                            en_name: "SEO Specialist",
                            code: "1211"
                        },
                        {
                            label: "网络推广总监",
                            en_name: "Online Marketing Director",
                            code: "1212"
                        },
                        {
                            label: "网络推广经理/主管",
                            en_name: "Online Marketing Manager/Supervisor",
                            code: "1213"
                        },
                        {
                            label: "网络推广专员",
                            en_name: "Online Marketing Specialist",
                            code: "1214"
                        },
                        {
                            label: "电子商务总监",
                            en_name: "E-Commerce Director",
                            code: "1215"
                        },
                        {
                            label: "电子商务经理/主管",
                            en_name: "E-Commerce Manager/Supervisor",
                            code: "1216"
                        },
                        {
                            label: "电子商务专员",
                            en_name: "E-Commerce Specialist",
                            code: "1217"
                        },
                        {
                            label: "网络工程师",
                            en_name: "Network Engineer",
                            code: "1218"
                        },
                        {
                            label: "UI设计师/顾问",
                            en_name: "UI Designer / Consultant",
                            code: "1219"
                        },
                        {
                            label: "用户体验（UE/UX）设计师",
                            en_name: "User Experience(UE/UX) Designer",
                            code: "1220"
                        },
                        {
                            label: "Web前端开发",
                            en_name: "Web Front-end Developer",
                            code: "1221"
                        },
                        {
                            label: "网站架构设计师",
                            en_name: "Web Architecture Design",
                            code: "1222"
                        },
                        {
                            label: "系统管理员/网络管理员",
                            en_name: "System Manager/Webmaster",
                            code: "1224"
                        },
                        {
                            label: "网站策划",
                            en_name: "Web Producer",
                            code: "1225"
                        },
                        {
                            label: "网站编辑",
                            en_name: "Web Editor",
                            code: "1226"
                        },
                        {
                            label: "网页设计/制作/美工",
                            en_name: "Web Designer/Production/Creative",
                            code: "1227"
                        },
                        {
                            label: "游戏策划师",
                            en_name: "Game Planner",
                            code: "1229"
                        },
                        {
                            label: "游戏界面设计师",
                            en_name: "Game UI Designer",
                            code: "1230"
                        },
                        {
                            label: "Flash设计/开发",
                            en_name: "Flash Designer/Developer",
                            code: "1231"
                        },
                        {
                            label: "特效设计师",
                            en_name: "Special Effects Designer",
                            code: "1232"
                        },
                        {
                            label: "视觉设计师",
                            en_name: "Visual Effects Designer",
                            code: "1233"
                        },
                        {
                            label: "音效设计师",
                            en_name: "Sound Effects Designer",
                            code: "1234"
                        },
                        {
                            label: "网络信息安全工程师",
                            en_name: "Information Security Engineer",
                            code: "1235"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "1236"
                        }
                    ]
                },
                {
                    label: "IT-管理",
                    en_name: "IT-Management",
                    code: "13",
                    child: [
                        {
                            label: "首席技术执行官CTO/首席信息官CIO",
                            en_name: "Chief Technology Officer CTO/Chief Information Officer CIO",
                            code: "1301"
                        },
                        {
                            label: "技术总监/经理",
                            en_name: "Technical Director/Manager",
                            code: "1302"
                        },
                        {
                            label: "信息技术经理/主管",
                            en_name: "IT Manager/Supervisor",
                            code: "1303"
                        },
                        {
                            label: "信息技术专员",
                            en_name: "IT Specialist",
                            code: "1304"
                        },
                        {
                            label: "项目总监",
                            en_name: "Project Director",
                            code: "1305"
                        },
                        {
                            label: "项目经理",
                            en_name: "Project Manager",
                            code: "1306"
                        },
                        {
                            label: "项目主管",
                            en_name: "Project Supervisor",
                            code: "1307"
                        },
                        {
                            label: "项目执行/协调人员",
                            en_name: "Project Specialist / Coordinator",
                            code: "1308"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "1309"
                        }
                    ]
                },
                {
                    label: "IT-品管、技术支持及其它",
                    en_name: "IT-QA, Technical Support...",
                    code: "14",
                    child: [
                        {
                            label: "技术支持/维护经理",
                            en_name: "Technical Support/Maintenance Manager",
                            code: "1401"
                        },
                        {
                            label: "技术支持/维护工程师",
                            en_name: "Technical Support/Maintenance Engineer",
                            code: "1402"
                        },
                        {
                            label: "网络管理(Helpdesk)",
                            en_name: "Helpdesk",
                            code: "1403"
                        },
                        {
                            label: "标准化工程师",
                            en_name: "Standardization Engineer",
                            code: "1406"
                        },
                        {
                            label: "品质经理",
                            en_name: "Quality Assurance QA Manager",
                            code: "1407"
                        },
                        {
                            label: "系统测试",
                            en_name: "Systems Testing QA",
                            code: "1408"
                        },
                        {
                            label: "软件测试",
                            en_name: "Software Testing QA",
                            code: "1409"
                        },
                        {
                            label: "硬件测试",
                            en_name: "Hardware Testing QA",
                            code: "1410"
                        },
                        {
                            label: "文档工程师",
                            en_name: "Technical Writer",
                            code: "1412"
                        },
                        {
                            label: "手机维修",
                            en_name: "Mobile Phone Technician",
                            code: "1415"
                        },
                        {
                            label: "电脑维修",
                            en_name: "Computer Maintenance Technician",
                            code: "1416"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "1417"
                        }
                    ]
                },
                {
                    label: "通信技术开发及应用",
                    en_name: "Communication Technology and Application",
                    code: "15",
                    child: [
                        {
                            label: "通信技术工程师",
                            en_name: "Communication Engineer",
                            code: "1501"
                        },
                        {
                            label: "有线传输工程师",
                            en_name: "Wired Transmission Engineer",
                            code: "1502"
                        },
                        {
                            label: "无线通信工程师",
                            en_name: "Wireless Communication Engineer",
                            code: "1503"
                        },
                        {
                            label: "电信交换工程师",
                            en_name: "Telecommunication Exchange Engineer",
                            code: "1504"
                        },
                        {
                            label: "数据通信工程师",
                            en_name: "Data Communication Engineer",
                            code: "1505"
                        },
                        {
                            label: "移动通信工程师",
                            en_name: "Mobile Communication Engineer",
                            code: "1506"
                        },
                        {
                            label: "电信网络工程师",
                            en_name: "Telecommunication Network Engineer",
                            code: "1507"
                        },
                        {
                            label: "通信电源工程师",
                            en_name: "Communication Power Supply Engineer",
                            code: "1508"
                        },
                        {
                            label: "增值产品开发工程师",
                            en_name: "Value-Added Product Development Engineer",
                            code: "1509"
                        },
                        {
                            label: "手机软件开发工程师",
                            en_name: "Mobile Software Development Engineer",
                            code: "1510"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "1511"
                        }
                    ]
                },
                {
                    label: "电子/电器/半导体/仪器仪表",
                    en_name: "Electronics/Wiring/Semiconductor/Instrument/Industry",
                    code: "16",
                    child: [
                        {
                            label: "集成电路IC设计/应用工程师",
                            en_name: "IC Design/Application Engineer",
                            code: "1601"
                        },
                        {
                            label: "IC验证工程师",
                            en_name: "IC Verification Engineer",
                            code: "1602"
                        },
                        {
                            label: "电子工程师/技术员",
                            en_name: "Electronics Engineer",
                            code: "1603"
                        },
                        {
                            label: "电子技术研发工程师",
                            en_name: "Electronics Development Engineer",
                            code: "1604"
                        },
                        {
                            label: "射频工程师",
                            en_name: "RF Engineer",
                            code: "1605"
                        },
                        {
                            label: "电子/电器维修工程师/技师",
                            en_name: "Electronic/Electrical Appliance Technologist",
                            code: "1606"
                        },
                        {
                            label: "变压器与磁电工程师",
                            en_name: "Transformer and Magnetoelectricity Engineer",
                            code: "1607"
                        },
                        {
                            label: "版图设计工程师",
                            en_name: "Layout Design Engineer",
                            code: "1608"
                        },
                        {
                            label: "电气工程师/技术员",
                            en_name: "Electrical Engineer",
                            code: "1609"
                        },
                        {
                            label: "电路工程师/技术员(模拟/数字)",
                            en_name: "Electronic Circuit Engineer(Analog/Digital)",
                            code: "1610"
                        },
                        {
                            label: "电声/音响工程师/技术员",
                            en_name: "Electroacoustics Engineer",
                            code: "1611"
                        },
                        {
                            label: "激光/光电子技术",
                            en_name: "Laser/Optoelectronics Technology",
                            code: "1612"
                        },
                        {
                            label: "半导体技术",
                            en_name: "Semiconductor Technology",
                            code: "1613"
                        },
                        {
                            label: "自动控制工程师/技术员",
                            en_name: "Autocontrol Engineer/Technician",
                            code: "1614"
                        },
                        {
                            label: "电子软件开发(ARM/MCU...)",
                            en_name: "Electronics Software (ARM/MCU…)",
                            code: "1615"
                        },
                        {
                            label: "嵌入式软件开发(Linux/单片机/PLC/DSP…)",
                            en_name: "Embedded Software Engineer (Linux/SCM/PLC/DSP…)",
                            code: "1616"
                        },
                        {
                            label: "嵌入式硬件开发(主板机…)",
                            en_name: "Embedded Hardware Engineer(PCB…)",
                            code: "1617"
                        },
                        {
                            label: "电池/电源开发",
                            en_name: "Battery/Power Engineer",
                            code: "1618"
                        },
                        {
                            label: "FAE 现场应用工程师",
                            en_name: "Field Application Engineer (FAE)",
                            code: "1619"
                        },
                        {
                            label: "工艺工程师",
                            en_name: "Process Engineer",
                            code: "1620"
                        },
                        {
                            label: "家用电器/数码产品研发",
                            en_name: "Household Electronics/Digital Products Development",
                            code: "1621"
                        },
                        {
                            label: "仪器/仪表/计量分析师",
                            en_name: "Instrument/Measurement Analyst",
                            code: "1622"
                        },
                        {
                            label: "测试工程师",
                            en_name: "Quality Testing Engineer",
                            code: "1623"
                        },
                        {
                            label: "安防系统工程师",
                            en_name: "Security System Engineer",
                            code: "1624"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "1625"
                        }
                    ]
                },
                {
                    label: "销售管理",
                    en_name: "Sales Management",
                    code: "17",
                    child: [
                        {
                            label: "销售总监",
                            en_name: "Sales Director",
                            code: "1701"
                        },
                        {
                            label: "销售经理",
                            en_name: "Sales Manager",
                            code: "1702"
                        },
                        {
                            label: "销售主管",
                            en_name: "Sales Supervisor",
                            code: "1703"
                        },
                        {
                            label: "业务拓展主管/经理",
                            en_name: "Business Development Supervisor/Manager",
                            code: "1704"
                        },
                        {
                            label: "渠道/分销总监",
                            en_name: "Channel/Distribution Director",
                            code: "1705"
                        },
                        {
                            label: "渠道/分销经理",
                            en_name: "Channel/Distribution Manager",
                            code: "1706"
                        },
                        {
                            label: "渠道/分销主管",
                            en_name: "Channel/Distribution Supervisor",
                            code: "1707"
                        },
                        {
                            label: "大客户管理",
                            en_name: "Key Account Management",
                            code: "1708"
                        },
                        {
                            label: "客户经理/主管",
                            en_name: "Sales Account Manager/Supervisor",
                            code: "1709"
                        },
                        {
                            label: "区域销售总监",
                            en_name: "Regional Sales Director",
                            code: "1710"
                        },
                        {
                            label: "区域销售经理",
                            en_name: "Regional Sales Manager",
                            code: "1711"
                        },
                        {
                            label: "团购经理/主管",
                            en_name: "Group Purchase Manager/Supervisor",
                            code: "1712"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "1713"
                        }
                    ]
                },
                {
                    label: "销售人员",
                    en_name: "Salespersons",
                    code: "18",
                    child: [
                        {
                            label: "大客户销售",
                            en_name: "Key Account Sales",
                            code: "1801"
                        },
                        {
                            label: "销售代表",
                            en_name: "Sales Representative / Executive",
                            code: "1802"
                        },
                        {
                            label: "渠道/分销专员",
                            en_name: "Channel/Distribution Representative",
                            code: "1803"
                        },
                        {
                            label: "客户代表",
                            en_name: "Sales Account Representative",
                            code: "1804"
                        },
                        {
                            label: "销售工程师",
                            en_name: "Sales Engineer",
                            code: "1805"
                        },
                        {
                            label: "电话销售",
                            en_name: "Telesales",
                            code: "1806"
                        },
                        {
                            label: "网络/在线销售",
                            en_name: "Online Sales",
                            code: "1807"
                        },
                        {
                            label: "团购业务员",
                            en_name: "Group Purchase Representative",
                            code: "1808"
                        },
                        {
                            label: "经销商",
                            en_name: "Distributor",
                            code: "1809"
                        },
                        {
                            label: "会籍顾问",
                            en_name: "Membership Consultant",
                            code: "1810"
                        },
                        {
                            label: "销售助理",
                            en_name: "Sales Assistant",
                            code: "1811"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "1812"
                        }
                    ]
                },
                {
                    label: "销售行政及商务",
                    en_name: "Sales Administration",
                    code: "19",
                    child: [
                        {
                            label: "销售行政经理/主管",
                            en_name: "Sales Admin. Manager/Supervisor",
                            code: "1901"
                        },
                        {
                            label: "销售行政专员/助理",
                            en_name: "Sales Admin. Executive/Assistant",
                            code: "1902"
                        },
                        {
                            label: "业务分析经理/主管",
                            en_name: "Business Analysis Manager/Supervisor",
                            code: "1903"
                        },
                        {
                            label: "业务分析专员/助理",
                            en_name: "Business Analysis Specialist/Assistant",
                            code: "1904"
                        },
                        {
                            label: "商务经理",
                            en_name: "Business Manager",
                            code: "1905"
                        },
                        {
                            label: "商务主管/专员",
                            en_name: "Business Supervisor/Executive",
                            code: "1906"
                        },
                        {
                            label: "商务助理",
                            en_name: "Business Assistant",
                            code: "1907"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "1909"
                        }
                    ]
                },
                {
                    label: "客服及支持",
                    en_name: "Customer Service and Technical Support",
                    code: "20",
                    child: [
                        {
                            label: "客服总监",
                            en_name: "Customer Service Director",
                            code: "2001"
                        },
                        {
                            label: "客服经理",
                            en_name: "Customer Service Manager",
                            code: "2002"
                        },
                        {
                            label: "客服主管",
                            en_name: "Customer Service Supervisor",
                            code: "2003"
                        },
                        {
                            label: "客服专员/助理",
                            en_name: "Customer Service Executive/Assistant",
                            code: "2004"
                        },
                        {
                            label: "客户关系经理/主管",
                            en_name: "Customer Relations Management",
                            code: "2005"
                        },
                        {
                            label: "售前/售后技术支持经理",
                            en_name: "Technical Support Manager",
                            code: "2006"
                        },
                        {
                            label: "售前/售后技术支持主管",
                            en_name: "Technical Support Supervisor",
                            code: "2007"
                        },
                        {
                            label: "售前/售后技术支持工程师",
                            en_name: "Technical Support Engineer",
                            code: "2008"
                        },
                        {
                            label: "咨询热线/呼叫中心服务人员",
                            en_name: "Customer Hot Line/Call Center Staff",
                            code: "2009"
                        },
                        {
                            label: "网络/在线客服",
                            en_name: "Online Customer Service",
                            code: "2010"
                        },
                        {
                            label: "投诉专员",
                            en_name: "Complaints Specialist",
                            code: "2011"
                        },
                        {
                            label: "VIP专员",
                            en_name: "VIP Member Specialist",
                            code: "2012"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "2013"
                        }
                    ]
                },
                {
                    label: "财务/审计/税务",
                    en_name: "Finance/Accounting/Audit/Tax",
                    code: "21",
                    child: [
                        {
                            label: "首席财务官 CFO",
                            en_name: "Chief Financial Officer CFO",
                            code: "2101"
                        },
                        {
                            label: "财务总监",
                            en_name: "Finance Controller / Director",
                            code: "2102"
                        },
                        {
                            label: "财务经理",
                            en_name: "Finance Manager",
                            code: "2103"
                        },
                        {
                            label: "财务顾问",
                            en_name: "Finance Consultant",
                            code: "2104"
                        },
                        {
                            label: "财务主管/总账主管",
                            en_name: "Finance Supervisor",
                            code: "2105"
                        },
                        {
                            label: "会计经理/会计主管",
                            en_name: "Accounting Manager/Supervisor",
                            code: "2106"
                        },
                        {
                            label: "会计",
                            en_name: "Accountant / Accounting Trainee",
                            code: "2107"
                        },
                        {
                            label: "出纳员",
                            en_name: "Cashier",
                            code: "2108"
                        },
                        {
                            label: "财务助理/文员",
                            en_name: "Finance/Accounting Assistant",
                            code: "2109"
                        },
                        {
                            label: "固定资产会计",
                            en_name: "Fixed Asset Accounting",
                            code: "2110"
                        },
                        {
                            label: "财务分析经理/主管",
                            en_name: "Financial Analysis Manager/Supervisor",
                            code: "2111"
                        },
                        {
                            label: "财务分析员",
                            en_name: "Financial Analyst",
                            code: "2112"
                        },
                        {
                            label: "成本经理/成本主管",
                            en_name: "Cost Accounting Manager/Supervisor",
                            code: "2113"
                        },
                        {
                            label: "成本管理员",
                            en_name: "Cost Accounting Specialist",
                            code: "2114"
                        },
                        {
                            label: "资金经理/主管",
                            en_name: "Treasury Manager/Supervisor",
                            code: "2115"
                        },
                        {
                            label: "资金专员",
                            en_name: "Treasury Specialist",
                            code: "2116"
                        },
                        {
                            label: "审计经理/主管",
                            en_name: "Audit Manager/Supervisor",
                            code: "2117"
                        },
                        {
                            label: "审计专员/助理",
                            en_name: "Audit Executive/Assistant",
                            code: "2118"
                        },
                        {
                            label: "税务经理/税务主管",
                            en_name: "Tax Manager/Supervisor",
                            code: "2119"
                        },
                        {
                            label: "税务专员/助理",
                            en_name: "Tax Executive/Assistant",
                            code: "2120"
                        },
                        {
                            label: "统计员",
                            en_name: "Statistician",
                            code: "2121"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "2122"
                        }
                    ]
                },
                {
                    label: "金融/证券/期货/投资",
                    en_name: "Finance/Securities/Commodities/Investments",
                    code: "22",
                    child: [
                        {
                            label: "证券/期货/外汇经纪人",
                            en_name: "Securities Broker",
                            code: "2201"
                        },
                        {
                            label: "证券分析师",
                            en_name: "Securities Analyst",
                            code: "2202"
                        },
                        {
                            label: "股票/期货操盘手",
                            en_name: "Stocks/Futures Operator",
                            code: "2203"
                        },
                        {
                            label: "金融/经济研究员",
                            en_name: "Financial Analyst/Economist",
                            code: "2204"
                        },
                        {
                            label: "金融产品经理",
                            en_name: "Financial Product Manager",
                            code: "2205"
                        },
                        {
                            label: "金融产品销售",
                            en_name: "Financial Product Sales",
                            code: "2206"
                        },
                        {
                            label: "投资/基金项目经理",
                            en_name: "Investment Manager/Fund Manager",
                            code: "2207"
                        },
                        {
                            label: "投资/理财顾问",
                            en_name: "Investment/Financial Management Advisor",
                            code: "2208"
                        },
                        {
                            label: "投资银行业务",
                            en_name: "Investment Banking Specialist",
                            code: "2209"
                        },
                        {
                            label: "投资银行财务分析",
                            en_name: "Investment Banking Financial Analyst",
                            code: "2210"
                        },
                        {
                            label: "融资经理/融资主管",
                            en_name: "Treasury Manager/Supervisor",
                            code: "2211"
                        },
                        {
                            label: "融资专员",
                            en_name: "Treasury Specialist",
                            code: "2212"
                        },
                        {
                            label: "风险管理/控制",
                            en_name: "Risk Management",
                            code: "2213"
                        },
                        {
                            label: "拍卖/担保/典当业务",
                            en_name: "Auction/Guarantee/Pawn Business",
                            code: "2214"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "2215"
                        }
                    ]
                },
                {
                    label: "银行",
                    en_name: "Banks",
                    code: "23",
                    child: [
                        {
                            label: "行长/副行长",
                            en_name: "President/Vice-President/Branch Manager",
                            code: "2301"
                        },
                        {
                            label: "银行客户总监",
                            en_name: "Account Director",
                            code: "2302"
                        },
                        {
                            label: "个人业务部门经理/主管",
                            en_name: "Personal Banking Manager/Supervisor",
                            code: "2303"
                        },
                        {
                            label: "个人业务客户经理",
                            en_name: "Personal Banking Account Manager",
                            code: "2304"
                        },
                        {
                            label: "公司业务部门经理/主管",
                            en_name: "Corporate Banking Manager",
                            code: "2305"
                        },
                        {
                            label: "公司业务客户经理",
                            en_name: "Corporate Banking Account Manager",
                            code: "2306"
                        },
                        {
                            label: "综合业务经理/主管",
                            en_name: "Integrated Service Manager/Supervisor",
                            code: "2307"
                        },
                        {
                            label: "综合业务专员",
                            en_name: "Integrated Service Officer",
                            code: "2308"
                        },
                        {
                            label: "资产评估/分析",
                            en_name: "Assets Valuation/Analyst",
                            code: "2309"
                        },
                        {
                            label: "风险控制",
                            en_name: "Risk Management",
                            code: "2310"
                        },
                        {
                            label: "信贷管理",
                            en_name: "Loan/Credit Officer",
                            code: "2311"
                        },
                        {
                            label: "信审核查",
                            en_name: "Credit Review",
                            code: "2312"
                        },
                        {
                            label: "进出口/信用证结算",
                            en_name: "Trading / LC Officer",
                            code: "2313"
                        },
                        {
                            label: "外汇交易",
                            en_name: "Foreign Exchange",
                            code: "2314"
                        },
                        {
                            label: "清算人员",
                            en_name: "Settlement Officer",
                            code: "2315"
                        },
                        {
                            label: "高级客户经理/客户经理",
                            en_name: "Senior Relationship Manager",
                            code: "2316"
                        },
                        {
                            label: "客户主管/专员",
                            en_name: "Relationship Supervisor/Executive",
                            code: "2317"
                        },
                        {
                            label: "营业部大堂经理",
                            en_name: "Branch Lobby Manager",
                            code: "2318"
                        },
                        {
                            label: "信用卡销售",
                            en_name: "Credit Card/E-banking business Develop",
                            code: "2319"
                        },
                        {
                            label: "呼叫中心客服",
                            en_name: "Call Center Customer Service",
                            code: "2320"
                        },
                        {
                            label: "银行柜员",
                            en_name: "Bank Teller",
                            code: "2321"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "2322"
                        }
                    ]
                },
                {
                    label: "保险",
                    en_name: "Insurance",
                    code: "24",
                    child: [
                        {
                            label: "保险精算师",
                            en_name: "Actuary",
                            code: "2401"
                        },
                        {
                            label: "保险产品开发/项目策划",
                            en_name: "Product Development/Planner",
                            code: "2402"
                        },
                        {
                            label: "保险业务经理/主管",
                            en_name: "Business Manager/Supervisor",
                            code: "2403"
                        },
                        {
                            label: "保险经纪人/保险代理",
                            en_name: "Agent/Broker",
                            code: "2404"
                        },
                        {
                            label: "理财顾问/财务规划师",
                            en_name: "Financial Advisor/Financial Planner",
                            code: "2405"
                        },
                        {
                            label: "储备经理人",
                            en_name: "Agency Management Associate",
                            code: "2406"
                        },
                        {
                            label: "保险电销",
                            en_name: "Insurance Telesales",
                            code: "2407"
                        },
                        {
                            label: "保险核保",
                            en_name: "Underwriting",
                            code: "2408"
                        },
                        {
                            label: "保险理赔",
                            en_name: "Claim Management",
                            code: "2409"
                        },
                        {
                            label: "保险客户服务/续期管理",
                            en_name: "Customer Service",
                            code: "2410"
                        },
                        {
                            label: "保险培训师",
                            en_name: "Trainer",
                            code: "2411"
                        },
                        {
                            label: "保险内勤",
                            en_name: "Staff",
                            code: "2412"
                        },
                        {
                            label: "契约管理",
                            en_name: "Policy Management",
                            code: "2413"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "2414"
                        }
                    ]
                },
                {
                    label: "生产/营运",
                    en_name: "Manufacturing/Operation",
                    code: "25",
                    child: [
                        {
                            label: "工厂经理/厂长",
                            en_name: "Plant/Factory Manager",
                            code: "2501"
                        },
                        {
                            label: "总工程师/副总工程师",
                            en_name: "Chief Engineer",
                            code: "2502"
                        },
                        {
                            label: "项目总监",
                            en_name: "Project Director",
                            code: "2503"
                        },
                        {
                            label: "项目经理/主管",
                            en_name: "Project Manager/Supervisor",
                            code: "2504"
                        },
                        {
                            label: "项目工程师",
                            en_name: "Project Engineer",
                            code: "2505"
                        },
                        {
                            label: "营运经理",
                            en_name: "Operations Manager",
                            code: "2506"
                        },
                        {
                            label: "营运主管",
                            en_name: "Operations Supervisor",
                            code: "2507"
                        },
                        {
                            label: "生产总监",
                            en_name: "Production Director",
                            code: "2508"
                        },
                        {
                            label: "生产经理/车间主任",
                            en_name: "Production Manager/Workshop Supervisor",
                            code: "2509"
                        },
                        {
                            label: "生产主管",
                            en_name: "Production Supervisor",
                            code: "2510"
                        },
                        {
                            label: "生产领班/组长",
                            en_name: "Production Team Leader",
                            code: "2511"
                        },
                        {
                            label: "生产计划/物料管理(PMC)",
                            en_name: "Planner/PMC",
                            code: "2512"
                        },
                        {
                            label: "生产文员",
                            en_name: "Clerk",
                            code: "2513"
                        },
                        {
                            label: "设备主管",
                            en_name: "Equipment Supervisor",
                            code: "2514"
                        },
                        {
                            label: "化验员",
                            en_name: "Laboratory Technician",
                            code: "2515"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "2516"
                        }
                    ]
                },
                {
                    label: "质量安全",
                    en_name: "Quality Control/Safety Protection",
                    code: "26",
                    child: [
                        {
                            label: "质量管理/测试经理(QA/QC经理)",
                            en_name: "QA/QC Manager",
                            code: "2601"
                        },
                        {
                            label: "质量管理/测试主管(QA/QC主管)",
                            en_name: "QA/QC Supervisor",
                            code: "2602"
                        },
                        {
                            label: "质量管理/测试工程师(QA/QC工程师)",
                            en_name: "QA/QC Engineer",
                            code: "2603"
                        },
                        {
                            label: "质量检验员/测试员",
                            en_name: "Quality Inspector/Tester",
                            code: "2604"
                        },
                        {
                            label: "认证工程师",
                            en_name: "Certification Engineer",
                            code: "2607"
                        },
                        {
                            label: "体系工程师/系统工程师",
                            en_name: "Systems Engineer",
                            code: "2608"
                        },
                        {
                            label: "审核员",
                            en_name: "Auditor",
                            code: "2609"
                        },
                        {
                            label: "环境/健康/安全经理/主管（EHS）",
                            en_name: "Environmental/Health/ Safety Manager/Supervisor",
                            code: "2610"
                        },
                        {
                            label: "环境/健康/安全工程师（EHS）",
                            en_name: "Environmental/Health/ Safety Engineer",
                            code: "2611"
                        },
                        {
                            label: "安全员",
                            en_name: "Safety Protection",
                            code: "2612"
                        },
                        {
                            label: "供应商管理",
                            en_name: "Supplier/Vendor Management",
                            code: "2613"
                        },
                        {
                            label: "采购材料、设备质量管理",
                            en_name: "Supplies & Equipment Quality Management",
                            code: "2614"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "2615"
                        }
                    ]
                },
                {
                    label: "工程/机械/能源",
                    en_name: "Engineering/Mechanical/Energy",
                    code: "27",
                    child: [
                        {
                            label: "技术研发经理/主管",
                            en_name: "Technical Design Mgr./Spvr.",
                            code: "2701"
                        },
                        {
                            label: "技术研发工程师",
                            en_name: "Technical Design Engineer",
                            code: "2702"
                        },
                        {
                            label: "产品工艺/制程工程师",
                            en_name: "Process Engineer",
                            code: "2703"
                        },
                        {
                            label: "项目管理",
                            en_name: "Project Management",
                            code: "2705"
                        },
                        {
                            label: "实验室负责人/工程师",
                            en_name: "Lab Manager/Engineer",
                            code: "2706"
                        },
                        {
                            label: "工程/设备经理",
                            en_name: "Engineering/Facility Manager",
                            code: "2707"
                        },
                        {
                            label: "工程/设备主管",
                            en_name: "Engineering/Facility Supervisor",
                            code: "2708"
                        },
                        {
                            label: "工程/设备工程师",
                            en_name: "Engineering/Facility Engineer",
                            code: "2709"
                        },
                        {
                            label: "工程/机械绘图员",
                            en_name: "Project Drafting Specialist/Mechanical Drawing",
                            code: "2710"
                        },
                        {
                            label: "工业工程师",
                            en_name: "Industrial Engineer",
                            code: "2711"
                        },
                        {
                            label: "材料工程师",
                            en_name: "Material Engineer",
                            code: "2712"
                        },
                        {
                            label: "机械工程师",
                            en_name: "Mechanical Engineer",
                            code: "2713"
                        },
                        {
                            label: "结构工程师",
                            en_name: "Structrual Engineer",
                            code: "2714"
                        },
                        {
                            label: "模具工程师",
                            en_name: "Tooling Engineer",
                            code: "2715"
                        },
                        {
                            label: "机电工程师",
                            en_name: "Electrical & Mechanical Engineer",
                            code: "2716"
                        },
                        {
                            label: "维修经理/主管",
                            en_name: "Maintenance Manager/Supervisor",
                            code: "2717"
                        },
                        {
                            label: "维修工程师",
                            en_name: "Maintenance Engineer",
                            code: "2718"
                        },
                        {
                            label: "装配工程师/技师",
                            en_name: "Packaging&Assembly Engineer",
                            code: "2719"
                        },
                        {
                            label: "铸造/锻造工程师/技师",
                            en_name: "Casting/Forging Engineer",
                            code: "2720"
                        },
                        {
                            label: "注塑工程师/技师",
                            en_name: "Injection Engineer",
                            code: "2721"
                        },
                        {
                            label: "焊接工程师/技师",
                            en_name: "Welding Engineer",
                            code: "2722"
                        },
                        {
                            label: "夹具工程师/技师",
                            en_name: "Clamp Engineer",
                            code: "2723"
                        },
                        {
                            label: "CNC工程师",
                            en_name: "CNC Engineer",
                            code: "2724"
                        },
                        {
                            label: "冲压工程师/技师",
                            en_name: "Punch Engineer",
                            code: "2725"
                        },
                        {
                            label: "锅炉工程师/技师",
                            en_name: "Boiler Engineer",
                            code: "2726"
                        },
                        {
                            label: "电力工程师/技术员",
                            en_name: "Electric Power Engineer",
                            code: "2727"
                        },
                        {
                            label: "光源与照明工程",
                            en_name: "Lighting Engineer",
                            code: "2728"
                        },
                        {
                            label: "光伏系统工程师",
                            en_name: "Photovoltaic System Engineer",
                            code: "2729"
                        },
                        {
                            label: "汽车/摩托车工程师",
                            en_name: "Automotive Engineer",
                            code: "2730"
                        },
                        {
                            label: "船舶工程师",
                            en_name: "Shipping Engineer",
                            code: "2731"
                        },
                        {
                            label: "轨道交通工程师/技术员",
                            en_name: "Railway Engineer / Technician",
                            code: "2732"
                        },
                        {
                            label: "飞机维修机械师",
                            en_name: "Aviation Maintenance Technician",
                            code: "2733"
                        },
                        {
                            label: "飞行器设计与制造",
                            en_name: "Aircraft Design & Manufacture",
                            code: "2734"
                        },
                        {
                            label: "水利/水电工程师",
                            en_name: "Water Conservancy/Hydroelectricity Engineer",
                            code: "2735"
                        },
                        {
                            label: "空调/热能工程师",
                            en_name: "Air-Condition/Thermal Engineer",
                            code: "2736"
                        },
                        {
                            label: "石油天然气技术人员",
                            en_name: "Oil/Gas Technician",
                            code: "2737"
                        },
                        {
                            label: "矿产勘探/地质勘测工程师",
                            en_name: "Mineral Exploration / Geological Survey Engineer",
                            code: "2738"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "2739"
                        }
                    ]
                },
                {
                    label: "汽车制造",
                    en_name: "Auto Manufacturing",
                    code: "28",
                    child: [
                        {
                            label: "汽车机构工程师",
                            en_name: "Automotive Structural Engineer",
                            code: "2801"
                        },
                        {
                            label: "汽车设计工程师",
                            en_name: "Automotive Design Engineer",
                            code: "2802"
                        },
                        {
                            label: "汽车电子工程师",
                            en_name: "Automotive Electronics Engineer",
                            code: "2803"
                        },
                        {
                            label: "发动机/总装工程师",
                            en_name: "Engine/Assembly Engineer",
                            code: "2804"
                        },
                        {
                            label: "汽车项目管理",
                            en_name: "Automotive Project Management",
                            code: "2805"
                        },
                        {
                            label: "汽车质量管理",
                            en_name: "Automotive Quality Management",
                            code: "2806"
                        },
                        {
                            label: "汽车安全性能工程师",
                            en_name: "Safety Performance Engineer",
                            code: "2807"
                        },
                        {
                            label: "汽车装配工艺工程师",
                            en_name: "Assembly Process Engineer",
                            code: "2808"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "2809"
                        }
                    ]
                },
                {
                    label: "汽车销售与服务",
                    en_name: "Auto Sales & Services",
                    code: "29",
                    child: [
                        {
                            label: "4S店经理/维修站经理",
                            en_name: "4S Shop Manager / Maintenance Station Manager",
                            code: "2901"
                        },
                        {
                            label: "汽车销售/经纪人",
                            en_name: "Automotive Sales Consultant / Brokers",
                            code: "2902"
                        },
                        {
                            label: "汽车修理工",
                            en_name: "Automotive Repair",
                            code: "2903"
                        },
                        {
                            label: "汽车检验/检测",
                            en_name: "Auto Inspector",
                            code: "2907"
                        },
                        {
                            label: "汽车装饰美容",
                            en_name: "Auto Beauty Technician",
                            code: "2908"
                        },
                        {
                            label: "洗车工",
                            en_name: "Car Washing Staff",
                            code: "2909"
                        },
                        {
                            label: "售后服务/客户服务",
                            en_name: "After-Sales Service/Customer Service",
                            code: "2910"
                        },
                        {
                            label: "二手车评估师",
                            en_name: "Second-Hand Car Appraisers",
                            code: "2911"
                        },
                        {
                            label: "加油站工作员",
                            en_name: "Gas Station Worker",
                            code: "2912"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "2913"
                        }
                    ]
                },
                {
                    label: "技工普工",
                    en_name: "Technician / General Worker",
                    code: "30",
                    child: [
                        {
                            label: "普工/操作工",
                            en_name: "General Worker",
                            code: "3001"
                        },
                        {
                            label: "技工",
                            en_name: "Technician / Engineer Trainee",
                            code: "3002"
                        },
                        {
                            label: "叉车/铲车工",
                            en_name: "Forklift Worker",
                            code: "3003"
                        },
                        {
                            label: "学徒工",
                            en_name: "Apprentice",
                            code: "3020"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "3021"
                        }
                    ]
                },
                {
                    label: "服装/纺织/皮革",
                    en_name: "Apparels/Textiles/Leather Goods",
                    code: "31",
                    child: [
                        {
                            label: "服装/纺织设计总监",
                            en_name: "Fashion/Textiles Design Director",
                            code: "3101"
                        },
                        {
                            label: "服装/纺织设计",
                            en_name: "Fashion/Textiles Designer",
                            code: "3102"
                        },
                        {
                            label: "服装/纺织/皮革工艺师",
                            en_name: "Fashion/Textiles/Leather Technologist",
                            code: "3103"
                        },
                        {
                            label: "面料辅料开发",
                            en_name: "Fabric/Accessories Development",
                            code: "3104"
                        },
                        {
                            label: "面料辅料采购",
                            en_name: "Fabric/Accessories Purchasing",
                            code: "3105"
                        },
                        {
                            label: "服装/纺织/皮革跟单",
                            en_name: "Apparels/Textiles/Leather Goods Merchandiser",
                            code: "3106"
                        },
                        {
                            label: "服装领班",
                            en_name: "Apparels Foreman",
                            code: "3107"
                        },
                        {
                            label: "质量管理/验货员(QA/QC)",
                            en_name: "Quality Management QA/QC",
                            code: "3108"
                        },
                        {
                            label: "板房/楦头/底格出格师",
                            en_name: "Shoe Tree Design",
                            code: "3109"
                        },
                        {
                            label: "电脑放码员",
                            en_name: "Grading",
                            code: "3110"
                        },
                        {
                            label: "纸样师/车板工",
                            en_name: "Paper Sample",
                            code: "3111"
                        },
                        {
                            label: "裁床",
                            en_name: "Cut Bed",
                            code: "3112"
                        },
                        {
                            label: "打样/制版",
                            en_name: "Sample Production",
                            code: "3113"
                        },
                        {
                            label: "裁剪工",
                            en_name: "Cutter",
                            code: "3114"
                        },
                        {
                            label: "缝纫工",
                            en_name: "Tailor",
                            code: "3115"
                        },
                        {
                            label: "手缝工",
                            en_name: "Hand Sewing Workers",
                            code: "3116"
                        },
                        {
                            label: "烫工",
                            en_name: "Kaumographer",
                            code: "3117"
                        },
                        {
                            label: "样衣工",
                            en_name: "Sample Worker",
                            code: "3118"
                        },
                        {
                            label: "纺织工",
                            en_name: "Weaver",
                            code: "3119"
                        },
                        {
                            label: "针织工",
                            en_name: "Knitter",
                            code: "3120"
                        },
                        {
                            label: "配色工",
                            en_name: "Color Matching Technician",
                            code: "3121"
                        },
                        {
                            label: "印染工",
                            en_name: "Dyeing and Printing Workers",
                            code: "3122"
                        },
                        {
                            label: "漂染工",
                            en_name: "Dyeing Workers",
                            code: "3123"
                        },
                        {
                            label: "挡车工",
                            en_name: "Spinner",
                            code: "3124"
                        },
                        {
                            label: "整经工",
                            en_name: "Warper",
                            code: "3125"
                        },
                        {
                            label: "细纱工",
                            en_name: "Doffer",
                            code: "3126"
                        },
                        {
                            label: "浆纱工",
                            en_name: "Warp Sizing Worker",
                            code: "3127"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "3128"
                        }
                    ]
                },
                {
                    label: "采购",
                    en_name: "Purchasing",
                    code: "32",
                    child: [
                        {
                            label: "采购总监",
                            en_name: "Purchasing Director",
                            code: "3201"
                        },
                        {
                            label: "采购经理",
                            en_name: "Purchasing Manager",
                            code: "3202"
                        },
                        {
                            label: "采购主管",
                            en_name: "Purchasing Supervisor",
                            code: "3203"
                        },
                        {
                            label: "采购员",
                            en_name: "Purchasing Specialist/Staff",
                            code: "3204"
                        },
                        {
                            label: "采购助理",
                            en_name: "Purchasing Assistant",
                            code: "3205"
                        },
                        {
                            label: "买手",
                            en_name: "Buyer",
                            code: "3206"
                        },
                        {
                            label: "供应商开发",
                            en_name: "Supplier Development",
                            code: "3207"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "3208"
                        }
                    ]
                },
                {
                    label: "贸易",
                    en_name: "Trading",
                    code: "33",
                    child: [
                        {
                            label: "贸易/外贸经理/主管",
                            en_name: "Trading/Manager/Supervisor",
                            code: "3301"
                        },
                        {
                            label: "贸易/外贸专员/助理",
                            en_name: "Trading/Specialist/Assistant",
                            code: "3302"
                        },
                        {
                            label: "业务跟单经理",
                            en_name: "Merchandising Manager",
                            code: "3304"
                        },
                        {
                            label: "高级业务跟单",
                            en_name: "Senior Merchandiser",
                            code: "3305"
                        },
                        {
                            label: "业务跟单",
                            en_name: "Merchandiser",
                            code: "3306"
                        },
                        {
                            label: "助理业务跟单",
                            en_name: "Assistant Merchandiser",
                            code: "3307"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "3308"
                        }
                    ]
                },
                {
                    label: "物流/仓储",
                    en_name: "Logistics/Warehouse",
                    code: "34",
                    child: [
                        {
                            label: "物流总监",
                            en_name: "Logistics Director",
                            code: "3401"
                        },
                        {
                            label: "物流经理",
                            en_name: "Logistics Manager",
                            code: "3402"
                        },
                        {
                            label: "物流主管",
                            en_name: "Logistics Supervisor",
                            code: "3403"
                        },
                        {
                            label: "物流专员/助理",
                            en_name: "Logistics Specialist/Assistant",
                            code: "3404"
                        },
                        {
                            label: "供应链总监",
                            en_name: "Supply Chain Director",
                            code: "3405"
                        },
                        {
                            label: "供应链经理",
                            en_name: "Supply Chain Manager",
                            code: "3406"
                        },
                        {
                            label: "供应链主管/专员",
                            en_name: "Supply Chain Supervisor/Specialist",
                            code: "3407"
                        },
                        {
                            label: "物料经理",
                            en_name: "Materials Manager",
                            code: "3408"
                        },
                        {
                            label: "物料主管/专员",
                            en_name: "Materials Supervisor/Specialist",
                            code: "3409"
                        },
                        {
                            label: "仓库经理/主管",
                            en_name: "Warehouse Manager",
                            code: "3410"
                        },
                        {
                            label: "仓库管理员",
                            en_name: "Warehouse Specialist",
                            code: "3411"
                        },
                        {
                            label: "订单处理员",
                            en_name: "Order Processing",
                            code: "3412"
                        },
                        {
                            label: "运输经理/主管",
                            en_name: "Distribution Manager/Supervisor",
                            code: "3413"
                        },
                        {
                            label: "项目经理/主管",
                            en_name: "Project Manager/Supervisor",
                            code: "3414"
                        },
                        {
                            label: "货运代理",
                            en_name: "Traffic Agent",
                            code: "3415"
                        },
                        {
                            label: "集装箱业务",
                            en_name: "Container Operator",
                            code: "3416"
                        },
                        {
                            label: "海关事务管理",
                            en_name: "Customs Affairs Management",
                            code: "3417"
                        },
                        {
                            label: "报关与报检",
                            en_name: "Customs Specialist",
                            code: "3418"
                        },
                        {
                            label: "单证员",
                            en_name: "Documentation Specialist",
                            code: "3419"
                        },
                        {
                            label: "船务/空运陆运操作",
                            en_name: "Shipping Specialist",
                            code: "3420"
                        },
                        {
                            label: "快递员",
                            en_name: "Courier",
                            code: "3421"
                        },
                        {
                            label: "调度员",
                            en_name: "Dispatcher",
                            code: "3422"
                        },
                        {
                            label: "安检员",
                            en_name: "Screeners",
                            code: "3423"
                        },
                        {
                            label: "理货员",
                            en_name: "Warehouse Stock Management",
                            code: "3424"
                        },
                        {
                            label: "搬运工",
                            en_name: "Mover",
                            code: "3425"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "3426"
                        }
                    ]
                },
                {
                    label: "生物/制药/医疗器械",
                    en_name: "Biotechnology/Pharmaceuticals/Medical Equipment",
                    code: "35",
                    child: [
                        {
                            label: "生物工程/生物制药",
                            en_name: "Biotechnology/Pharmaceuticals",
                            code: "3501"
                        },
                        {
                            label: "化学分析测试员",
                            en_name: "Chemical Analyst",
                            code: "3502"
                        },
                        {
                            label: "医药技术研发管理人员",
                            en_name: "Pharmaceutical Technology R&D Management",
                            code: "3503"
                        },
                        {
                            label: "医药技术研发人员",
                            en_name: "Pharmaceutical Technology R&D Specialist",
                            code: "3504"
                        },
                        {
                            label: "医药学术推广",
                            en_name: "Pharmaceutical Academic Promotion",
                            code: "3505"
                        },
                        {
                            label: "临床研究员",
                            en_name: "Clinical Researcher",
                            code: "3506"
                        },
                        {
                            label: "临床协调员",
                            en_name: "Clinical Coodinator",
                            code: "3507"
                        },
                        {
                            label: "临床数据分析员",
                            en_name: "Clinical Data Analyst",
                            code: "3508"
                        },
                        {
                            label: "药品注册",
                            en_name: "Pharmaceuticals Register Specialist",
                            code: "3509"
                        },
                        {
                            label: "药品生产/质量管理",
                            en_name: "Pharmaceutical Manufacturing/Quality Management",
                            code: "3510"
                        },
                        {
                            label: "药品市场推广经理",
                            en_name: "Pharmaceutical Marketing Manager",
                            code: "3511"
                        },
                        {
                            label: "药品市场推广主管/专员",
                            en_name: "Pharmaceutical Marketing Supervisor/Specialist",
                            code: "3512"
                        },
                        {
                            label: "医药招商",
                            en_name: "Pharmaceutical Business Development",
                            code: "3513"
                        },
                        {
                            label: "政府事务管理",
                            en_name: "Government Affairs",
                            code: "3514"
                        },
                        {
                            label: "招投标管理",
                            en_name: "Tendering Coordinator",
                            code: "3515"
                        },
                        {
                            label: "医药销售经理/主管",
                            en_name: "Pharmaceutical Sales Manager",
                            code: "3516"
                        },
                        {
                            label: "医药销售代表",
                            en_name: "Pharmaceutical Sales Representative",
                            code: "3517"
                        },
                        {
                            label: "医疗器械注册",
                            en_name: "Medical Equipment Registration",
                            code: "3518"
                        },
                        {
                            label: "医疗器械研发",
                            en_name: "Medical Equipment R&D",
                            code: "3519"
                        },
                        {
                            label: "医疗器械生产/质量管理",
                            en_name: "Medical Equipment Manufacturing/Quality Control",
                            code: "3520"
                        },
                        {
                            label: "医疗器械市场推广",
                            en_name: "Medical Equipment Marketing",
                            code: "3521"
                        },
                        {
                            label: "医疗器械销售经理/主管",
                            en_name: "Medical Equipment Sales Manager/Supervisor",
                            code: "3522"
                        },
                        {
                            label: "医疗器械销售代表",
                            en_name: "Medical Equipment Sales",
                            code: "3523"
                        },
                        {
                            label: "医疗器械维修人员",
                            en_name: "Medical Equipment Maintenance Engineer",
                            code: "3524"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "3525"
                        }
                    ]
                },
                {
                    label: "化工",
                    en_name: "Chemical",
                    code: "36",
                    child: [
                        {
                            label: "化工技术应用/化工工程师",
                            en_name: "Chemical Technical Application/Chemical Engineer",
                            code: "3601"
                        },
                        {
                            label: "化工实验室研究员/技术员",
                            en_name: "Chemical Lab Scientist / Technician",
                            code: "3602"
                        },
                        {
                            label: "涂料研发工程师",
                            en_name: "R&D Chemist Scientist",
                            code: "3603"
                        },
                        {
                            label: "配色技术员",
                            en_name: "Color Matcher (Technician)",
                            code: "3604"
                        },
                        {
                            label: "塑料工程师",
                            en_name: "Plastics Engineer",
                            code: "3605"
                        },
                        {
                            label: "化妆品研发",
                            en_name: "Cosmetics Scientist",
                            code: "3606"
                        },
                        {
                            label: "食品/饮料研发",
                            en_name: "Food / Beverage Scientist",
                            code: "3607"
                        },
                        {
                            label: "造纸研发",
                            en_name: "Paper Making Scientist",
                            code: "3608"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "3609"
                        }
                    ]
                },
                {
                    label: "医院/医疗/护理",
                    en_name: "Hospital/Medicine/Nursing",
                    code: "37",
                    child: [
                        {
                            label: "医院管理人员",
                            en_name: "Hospital Management",
                            code: "3701"
                        },
                        {
                            label: "综合门诊/全科医生",
                            en_name: "General Practitioner",
                            code: "3702"
                        },
                        {
                            label: "内科医生",
                            en_name: "Doctor, Internal Medicine",
                            code: "3703"
                        },
                        {
                            label: "外科医生",
                            en_name: "Doctor, Surgeial",
                            code: "3704"
                        },
                        {
                            label: "专科医生",
                            en_name: "Doctor, Specialist",
                            code: "3705"
                        },
                        {
                            label: "牙科医生",
                            en_name: "Dentist",
                            code: "3706"
                        },
                        {
                            label: "美容整形师",
                            en_name: "Plastic Surgeon",
                            code: "3707"
                        },
                        {
                            label: "麻醉医生",
                            en_name: "Anesthesiologist",
                            code: "3708"
                        },
                        {
                            label: "放射科医师",
                            en_name: "Radiologist",
                            code: "3709"
                        },
                        {
                            label: "理疗师",
                            en_name: "Physical Therapist",
                            code: "3710"
                        },
                        {
                            label: "中医科医生",
                            en_name: "Chinese Medicine Practioners",
                            code: "3711"
                        },
                        {
                            label: "针灸、推拿",
                            en_name: "Acupuncturist",
                            code: "3712"
                        },
                        {
                            label: "儿科医生",
                            en_name: "Pediatrician",
                            code: "3713"
                        },
                        {
                            label: "心理医生",
                            en_name: "Psychologist/Psychiatrist",
                            code: "3714"
                        },
                        {
                            label: "营养师",
                            en_name: "Dietitian",
                            code: "3715"
                        },
                        {
                            label: "药库主任/药剂师",
                            en_name: "Pharmacist",
                            code: "3716"
                        },
                        {
                            label: "医药学检验",
                            en_name: "Clinical Laboratory",
                            code: "3717"
                        },
                        {
                            label: "公共卫生/疾病控制",
                            en_name: "Public Sanitation/Disease Control",
                            code: "3718"
                        },
                        {
                            label: "护理主任/护士长",
                            en_name: "Nursing Officer",
                            code: "3719"
                        },
                        {
                            label: "护士/护理人员",
                            en_name: "Nurse/Medical Assistant",
                            code: "3720"
                        },
                        {
                            label: "兽医",
                            en_name: "Veterinarian",
                            code: "3721"
                        },
                        {
                            label: "验光师",
                            en_name: "Optometrist",
                            code: "3722"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "3723"
                        }
                    ]
                },
                {
                    label: "广告",
                    en_name: "Advertising",
                    code: "38",
                    child: [
                        {
                            label: "广告客户总监/副总监",
                            en_name: "Advertising Account Director/Associate Director",
                            code: "3801"
                        },
                        {
                            label: "广告客户经理",
                            en_name: "Advertising Account Manager",
                            code: "3802"
                        },
                        {
                            label: "广告客户主管/专员",
                            en_name: "Advertising Account Supervisor/Executive",
                            code: "3803"
                        },
                        {
                            label: "广告创意/设计经理",
                            en_name: "Advertising Creative/Design Manager",
                            code: "3804"
                        },
                        {
                            label: "广告创意总监",
                            en_name: "Advertising Creative Director",
                            code: "3805"
                        },
                        {
                            label: "广告创意/设计主管/专员",
                            en_name: "Advertising Creative/Design Supervisor/Executive",
                            code: "3806"
                        },
                        {
                            label: "广告制作执行",
                            en_name: "Advertising Production Executive",
                            code: "3807"
                        },
                        {
                            label: "美术指导",
                            en_name: "Art Director",
                            code: "3808"
                        },
                        {
                            label: "文案/策划",
                            en_name: "Copywriter/Planner",
                            code: "3809"
                        },
                        {
                            label: "企业/业务发展经理",
                            en_name: "Business Development Manager",
                            code: "3810"
                        },
                        {
                            label: "企业策划人员",
                            en_name: "Business Planning Staff",
                            code: "3811"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "3812"
                        }
                    ]
                },
                {
                    label: "公关/媒介",
                    en_name: "Public Relations/Media",
                    code: "39",
                    child: [
                        {
                            label: "公关总监",
                            en_name: "Public Relations Director",
                            code: "3901"
                        },
                        {
                            label: "公关经理",
                            en_name: "Public Relations Manager",
                            code: "3902"
                        },
                        {
                            label: "公关主管",
                            en_name: "Public Relations Supervisor",
                            code: "3903"
                        },
                        {
                            label: "公关专员",
                            en_name: "Public Relations Executive",
                            code: "3904"
                        },
                        {
                            label: "会务/会展经理",
                            en_name: "Exhibition/Event Manager",
                            code: "3905"
                        },
                        {
                            label: "会务/会展主管",
                            en_name: "Exhibition/Event Supervisor",
                            code: "3906"
                        },
                        {
                            label: "会务/会展专员",
                            en_name: "Exhibition/Event Executive",
                            code: "3907"
                        },
                        {
                            label: "媒介经理",
                            en_name: "Media Manager",
                            code: "3908"
                        },
                        {
                            label: "媒介主管",
                            en_name: "Media Supervisor",
                            code: "3909"
                        },
                        {
                            label: "媒介专员",
                            en_name: "Media Specialist",
                            code: "3910"
                        },
                        {
                            label: "公关/媒介助理",
                            en_name: "Public Relations/Media Assistant",
                            code: "3911"
                        },
                        {
                            label: "媒介销售",
                            en_name: "Media Sales",
                            code: "3912"
                        },
                        {
                            label: "活动策划",
                            en_name: "Event Planner",
                            code: "3913"
                        },
                        {
                            label: "活动执行",
                            en_name: "Event Excution",
                            code: "3914"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "3915"
                        }
                    ]
                },
                {
                    label: "市场/营销",
                    en_name: "Marketing",
                    code: "40",
                    child: [
                        {
                            label: "市场/营销/拓展总监",
                            en_name: "Marketing / BD Director / VP",
                            code: "4001"
                        },
                        {
                            label: "市场/营销/拓展经理",
                            en_name: "Marketing / BD Manager",
                            code: "4002"
                        },
                        {
                            label: "市场/营销/拓展主管",
                            en_name: "Marketing / BD Supervisor",
                            code: "4003"
                        },
                        {
                            label: "市场/营销/拓展专员",
                            en_name: "Marketing / BD Executive/Communication",
                            code: "4004"
                        },
                        {
                            label: "市场助理",
                            en_name: "Marketing Assistant / Trainee",
                            code: "4005"
                        },
                        {
                            label: "市场分析/调研人员",
                            en_name: "Market Analyst/ Research Analyst",
                            code: "4006"
                        },
                        {
                            label: "产品/品牌经理",
                            en_name: "Product/Brand Manager",
                            code: "4007"
                        },
                        {
                            label: "产品/品牌主管",
                            en_name: "Product/Brand Supervisor",
                            code: "4008"
                        },
                        {
                            label: "产品/品牌专员",
                            en_name: "Product/Brand Executive",
                            code: "4009"
                        },
                        {
                            label: "市场通路经理/主管",
                            en_name: "Trade Marketing Manager/Supervisor",
                            code: "4010"
                        },
                        {
                            label: "市场通路专员",
                            en_name: "Trade Marketing Specialist",
                            code: "4011"
                        },
                        {
                            label: "市场企划经理/主管",
                            en_name: "Marketing Planning Manager/Supervisor",
                            code: "4012"
                        },
                        {
                            label: "市场企划专员",
                            en_name: "Marketing Planning Executive",
                            code: "4013"
                        },
                        {
                            label: "促销经理",
                            en_name: "Promotion Manager",
                            code: "4014"
                        },
                        {
                            label: "促销主管/督导",
                            en_name: "Promotion Supervisor",
                            code: "4015"
                        },
                        {
                            label: "促销员/导购",
                            en_name: "Promotion Specialist",
                            code: "4016"
                        },
                        {
                            label: "选址拓展/新店开发",
                            en_name: "Site Development",
                            code: "4017"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "4018"
                        }
                    ]
                },
                {
                    label: "影视/媒体",
                    en_name: "Film Entertainment/Media",
                    code: "41",
                    child: [
                        {
                            label: "影视策划/制作人员",
                            en_name: "Entertainment /Produer",
                            code: "4101"
                        },
                        {
                            label: "导演/编导",
                            en_name: "Director",
                            code: "4102"
                        },
                        {
                            label: "艺术/设计总监",
                            en_name: "Artistic/Design Director",
                            code: "4103"
                        },
                        {
                            label: "艺术指导/舞台美术设计",
                            en_name: "Art Director/Stage Art Director",
                            code: "4104"
                        },
                        {
                            label: "经纪人/星探",
                            en_name: "Entertainment Agent",
                            code: "4105"
                        },
                        {
                            label: "摄影师/摄像师",
                            en_name: "Photographer",
                            code: "4106"
                        },
                        {
                            label: "后期制作",
                            en_name: "Postproduction",
                            code: "4107"
                        },
                        {
                            label: "音效师",
                            en_name: "Recording / Sounds Specialist",
                            code: "4108"
                        },
                        {
                            label: "配音员",
                            en_name: "Dubbing Specialist",
                            code: "4109"
                        },
                        {
                            label: "灯光师",
                            en_name: "Film & Television Lighting",
                            code: "4110"
                        },
                        {
                            label: "放映经理/主管",
                            en_name: "Projection Manager/Supervisor",
                            code: "4111"
                        },
                        {
                            label: "放映员",
                            en_name: "Projectionist",
                            code: "4112"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "4113"
                        }
                    ]
                },
                {
                    label: "编辑出版",
                    en_name: "Editor/Publishing",
                    code: "42",
                    child: [
                        {
                            label: "总编/副总编",
                            en_name: "Chief Editor",
                            code: "4201"
                        },
                        {
                            label: "编辑",
                            en_name: "Editor",
                            code: "4202"
                        },
                        {
                            label: "作家/撰稿人",
                            en_name: "Writer",
                            code: "4203"
                        },
                        {
                            label: "记者",
                            en_name: "Journalist / Reporter",
                            code: "4204"
                        },
                        {
                            label: "电话采编",
                            en_name: "Telephone Reporter",
                            code: "4205"
                        },
                        {
                            label: "美术编辑",
                            en_name: "Art Editor",
                            code: "4206"
                        },
                        {
                            label: "排版设计",
                            en_name: "Layout Designer",
                            code: "4207"
                        },
                        {
                            label: "出版/发行",
                            en_name: "Publishing/Distribution",
                            code: "4208"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "4209"
                        }
                    ]
                },
                {
                    label: "艺术/设计",
                    en_name: "Artist/Designer",
                    code: "43",
                    child: [
                        {
                            label: "平面设计总监",
                            en_name: "Graphic Design Director",
                            code: "4301"
                        },
                        {
                            label: "平面设计经理/主管",
                            en_name: "Graphic Design Manager/Supervisor",
                            code: "4302"
                        },
                        {
                            label: "平面设计师",
                            en_name: "Graphic Artist/Designer",
                            code: "4303"
                        },
                        {
                            label: "绘画",
                            en_name: "Graphic Illustrator",
                            code: "4304"
                        },
                        {
                            label: "动画/3D设计",
                            en_name: "Animation/3D Design",
                            code: "4305"
                        },
                        {
                            label: "原画师",
                            en_name: "Original Artist",
                            code: "4306"
                        },
                        {
                            label: "展览/展示/店面设计",
                            en_name: "Exhibition/Display/Storefront Design",
                            code: "4307"
                        },
                        {
                            label: "多媒体设计",
                            en_name: "Multimedia Design",
                            code: "4308"
                        },
                        {
                            label: "包装设计",
                            en_name: "Package Design",
                            code: "4309"
                        },
                        {
                            label: "工业/产品设计",
                            en_name: "Industrial Designer",
                            code: "4310"
                        },
                        {
                            label: "工艺品/珠宝设计鉴定",
                            en_name: "Artwork/Jewelry Design and Appraisal",
                            code: "4311"
                        },
                        {
                            label: "家具/家居用品设计",
                            en_name: "Furniture/Household Product Design",
                            code: "4312"
                        },
                        {
                            label: "玩具设计",
                            en_name: "Toy Design",
                            code: "4313"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "4314"
                        }
                    ]
                },
                {
                    label: "建筑工程与装潢",
                    en_name: "Construction/Decoration",
                    code: "44",
                    child: [
                        {
                            label: "高级建筑工程师/总工",
                            en_name: "Senior Architect",
                            code: "4401"
                        },
                        {
                            label: "建筑工程师",
                            en_name: "Architect",
                            code: "4402"
                        },
                        {
                            label: "建筑设计师",
                            en_name: "Architectural Designer",
                            code: "4403"
                        },
                        {
                            label: "市政工程师",
                            en_name: "Municipal Project Engineer",
                            code: "4404"
                        },
                        {
                            label: "结构/土木/土建工程师",
                            en_name: "Structural Engineer",
                            code: "4405"
                        },
                        {
                            label: "公路/桥梁/港口/隧道工程",
                            en_name: "Road/Bridge/Port/Tunnel Project Engineer",
                            code: "4406"
                        },
                        {
                            label: "岩土工程",
                            en_name: "Geotechnical Engineer",
                            code: "4407"
                        },
                        {
                            label: "楼宇自动化",
                            en_name: "Building Automation",
                            code: "4408"
                        },
                        {
                            label: "建筑机电工程师",
                            en_name: "Building Electrical Engineer",
                            code: "4409"
                        },
                        {
                            label: "智能大厦/综合布线/安防/弱电",
                            en_name: "Intelligent Building/Integrated Wiring/Defence&Security/Weak Current",
                            code: "4410"
                        },
                        {
                            label: "给排水/暖通工程",
                            en_name: "Drainage/HVAC Project Engineer",
                            code: "4411"
                        },
                        {
                            label: "幕墙工程师",
                            en_name: "Curtain Wall Engineer",
                            code: "4412"
                        },
                        {
                            label: "规划与设计",
                            en_name: "Design/Planning",
                            code: "4413"
                        },
                        {
                            label: "室内设计",
                            en_name: "Interior Design/Drchitectural Drawing",
                            code: "4414"
                        },
                        {
                            label: "园艺/园林/景观设计",
                            en_name: "Gardenning Designer",
                            code: "4415"
                        },
                        {
                            label: "测绘/测量",
                            en_name: "Mapping/Surveyor",
                            code: "4416"
                        },
                        {
                            label: "建筑制图/模型/渲染",
                            en_name: "CAD Drafter/Building Model/Rendering",
                            code: "4417"
                        },
                        {
                            label: "开发报建",
                            en_name: "Programming&Applying for Building",
                            code: "4418"
                        },
                        {
                            label: "工程造价师/预结算经理",
                            en_name: "Project Estimator",
                            code: "4419"
                        },
                        {
                            label: "预结算员",
                            en_name: "Quantity Surveyor",
                            code: "4420"
                        },
                        {
                            label: "建筑工程管理/项目经理",
                            en_name: "Construction Project Management",
                            code: "4421"
                        },
                        {
                            label: "建筑项目助理",
                            en_name: "Construction Project Assistant",
                            code: "4422"
                        },
                        {
                            label: "建筑工程验收",
                            en_name: "Construction Project Inspector",
                            code: "4423"
                        },
                        {
                            label: "工程监理",
                            en_name: "Engineering Project Supervisor",
                            code: "4424"
                        },
                        {
                            label: "合同管理",
                            en_name: "Contract Management",
                            code: "4425"
                        },
                        {
                            label: "安全员",
                            en_name: "Safety Specialist",
                            code: "4426"
                        },
                        {
                            label: "资料员",
                            en_name: "Data Management Specialist",
                            code: "4427"
                        },
                        {
                            label: "建筑安装施工员",
                            en_name: "Construction Crew",
                            code: "4428"
                        },
                        {
                            label: "砌筑工",
                            en_name: "Bricklayer",
                            code: "4429"
                        },
                        {
                            label: "施工开料工",
                            en_name: "Construction Materials Engineering",
                            code: "4438"
                        },
                        {
                            label: "管道/暖通",
                            en_name: "Pipeline Heating",
                            code: "4439"
                        },
                        {
                            label: "工长",
                            en_name: "Foreman",
                            code: "4440"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "4441"
                        }
                    ]
                },
                {
                    label: "房地产开发",
                    en_name: "Real Estate Development",
                    code: "45",
                    child: [
                        {
                            label: "房地产项目/开发/策划经理",
                            en_name: "Real Estate Project/Development/Planning Manager",
                            code: "4501"
                        },
                        {
                            label: "房地产项目/开发/策划主管/专员",
                            en_name: "Real Estate Project/Development/Planning Supervisor/Specialist",
                            code: "4502"
                        },
                        {
                            label: "房产项目配套工程师",
                            en_name: "Conveyance System Engineer",
                            code: "4503"
                        },
                        {
                            label: "房地产项目招投标",
                            en_name: "Real Estate Tender /Bidding",
                            code: "4504"
                        },
                        {
                            label: "房地产投资分析",
                            en_name: "Real Estate Investment Analysis",
                            code: "4505"
                        },
                        {
                            label: "房地产资产管理",
                            en_name: "Real Estate Asset Management",
                            code: "4506"
                        },
                        {
                            label: "监察人员",
                            en_name: "Real Estate Supervisor",
                            code: "4507"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "4508"
                        }
                    ]
                },
                {
                    label: "房地产销售与中介",
                    en_name: "Real Estate Sales / Agent",
                    code: "46",
                    child: [
                        {
                            label: "房地产销售经理/主管",
                            en_name: "Real Estate Sales Manager/Supervisor",
                            code: "4601"
                        },
                        {
                            label: "房地产销售",
                            en_name: "Real Estate Sales",
                            code: "4602"
                        },
                        {
                            label: "房地产中介/置业顾问",
                            en_name: "Real Estate Agent/Property Consultant",
                            code: "4603"
                        },
                        {
                            label: "房地产评估",
                            en_name: "Real Estate Appraisal",
                            code: "4604"
                        },
                        {
                            label: "房地产店长/经理",
                            en_name: "Real Estate Branch Manager",
                            code: "4605"
                        },
                        {
                            label: "房地产客服",
                            en_name: "Real Estate Customer Service",
                            code: "4607"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "4608"
                        }
                    ]
                },
                {
                    label: "物业管理",
                    en_name: "Property Management",
                    code: "47",
                    child: [
                        {
                            label: "物业管理经理",
                            en_name: "Property Management Manager",
                            code: "4701"
                        },
                        {
                            label: "物业管理主管",
                            en_name: "Property Management Supervisor",
                            code: "4702"
                        },
                        {
                            label: "物业管理专员/助理",
                            en_name: "Property Management",
                            code: "4703"
                        },
                        {
                            label: "物业设施管理人员",
                            en_name: "Property Establishment Management",
                            code: "4704"
                        },
                        {
                            label: "物业机电维修工",
                            en_name: "Property Mechanic",
                            code: "4705"
                        },
                        {
                            label: "物业维修员",
                            en_name: "Property Maintainence Staff",
                            code: "4706"
                        },
                        {
                            label: "高级物业顾问/物业顾问",
                            en_name: "Senior Property Advisor/Property Advisor",
                            code: "4707"
                        },
                        {
                            label: "物业招商/租赁/租售",
                            en_name: "Property Lease/Rent",
                            code: "4708"
                        },
                        {
                            label: "停车管理员",
                            en_name: "Carpark Attendant",
                            code: "4709"
                        },
                        {
                            label: "保安经理",
                            en_name: "Security Manager",
                            code: "4710"
                        },
                        {
                            label: "保安人员",
                            en_name: "Security",
                            code: "4711"
                        },
                        {
                            label: "物业机电工程师",
                            en_name: "Property Mechanical Engineer",
                            code: "4712"
                        },
                        {
                            label: "保洁",
                            en_name: "Cleaner",
                            code: "4713"
                        },
                        {
                            label: "绿化工",
                            en_name: "Gardener",
                            code: "4714"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "4715"
                        }
                    ]
                },
                {
                    label: "人力资源",
                    en_name: "Human Resources",
                    code: "48",
                    child: [
                        {
                            label: "人事总监",
                            en_name: "Human Resources Director",
                            code: "4801"
                        },
                        {
                            label: "人事经理",
                            en_name: "Human Resources Manager",
                            code: "4802"
                        },
                        {
                            label: "人事主管",
                            en_name: "Human Resources Supervisor",
                            code: "4803"
                        },
                        {
                            label: "人事专员",
                            en_name: "Human Resources Specialist",
                            code: "4804"
                        },
                        {
                            label: "人事助理",
                            en_name: "Human Resources Assistant",
                            code: "4805"
                        },
                        {
                            label: "招聘经理/主管",
                            en_name: "Recruiting Manager/Supervisor",
                            code: "4806"
                        },
                        {
                            label: "招聘专员/助理",
                            en_name: "Recruiting Specialist/Assistant",
                            code: "4807"
                        },
                        {
                            label: "薪资福利经理/主管",
                            en_name: "Compensation & Benefits Mgr./Supervisor",
                            code: "4808"
                        },
                        {
                            label: "薪资福利专员/助理",
                            en_name: "Compensation & Benefits Specialist/Assistant",
                            code: "4809"
                        },
                        {
                            label: "绩效考核经理/主管",
                            en_name: "Performance Assessment Manager/Supervisor",
                            code: "4810"
                        },
                        {
                            label: "绩效考核专员/助理",
                            en_name: "Performance Assessment Specialist/Assistant",
                            code: "4811"
                        },
                        {
                            label: "培训经理/主管",
                            en_name: "Training Manager/Supervisor",
                            code: "4812"
                        },
                        {
                            label: "培训专员/助理/培训师",
                            en_name: "Training Specialist/Assistant/Trainer",
                            code: "4813"
                        },
                        {
                            label: "企业文化/员工关系/工会管理",
                            en_name: "Corporate Culture/Employee Labor Union Relations",
                            code: "4814"
                        },
                        {
                            label: "人力资源信息系统专员",
                            en_name: "HRIS Specialist",
                            code: "4815"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "4816"
                        }
                    ]
                },
                {
                    label: "高级管理",
                    en_name: "Senior Management",
                    code: "49",
                    child: [
                        {
                            label: "首席执行官CEO/总裁/总经理",
                            en_name: "CEO/President/General Manager",
                            code: "4901"
                        },
                        {
                            label: "首席运营官COO",
                            en_name: "COO",
                            code: "4902"
                        },
                        {
                            label: "副总经理/副总裁",
                            en_name: "Deputy GM/Vice President",
                            code: "4903"
                        },
                        {
                            label: "合伙人",
                            en_name: "Partner",
                            code: "4904"
                        },
                        {
                            label: "总监/部门经理",
                            en_name: "Director/Department Manager",
                            code: "4905"
                        },
                        {
                            label: "策略发展总监",
                            en_name: "Strategic Planning Director",
                            code: "4906"
                        },
                        {
                            label: "企业秘书/董事会秘书",
                            en_name: "Corporate/Board Secretary",
                            code: "4907"
                        },
                        {
                            label: "投资者关系",
                            en_name: "Investor Relations",
                            code: "4908"
                        },
                        {
                            label: "办事处首席代表",
                            en_name: "Chief Representative",
                            code: "4909"
                        },
                        {
                            label: "办事处/分公司/分支机构经理",
                            en_name: "Branch Office Manager",
                            code: "4910"
                        },
                        {
                            label: "总裁助理/总经理助理",
                            en_name: "CEO/GM/President Assistant",
                            code: "4911"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "4912"
                        }
                    ]
                },
                {
                    label: "行政/后勤",
                    en_name: "Admin./Support Services",
                    code: "50",
                    child: [
                        {
                            label: "行政总监",
                            en_name: "Admin Director",
                            code: "5001"
                        },
                        {
                            label: "行政经理/主管/办公室主任",
                            en_name: "Admin Manager/Supervisor/Office Manager",
                            code: "5002"
                        },
                        {
                            label: "行政专员/助理",
                            en_name: "Admin Staff/Assistant",
                            code: "5003"
                        },
                        {
                            label: "经理助理/秘书",
                            en_name: "Executive Assistant/Secretary",
                            code: "5004"
                        },
                        {
                            label: "前台接待/总机/接待生",
                            en_name: "Receptionist",
                            code: "5005"
                        },
                        {
                            label: "图书管理员/资料管理员",
                            en_name: "Librarian / Information/Data Management Specialist",
                            code: "5006"
                        },
                        {
                            label: "电脑操作员/打字员",
                            en_name: "Computer Operator/Typist",
                            code: "5007"
                        },
                        {
                            label: "后勤",
                            en_name: "Office Support",
                            code: "5008"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "5009"
                        }
                    ]
                },
                {
                    label: "咨询/顾问",
                    en_name: "Consultant",
                    code: "51",
                    child: [
                        {
                            label: "专业顾问",
                            en_name: "Senior Consultant",
                            code: "5101"
                        },
                        {
                            label: "咨询总监",
                            en_name: "Consulting Director / Partner",
                            code: "5102"
                        },
                        {
                            label: "咨询经理",
                            en_name: "Consulting Manager",
                            code: "5103"
                        },
                        {
                            label: "专业培训师",
                            en_name: "Professional Trainer",
                            code: "5104"
                        },
                        {
                            label: "咨询员",
                            en_name: "Consultant",
                            code: "5105"
                        },
                        {
                            label: "调研员",
                            en_name: "Research Analyst",
                            code: "5106"
                        },
                        {
                            label: "猎头/人才中介",
                            en_name: "Headhunting",
                            code: "5107"
                        },
                        {
                            label: "情报信息分析人员",
                            en_name: "Market Intelligence Analyst",
                            code: "5108"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "5109"
                        }
                    ]
                },
                {
                    label: "律师/法务/合规",
                    en_name: "Legal/Compliance",
                    code: "52",
                    child: [
                        {
                            label: "律师/法律顾问",
                            en_name: "Lawyer/Counsel",
                            code: "5201"
                        },
                        {
                            label: "律师助理",
                            en_name: "Paralegal",
                            code: "5202"
                        },
                        {
                            label: "法务经理",
                            en_name: "Corporate Counsel/Compliance Officer",
                            code: "5203"
                        },
                        {
                            label: "法务主管/专员",
                            en_name: "Legal Supervisor/Specialist",
                            code: "5204"
                        },
                        {
                            label: "法务助理",
                            en_name: "Legal Assistant",
                            code: "5205"
                        },
                        {
                            label: "合规经理",
                            en_name: "Compliance Manager",
                            code: "5206"
                        },
                        {
                            label: "合规主管/专员",
                            en_name: "Compliance Supervisor/Specialist",
                            code: "5207"
                        },
                        {
                            label: "知识产权/专利/商标",
                            en_name: "Intellectual Property/Patent Advisor/Trademark",
                            code: "5208"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "5209"
                        }
                    ]
                },
                {
                    label: "教师",
                    en_name: "Professor/Teacher",
                    code: "53",
                    child: [
                        {
                            label: "校长",
                            en_name: "School Principal",
                            code: "5301"
                        },
                        {
                            label: "大学教授",
                            en_name: "Professor",
                            code: "5302"
                        },
                        {
                            label: "讲师/助教",
                            en_name: "Lecturer/Teaching Assistant",
                            code: "5303"
                        },
                        {
                            label: "中学教师",
                            en_name: "High School Teacher",
                            code: "5304"
                        },
                        {
                            label: "小学教师",
                            en_name: "Grade School Teacher",
                            code: "5305"
                        },
                        {
                            label: "幼教",
                            en_name: "Preschool Education",
                            code: "5306"
                        },
                        {
                            label: "外语培训师",
                            en_name: "Foreign Language Instructor",
                            code: "5307"
                        },
                        {
                            label: "院校教务管理人员",
                            en_name: "Educational Facility Management",
                            code: "5308"
                        },
                        {
                            label: "兼职教师",
                            en_name: "Part-time Teacher",
                            code: "5309"
                        },
                        {
                            label: "家教",
                            en_name: "Tutor",
                            code: "5310"
                        },
                        {
                            label: "音乐/美术教师",
                            en_name: "Music/Art Teacher",
                            code: "5311"
                        },
                        {
                            label: "体育教师",
                            en_name: "Physical Education Instructor",
                            code: "5312"
                        },
                        {
                            label: "职业技术教师",
                            en_name: "Vocational Instructor",
                            code: "5313"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "5314"
                        }
                    ]
                },
                {
                    label: "培训",
                    en_name: "Training",
                    code: "54",
                    child: [
                        {
                            label: "培训督导",
                            en_name: "Supervision Training",
                            code: "5401"
                        },
                        {
                            label: "培训讲师",
                            en_name: "Trainer",
                            code: "5402"
                        },
                        {
                            label: "培训策划",
                            en_name: "Training Planning",
                            code: "5403"
                        },
                        {
                            label: "培训产品开发",
                            en_name: "Training Product Development",
                            code: "5404"
                        },
                        {
                            label: "培训/课程顾问",
                            en_name: "Training/Course Consultant",
                            code: "5405"
                        },
                        {
                            label: "培训助理",
                            en_name: "Training Assistant",
                            code: "5406"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "5407"
                        }
                    ]
                },
                {
                    label: "科研",
                    en_name: "Research Specialist",
                    code: "55",
                    child: [
                        {
                            label: "科研管理人员",
                            en_name: "Research Management",
                            code: "5501"
                        },
                        {
                            label: "科研人员",
                            en_name: "Research Specialist Staff",
                            code: "5502"
                        }
                    ]
                },
                {
                    label: "餐饮服务",
                    en_name: "Restaurant & Food Service",
                    code: "56",
                    child: [
                        {
                            label: "店长/经理",
                            en_name: "Restaurant Store Manager",
                            code: "5601"
                        },
                        {
                            label: "大堂经理",
                            en_name: "Hall Manager",
                            code: "5602"
                        },
                        {
                            label: "餐厅领班",
                            en_name: "Restaurant Supervisor",
                            code: "5603"
                        },
                        {
                            label: "餐饮服务员",
                            en_name: "Restaurant Waiter",
                            code: "5604"
                        },
                        {
                            label: "行政主厨/厨师长",
                            en_name: "Executive Chef",
                            code: "5605"
                        },
                        {
                            label: "中餐厨师",
                            en_name: "Chinese Chef",
                            code: "5606"
                        },
                        {
                            label: "西餐厨师",
                            en_name: "Western-style Cuisine Cook",
                            code: "5607"
                        },
                        {
                            label: "日式厨师",
                            en_name: "Japanese Cuisine Cook",
                            code: "5608"
                        },
                        {
                            label: "面点师",
                            en_name: "Baker",
                            code: "5609"
                        },
                        {
                            label: "西点师",
                            en_name: "Western-style Pastry Cook",
                            code: "5610"
                        },
                        {
                            label: "厨师助理/学徒",
                            en_name: "Cooking Assistant",
                            code: "5611"
                        },
                        {
                            label: "茶艺师",
                            en_name: "Tea Specialist",
                            code: "5612"
                        },
                        {
                            label: "咖啡师",
                            en_name: "Barista",
                            code: "5613"
                        },
                        {
                            label: "调酒师/侍酒师/吧台员",
                            en_name: "Bartender/Sommelier",
                            code: "5614"
                        },
                        {
                            label: "礼仪/迎宾",
                            en_name: "Reception",
                            code: "5615"
                        },
                        {
                            label: "预订员",
                            en_name: "Reservationist",
                            code: "5616"
                        },
                        {
                            label: "收银员",
                            en_name: "Cashier",
                            code: "5617"
                        },
                        {
                            label: "配菜/打荷",
                            en_name: "Kitchen Assistant",
                            code: "5618"
                        },
                        {
                            label: "传菜主管",
                            en_name: "Dish Head",
                            code: "5619"
                        },
                        {
                            label: "传菜员",
                            en_name: "Food Runner",
                            code: "5620"
                        },
                        {
                            label: "洗碗工",
                            en_name: "Dish Washing Staff",
                            code: "5621"
                        },
                        {
                            label: "送餐员",
                            en_name: "Food Delivery",
                            code: "5622"
                        },
                        {
                            label: "杂工",
                            en_name: "Kitchen Porter",
                            code: "5623"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "5624"
                        }
                    ]
                },
                {
                    label: "酒店旅游",
                    en_name: "Hospitality/Tourism",
                    code: "57",
                    child: [
                        {
                            label: "酒店/宾馆经理",
                            en_name: "Hotel Manager",
                            code: "5701"
                        },
                        {
                            label: "酒店/宾馆销售",
                            en_name: "Hotel Sales",
                            code: "5702"
                        },
                        {
                            label: "预定部主管",
                            en_name: "Reservation Supervisor",
                            code: "5703"
                        },
                        {
                            label: "预定员",
                            en_name: "Reservation Staff",
                            code: "5704"
                        },
                        {
                            label: "大堂经理",
                            en_name: "Hall Manager",
                            code: "5705"
                        },
                        {
                            label: "酒店前台",
                            en_name: "Reception",
                            code: "5706"
                        },
                        {
                            label: "宴会管理",
                            en_name: "Banquet Management",
                            code: "5707"
                        },
                        {
                            label: "宾客服务经理",
                            en_name: "Guest Service Manager",
                            code: "5708"
                        },
                        {
                            label: "楼面经理",
                            en_name: "Floor Manager",
                            code: "5709"
                        },
                        {
                            label: "客房服务员/楼面服务员",
                            en_name: "Room Service",
                            code: "5710"
                        },
                        {
                            label: "健身房服务",
                            en_name: "Fitness Center Service",
                            code: "5711"
                        },
                        {
                            label: "行李员",
                            en_name: "Bellperson",
                            code: "5712"
                        },
                        {
                            label: "管家部经理/主管",
                            en_name: "Housekeeping Manager",
                            code: "5713"
                        },
                        {
                            label: "清洁服务人员",
                            en_name: "Housekeeping Staff",
                            code: "5714"
                        },
                        {
                            label: "旅游产品销售",
                            en_name: "Tourism Product Sales",
                            code: "5715"
                        },
                        {
                            label: "行程管理/计调",
                            en_name: "Travel Management",
                            code: "5716"
                        },
                        {
                            label: "签证专员",
                            en_name: "Visa Specialist",
                            code: "5717"
                        },
                        {
                            label: "导游/旅行顾问",
                            en_name: "Tour Guide/Travel Consultant",
                            code: "5718"
                        },
                        {
                            label: "票务",
                            en_name: "Reservation Service",
                            code: "5719"
                        },
                        {
                            label: "机场代表",
                            en_name: "Hotel Airport Representatives",
                            code: "5720"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "5721"
                        }
                    ]
                },
                {
                    label: "美容保健",
                    en_name: "Beauty/Health",
                    code: "58",
                    child: [
                        {
                            label: "美容店长",
                            en_name: "Beauty Shop Manager",
                            code: "5801"
                        },
                        {
                            label: "美容培训师/导师",
                            en_name: "Beauty Supervisor",
                            code: "5802"
                        },
                        {
                            label: "美容顾问",
                            en_name: "Beauty Advisor",
                            code: "5803"
                        },
                        {
                            label: "美容师",
                            en_name: "Beautician",
                            code: "5804"
                        },
                        {
                            label: "美容助理",
                            en_name: "Beautician Assistant",
                            code: "5805"
                        },
                        {
                            label: "彩妆培训师",
                            en_name: "Makeup Trainer",
                            code: "5806"
                        },
                        {
                            label: "专柜彩妆顾问(BA)",
                            en_name: "Beauty Advisor",
                            code: "5807"
                        },
                        {
                            label: "化妆师",
                            en_name: "Makeup Artist",
                            code: "5808"
                        },
                        {
                            label: "造型师",
                            en_name: "Image Designer",
                            code: "5809"
                        },
                        {
                            label: "美发店长",
                            en_name: "Hair Salon Manager",
                            code: "5810"
                        },
                        {
                            label: "发型师",
                            en_name: "Hair Stylist",
                            code: "5811"
                        },
                        {
                            label: "发型助理/学徒",
                            en_name: "Hair Stylist Assistant",
                            code: "5812"
                        },
                        {
                            label: "美甲师",
                            en_name: "Nail Specialist",
                            code: "5813"
                        },
                        {
                            label: "美体师",
                            en_name: "Body Shaping Specialist",
                            code: "5814"
                        },
                        {
                            label: "瘦身顾问",
                            en_name: "Slimming/Weight Loss Conunselor",
                            code: "5815"
                        },
                        {
                            label: "SPA 技师",
                            en_name: "Spa Therapist",
                            code: "5816"
                        },
                        {
                            label: "按摩",
                            en_name: "Spa/Massage",
                            code: "5817"
                        },
                        {
                            label: "足疗",
                            en_name: "Foot Care Therapist",
                            code: "5818"
                        },
                        {
                            label: "宠物护理/美容",
                            en_name: "Pet Care",
                            code: "5819"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "5820"
                        }
                    ]
                },
                {
                    label: "百货零售",
                    en_name: "Department Store/Retail",
                    code: "59",
                    child: [
                        {
                            label: "卖场经理/店长",
                            en_name: "Store Manager",
                            code: "5901"
                        },
                        {
                            label: "品类经理",
                            en_name: "Category Manager",
                            code: "5902"
                        },
                        {
                            label: "品牌/连锁招商管理",
                            en_name: "Brand/Chain Business Recruitment",
                            code: "5903"
                        },
                        {
                            label: "奢侈品业务",
                            en_name: "Luxury Business",
                            code: "5904"
                        },
                        {
                            label: "店员/营业员",
                            en_name: "Store Manager Trainee/Salesperson",
                            code: "5905"
                        },
                        {
                            label: "珠宝销售顾问",
                            en_name: "Jewelry Sales Consultant",
                            code: "5906"
                        },
                        {
                            label: "督导/巡店",
                            en_name: "Supervisor/Shop Visit",
                            code: "5907"
                        },
                        {
                            label: "促销员",
                            en_name: "Sales Promoter",
                            code: "5909"
                        },
                        {
                            label: "收银主管",
                            en_name: "Cashier Superviser",
                            code: "5910"
                        },
                        {
                            label: "收银员",
                            en_name: "Cashier",
                            code: "5911"
                        },
                        {
                            label: "理货员",
                            en_name: "Tally Clerk",
                            code: "5914"
                        },
                        {
                            label: "安防主管",
                            en_name: "Security Technical Service Executive",
                            code: "5915"
                        },
                        {
                            label: "防损员/内保",
                            en_name: "Loss Prevention",
                            code: "5916"
                        },
                        {
                            label: "西点师/面包糕点加工",
                            en_name: "Pastry/Bakery Assistant",
                            code: "5917"
                        },
                        {
                            label: "生鲜食品加工/处理",
                            en_name: "Raw Food Assistant",
                            code: "5918"
                        },
                        {
                            label: "熟食加工",
                            en_name: "Cooked Food Assistant",
                            code: "5919"
                        },
                        {
                            label: "兼职店员",
                            en_name: "Part-time Salesperson",
                            code: "5920"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "5921"
                        }
                    ]
                },
                {
                    label: "交通运输服务",
                    en_name: "Traffic Service",
                    code: "60",
                    child: [
                        {
                            label: "飞机机长/副机长",
                            en_name: "Flight Captain",
                            code: "6001"
                        },
                        {
                            label: "空乘人员",
                            en_name: "Flight Attendant",
                            code: "6002"
                        },
                        {
                            label: "列车/地铁车长",
                            en_name: "Train/Subway Conductor",
                            code: "6003"
                        },
                        {
                            label: "船长/副船长",
                            en_name: "Fleet Captain",
                            code: "6004"
                        },
                        {
                            label: "商务司机",
                            en_name: "Business Drivers",
                            code: "6005"
                        },
                        {
                            label: "客运司机",
                            en_name: "Passenger Driver",
                            code: "6006"
                        },
                        {
                            label: "货运司机",
                            en_name: "Freight Driver",
                            code: "6007"
                        },
                        {
                            label: "出租车司机",
                            en_name: "Taxi Driver",
                            code: "6008"
                        },
                        {
                            label: "班车司机",
                            en_name: "Regular Bus Driver",
                            code: "6009"
                        },
                        {
                            label: "列车/地铁司机",
                            en_name: "Train/Subway Driver",
                            code: "6010"
                        },
                        {
                            label: "特种车司机",
                            en_name: "Special Vehicle Driver",
                            code: "6011"
                        },
                        {
                            label: "驾校教练",
                            en_name: "Driving Coach",
                            code: "6015"
                        },
                        {
                            label: "代驾",
                            en_name: "Designated Driver",
                            code: "6016"
                        },
                        {
                            label: "地勤人员",
                            en_name: "Ground Attendant",
                            code: "6017"
                        },
                        {
                            label: "乘务员",
                            en_name: "Attendant",
                            code: "6018"
                        },
                        {
                            label: "船员",
                            en_name: "Sailor",
                            code: "6019"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "6020"
                        }
                    ]
                },
                {
                    label: "家政保洁",
                    en_name: "Housekeeping/Cleaning",
                    code: "61",
                    child: [
                        {
                            label: "家政服务/保姆",
                            en_name: "Housekeeping/Nanny",
                            code: "6101"
                        },
                        {
                            label: "月嫂",
                            en_name: "Maternity Nanny",
                            code: "6102"
                        },
                        {
                            label: "育婴师/保育员",
                            en_name: "Baby Care Specialist",
                            code: "6103"
                        },
                        {
                            label: "护工",
                            en_name: "Nursing Workers",
                            code: "6104"
                        },
                        {
                            label: "清洁工",
                            en_name: "Cleaning Staff",
                            code: "6105"
                        },
                        {
                            label: "保镖",
                            en_name: "Bodyguard",
                            code: "6109"
                        },
                        {
                            label: "家电维修",
                            en_name: "Home Appliance Repairer",
                            code: "6111"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "6113"
                        }
                    ]
                },
                {
                    label: "公务员",
                    en_name: "Official",
                    code: "62",
                    child: [
                        {
                            label: "公务员",
                            en_name: "Official",
                            code: "6201"
                        }
                    ]
                },
                {
                    label: "翻译",
                    en_name: "Translator",
                    code: "63",
                    child: [
                        {
                            label: "英语翻译",
                            en_name: "English Translator",
                            code: "6301"
                        },
                        {
                            label: "日语翻译",
                            en_name: "Japanese Translator",
                            code: "6302"
                        },
                        {
                            label: "德语翻译",
                            en_name: "German Translator",
                            code: "6303"
                        },
                        {
                            label: "法语翻译",
                            en_name: "French Translator",
                            code: "6304"
                        },
                        {
                            label: "俄语翻译",
                            en_name: "Russian Translator",
                            code: "6305"
                        },
                        {
                            label: "意大利语翻译",
                            en_name: "Italian Translator",
                            code: "6306"
                        },
                        {
                            label: "西班牙语翻译",
                            en_name: "Spanish Translator",
                            code: "6307"
                        },
                        {
                            label: "葡萄牙语翻译",
                            en_name: "Portuguese Translator",
                            code: "6308"
                        },
                        {
                            label: "阿拉伯语翻译",
                            en_name: "Arabic Translator",
                            code: "6309"
                        },
                        {
                            label: "韩语/朝鲜语翻译",
                            en_name: "Korean Translator",
                            code: "6310"
                        },
                        {
                            label: "泰语翻译",
                            en_name: "Thai Translator",
                            code: "6311"
                        },
                        {
                            label: "中国方言翻译",
                            en_name: "Chinese Dialect Translator",
                            code: "6312"
                        },
                        {
                            label: "其他语种翻译",
                            en_name: "Other Language Translator",
                            code: "6313"
                        }
                    ]
                },
                {
                    label: "在校学生",
                    en_name: "Student",
                    code: "64",
                    child: [
                        {
                            label: "研究生",
                            en_name: "Graduate Student",
                            code: "6401"
                        },
                        {
                            label: "大学/大专应届毕业生",
                            en_name: "University/College Graduating Student",
                            code: "6402"
                        },
                        {
                            label: "中专/职校生",
                            en_name: "Technical/Vocational School Student",
                            code: "6403"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "6404"
                        }
                    ]
                },
                {
                    label: "储备干部/培训生/实习生",
                    en_name: "Trainee/Intern",
                    code: "65",
                    child: [
                        {
                            label: "储备干部",
                            en_name: "Associate Trainee",
                            code: "6501"
                        },
                        {
                            label: "培训生",
                            en_name: "Trainee",
                            code: "6502"
                        },
                        {
                            label: "实习生",
                            en_name: "Intern",
                            code: "6503"
                        }
                    ]
                },
                {
                    label: "兼职",
                    en_name: "Part Time",
                    code: "66",
                    child: [
                        {
                            label: "兼职",
                            en_name: "Part Time",
                            code: "6601"
                        }
                    ]
                },
                {
                    label: "环保",
                    en_name: "Environmental",
                    code: "67",
                    child: [
                        {
                            label: "环保工程师",
                            en_name: "Environmental Protection Engineer",
                            code: "6701"
                        },
                        {
                            label: "环境影响评价工程师",
                            en_name: "Environmental Impact Assessment Engineer",
                            code: "6702"
                        },
                        {
                            label: "生态治理/规划",
                            en_name: "Ecological Management/ Planning",
                            code: "6703"
                        },
                        {
                            label: "环保检测",
                            en_name: "Environmental Inspector",
                            code: "6704"
                        },
                        {
                            label: "水质检测员",
                            en_name: "Water Quality Inspector",
                            code: "6705"
                        },
                        {
                            label: "水处理工程师",
                            en_name: "Water Treatment Engineer",
                            code: "6706"
                        },
                        {
                            label: "固废工程师",
                            en_name: "Waste Treatment Engineer",
                            code: "6707"
                        },
                        {
                            label: "废气处理工程师",
                            en_name: "Waste Gas Treatment Engineer",
                            code: "6708"
                        },
                        {
                            label: "其它",
                            en_name: "Others",
                            code: "6709"
                        }
                    ]
                },
                {
                    label: "农/林/牧/渔",
                    en_name: "Agriculture/Forestry/Fishing",
                    code: "68",
                    child: [
                        {
                            label: "养殖部主管",
                            en_name: "Culturist",
                            code: "6801"
                        },
                        {
                            label: "场长(农/林/牧/渔业)",
                            en_name: "Director(Agriculture/Forestry/Fishing)",
                            code: "6802"
                        },
                        {
                            label: "农艺师",
                            en_name: "Agronomist",
                            code: "6803"
                        },
                        {
                            label: "畜牧师",
                            en_name: "Animal Husbandry",
                            code: "6804"
                        },
                        {
                            label: "饲养员",
                            en_name: "Animal Care Technician",
                            code: "6805"
                        },
                        {
                            label: "动物营养/饲料研发",
                            en_name: "Animal Food R&D",
                            code: "6806"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "6807"
                        }
                    ]
                },
                {
                    label: "网店淘宝",
                    en_name: "Online Shop(Taobao)",
                    code: "69",
                    child: [
                        {
                            label: "网店/淘宝店长",
                            en_name: "Online Shop Manager",
                            code: "6901"
                        },
                        {
                            label: "网店/淘宝运营",
                            en_name: "Online Shop Operations Specialist(Taobao)",
                            code: "6902"
                        },
                        {
                            label: "网店/淘宝客服",
                            en_name: "Online Shop Customer Service(Taobao)",
                            code: "6904"
                        },
                        {
                            label: "店铺推广",
                            en_name: "Online Shop Marketing",
                            code: "6905"
                        },
                        {
                            label: "网店美工",
                            en_name: "Online Shop Graphic Designer",
                            code: "6906"
                        },
                        {
                            label: "网店模特",
                            en_name: "Shop Model",
                            code: "6907"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "6908"
                        }
                    ]
                },
                {
                    label: "机械机床",
                    en_name: "Mechanical/Machine",
                    code: "70",
                    child: [
                        {
                            label: "数控操机",
                            en_name: "CNC operator",
                            code: "7001"
                        },
                        {
                            label: "数控编程",
                            en_name: "CNC programmer",
                            code: "7002"
                        },
                        {
                            label: "机修工",
                            en_name: "Mechanic",
                            code: "7003"
                        },
                        {
                            label: "折弯工",
                            en_name: "Press Brake Operator",
                            code: "7004"
                        },
                        {
                            label: "车工",
                            en_name: "Latheman",
                            code: "7005"
                        },
                        {
                            label: "磨工",
                            en_name: "Grinder",
                            code: "7006"
                        },
                        {
                            label: "铣工",
                            en_name: "Miller",
                            code: "7007"
                        },
                        {
                            label: "冲压工",
                            en_name: "Puncher",
                            code: "7008"
                        },
                        {
                            label: "刨工",
                            en_name: "Planer",
                            code: "7009"
                        },
                        {
                            label: "钳工",
                            en_name: "Locksmith",
                            code: "7010"
                        },
                        {
                            label: "钻工",
                            en_name: "Driller",
                            code: "7011"
                        },
                        {
                            label: "镗工",
                            en_name: "Borer",
                            code: "7012"
                        },
                        {
                            label: "铆工",
                            en_name: "Riveter",
                            code: "7013"
                        },
                        {
                            label: "钣金工",
                            en_name: "Metaler",
                            code: "7014"
                        },
                        {
                            label: "抛光工",
                            en_name: "Polisher",
                            code: "7015"
                        },
                        {
                            label: "切割技工",
                            en_name: "Cutting Technician",
                            code: "7016"
                        },
                        {
                            label: "模具工",
                            en_name: "Mould Worker",
                            code: "7017"
                        },
                        {
                            label: "炼胶工",
                            en_name: "Millman",
                            code: "7018"
                        },
                        {
                            label: "硫化工",
                            en_name: "Sulfur Chemicals Workers",
                            code: "7019"
                        },
                        {
                            label: "吹膜工",
                            en_name: "Film Blowing Worker",
                            code: "7020"
                        },
                        {
                            label: "注塑工",
                            en_name: "Injection Moulder",
                            code: "7021"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "7022"
                        }
                    ]
                },
                {
                    label: "印刷包装",
                    en_name: "Printing/Packing",
                    code: "71",
                    child: [
                        {
                            label: "印刷工",
                            en_name: "Printer",
                            code: "7101"
                        },
                        {
                            label: "校对/录入",
                            en_name: "Proofreader/Data Entry Staff",
                            code: "7102"
                        },
                        {
                            label: "调色员",
                            en_name: "Color Mixing Workers",
                            code: "7103"
                        },
                        {
                            label: "烫金工",
                            en_name: "Gold-Blocking Worker",
                            code: "7104"
                        },
                        {
                            label: "晒版员",
                            en_name: "Stapler",
                            code: "7105"
                        },
                        {
                            label: "印刷排版/制版",
                            en_name: "Layout Designer",
                            code: "7106"
                        },
                        {
                            label: "装订工",
                            en_name: "Binder",
                            code: "7107"
                        },
                        {
                            label: "印刷机械机长",
                            en_name: "Printing Machine Operator",
                            code: "7108"
                        },
                        {
                            label: "数码直印/菲林输出",
                            en_name: "Digital/Film Printing",
                            code: "7109"
                        },
                        {
                            label: "调墨技师",
                            en_name: "Ink Technician",
                            code: "7110"
                        },
                        {
                            label: "电分操作员",
                            en_name: "Operator-Colour Distinguishing",
                            code: "7111"
                        },
                        {
                            label: "打稿机操作员",
                            en_name: "Operator",
                            code: "7112"
                        },
                        {
                            label: "切纸机操作工",
                            en_name: "Paper Cutter Operators",
                            code: "7113"
                        },
                        {
                            label: "裱胶工",
                            en_name: "Laminating Glue Workers",
                            code: "7114"
                        },
                        {
                            label: "压痕工",
                            en_name: "Indenting Workers",
                            code: "7115"
                        },
                        {
                            label: "复卷工",
                            en_name: "Rewindingworker",
                            code: "7116"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "7117"
                        }
                    ]
                },
                {
                    label: "运动健身",
                    en_name: "Sports/Fitness",
                    code: "72",
                    child: [
                        {
                            label: "健身顾问/教练",
                            en_name: "Fitness Trainer",
                            code: "7201"
                        },
                        {
                            label: "瑜伽老师",
                            en_name: "Yoga Instructor",
                            code: "7202"
                        },
                        {
                            label: "舞蹈老师",
                            en_name: "Dance Instructor",
                            code: "7203"
                        },
                        {
                            label: "游泳教练",
                            en_name: "Swimming Coach",
                            code: "7204"
                        },
                        {
                            label: "救生员",
                            en_name: "Lifeguard",
                            code: "7205"
                        },
                        {
                            label: "高尔夫教练",
                            en_name: "Golf Coach",
                            code: "7206"
                        },
                        {
                            label: "体育运动教练",
                            en_name: "Sports Coach",
                            code: "7207"
                        }
                    ]
                },
                {
                    label: "休闲娱乐",
                    en_name: "Entertainments",
                    code: "73",
                    child: [
                        {
                            label: "司仪",
                            en_name: "Event Host",
                            code: "7301"
                        },
                        {
                            label: "婚礼/庆典策划服务",
                            en_name: "Wedding/Event Planning",
                            code: "7302"
                        },
                        {
                            label: "DJ",
                            en_name: "DJ",
                            code: "7303"
                        },
                        {
                            label: "驻唱/歌手",
                            en_name: "Singer",
                            code: "7304"
                        },
                        {
                            label: "舞蹈演员",
                            en_name: "Dancer",
                            code: "7305"
                        },
                        {
                            label: "模特",
                            en_name: "Model",
                            code: "7306"
                        },
                        {
                            label: "演员/群众演员",
                            en_name: "Actor/Actress",
                            code: "7307"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "7308"
                        }
                    ]
                },
                {
                    label: "其他",
                    en_name: "Others",
                    code: "74",
                    child: [
                        {
                            label: "驯兽师/助理驯兽师",
                            en_name: "Animal Trainer",
                            code: "7401"
                        },
                        {
                            label: "志愿者/社会工作者",
                            en_name: "Volunteer /Social Worker",
                            code: "7402"
                        },
                        {
                            label: "其他",
                            en_name: "Others",
                            code: "7403"
                        }
                    ]
                }
            ]
        }

    }]);
});

