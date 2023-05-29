# Epitech Skills
![Vercel](https://vercelbadge.vercel.app/api/thegostisdead/epitech-skills)

⚠️Project is still in development 

## 🧐 Description
Upload your Epitech skills from [gandalf](https://gandalf.epitech.eu/) and upload it to this website. 

## 🚀 Run it locally

You need to deploy a mongodb and a S3 bucket (minio). You can use the docker-compose file to do it.

```bash
docker-compose up -d
```
Then you need to create a `.env` file with the following variables:
```
MINIO_ROOT_USER=root
MINIO_ROOT_PASSWORD=root
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=root
BUCKET_ENDPOINT=your-bucket-endpoint
BUCKET_PORT=9000
BUCKET_ACCESS_KEY=your-bucket-access-key
BUCKET_SECRET_KEY=your-bucket-secret-key
BUCKET_NAME=skills
DATABASE_URL=mongodb://yourdomain:27017/
```
Then you open: [**http://localhost:3000**](http://localhost:3000)


 

