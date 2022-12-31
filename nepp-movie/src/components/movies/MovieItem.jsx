import { Link } from "react-router-dom";
import styled from "styled-components";

function MovieItem({movie}) {
    const {id, title , release_date , poster_path} = movie;

    const img_url = "https://image.tmdb.org/t/p/w342/"+poster_path ;
  return (
    <Container>
        <Link to={"/movies/"+id}>
            <ImgBox>
                <img src={img_url} alt="" />
            </ImgBox>
            <MovieTitle>{title}</MovieTitle>
            <ReleaseDate>{release_date}</ReleaseDate>
        </Link>

    </Container>
  );
}

const Container = styled.li`
    & + & {
    margin-left: 20px;
  }

`;

const ImgBox = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 225px;

    background-color: tomato;

    overflow: hidden;

    img {
        width: 120%;
    }
`;

const MovieTitle = styled.h3`
  font-size: 1rem;
  margin-top: 8px;
`;

const ReleaseDate = styled.span`
  font-size: 0.8rem;
  color:#aaa;
`;

export default MovieItem;