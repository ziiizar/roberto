interface routes {
  home: string;
  sport: string;
  casino: string;

}

export const routes: routes = {
  home: "/home",
  sport: "/home/sport",
  casino: "/home/casino",
 

};


const PUBLIC_ROUTES = [routes.home, ];
// const PREFIX_PUBLIC_ROUTES = [];
// const ADMIN_ROUTES = [routes.admin, routes.adminLeads];
// const AUTH_ROUTES = [routes.login, routes.verifyEmail, routes.confirmEmail, routes.reset, routes.newPassword];

export { PUBLIC_ROUTES };
