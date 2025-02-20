import app from "./src/app";

const startServer = () => {
  const port = process.env.PORT || 3001;

  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

startServer();
