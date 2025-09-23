# How to set up reverse proxy  for Frigate on home network for local access; Cloudflare Tunnels for remote access
I use Cloudflare Tunnels to access my home assistant and frigate instances remotely. I also use the Frigate PWA on my phone to view my cameras and receive native notifications.

In this guide I'll explain how you can use **AdGuard Home** and **Nginx Proxy Manager** to redirect your Frigate URL to point to your local IP for speed and bandwith conservation on your home network.

## Prerequsites

I'm going to assume a few prerequsites:

1. You are using Home Assistant.
2. You have a domain name set up and a subdomain pointing at your Frigate installation. I use [Cloudflared](https://github.com/brenner-tobias/addon-cloudflaredhttps:/) which is an easy way to get set up. The wiki can be found [here](https://github.com/brenner-tobias/addon-cloudflared/wiki/How-tos)
3. Your router allows you to set a custom DNS servers

## Step 1 - Installing AdGuard Home and Nginx Proxy Manager

First, we need to install two addons: AdGuard Home to serve as our DNS server and Nginx Proxy Manager to serve as our local proxy. These are in the Home Assistant Community Add-on Store (which is included by default).

Both of these can be installed with their default settings.

### Make sure Start On Boot and WatchDog are enabled for both addons, as well as enabling Show In Sidebar for AdGuard.

![](/assets/set-up-frigate-reverse-proxy/ha-addon-store.png)

#### Step 1.5 - Set a static IP

The AdGuard docs say to set your home assistant IP to static and set static external DNS servers - I did not do this and haven't had an issue, but it's most likely a good to do so. This can be done in your Home Assistant settings under **System > Network.**

Here I set my static IP, the gateway address (my router's IP), my router's IP for the first DNS server, and then Cloudflare's external IP addresses (The **Add DNS server** button will automatically populate the entries for whichever service is selected.

Then press Save.

![](/assets/set-up-frigate-reverse-proxy/ha-network-settings.png)

## Step 2 - Update Router DNS server

This is going to be different for everybody based on your router, so look up your specific router and the instructions on how to do it.

You'll want to add two DNS entries:

* The first entry will point to your local Home Assistant IP address (in my case, 192.168.86.25).
* The second entry should point to an external DNS. I am using Cloudflare, so 1.1.1.1 (This can be any external DNS server)

### Now let's verify AdGuard is working.

#### Restart your Home Assistant machine and router.

Once everything is back up and running, go to the AdGuard panel and you should start seeing queries come in from your network.

If not - double check your IP addresses and make sure the addons were restarted as well - restarting Home Assistant on its own was not enough in my case.

## Step 3 - Add Rewrite Rules to AdGuard
Now that we're getting queries showing up it's time to add our rewrite rules in AdGuard. This will point to our Nginx Proxy Manager which we will set up in the next step.

Open AdGuard from the sidebar and click on **Filters > DNS rewrites**

![](/assets/set-up-frigate-reverse-proxy/adguard-home.png)

Click **Add DNS Rewrite** and enter your custom domain/subdomain and your local Home Assistant IP address and save it.

![](/assets/set-up-frigate-reverse-proxy/adguard-dns-rewrite.png)

We are now all set with AdGuard. There are other things you can do with AdGuard now that it's your whole home network's DNS server like AdBlocking (which is enabled by default) but I won't get into that here.

## Step 4 - Cloudflare API Token and Settings

Go to cloudflare.com and click on your domain name.
 ![](/assets/set-up-frigate-reverse-proxy/cloudflare-home.png)

Click on **Speed > Settings > Protcol Optimization** and disable **HTTP/3 (with QUIC)** as this causes errors when redirecting locally.
 ![](/assets/set-up-frigate-reverse-proxy/cloudflare-quic.png)

 Go back to the overview and scroll down and click on **Get Your API Token**
  ![](/assets/set-up-frigate-reverse-proxy/cloudflare-api-key.png)

Click **Create Token** and then click **Use Template** next to the **Edit zone DNS** option.
![](/assets/set-up-frigate-reverse-proxy/cloudflare-use-api-token.png)

Next, do the following:
1. Click **Add More** under Permissions and select Zone / DNS / Read
2. Under Zone Resources, select the last dropdown and select your domain.

![](/assets/set-up-frigate-reverse-proxy/cloudflare-api-permissions.png)

Click **Continue to summary** and then **Create Token**.

### Copy your API Token as it will not be shown again - you will use it in the next steps.
## 

## Step 5 - Setting Up Nginx Proxy Manager

Go to your local Home Assistant instance and go to **Settings > Addons > Nginx Proxy Manager** and click **Open Web UI**

![](/assets/set-up-frigate-reverse-proxy/nginx-login.png)

Enter the default credentials of `admin@example.com / changeme` and follow the onscreen instructions to create a new username and password.

Click on **Hosts > Proxy Host**

![](/assets/set-up-frigate-reverse-proxy/nginx-proxy-home.png)

 Click **Add Proxy Host**

 ![](/assets/set-up-frigate-reverse-proxy/nginx-proxy-host.png)

Here you want to:
1. Enter your subdomain under Domain Names
2. Enter your local home assistant IP address under Forward Hostname/IP
3. Enter the authenticated Frigate port under Forward Port **(the default port is 8971 - this can be found in the Frigate addon settings in Home Assistant)** 
4. Enabled Block Common Exploits and Enable Websockets Support

## Step 6 - Creating SSL Certificate

Next, click on SSL Certificates and **Add SSL Certificate > Let's Encrypt**

 ![](/assets/set-up-frigate-reverse-proxy/nginx-ssl-home.png)

Here you want to:
1. Enter your subdomain name
2. Enter your cloudflare email address
3. Toggle **Use DNS Challenge**
4. Set the DNS provider to Cloudflare
5. Remove everything from this box and enter your Cloudflare Token from the previous step with the format `dns_cloudflare_api_token = yourkey` **(Make sure the key is dns_cloudflare_api_token and not dns_cloudflare_api_key)**
6. Set the propogation settings to 120
7. Accept the terms and click Save.

![](/assets/set-up-frigate-reverse-proxy/nginx-ssl-cloudflare.png)

This may take a few minutes while it does it's thing, so don't refresh the page.

Once that is done, go back to **Hosts > Proxy Hosts**, click the 3 dot menu and **Edit** the proxy host
![](/assets/set-up-frigate-reverse-proxy/nginx-proxy-edit.png)

Click on **SSL**, select your SSL Certificate from the dropdown list, and toggle **Force SSL** then click Save.
![](/assets/set-up-frigate-reverse-proxy/nginx-ssl-set-certificate.png)

## You should be good to go!
Refresh your browser and clear the cache before trying.

To verify it's working, go to your domain and open your browsers Network settings in the developer menu.

Click on an object and view the Headers. You should see the request url and the X-Served-By header showing your domain name, while the Remote Address should show your internal URL.
![](/assets/set-up-frigate-reverse-proxy/ha-verify-network.png)

If it does, you are now bypassing cloudflare and going directly to your Frigate instance. To check if it's working remotely, disconnect from your internet and use your cell phone data to try and connect.