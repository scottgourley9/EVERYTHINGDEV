angular.module("app").controller("mainCtrl", function($scope){
function Players(name, PPG, height, team, src) {
  this.name = name;
  this.PPG = PPG;
  this.height = height;
  this.team = team;
  this.src = src;
}
$scope.players = [];
$scope.players.push(new Players("Steph", "30", "6:3", "Warriors", "http://l.yimg.com/bt/api/res/1.2/cKmQKqkRP_CvqLJZSf75HA--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9MjMwO3E9NzU7dz0zNDU-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/20151027/4612.png"));
$scope.players.push(new Players("Lebron", "25", "6:6", "Cavs", "http://www.playerprofiler.com/wp-content/uploads/2014/06/lebron1.png"));
$scope.players.push(new Players("Kevin", "27", "6:11", "Thunder", "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&w=350&h=254"));
$scope.players.push(new Players("Russell", "24", "6:2", "Thunder", "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254"));





})
