import { useSelector } from 'react-redux';

const Home = () => {
  const userAuth = useSelector((state) => state.isFetching);
  console.log(userAuth)
  return (
    <div>
      Home
    </div>
  );
}

export default Home;
