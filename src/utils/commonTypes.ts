import React from 'react';

// interfaces
export interface AppRoute {
    name: string;
    path: string;
    element: React.FC;
}
