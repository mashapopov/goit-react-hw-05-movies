import { List, Item, MovieLink } from './HomeList.styled';

const HomeList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

export default HomeList;
