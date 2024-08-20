import dce5baize from './swagger-files/baize/v0.107.4.json';
import dce5amamba from './swagger-files/amamba/v0.121.0.json';
import dce5ghippo from './swagger-files/ghippo/v0.28.0.json';
import dce5insight from './swagger-files/insight/v0.28.0.json';
import dce5kairship from './swagger-files/kairship/v0.21.1.json';
import dce5kangaroo from './swagger-files/kangaroo/v0.18.0.json';
import dce5kant from './swagger-files/kant/v0.13.0.json';
import dce5kpanda from './swagger-files/kpanda/v0.30.1.json';
import dce5mcamelmysql from './swagger-files/mcamel/mysql/mysql-v0.19.0.json';
import dce5mcamelredis from './swagger-files/mcamel/redis/redis-v0.19.0.json';
import dce5mcamelkafka from './swagger-files/mcamel/kafka/kafka-v0.17.0.json';
import dce5mcamelelasticsearch from './swagger-files/mcamel/elasticsearch/elasticsearch-v0.18.0.json';
import dce5mcamelmongodb from './swagger-files/mcamel/mongodb/mongodb-v0.12.0.json';
import dce5mcamelminio from './swagger-files/mcamel/minio/minio-v0.16.0.json';
import dce5mcamelpostgresql from './swagger-files/mcamel/postgresql/postgresql-v0.14.0.json';
import dce5mcamelrocketmq from './swagger-files/mcamel/rocketmq/rocketmq-v0.8.0.json';
import dce5mcamelrabbitmq from './swagger-files/mcamel/rabbitmq/rabbitmq-v0.22.0.json';
import dce5mspider from './swagger-files/mspider/v0.116.0.json';
import dce5skoala from './swagger-files/skoala/v0.38.2.json';
import dce5spidernet from './swagger-files/spidernet/v0.15.1.json';
import dce5virtnest from './swagger-files/virtnest/v0.9.0.json';

const apiContainers = {
    "DCE 5.0-20240730": {
        容器管理: dce5kpanda,
        应用工作台: dce5amamba,
        全局管理: dce5ghippo,
        服务网格: dce5mspider,
        微服务引擎: dce5skoala,
        可观测性: dce5insight,
        多云编排: dce5kairship,
        镜像仓库: dce5kangaroo,
        云边协同: dce5kant,
        智能算力: dce5baize,
        "中间件服务 MySQL": dce5mcamelmysql,
        "中间件服务 Redis": dce5mcamelredis,
        "中间件服务 Kafka": dce5mcamelkafka,
        "中间件服务 Elasticsearch": dce5mcamelelasticsearch,
        "中间件服务 MongoDB": dce5mcamelmongodb,
        "中间件服务 Minio": dce5mcamelminio,
        "中间件服务 PostgreSQL": dce5mcamelpostgresql,
        "中间件服务 RocketMQ": dce5mcamelrocketmq,
        "中间件服务 RabbitMQ": dce5mcamelrabbitmq,
        云原生网络: dce5spidernet,
        虚拟机: dce5virtnest,
    },
};

export default apiContainers;
