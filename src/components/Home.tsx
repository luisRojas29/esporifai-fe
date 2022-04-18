const Home = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Spotify Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">Spotify</div>
          <a className="inline-flex
            items-center 
            h-8 px-4 m-2
            text-sm
            text-indigo-100
            transition-colors
            duration-150
            bg-indigo-700
            rounded-lg
            focus:shadow-outline
            hover:bg-indigo-800" href="http://localhost:3001/login">
              Login with Spotify
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
