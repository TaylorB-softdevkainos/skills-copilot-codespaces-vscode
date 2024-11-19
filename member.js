function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'views/member.html',
        controller: 'MemberCtrl',
        controllerAs: 'member',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}