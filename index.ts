import server from "./src/app/config/server";

const port = 5500;
server.listen(port, () => console.log(`Server is running on port ${port}`));
