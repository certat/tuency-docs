# Base Concepts

The Constituency Portal introduces several concepts that might not be immediately clear.

## Organization

An organization represents a company or another type of entity that can own network assets or
have contact data. Organizations must belong to one or more tenants and can include
sub-organizations to reflect their internal structure.

## Privilege Levels

### orgadmin

An Organization Administrator (orgadmin) is the primary role within Tuency. If invited to manage
an organization's data, you will assume this role. As an orgadmin, you are associated with a specific
company within the context of your role. If you're associated with multiple companies, you will use
the _Switch Node_ feature to select which company you wish to manage at any given time.

As an orgadmin, you can within your organization:

1. View and request claims for network assets (netobjects).
2. View, create, and edit sub-organizations.
3. Invite new administrators to the organization and its sub-organizations.
4. Manage the assignments of orgadmins to sub-organizations.
5. View, edit, and delete contact information.

### tenantadmin

A Tenant Administrator has all the capabilities of an orgadmin but across a specific tenant. This
includes accepting claims for netobjects within their assigned tenant.

### portaladmin

A Portal Administrator possesses the highest level of privileges, equivalent to those of a
tenantadmin but applicable to all tenants within the Portal. Additionally, a portaladmin can edit
tags for Contacts and Organizations.

## Contacts

Contacts contain information used in various situations, each assigned one or more roles dictating
the required data. For instance, a _CISO_ role requires at least a phone number and an email address,
while a _24/7_ contact requires a dedicated round-the-clock telephone number.

Contacts are tied to a specific organization, and sharing across organizations is not possible.
As an orgadmin, you can assign multiple contacts with various roles within your organization, ensuring
the most relevant and accessible contact is used when necessary.

!!! note
    Your organization need not cover all roles. Only include those relevant and desired for
    communication with us.

## Nodes

A "Node" signifies the linkage between your role and one or multiple organizations. For example,
if you are an orgadmin for several organizations, you can manage only one at any given time.
Switching nodes allows you to select which organization you wish to manage.

## Netobjects

This term refers to different network assets (such as Autonomous Systems (AS), IP ranges, domains)
administered by an organization.

## Tenant

Also known as a constituency, a tenant represents different CERTs (e.g., CERT.at, AEC) responsible
for communications with their respective organizations.
