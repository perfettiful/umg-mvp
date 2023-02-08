<h1 align='center'> 🎹 Spotify Audio Track REST API 🎹 </h1>

<h2> Table of Contents</h2>

- [Description](#description)
- [Technologies Used](#technologies)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)
- [About The Developer](#about)

<h2 id="description" > 📝  Description</h2>
<p>Backend REST API using Node, Express, Sequelize and MySql with Spotify API</p>
<hr></hr>
<h2 id="technologies" >🏗 Technologies Used</h2>  

![](https://img.shields.io/badge/Express.js-4A4A55?style=for-the-badge&logo=express&logoColor=white)
![](https://img.shields.io/badge/Node.js-86BE00?style=for-the-badge&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![](https://img.shields.io/badge/Sequelize-21759B?style=for-the-badge&logo=sequelize&logoColor=white)
![](https://img.shields.io/badge/MySQL-F79F17?style=for-the-badge&logo=mysql&logoColor=white)
![](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)
![](https://img.shields.io/badge/AWS_EB-00C7B7?style=for-the-badge&logo=AWS&logoColor=white)
![](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
![](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![](https://img.shields.io/badge/Swagger-32CD32?style=for-the-badge&logo=swagger&logoColor=black)

<hr></hr>
<h2 id="usage">🛠  Running Locally </h2>

Clone the Repo

```bash
git clone https://github.com/perfettiful/umg-mvp.git
```
Install NPM dependencies and Add your credentials to `.env` environmental variables

```bash
cd umg-mvp && cp .env.EXAMPLE ./.env && npm install
```
Run Tests to ensure connection to Spotify API
```bash
npm run test
```

Create a new instance of the DB to your local MySql Server
```bash
mysql -u root -p
```

```bash
source db/schema.sql
```

Seed your local DB with example Tracks and Artists data
```bash
npm run seed
```

Start server in developer mode

```bash
npm run start:dev
```
Read API documentation
<a href="https://umg-mvp.herokuapp.com//docs" target="blank"><img align="center" src="https://raw.githubusercontent.com/perfettiful/umg-mvp/main/assets/swagger_docs.png" alt="perfettiful"  /></a>


Load API test routes profile into Postman 
<a href="https://github.com/perfettiful/umg-mvp/blob/main/UMG_Codes_Routes.postman_collection.json" target="blank"><img align="center" src="https://raw.githubusercontent.com/perfettiful/umg-mvp/main/assets/postman.png" alt="perfettiful"  /></a>

<hr></hr>
<h2 id="deployment" >🚀  Deployment </h2>
<div align="center">

[![Deploy Your Own to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

[🍴 Fork This Repo](https://github.com/perfettiful/umg-mvp)

[👀 Watch This Repo](https://github.com/perfettiful/umg-mvp)

[⁉️ Create An Issue](https://github.com/perfettiful/umg-mvp)

</div>
