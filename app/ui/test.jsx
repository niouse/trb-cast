const loginOpt={
    loginRoute : "/trb-perf",
    msgDuration : 400
}

@UsersService()
@NavigationRouterService()
@AppStylesOptionsService(themes)
@AppLanguageService()
@Login(loginOpt)
class $Login{}