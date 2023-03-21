import { lazy } from "react";

export interface Routes {
    path: string;
    element: React.ComponentType<any>;
    isProtected: boolean;
}

export const routes: Routes[] =[
    {
        path: "/",
        element: lazy(()=> import("../pages/PopularsMovie")),
        isProtected:false
    },
    { 
        path: "/info/:id",
        element: lazy(()=> import("../pages/MovieInfo")),
        isProtected:true
    },
    { 
        path: "/login",
        element: lazy(()=> import("../pages/Login")),
        isProtected:false
    },

    {
        path: '/registration',
        element: lazy(()=> import("../pages/Registration")),
        isProtected:false
    },

    {
        path: '/profile',
        element: lazy(()=> import("../pages/Profile")),
        isProtected:true
    }
]