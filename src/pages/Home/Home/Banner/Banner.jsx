

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url("https://i.ibb.co/0ZS1XFx/summer-camp-school.jpg")`, backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
        }}  >
            <div className='container mx-auto text-center pt-32 pb-32'>
                <h2 className='text-center lg:text-8xl text-6xl text-white font-extrabold'>Welcome to</h2>
                <h2 className='text-center lg:text-8xl text-6xl text-white font-extrabold'>JS Sports Academy</h2>                
                <button className="mt-10 btn border-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-lg">View Our Classes</button>
            </div>
        </div>
    );
};

export default Banner;