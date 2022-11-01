import React from 'react';
import { Switch, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../../components/NonAuthLayout";
import VerticalLayout from "../../components/VerticalLayout/index";
import VerticalLayoutSuperAdmin from "../../components/VerticalLayoutSuperAdmin/index";

//routes
import { userRoutes, authRoutes, superAdminRoutes } from "../allRoutes";
// import { authProtectedRoutesAdmin } from "../pages/Pages/Government/Admin/AdminLayout/Routes/allRoutes";

import { AuthProtected, AccessRoute } from './AuthProtected';
import { AuthProtectedAdmin, AccessRouteAdmin } from './AuthProtectedAdmin';

const Index = () => {
    const availablePublicRoutesPaths = authRoutes.map((r) => r.path);
    const availableAuthRoutesPath = userRoutes.map((r) => r.path);
    const availableAuthRoutesPathAdmin = superAdminRoutes.map((r) => r.path);
    // console.log(authProtectedRoutesAdmin) 
    return (
        <React.Fragment>
            <Switch>
                <Route path={availablePublicRoutesPaths}>
                    <NonAuthLayout>
                        <Switch>
                            {authRoutes.map((route, idx) => (
                                <Route
                                    path={route.path}
                                    component={route.component}
                                    key={idx}
                                    exact={true}
                                />
                            ))}
                        </Switch>
                    </NonAuthLayout>
                </Route>
                <Route path={availableAuthRoutesPathAdmin}>
                    <AuthProtectedAdmin>
                        <VerticalLayoutSuperAdmin>
                            <Switch>
                                {superAdminRoutes.map((route, idx) => (
                                    <AccessRouteAdmin
                                        path={route.path}
                                        component={route.component}
                                        key={idx}
                                        exact={true}
                                    />
                                ))}
                            </Switch>
                        </VerticalLayoutSuperAdmin>
                    </AuthProtectedAdmin>
                </Route>
                <Route path={availableAuthRoutesPath}>
                    <AuthProtected>
                        <VerticalLayout>
                            <Switch>
                                {userRoutes.map((route, idx) => (
                                    <AccessRoute
                                        path={route.path}
                                        component={route.component}
                                        key={idx}
                                        exact={true}
                                    />
                                ))}
                            </Switch>
                        </VerticalLayout>
                    </AuthProtected>
                </Route>

            </Switch>
        </React.Fragment>
    );
};

export default Index;