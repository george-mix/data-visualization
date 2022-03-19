import React from 'react';

export interface AppRoute {
    name: string;
    path: string;
    element: React.FC;
}
