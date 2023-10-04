import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ServicePage from '../components/ServicePage/ServicePage';
import HomePage from '../components/HomePage/HomePage';


const ROUTER = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'services',
                element: <ServicePage />
            },
        ],
    },
]);

export default ROUTER;