function skillsMember() {
    return{
        retrict: 'E',
        templateUrl: 'mudules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}