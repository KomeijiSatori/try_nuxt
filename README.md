## Nuxt expirements here

#### Install
1. npm install

### Start the project
1. npm run dev

### Nginx config
1. install nginx
2. add the following code to the `http {}` section in nginx.conf
```
server {
    listen       80;
    server_name  localhost;
    location /api {
        proxy_pass                         https://chongliu.me/api;
    }

    location / {
        expires $expires;
        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                          http://127.0.0.1:3000; # set the adress of the Node.js instance here
    }
}
```
