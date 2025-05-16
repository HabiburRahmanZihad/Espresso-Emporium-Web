import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';
import Home from '../Components/Home';
import AddCoffee from '../Components/AddCoffee';
import UpdateCoffee from '../Components/UpdateCoffee';
import CoffeeDetails from '../Components/CoffeeDetails';
import Error from '../Components/Error';
import Signup from '../Components/Signup';
import Signin from '../Components/Signin';
import Users from '../Components/Users';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <Error></Error>,
        hydrateFallbackElement: <div className='text-center text-3xl font-bold'>Loading...</div>,


        children: [

            {
                index: true,
                loader: () => fetch('http://localhost:3000/coffees'),
                element: <Home></Home>
            },

            { path: 'add', element: <AddCoffee></AddCoffee> },

            { path: 'signup', element: <Signup></Signup> },

            { path: 'signin', element: <Signin></Signin> },

            {
                path: 'users',
                loader: () => fetch('http://localhost:3000/users'),
                element: <Users></Users>
            },

            {
                path: 'update/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
                element: <UpdateCoffee></UpdateCoffee>
            },

            {
                path: 'details/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
                element: <CoffeeDetails></CoffeeDetails>
            },

            { path: '*', element: <Error></Error> },

        ]
    },
]);
