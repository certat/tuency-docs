# Account Management

As in every typical system, you can manage your account. To go to the account management,
you should use the _Profile_ link from menu in the upper-right corner.

<figure markdown="span">![Profile link](assets/account_mgmt/user_menu.png)
_Use_ Profile _to open the account management_</figure>

After clicking on _Profile_, you will be redirected to the account management page. We use
[Keycloak](https://www.keycloak.org/), a mature IAM tool, to keep user accounts and secure access
to Constituency Portal. All account management and signing in actions happen on the
`login.cert.at` domain.

<figure markdown="span">![Account management](assets/account_mgmt/account_mgmt.png)
_Main account management page_</figure>

In available sections, you can do the following things:

1. _Personal info_ let you correct your email address and name.
2. _Signing in_ manages the authentication, including password and MFA settings.
3. _Device activity_ presents your active sessions and let you log out from other devices.
4. _Applications_ list the application you can access, e.g. Constituency Portal.

Use the link in the upper-right corner to come back to the Portal.

!!! warning
    All changes in user management and Constituency Portal itself are strictly logged. If you
    observe a suspicious activity on your account, please immediately change your credentials
    and contact CERT.at for investigation.

!!! note
    The domain `login.cert.at` isn't directly accessible. Use always the link from Constituency
    Portal to access your account management.

## Configuring MFA apps and devices

During account setup, you have to configure an application to generate one-time codes. Later in the
account console under _Signing in_ you can also configure a physical device to act as the second
factor during authentication or set up more authenticator applications, if you need to. For physical
security keys, we support most WebAuthn-compatible devices.

!!! tip
    Unfortunately, you cannot directly change the priority of MFA methods (authenticator app or
    physical device) used during signing in. The oldest one is always the default one. That means,
    when you add a physical key, you have to click on _Try other method_ on the login page to use it.
    However, you can use a trick to change the priority: after adding a physical key, just remove
    any configured authenticator app and them again. The physical key will now be the default method
    Note: you DO NOT have to remove recovery codes.

!!! note
    Using MFA is mandatory in Constituency Portal, you have to keep at least one MFA option enabled.
    We recommend keeping your recovery codes in a secure place in case of loosing your device or
    application.