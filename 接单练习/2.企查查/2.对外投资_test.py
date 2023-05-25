# encoding: utf-8
import hashlib
import hmac
key = "iLAgiWL4Ligk4i46Lkgigk4Billv6lL88lik4iL1kNAAii41k618vrviAkLW6r1ALBlgvWlWl6iLAgiWL4Ligk4i46Lkgigk4Billv6lL88lik4iL1kNAAii41k618vrviAkLW6r1ALBlgvWlWl6"
msg = "/api/datalist/touzilist?keyno=9cce0780ab7644008b73bc2120479d31&pageindex=3{}"
test = hmac.new(bytes(key, encoding='utf-8'), bytes(msg, encoding='utf-8'), hashlib.sha512).hexdigest()

key1 = "iLAgiWL4Ligk4i46Lkgigk4Billv6lL88lik4iL1kNAAii41k618vrviAkLW6r1ALBlgvWlWl6iLAgiWL4Ligk4i46Lkgigk4Billv6lL88lik4iL1kNAAii41k618vrviAkLW6r1ALBlgvWlWl6"
msg1 = "/api/datalist/touzilist?keyno=9cce0780ab7644008b73bc2120479d31&pageindex=3pathString{}6827a6649ad688dc2f99ff318e5d4b74"

test1 = hmac.new(bytes(key1, encoding='utf-8'), bytes(msg1, encoding='utf-8'), hashlib.sha512).hexdigest()

print(test1)
