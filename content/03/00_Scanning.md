# Website Scanning and Network Analysis

## Network scanning for **https://hack-yourself-first.com**
   </br>


1. `traceroute`

   This command is used to trace the route that packets take from the local computer to a remote host. It helps in identifying where delays occur in the network.

   - Total Hops: 6 hops to reach the server.
   </br>

    ```bash
    ➜ ~ traceroute hack-yourself-first.com

    traceroute: Warning: hack-yourself-first.com has multiple addresses; using 172.67.156.87
    traceroute to hack-yourself-first.com (172.67.156.87), 64 hops max, 52 byte packets
    1  xiaoqiang (192.168.31.1)  2.242 ms  2.424 ms  1.814 ms
    2  5.178.202.1 (5.178.202.1)  5.688 ms  3.154 ms  3.166 ms
    3  host-213-157-192-9.customer.magticom.ge (213.157.192.9)  2.674 ms  3.246 ms  3.047 ms
    4  host-213-157-192-10.customer.magticom.ge (213.157.192.10)  3.545 ms  3.584 ms  3.124 ms
    5  host-213-157-198-100.customer.magticom.ge (213.157.198.100)  3.538 ms  3.796 ms  3.801 ms
    6  172.67.156.87 (172.67.156.87)  2.906 ms  3.227 ms  3.100 ms
    ```
   </br>
   </br>


2. `dig`
   The _dig_ command is used for querying DNS name servers for information about host addresses, mail exchanges, name servers, and related information.
   - IPs Found: 104.21.89.41, 172.67.156.87

    ```bash
    ➜ ~ dig hack-yourself-first.com

    ; <<>> DiG 9.10.6 <<>> hack-yourself-first.com
    ;; global options: +cmd
    ;; Got answer:
    ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 20443
    ;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1

    ;; OPT PSEUDOSECTION:
    ; EDNS: version: 0, flags:; udp: 4096
    ;; QUESTION SECTION:
    ;hack-yourself-first.com.	IN	A

    ;; ANSWER SECTION:
    hack-yourself-first.com. 281	IN	A	104.21.89.41
    hack-yourself-first.com. 281	IN	A	172.67.156.87

    ;; Query time: 51 msec
    ;; SERVER: 192.168.31.1#53(192.168.31.1)
    ;; WHEN: Sun May 05 18:14:34 +04 2024
    ;; MSG SIZE  rcvd: 84
    ```
   </br>
   </br>

   
3. `dig mx`
   Queries specifically for MX (Mail Exchange) records, which are used for determining the mail servers accepting incoming mail for the domain.
   - Result: No MX records set up.
   
    ```bash
    ➜ ~ dig mx hack-yourself-first.com

    ; <<>> DiG 9.10.6 <<>> mx hack-yourself-first.com
    ;; global options: +cmd
    ;; Got answer:
    ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 36646
    ;; flags: qr rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

    ;; OPT PSEUDOSECTION:
    ; EDNS: version: 0, flags:; udp: 1232
    ;; QUESTION SECTION:
    ;hack-yourself-first.com.	IN	MX

    ;; AUTHORITY SECTION:
    hack-yourself-first.com. 1446	IN	SOA	leah.ns.cloudflare.com. dns.cloudflare.com. 2338890667 10000 2400 604800 1800

    ;; Query time: 50 msec
    ;; SERVER: 192.168.31.1#53(192.168.31.1)
    ;; WHEN: Sun May 05 18:15:14 +04 2024
    ;; MSG SIZE  rcvd: 111
    ```
   </br>
   </br>

   
4. `nslookup`
   This command is used to query Internet domain name servers for DNS records. Similar to _dig_ but with different output format and options.
   - Confirms IPs: 172.67.156.87, 104.21.89.41

   ```bash
    ➜ ~ nslookup hack-yourself-first.com

    Server:		192.168.31.1
    Address:	192.168.31.1#53

    Non-authoritative answer:
    Name:	hack-yourself-first.com
    Address: 172.67.156.87
    Name:	hack-yourself-first.com
    Address: 104.21.89.41
    ```
   </br>
   </br>

   
5. `whois`
   Retrieves domain registration information such as the domain owner, registration and expiration dates, and more.
   - Contact Information: REDACTED FOR PRIVACY
   - The registrant, administrative, and technical contacts are redacted for privacy. Contact them through: [https://www.1api.net/send-message/hack-yourself-first.com/registrant](https://www.1api.net/send-message/hack-yourself-first.com/registrant).

    ```bash
    ➜ ~ WHOIS hack-yourself-first.com

    % IANA WHOIS server
    % for more information on IANA, visit http://www.iana.org
    % This query returned 1 object

    refer:        whois.verisign-grs.com

    domain:       COM

    organisation: VeriSign Global Registry Services
    address:      12061 Bluemont Way
    address:      Reston VA 20190
    address:      United States of America (the)

    contact:      administrative
    name:         Registry Customer Service
    organisation: VeriSign Global Registry Services
    address:      12061 Bluemont Way
    address:      Reston VA 20190
    address:      United States of America (the)
    phone:        +1 703 925-6999
    fax-no:       +1 703 948 3978
    e-mail:       info@verisign-grs.com

    contact:      technical
    name:         Registry Customer Service
    organisation: VeriSign Global Registry Services
    address:      12061 Bluemont Way
    address:      Reston VA 20190
    address:      United States of America (the)
    phone:        +1 703 925-6999
    fax-no:       +1 703 948 3978
    e-mail:       info@verisign-grs.com

    nserver:      A.GTLD-SERVERS.NET 192.5.6.30 2001:503:a83e:0:0:0:2:30
    nserver:      B.GTLD-SERVERS.NET 192.33.14.30 2001:503:231d:0:0:0:2:30
    nserver:      C.GTLD-SERVERS.NET 192.26.92.30 2001:503:83eb:0:0:0:0:30
    nserver:      D.GTLD-SERVERS.NET 192.31.80.30 2001:500:856e:0:0:0:0:30
    nserver:      E.GTLD-SERVERS.NET 192.12.94.30 2001:502:1ca1:0:0:0:0:30
    nserver:      F.GTLD-SERVERS.NET 192.35.51.30 2001:503:d414:0:0:0:0:30
    nserver:      G.GTLD-SERVERS.NET 192.42.93.30 2001:503:eea3:0:0:0:0:30
    nserver:      H.GTLD-SERVERS.NET 192.54.112.30 2001:502:8cc:0:0:0:0:30
    nserver:      I.GTLD-SERVERS.NET 192.43.172.30 2001:503:39c1:0:0:0:0:30
    nserver:      J.GTLD-SERVERS.NET 192.48.79.30 2001:502:7094:0:0:0:0:30
    nserver:      K.GTLD-SERVERS.NET 192.52.178.30 2001:503:d2d:0:0:0:0:30
    nserver:      L.GTLD-SERVERS.NET 192.41.162.30 2001:500:d937:0:0:0:0:30
    nserver:      M.GTLD-SERVERS.NET 192.55.83.30 2001:501:b1f9:0:0:0:0:30
    ds-rdata:     19718 13 2 8acbb0cd28f41250a80a491389424d341522d946b0da0c0291f2d3d771d7805a

    whois:        whois.verisign-grs.com

    status:       ACTIVE
    remarks:      Registration information: http://www.verisigninc.com

    created:      1985-01-01
    changed:      2023-12-07
    source:       IANA

    # whois.verisign-grs.com

      Domain Name: HACK-YOURSELF-FIRST.COM
      Registry Domain ID: 2292597260_DOMAIN_COM-VRSN
      Registrar WHOIS Server: whois.1api.net
      Registrar URL: http://www.1api.net
      Updated Date: 2023-06-03T21:15:26Z
      Creation Date: 2018-08-01T04:18:39Z
      Registry Expiry Date: 2028-08-01T04:18:39Z
      Registrar: 1API GmbH
      Registrar IANA ID: 1387
      Registrar Abuse Contact Email: abuse@1api.net
      Registrar Abuse Contact Phone: +49.68949396850
      Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
      Name Server: LEAH.NS.CLOUDFLARE.COM
      Name Server: ROB.NS.CLOUDFLARE.COM
      DNSSEC: unsigned
      URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
    >>> Last update of whois database: 2024-05-05T14:18:34Z <<<

    # whois.1api.net


    Domain Name: HACK-YOURSELF-FIRST.COM
    Registry Domain ID: 2292597260_DOMAIN_COM-VRSN
    Registrar WHOIS Server: whois.1api.net
    Registrar URL: http://www.1api.net
    Updated Date: 2024-01-09T19:03:02Z
    Creation Date: 2018-08-01T04:18:39Z
    Registrar Registration Expiration Date: 2028-08-01T04:18:39Z
    Registrar: 1API GmbH
    Registrar IANA ID: 1387
    Registrar Abuse Contact Email: abuse@1api.net
    Registrar Abuse Contact Phone: +49.68949396x850
    Reseller: DNSimple https://dnsimple.com
    Domain Status: clientTransferProhibited - http://www.icann.org/epp#clientTransferProhibited
    Registry Registrant ID: 
    Registrant Name: REDACTED FOR PRIVACY
    Registrant Organization: REDACTED FOR PRIVACY
    Registrant Street: REDACTED FOR PRIVACY
    Registrant City: REDACTED FOR PRIVACY
    Registrant State/Province: QLD
    Registrant Postal Code: REDACTED FOR PRIVACY
    Registrant Country: AU
    Registrant Phone: REDACTED FOR PRIVACY
    Registrant Phone Ext: 
    Registrant Fax: 
    Registrant Fax Ext: 
    Registrant Email: contact via https://www.1api.net/send-message/hack-yourself-first.com/registrant
    Registry Admin ID: 
    Admin Name: REDACTED FOR PRIVACY
    Admin Organization: REDACTED FOR PRIVACY
    Admin Street: REDACTED FOR PRIVACY
    Admin City: REDACTED FOR PRIVACY
    Admin State/Province: REDACTED FOR PRIVACY
    Admin Postal Code: REDACTED FOR PRIVACY
    Admin Country: REDACTED FOR PRIVACY
    Admin Phone: REDACTED FOR PRIVACY
    Admin Phone Ext: 
    Admin Fax: 
    Admin Fax Ext: 
    Admin Email: contact via https://www.1api.net/send-message/hack-yourself-first.com/admin
    Registry Tech ID: 
    Tech Name: REDACTED FOR PRIVACY
    Tech Organization: REDACTED FOR PRIVACY
    Tech Street: REDACTED FOR PRIVACY
    Tech City: REDACTED FOR PRIVACY
    Tech State/Province: REDACTED FOR PRIVACY
    Tech Postal Code: REDACTED FOR PRIVACY
    Tech Country: REDACTED FOR PRIVACY
    Tech Phone: REDACTED FOR PRIVACY
    Tech Phone Ext: 
    Tech Fax: 
    Tech Fax Ext: 
    Tech Email: contact via https://www.1api.net/send-message/hack-yourself-first.com/tech
    Name Server: rob.ns.cloudflare.com
    Name Server: leah.ns.cloudflare.com
    DNSSEC: unsigned
    URL of the ICANN WHOIS Data Problem Reporting System:
    http://wdprs.internic.net/
    >>> Last update of WHOIS database: 2024-05-05T14:18:49Z <<<
    ```
</br>
</br>

# Reflection

Reflecting on the activity of running network diagnostic commands and interpreting their outputs, I didn't encounter any particular challenges during these scans since I had previous experience with these commands. Being familiar with their basic functionalities — such as checking connectivity and IP addresses — provided a solid foundation. However, using these tools primarily for connectivity checks at work meant that exploring their application from a security perspective was a new and unknown angle for me.
</br>

Delving into how commands like `traceroute`, `dig`, and `whois` can be leveraged to identify potential security vulnerabilities was enlightening. It was interesting to research not just what information these tools can extract, but how this information might expose security flaws or provide insights into network defenses.
</br>

For the final report, I plan to further explore how the data obtained from these tools can be analyzed for vulnerabilities. 
</br>

These topics will guide the development of the report, focusing on practical applications of these diagnostic tools in enhancing cybersecurity defenses. This approach not only broadens my technical expertise but also contributes valuable insights into network security management practices.