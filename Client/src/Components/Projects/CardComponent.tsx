import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function ImgMediaCard(
  { projectData }: { projectData: any },
  { index }: { index: any }
) {
  // {projectData.image.includes("http") ?"blank":null}

  //  let condition = true
  return (
    <Grid
      container
      id="Projects"
      style={{
        border: ` 5px solid ${projectData.bgColor}`,
        color: "rgba(100,100,100)",
        padding: "4em",
        minHeight: "70vh",
        width: "100%",
        margin: "0 auto",
        backgroundColor: "rgba(240,240,240)",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        boxShadow: "inset 1px 1px 5px 2px #000000",
      }}
    >
      <Grid
        item
        xs={10}
        sm={5}
        md={5}
        lg={4}
        style={{ padding: "0em 0em 2em 0em" }}
      >
        <h1 style={{ fontSize: "xx-large", color: `${projectData.bgColor}` }}>
          {projectData.title}
        </h1>
        <hr />
        <h3 style={{ lineHeight: "1.25em", fontSize: "1.5em" }}>
          {projectData.description}
        </h3>
        <a
          style={{ textDecoration: "none", color: "#666" }}
          target="_blank"
          href={projectData.gitHubLink}
        >
          <i
            className="devicon-github-original"
            style={{ fontSize: "2em" }}
          ></i>
        </a>
      </Grid>

      <Grid item xs={10} sm={5} md={5} lg={4}>
        <Card style={{ boxShadow: "0px 5px 17px 6px rgba(0,0,0,0.88)" }}>
          <CardMedia
            component="img"
            alt={projectData.title}
            height="auto"
            width="100vw"
            image={projectData.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {projectData.title}
            </Typography>
            {/* <Typography variant="body2">{projectData.description}</Typography> */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {projectData.techs.map(
                (
                  t:
                    | boolean
                    | React.ReactChild
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined
                ) => (
                  <p
                    style={{
                      clipPath:
                        " polygon(100% 0%, 100% 50%, 100% 100%, 15% 100%, 0% 50%, 15% 0%)",
                      backgroundColor: `${projectData.bgColor}`,
                      borderRadius: "99px",
                      padding: ".5rem",
                      fontSize: ".75rem",
                      verticalAlign: "middle",
                      width: "8rem",
                      color: "white",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                    // variant="body2"
                  >
                    • {t}
                  </p>
                )
              )}
            </div>
          </CardContent>
          <CardActions>
            <Button>
              <a
                rel="noreferrer"
                href={projectData.linkMultiForm}
                target={
                  projectData.linkMultiForm.includes("http")
                    ? "_blank"
                    : undefined
                }
              >
                View Project{" "}
              </a>

              {/* <Link target="_blank" to={projectData.linkMultiForm}>View Project </Link> */}
            </Button>

            <a href={projectData.linkMultiForm}></a>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
