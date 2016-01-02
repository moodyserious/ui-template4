
var controllers = angular.module("Mycontrollers", []);

controllers.controller("indexController", function($scope, $state,  $sce, $log, $mdDialog, $rootScope){
 $scope.tgState= true;
 $scope.tgRightState = false;
 $scope.options = {
  chart: {
   type: 'stackedAreaChart',
   margin : {
    top: 20,
    right: 20,
    bottom: 60,
    left: 40
   },
   x: function(d){return d[0];},
   y: function(d){return d[1];},
   useVoronoi: false,
   clipEdge: true,
   transitionDuration: 500,
   useInteractiveGuideline: true,
   xAxis: {
    showMaxMin: false,
    tickFormat: function(d) {
     return d3.time.format('%x')(new Date(d))
    }
   },
   yAxis: {
    tickFormat: function(d){
     return d3.format(',.2f')(d);
    }
   }
  }
 };

 $scope.data1 = [
  {
   "key" : "North America" ,
   "values" : [[ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832], [ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832], [ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832], [ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832], [ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832], [ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832] , [ 1030766400000 , 21.02286281168] , [ 1033358400000 , 22.093608385173] , [ 1036040400000 , 25.108079299458] , [ 1038632400000 , 26.982389242348] , [ 1041310800000 , 19.828984957662] , [ 1043989200000 , 19.914055036294] , [ 1046408400000 , 19.436150539916] , [ 1049086800000 , 21.558650338602] , [ 1051675200000 , 24.395594061773] , [ 1054353600000 , 24.747089309384] , [ 1056945600000 , 23.491755498807] , [ 1059624000000 , 23.376634878164] , [ 1062302400000 , 24.581223154533] , [ 1064894400000 , 24.922476843538] , [ 1067576400000 , 27.357712939042]  ,[ 1025409600000 , 23.041422681023] , [ 1028088000000 , 19.854291255832] , [ 1030766400000 , 21.02286281168] , [ 1033358400000 , 22.093608385173] , [ 1036040400000 , 25.108079299458] , [ 1038632400000 , 26.982389242348] , [ 1041310800000 , 19.828984957662] , [ 1043989200000 , 19.914055036294] , [ 1046408400000 , 19.436150539916] , [ 1049086800000 , 21.558650338602] , [ 1051675200000 , 24.395594061773] , [ 1054353600000 , 24.747089309384] , [ 1056945600000 , 23.491755498807] , [ 1059624000000 , 23.376634878164] , [ 1062302400000 , 24.581223154533] , [ 1064894400000 , 24.922476843538] , [ 1067576400000 , 27.357712939042] , [ 1070168400000 , 26.503020572593] , [ 1072846800000 , 26.658901244878] , [ 1075525200000 , 27.065704156445] , [ 1078030800000 , 28.735320452588] , [ 1080709200000 , 31.572277846319] , [ 1083297600000 , 30.932161503638] , [ 1085976000000 , 31.627029785554] , [ 1088568000000 , 28.728743674232] , [ 1091246400000 , 26.858365172675] , [ 1093924800000 , 27.279922830032] , [ 1096516800000 , 34.408301211324] , [ 1099195200000 , 34.794362930439] , [ 1101790800000 , 35.609978198951] , [ 1104469200000 , 33.574394968037] , [ 1107147600000 , 31.979405070598] , [ 1109566800000 , 31.19009040297] , [ 1112245200000 , 31.083933968994] , [ 1114833600000 , 29.668971113185] , [ 1117512000000 , 31.490638014379] , [ 1120104000000 , 31.818617451128] , [ 1122782400000 , 32.960314008183] , [ 1125460800000 , 31.313383196209] , [ 1128052800000 , 33.125486081852] , [ 1130734800000 , 32.791805509149] , [ 1133326800000 , 33.506038030366] , [ 1136005200000 , 26.96501697216] , [ 1138683600000 , 27.38478809681] , [ 1141102800000 , 27.371377218209] , [ 1143781200000 , 26.309915460827] , [ 1146369600000 , 26.425199957518] , [ 1149048000000 , 26.823411519396] , [ 1151640000000 , 23.850443591587] , [ 1154318400000 , 23.158355444054] , [ 1156996800000 , 22.998689393695] , [ 1159588800000 , 27.9771285113] , [ 1162270800000 , 29.073672469719] , [ 1164862800000 , 28.587640408904] , [ 1167541200000 , 22.788453687637] , [ 1170219600000 , 22.429199073597] , [ 1172638800000 , 22.324103271052] , [ 1175313600000 , 17.558388444187] , [ 1177905600000 , 16.769518096208] , [ 1180584000000 , 16.214738201301] , [ 1183176000000 , 18.729632971229] , [ 1185854400000 , 18.814523318847] , [ 1188532800000 , 19.789986451358] , [ 1191124800000 , 17.070049054933] , [ 1193803200000 , 16.121349575716] , [ 1196398800000 , 15.141659430091] , [ 1199077200000 , 17.175388025297] , [ 1201755600000 , 17.286592443522] , [ 1204261200000 , 16.323141626568] , [ 1206936000000 , 19.231263773952] , [ 1209528000000 , 18.446256391095] , [ 1212206400000 , 17.822632399764] , [ 1214798400000 , 15.53936647598] , [ 1217476800000 , 15.255131790217] , [ 1220155200000 , 15.660963922592] , [ 1222747200000 , 13.254482273698] , [ 1225425600000 , 11.920796202299] , [ 1228021200000 , 12.122809090924] , [ 1230699600000 , 15.691026271393] , [ 1233378000000 , 14.720881635107] , [ 1235797200000 , 15.387939360044] , [ 1238472000000 , 13.765436672228] , [ 1241064000000 , 14.631445864799] , [ 1243742400000 , 14.292446536221] , [ 1246334400000 , 16.170071367017] , [ 1249012800000 , 15.948135554337] , [ 1251691200000 , 16.612872685134] , [ 1254283200000 , 18.778338719091] , [ 1256961600000 , 16.756026065421] , [ 1259557200000 , 19.385804443146] , [ 1262235600000 , 22.950590240168] , [ 1264914000000 , 23.61159018141] , [ 1267333200000 , 25.708586989581] , [ 1270008000000 , 26.883915999885] , [ 1272600000000 , 25.893486687065] , [ 1275278400000 , 24.678914263176] , [ 1277870400000 , 25.937275793024] , [ 1280548800000 , 29.461381693838] , [ 1283227200000 , 27.357322961861] , [ 1285819200000 , 29.057235285673] , [ 1288497600000 , 28.549434189386] , [ 1291093200000 , 28.506352379724] , [ 1293771600000 , 29.449241421598] , [ 1296450000000 , 25.796838168807] , [ 1298869200000 , 28.740145449188] , [ 1301544000000 , 22.091744141872] , [ 1304136000000 , 25.07966254541] , [ 1306814400000 , 23.674906973064] , [ 1309406400000 , 23.418002742929] , [ 1312084800000 , 23.24364413887] , [ 1314763200000 , 31.591854066817] , [ 1317355200000 , 31.497112374114] , [ 1320033600000 , 26.67238082043] , [ 1322629200000 , 27.297080015495] , [ 1325307600000 , 20.174315530051] , [ 1327986000000 , 19.631084213898] , [ 1330491600000 , 20.366462219461] , [ 1333166400000 , 19.284784434185] , [ 1335758400000 , 19.157810257624]],
   "color": "#d0e3f6"
  }

 ]




  $scope.optionscompare = {
    chart: {
     type: 'multiBarChart',
     height: 275,
     width: 460,
     x: function (d) {
      return d.label;
     },
     y: function (d) {
      return d.value;
     }

    }
  };

  $scope.dataset = [
   {
    "values" : [
     {label: "Quarter 1", value:1 }, {label: "Quarter 2", value:5},
     {label: "Quarter 3", value:4 }, {label: "Quarter 4", value:3}
    ]
   },

   {
    "values" : [
     {label: "Quarter 1", value:2 }, {label: "Quarter 2", value:6},
     {label: "Quarter 3", value:7 }, {label: "Quarter 4", value:9}
    ]
   },


   {
    "values" : [
     {label: "Quarter 1", value:5 }, {label: "Quarter 2", value:4},
     {label: "Quarter 3", value:3 }, {label: "Quarter 4", value:2}
    ]
   },


   {
    "values" : [
     {label: "Quarter 1", value:1 }, {label: "Quarter 2", value:3},
     {label: "Quarter 3", value:7 }, {label: "Quarter 4", value:4}
    ]
   }


  ];

 $scope.videoSource =  $sce.trustAsResourceUrl("http://www.youtube.com/embed/-CYs99M7hzA");
 $scope.videodata = [
  {title : "Unboxing the HERO4", category: "Mashable", source: "http://www.youtube.com/embed/-CYs99M7hzA"},
  {title : "Apple Watch Unboxing", category: "Unbox", source: "http://www.youtube.com/embed/te689fEo2pY"},
  {title : "Power Transmitter", category: "Techcrunch", source: "http://www.youtube.com/embed/7AFJeaYojhU"},
  {title : "Macbook Design", category: "Apple", source: "http://www.youtube.com/embed/hajnEpCq5SE"}
 ]

 $scope.VidoeSelectedIndex = 0;
 $scope.videoclick = function(index, item){
     $scope.videoSource = $sce.trustAsResourceUrl($scope.videodata[index].source);
     $scope.VidoeSelectedIndex = index;
 }


 $scope.location=new google.maps.LatLng(10.508742,-0.120850);

 $scope.mapinit = function()
 {
  var mapProp = {
   center:$scope.location,
   zoom:5,
   mapTypeId:google.maps.MapTypeId.ROADMAP
  };

  $scope.map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  $scope.marker=new google.maps.Marker({
   position:$scope.location,
   icon:'images/locationicon.PNG'
  });

  $scope.marker.setMap($scope.map);

  $scope.infowindow = new google.maps.InfoWindow({
   content:"<b>" + "Prof. Margot Kuvalis " + "</b>" + "<br>" + "Nicolas and Sons"
  });

  $scope.infowindow.open($scope.map,$scope.marker);
 }



 google.maps.event.addDomListener(window, 'load', $scope.mapinit);

 $scope.userLocationData =[
  {name: "Prof. Margot Kuvalis",  locationinfo: "Nicolas and Sons", x: 10.508742, y:-0.120850, userImg:"assets/images/user1-4Map.PNG" },
  {name: "Prof. Missor Hirthi",  locationinfo: "Yost-Kihn", x: 35.508742, y:-0.120850,  userImg:"assets/images/user2-4Map.PNG"},
  {name: "Reba Barton Jr", locationinfo: "Koch Gutmann", x: 60.508742, y:-0.120850,  userImg:"assets/images/user3-4Map.PNG"},
  {name: "Prof. Gules Glover", locationinfo: "Powloski", x: 70.508742, y:-0.120850,  userImg:"assets/images/user4-4Map.PNG"},
  {name: "Gussie Wiegand", locationinfo: "Philadelphia", x: 80.508742, y:-0.120850,  userImg:"assets/images/user5-4Map.PNG"}
 ]

$scope.LocationSelectedIndex =0;
 $scope.getuserLocation = function(index, item){
    $scope.LocationSelectedIndex = index;
    $scope.location=new google.maps.LatLng($scope.userLocationData[index].x,$scope.userLocationData[index].y);
    $scope.marker=new google.maps.Marker({
     position:$scope.location,
     icon:'images/locationicon.PNG'

    });
    $scope.marker.setMap($scope.map);
    $scope.infowindow = new google.maps.InfoWindow({
     content: "<b>" + $scope.userLocationData[index].name + "</b>" + "<br>" + $scope.userLocationData[index].locationinfo
    });
    $scope.infowindow.open($scope.map,$scope.marker);


 }


 $rootScope.event = [
   {title: "Birthday", start: new Date(2015, 4, 8)},
   {title: "Eid", start: new Date(2015, 6, 2)},
   {title: "Exams", start: new Date(2015, 7, 3)},
   {title: "Interview", start: new Date(2015,2,3), end: new Date(2015,5 ,10)}
  ]


 $scope.eventSources = [$rootScope.event];
 $scope.calendarOptions = {
       editable : true,
       header: {
          left: 'prev',
          center: 'title',
          right: 'next'
       }
 }



 $scope.events = [
    {
     badgeClass: 'info',
     badgeIconClass: 'glyphicon-check',
     title: 'First heading',
     content: 'Some awesome content.',
     img: 'assets/images/user1-4Map.PNG',
     msg: 'The trend confirmed that an economic partition was under way even if various precedents existed in other war zones that did not mean such preferences were necessarily permanent.'
    },
    {
       badgeClass: 'warning',
       badgeIconClass: 'glyphicon-credit-card',
       title: 'Second heading',
       content: 'More awesome content',
       img: 'assets/images/user2-4Map.PNG',
     msg: 'The trend confirmed that an economic partition was under way even if various precedents existed in other war zones that did not mean such preferences were necessarily permanent.'


    },
    {
     badgeClass: 'info',
     badgeIconClass: 'glyphicon-check',
     title: 'First heading',
     content: 'Some awesome content.',
     img: 'assets/images/user3-4Map.PNG',
     msg: 'The trend confirmed that an economic partition was under way even if various precedents existed in other war zones that did not mean such preferences were necessarily permanent.'



    },
    {
     badgeClass: 'warning',
     badgeIconClass: 'glyphicon-credit-card',
     title: 'Second heading',
     content: 'More awesome content',
     img: 'assets/images/user4-4Map.PNG',
     msg: 'The trend confirmed that an economic partition was under way even if various precedents existed in other war zones that did not mean such preferences were necessarily permanent.'

    }
 ]

 $scope.items = [
  'The first choice!',
  'And another choice for you.',
  'but wait! A third!'
 ];

 $scope.status = {
  isopen: false
 };


 $scope.next = function() {
  $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
 };
 $scope.previous = function() {
  $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
 };

 $scope.switchTrue = true;
 $scope.switchFalse= false;


    $scope.showDialog = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'assets/templates/dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
            .then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
    };
})


function DialogController($scope, $mdDialog, $rootScope) {

    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.addEvent = function(title, link, dateinfo) {
        $rootScope.event.push({
            title: title,
            start: dateinfo,
            end: new Date(y, m, 29),
            className: ['openSesame']
        });
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}