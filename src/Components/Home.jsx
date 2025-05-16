import Hero from './Hero';
import PronounHero from './PronounHero';
import FollowSocial from './FollowSocial';
import ShowCoffe from './ShowCoffe';
import { useLoaderData } from 'react-router';



const Home = () => {
    
    const initialCoffees = useLoaderData();

    return (
        <div>
            <Hero></Hero>

            <PronounHero></PronounHero>

            <ShowCoffe
                initialCoffees={initialCoffees}
            ></ShowCoffe>

            <FollowSocial></FollowSocial>
        </div>
    );
};

export default Home;