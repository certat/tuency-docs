# Base Concepts

Constituency Portal uses a few concepts that may not always be clear at the first look.

## Organization

This is a base object representing a company or different type of an entity that can have network
assets or contact data assigned to. Companies has to belong to one or more tenants, and can have
sub-organizations to represent the structure.

## Privilege levels

### orgadmin

Organization Administrator (orgadmin) is the base privilege level in Tuency. If you were invited
to manage data of an organization, you will get this privilege level. When using Tuency, an orgadmin
is always assigned to one company in the given context. If are assigned to more companies, you will
use _Switch Node_ to let Tuency now, which company you want to manage now.

An orgadmin can in the corresponding organization:

1. Show, and request claims of netobjects.
2. Show, edit and create new sub-organizations.
3. Show and invite new administrators to their organization and sub-organizations.
4. Manage which sub-organization other orgadmins belong to.
5. Show, edit and delete contact information.

### tenantadmin

Tenant administrator can do everything as orgadmins as well as accept netobjects claims, in a one
assigned tenant.

### portaladmin

Portal Administrator has the highest privileges and can do the sam as tenantadmin, but for all
tenants in the Portal. In addition, portaladmin can edit tags available for Contacts and Organizations.

## Contacts

Contacts store contact points information to use on case of different situations. Every
contact can have multiple roles that dictates, which data can be stored, and which are required.
For example, for _CISO_, we require at least phone number and email, and for _24/7_ (a contact point
available around the clock), a dedicated 24/7 telephone number is required.

Contacts are connected with an organization only, and you cannot share contacts between organizations.
As an orgadmin, you can put multiple contacts with multiple roles in your organization. If we have to
contact your organization, we will use the most applicable and available contact based on the roles.

!!! note
    Your organization doesn't have to have _all_ roles. Use only those, which you have and want
    to share with us.

<!-- TODO: we need to describe roles -->

## Nodes

"Node" represents connection between your privilege level and organization(s). For example, if
you were an orgadmin for multiple organizations, you can act only as an administrator of a one
at the time. Switching nodes allows you to change which one you want to manage now.

## Netobjects

Different networking assets (AS, IP ranges, domains) administrated by the organization.

## Tenant

Also known as a constituency. In our case, it represents different CERTs (e.g. CERT.at or AEC)
responsible for contact with organizations belonging to them.
