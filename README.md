## Nuxt expirements here

### Install
1. npm install

### Start the project
1. npm run dev

### Nginx config
1. install nginx
2. add the following code to the `http {}` section in nginx.conf
```
map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}

server {
    listen       8888;
    server_name  localhost;

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

### Modify nuxt.config.js
1. set the browserBaseURL to `${HOST}:8888`. If it is on your local machine, HOST is 127.0.0.1, others may be your domain name

### Visit the site
visit ${HOST}:8888 to see the results

