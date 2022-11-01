import React from 'react';
import { Switch, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../../components/NonAuthLayout";
import VerticalLayout from "../../components/VerticalLayout/index";
import VerticalLayoutSuperAdmin from "../../components/VerticalLayoutSuperAdmin/index";
import HorizontalLayout from '../../components/HorizontalLayout';
//routes
import { userRoutes, StakeHolderRoutes, authRoutes, superAdminRoutes } from "../allRoutes";
// import { authProtectedRoutesAdmin } from "../pages/Pages/Government/Admin/AdminLayout/Routes/allRoutes";

import { AuthProtected, AccessRoute } from './AuthProtected';
import { AuthProtectedAdmin, AccessRouteAdmin } from './AuthProtectedAdmin';
import { AccessRouteStakeholder, AuthProtectedStakeholder } from './AuthProtectedStakeholder'

const Index = () => {
    const availablePublicRoutesPaths = authRoutes.map((r) => r.path);
    const availableAuthRoutesPath = userRoutes.map((r) => r.path);
    const availableAuthRoutesPathAdmin = superAdminRoutes.map((r) => r.path);
    const availableAuthRoutesPathStakeHolderRoutes = StakeHolderRoutes.map((r) => r.path);
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
                {/*  */}
                <Route path={availableAuthRoutesPathStakeHolderRoutes}>
                    <AuthProtectedStakeholder>
                        <VerticalLayout>
                            <Switch>
                                {StakeHolderRoutes.map((route, idx) => (
                                    <AccessRoute
                                        path={route.path}
                                        component={route.component}
                                        key={idx}
                                        exact={true}
                                    />
                                ))}
                            </Switch>
                        </VerticalLayout>
                    </AuthProtectedStakeholder>
                </Route>

                <Route path={availableAuthRoutesPath}>
                    <AuthProtected>
                        <HorizontalLayout>
                            <Switch>
                                {userRoutes.map((route, idx) => (
                                    <AccessRouteStakeholder
                                        path={route.path}
                                        component={route.component}
                                        key={idx}
                                        exact={true}
                                    />
                                ))}
                            </Switch>
                        </HorizontalLayout>
                    </AuthProtected>
                </Route>
            </Switch>
        </React.Fragment>
    );
};

export default Index;