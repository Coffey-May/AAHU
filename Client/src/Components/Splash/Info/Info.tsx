import { Container } from "@material-ui/core";
import Comments from "./CommentsSection/Comments";
import "./index.css";

const Info = () => {
  return (
    <div style={{ minHeight: "80vh", marginTop: "15vh" }}>
      <Container>
        <h1>INFORMATION</h1>
        <h2>HISTORY</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ullam
          nam rerum error. Impedit culpa ab reiciendis harum perferendis veniam
          totam, accusantium non molestias quisquam voluptas, architecto minima
          pariatur ipsum alias tempora excepturi soluta dolor voluptates
          recusandae. Id pariatur quis aspernatur? Iste excepturi facere
          voluptas. Nulla tempora autem hic fugiat.
        </p>
        <h2>TESTIMONIALS</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ullam
          nam rerum error. Impedit culpa ab reiciendis harum perferendis veniam
          totam, accusantium non molestias quisquam voluptas, architecto minima
          pariatur ipsum alias tempora excepturi soluta dolor voluptates
          recusandae. Id pariatur quis aspernatur? Iste excepturi facere
          voluptas. Nulla tempora autem hic fugiat.
        </p>
        <h2>FAQ</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ullam
          nam rerum error. Impedit culpa ab reiciendis harum perferendis veniam
          totam, accusantium non molestias quisquam voluptas, architecto minima
          pariatur ipsum alias tempora excepturi soluta dolor voluptates
          recusandae. Id pariatur quis aspernatur? Iste excepturi facere
          voluptas. Nulla tempora autem hic fugiat.
        </p>

        <div>
          {/* <h1>Comments</h1> */}
          <Comments
            commentsUrl="http://localhost:3004/comments"
            currentUserId="1"
          />
        </div>
      </Container>
    </div>
  );
};

export default Info;
