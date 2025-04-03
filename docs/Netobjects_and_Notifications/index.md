# Managing Assets and Security Notifications

This section will help you understand how the Constituency Portal allows you
to provide the CERTs with information about your netobjects and self-manage
security notifications automatically sent to you by CERT.at and AEC.

Every day we automatically analyse data from about 100 feeds and send email
notifications to network operators in Austria. We try to carefully select what data
is important from the security point of view and avoid sending unimportant information.
However, **you - and only you - know your network best**. With our information,
we often cannot determine which notifications are irrelevant for a given system.

In addition, the publicly available abuse contacts from the RIPE database may not always
be the best place to send our notifications. For example, your company may have
a static IP address assigned by your ISP, but lack administrating RIPE entries. In
such cases, the information would be sent to your ISP, who may or may not forward it to
relevant parties.

To solve both issues, we let you claim your network assets in the Constituency
Portal and - once verified - filter notification types as well as manage relevant
notification addresses.

!!! note
    The current integration is the experimental phase. In addition, the web interface
    in the areas of netobject and notification rules is undergoing works to improve the
    usage experience.

    In addition, we prioritise support for IPv4.

!!! tip
    To learn more about our notifications, you can visit:

    * [our official website](https://www.cert.at/de/services/daten-feeds/uebersicht/)
      describing the CSV format as well as a [list of processed data feeds](https://www.cert.at/de/services/daten-feeds/vulnerable/)
    * a [blogpost](https://www.cert.at/en/blog/2024/6/how-we-cover-your-back) explaining how it works