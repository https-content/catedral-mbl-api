import server from "./src/app/config/server";

const port = process.env.PORT;
server.listen(port, () => console.log(`Server is running on port ${port}`));
