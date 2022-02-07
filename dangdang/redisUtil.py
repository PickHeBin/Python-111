import redis
import setting
import operator


class RedisUtil(object):

    def __init__(self):
        if not hasattr(RedisUtil, 'pool'):
            RedisUtil.getRedisCoon()  # 创建redis连接
        self.coon = redis.Redis(connection_pool=RedisUtil.pool)

    @staticmethod
    def getRedisCoon():
        redisInfo = {
            'host': setting.REDIS_HOST,
            'port': setting.REDIS_PORT,
            'password': setting.REDIS_PASSWROD,
            'db': setting.REDIS_DB,
        }
        RedisUtil.pool = redis.ConnectionPool(host=redisInfo['host'], password=redisInfo['password'],
                                              port=redisInfo['port'], db=redisInfo['db'])

    def setredis(self, key, value, time=None):
        """
        string类型 {'key':'value'} redis操作
        :param time: 过期时间
        :return:
        """
        # 非空即真非0即真
        if time:
            res = self.coon.setex(key, value, time)
        else:
            res = self.coon.set(key, value)
        return res

    def saddredis(self, key, value):
        """
        讲元素添加到set集合中,插入成功的返回1,插入成功的返回0
        :return:
        """
        # 非空即真非0即真
        res = self.coon.sadd(key, value)
        return res

    def srandmember(self, key):
        """
        讲元素添加到set集合中,插入成功的返回1,插入成功的返回0
        :return:
        """
        res = self.coon.srandmember(key)
        return res.decode()

    def getRedis(self, key):
        """
        获取str类型值
        """
        res = self.coon.get(key).decode()
        return res

    def delRedis(self, key):
        """
        删除key
        """
        res = self.coon.delete(key)
        return res


if __name__ == '__main__':
    ru = RedisUtil()
    print(ru.pool)
    ru2 = RedisUtil()
    print(ru2.pool)
    print(operator.eq(ru.pool, ru2.pool))
    print(operator.eq(ru, ru2))
    # redisUtil.setredis('aaa', '123')
