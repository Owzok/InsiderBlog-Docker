FROM python:3-slim
WORKDIR /home/ubuntu/parcial/posts
COPY . .
RUN pip3 install psycopg2-binary
RUN pip3 install -r requirements.txt
ENV FLASK_APP server
CMD ["flask", "run", "--host=0.0.0.0", "--port=8002"]
