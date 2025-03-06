# Setting Up HTTPS with http-server

Follow the steps below to set up an HTTPS server using `http-server` and a self-signed SSL certificate.

## Step 1: Install http-server

Run the following command to install `http-server` globally:

```sh
npm install -g http-server
```

To run `http-server` with HTTPS, execute the command below inside your project folder:

```sh
http-server -S -C cert.pem
```

## Step 2: Generate an SSL Certificate (for Local HTTPS)

Navigate to your project folder and run the following command to generate a self-signed SSL certificate:

```sh
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out cert.pem
```

## Step 3: Run http-server with the Generated SSL Certificate

Start the `http-server` inside your project folder using the generated SSL certificate:

```sh
http-server -S -C cert.pem -K key.pem
```

## Step 4: Access the Server

Ensure your mobile device and PC are connected to the same Wi-Fi network. Then, open your browser and navigate to:

```
https://localhost:8080
```

## Step 5: Scan the Image

After accessing the page, scan the provided image to proceed further.

![Scan this image](imagemarker.jpg)

---