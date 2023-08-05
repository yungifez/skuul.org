# Installation

This guide is intended for installing skuul locally for testing, to see how to deploy skuul, visit [The Deployment Page](deployment)

## Installation Options
There are 2 ways to install this project locally, you can either install this project

- [With Docker](#installation-with-docker)

- [Without Docker](#installation-without-docker)

### Installation With Docker
To Install this application with docker, you must have docker on your local machine.

- Clone the project to your local machine using either git or composer

    Composer
    ```shell
        composer create-project yungifez/skuul --keep-vcs skuul
    ```
    Git
    
    ```shell
     git clone https://github.com/yungifez/skuul.git skuul
    ```

    Then go to the project directory
    ```shell
        cd skuul
    ```

- Install composer dependencies

    ```shell
        docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v "$(pwd):/var/www/html" \
        -w /var/www/html \
        laravelsail/php82-composer:latest \
        composer install --ignore-platform-reqs
    
    ```
- Bring Sail Up and navigate into the machine
    ```shell
        vendor/bin/sail up && vendor/bin/sail root-shell
    ```
- Run the skuul installer and respond to any question or prompts
    ```shell
        php artisan skuul:init
    ```
    This command walks you through setting up application name, URL, Database credentials, mail credentials and some other tasks.

- Access the app on your localhost


### Installation Without Docker

To Install this application without docker.

- Clone the project to your local machine using either git or composer

    Composer
    ```shell
        composer create-project yungifez/skuul --keep-vcs skuul
    ```
    Git
    
    ```shell
     git clone https://github.com/yungifez/skuul.git skuul
    ```

    Then go to the project directory
    ```shell
        cd skuul
    ```

- Install composer dependencies

    ```shell
        composer install
    ```

- Run the skuul installer and respond to any question or prompts
    ```shell
        php artisan skuul:init
    ```
    This command walks you through setting up application name, URL, Database credentials, mail credentials and some other tasks.

- Serve the application
    ```sail
        php artisan serve
    ```


## Next Steps

If the installation was successful, you can log in with the following credentials

Super Admin

    Email: super@admin.com
    Password: password

Admin

    Email: admin@admin.com
    Password: password

Teacher

    Email: teacher@teaher.com
    Password: password

Student

    Email: student@student.com
    Password: password

Parent

    Email: parent@parent.com
    Password: password