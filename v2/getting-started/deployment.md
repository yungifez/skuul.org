# Deployment

To properly deploy this application, you'll need to follow a few steps, it is quite similar to the installation process in someways and the requirements remain the same.

::: warning 
You are better off deploying on a VPS than in a shared hosting environment, and there is no guarantee this project would work properly in a shared hosting environment
:::

Also checkout the [laravel deployment page](https://laravel.com/docs/deployment) which might contain other useful information.

## Fetching the code

Just like we have seen in the install, you can fetch the code from two sources, git or composer. Make sure the project still retains it's vcs folder and can pull code from the remote repository, luckily a git clone already ensures this while you can acheive this by including the `--keep-vcs` flag while installing with composer


Composer
```shell
    composer create-project yungifez/skuul --keep-vcs folder-name
```
Git

```shell
    git clone https://github.com/yungifez/skuul.git folder-name
```

::: warning
It is absolutely necessary to keep the version control with the application unless updates wouldnt work
:::

## Installation

Installing is also quite similar, but now we have to focus on a reasonable level of folder security. 

We would begin by installing composer dependencies

Navigate to the project's folder and install composer dependencies

```shell
    cd folder-name
```

```shell
    composer install
```

Now run the installation wizard

::: warning 
Make sure to pick production when installing the application
:::

## Set file permissions

Then we set appropriate file permissions

In this case, our webserver user is www-data, in some cases it might be apache or some other user. If you are unsure of this, you can contact your hosting company and enquire about this. Remember we are in the project's directory. 

::: tip
For this demonstration, we are using a linux user called ubuntu.
:::

```shell
 # we are giving the webserver ownership of the direcotry
 sudo chown -Rh www-data:www-data .
 # now we are adding the linux user (ubuntu) to the webserver group
 sudo usermod -a -G www-data ubuntu
 # We set the permissions of all files to 644 more info here https://www.multacom.com/faq/password_protection/file_permissions.htm#:~:text=755%20%2D%20owner%20can%20read%2Fwrite,can%20read%2Fwrite%2Fsearch.
 sudo find . -type f -exec chmod 644 {} \;
 # we do the same for the directories but this time set them to 755
 sudo find . -type f -exec chmod 755 {} \;
 # give that user ownership of files that concern them
 sudo chown -Rh ubuntu:www-data .git package.json package-lock.json vite.config.js
 # give vendor folder less strict permissions
 sudo chmod 775 -R node_modules vendor 
```
::: warning 
Permissions must be set correctly or update wizard might not work properly
:::

## Application Logo

Upload your application logo to *img/logo/logo.jpg*

::: tip 
You can specify another path in the .env file
:::

## Configuring your webserver

When configuring your webserver, point the entry directory to the public folder of the application and not the root folder of the application itself

Once your webserver has been properly configured, you can access the site and log in with the credentials you created in the install wizard

An example nginx configuration I use is

```shell
    server {
    if ($host = example.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80; 
    server_name example.com www.example.com;
    return 301 https://example.com$request_uri;


}
server {
    listen 443 ssl http2;
    server_name example.com www.example.com;
    root /var/www/sites/example.com/public;
    ssl_certificate /etc/letsencrypt/live/example.com-0001/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/example.com-0001/privkey.pem; # managed by Certbot

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }


}
```
